const { execFile } = require('child_process');
const util = require('util');

const execFileAsync = util.promisify(execFile);
const MAX_BUFFER = 10 * 1024 * 1024;

async function commandExists(cmd) {
  try {
    await execFileAsync('which', [cmd]);
    return true;
  } catch {
    return false;
  }
}

// apt-cache in particular matches term against name AND description with no
// relevance ranking, so a search for "vlc" can return "ani-cli" first because
// its description happens to mention something tangential. Re-rank client-side:
// exact name match, then name-starts-with, then name-contains, then
// description-only matches last -- applied to all sources for consistency.
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

async function detectSources() {
  const [apt, flatpak, snap] = await Promise.all([
    commandExists('apt-cache'),
    commandExists('flatpak'),
    commandExists('snap'),
  ]);
  return { apt, flatpak, snap };
}

async function searchApt(term) {
  const { stdout } = await execFileAsync('apt-cache', ['search', term], { maxBuffer: MAX_BUFFER });
  const items = stdout
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(' - ');
      const name = idx === -1 ? line : line.slice(0, idx);
      const description = idx === -1 ? '' : line.slice(idx + 3);
      return { name, description, installCommand: `sudo apt install ${name}` };
    });
  return sortByRelevance(term, items);
}

async function searchFlatpak(term) {
  const { stdout } = await execFileAsync('flatpak', ['search', term], { maxBuffer: MAX_BUFFER });
  const lines = stdout.split('\n').filter(Boolean);
  if (lines.length && /^Name\s/.test(lines[0])) lines.shift();
  const items = lines.map((line) => {
    const cols = line.split('\t');
    const name = cols[0] || '';
    const id = cols[2] || '';
    const remote = (cols[5] || 'flathub').split(',')[0].trim() || 'flathub';
    return {
      name,
      description: cols[1] || '',
      id,
      installCommand: `flatpak install ${remote} ${id}`,
    };
  });
  return sortByRelevance(term, items);
}

async function searchSnap(term) {
  const { stdout } = await execFileAsync('snap', ['find', term], { maxBuffer: MAX_BUFFER });
  const lines = stdout.split('\n').filter(Boolean);
  if (lines.length && /^Name\s/.test(lines[0])) lines.shift();
  const items = lines.map((line) => {
    const parts = line.trim().split(/\s{2,}/);
    const name = parts[0] || '';
    return {
      name,
      version: parts[1] || '',
      publisher: parts[2] || '',
      description: parts[parts.length - 1] || '',
      installCommand: `sudo snap install ${name}`,
    };
  });
  return sortByRelevance(term, items);
}

module.exports = { detectSources, searchApt, searchFlatpak, searchSnap };
