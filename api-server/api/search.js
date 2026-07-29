const fs = require('fs');
const path = require('path');

let aptData = null;
function loadAptData() {
  if (!aptData) {
    const raw = fs.readFileSync(path.join(__dirname, '..', 'data', 'apt-snapshot.json'), 'utf-8');
    aptData = JSON.parse(raw);
  }
  return aptData;
}

function relevanceRank(term, name) {
  const t = term.toLowerCase();
  const n = name.toLowerCase();
  if (n === t) return 0;
  if (n.startsWith(t)) return 1;
  if (n.includes(t)) return 2;
  return 3;
}

function sortByRelevance(term, items) {
  return items
    .map((item, i) => ({ item, i, rank: relevanceRank(term, item.name) }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .map((x) => x.item);
}

// Static snapshot of `apt-cache search` output, taken 2026-07-29 -- Debian's own
// search API only returns package names with no descriptions, so this stopgap
// serves real descriptions until the Pi-hosted backend can query apt live.
function searchApt(term) {
  const data = loadAptData();
  const t = term.toLowerCase();
  const matches = data.packages.filter(
    (p) => p.name.toLowerCase().includes(t) || p.description.toLowerCase().includes(t)
  );
  return sortByRelevance(term, matches)
    .slice(0, 25)
    .map((p) => ({ ...p, installCommand: `sudo apt install ${p.name}` }));
}

async function searchFlathub(term) {
  const response = await fetch('https://flathub.org/api/v2/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: term, filters: [] }),
  });
  if (!response.ok) throw new Error(`Flathub API error: ${response.status}`);
  const data = await response.json();
  const items = (data.hits || []).map((hit) => ({
    name: hit.name,
    description: hit.summary || '',
    id: hit.app_id,
    installCommand: `flatpak install flathub ${hit.app_id}`,
  }));
  return sortByRelevance(term, items).slice(0, 25);
}

async function searchSnap(term) {
  const url = `https://api.snapcraft.io/v2/snaps/find?q=${encodeURIComponent(term)}&fields=title,summary,description`;
  const response = await fetch(url, { headers: { 'Snap-Device-Series': '16' } });
  if (!response.ok) throw new Error(`Snapcraft API error: ${response.status}`);
  const data = await response.json();
  const items = (data.results || []).map((r) => ({
    name: r.name,
    description: (r.snap && r.snap.summary) || '',
    installCommand: `sudo snap install ${r.name}`,
  }));
  return sortByRelevance(term, items).slice(0, 25);
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://getpenguinpath.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const term = (req.query.q || '').trim();
  if (term.length < 2) {
    res.status(400).json({ error: 'Query must be at least 2 characters' });
    return;
  }

  const results = {};
  const errors = {};

  try {
    results.apt = searchApt(term);
  } catch (err) {
    errors.apt = err.message;
    results.apt = [];
  }

  const [flatpakOutcome, snapOutcome] = await Promise.allSettled([searchFlathub(term), searchSnap(term)]);

  if (flatpakOutcome.status === 'fulfilled') {
    results.flatpak = flatpakOutcome.value;
  } else {
    errors.flatpak = flatpakOutcome.reason.message;
    results.flatpak = [];
  }

  if (snapOutcome.status === 'fulfilled') {
    results.snap = snapOutcome.value;
  } else {
    errors.snap = snapOutcome.reason.message;
    results.snap = [];
  }

  res.status(200).json({
    results,
    errors,
    aptSnapshotDate: loadAptData().snapshotDate,
  });
};
