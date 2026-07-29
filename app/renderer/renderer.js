const SOURCE_LABELS = { apt: 'apt', flatpak: 'flatpak', snap: 'snap' };
const SOURCE_ORDER = ['apt', 'flatpak', 'snap'];
const MAX_GROUPS = 25;

const sourcesEl = document.getElementById('sources');
const inputEl = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const hintEl = document.getElementById('hint');
const explainerToggle = document.getElementById('explainer-toggle');
const explainerPanel = document.getElementById('explainer-panel');

let debounceTimer = null;

async function renderSourceBadges() {
  const sources = await window.penguinpath.detectSources();
  sourcesEl.innerHTML = '';
  for (const key of Object.keys(SOURCE_LABELS)) {
    const badge = document.createElement('span');
    badge.className = `source-badge ${sources[key] ? 'available' : 'unavailable'}`;
    badge.textContent = sources[key] ? `${SOURCE_LABELS[key]} ✓` : `${SOURCE_LABELS[key]} not installed`;
    sourcesEl.appendChild(badge);
  }
}

function renderExplainerPanel() {
  explainerPanel.innerHTML = '';
  for (const key of [...SOURCE_ORDER, 'appimage']) {
    const entry = EXPLAINERS[key];
    if (!entry) continue;
    const row = document.createElement('div');
    row.className = 'explainer-row';
    const label = document.createElement('strong');
    label.textContent = entry.label;
    const text = document.createElement('span');
    text.textContent = entry.text;
    row.appendChild(label);
    row.appendChild(text);
    explainerPanel.appendChild(row);
  }
}

explainerToggle.addEventListener('click', () => {
  const willShow = explainerPanel.hidden;
  explainerPanel.hidden = !willShow;
  explainerToggle.setAttribute('aria-expanded', String(willShow));
});

// Generic ID-segment endings that would cause false matches if used alone
// (e.g. flatpak "org.example.Client" shouldn't merge with apt's "thin-client").
const GENERIC_ID_SEGMENTS = new Set([
  'app', 'client', 'desktop', 'gui', 'tool', 'launcher', 'suite', 'edition', 'studio', 'manual',
]);

function normalizeIdentifier(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Identifier-like keys only (package names, flatpak's reverse-DNS ID segment) —
// deliberately excludes flatpak's free-text display name, since substring-matching
// against a long descriptive name causes false merges (e.g. "GIMP User Manual"
// would otherwise wrongly merge into the main "gimp" app, since its normalized
// name contains "gimp" as a substring).
function candidateKeys(sourceKey, item) {
  const keys = [];
  if (sourceKey === 'flatpak' && item.id) {
    const parts = item.id.split('.');
    const segment = normalizeIdentifier(parts[parts.length - 1]);
    if (segment && !GENERIC_ID_SEGMENTS.has(segment)) keys.push(segment);
  } else {
    keys.push(normalizeIdentifier(item.name));
  }
  return keys.filter((k) => k.length >= 4);
}

function keysRelated(a, b) {
  return a === b || a.includes(b) || b.includes(a);
}

function groupResults(sources, results) {
  const groups = [];

  for (const sourceKey of SOURCE_ORDER) {
    if (!sources[sourceKey]) continue;
    for (const item of results[sourceKey] || []) {
      const itemKeys = candidateKeys(sourceKey, item);
      const match = groups.find((g) => itemKeys.some((ik) => g.keys.some((gk) => keysRelated(ik, gk))));

      if (match) {
        match.keys.push(...itemKeys);
        match.entries.push({ source: sourceKey, item });
      } else {
        groups.push({ keys: itemKeys, entries: [{ source: sourceKey, item }] });
      }
    }
  }

  return groups;
}

function displayName(group) {
  const preferred = group.entries.find((e) => e.source === 'apt' || e.source === 'snap');
  return (preferred || group.entries[0]).item.name;
}

function buildGroupCard(group) {
  const card = document.createElement('div');
  card.className = 'result-card';

  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = displayName(group);
  card.appendChild(name);

  const multiSource = group.entries.length > 1;
  let activeIndex = 0;

  const detailArea = document.createElement('div');
  detailArea.className = 'detail-area';

  function renderDetail() {
    detailArea.innerHTML = '';
    const { source, item } = group.entries[activeIndex];

    const desc = document.createElement('div');
    desc.className = 'description';
    desc.textContent = item.description || '';
    detailArea.appendChild(desc);

    const label = document.createElement('div');
    label.className = 'install-label';
    label.textContent = `Run this to install it via ${SOURCE_LABELS[source]}:`;
    detailArea.appendChild(label);

    const row = document.createElement('div');
    row.className = 'install-panel';

    const code = document.createElement('code');
    code.className = 'install-command';
    code.textContent = item.installCommand || '(no install command available)';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.type = 'button';
    copyBtn.textContent = 'Copy';
    copyBtn.addEventListener('click', async (evt) => {
      evt.stopPropagation();
      try {
        await navigator.clipboard.writeText(item.installCommand || '');
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1200);
      } catch {
        copyBtn.textContent = 'Copy failed';
      }
    });

    row.appendChild(code);
    row.appendChild(copyBtn);
    detailArea.appendChild(row);
  }

  if (multiSource) {
    const pickerLabel = document.createElement('div');
    pickerLabel.className = 'picker-label';
    pickerLabel.textContent = 'Available via:';
    card.appendChild(pickerLabel);

    const picker = document.createElement('div');
    picker.className = 'source-picker';
    group.entries.forEach((entry, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'picker-btn' + (i === 0 ? ' active' : '');
      btn.textContent = SOURCE_LABELS[entry.source];
      btn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        activeIndex = i;
        picker.querySelectorAll('.picker-btn').forEach((b, bi) => b.classList.toggle('active', bi === i));
        renderDetail();
        card.classList.add('open');
      });
      picker.appendChild(btn);
    });
    card.appendChild(picker);
  } else {
    const sourceTag = document.createElement('span');
    sourceTag.className = 'single-source-tag';
    sourceTag.textContent = SOURCE_LABELS[group.entries[0].source];
    card.appendChild(sourceTag);
  }

  card.appendChild(detailArea);
  renderDetail();
  detailArea.hidden = true;

  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-expanded', 'false');

  function toggleOpen() {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    detailArea.hidden = !open;
  }

  card.addEventListener('click', (evt) => {
    if (evt.target.closest('.source-picker') || evt.target.closest('.copy-btn')) return;
    toggleOpen();
  });
  card.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      toggleOpen();
    }
  });

  return card;
}

function renderResults(payload) {
  resultsEl.innerHTML = '';
  const { sources, results, errors } = payload;

  const activeSourceKeys = SOURCE_ORDER.filter((k) => sources[k]);
  const failedSources = activeSourceKeys.filter((k) => errors[k]);

  if (failedSources.length) {
    const err = document.createElement('p');
    err.className = 'error-note';
    err.textContent = `Search failed for: ${failedSources.map((k) => SOURCE_LABELS[k]).join(', ')}`;
    resultsEl.appendChild(err);
  }

  const groups = groupResults(sources, results).slice(0, MAX_GROUPS);

  if (!groups.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-note';
    empty.textContent = 'No matches.';
    resultsEl.appendChild(empty);
    return;
  }

  const list = document.createElement('div');
  list.className = 'result-list';
  for (const group of groups) {
    list.appendChild(buildGroupCard(group));
  }
  resultsEl.appendChild(list);
}

async function runSearch(term) {
  hintEl.textContent = 'Searching…';
  const payload = await window.penguinpath.search(term);
  hintEl.textContent = '';
  renderResults(payload);
}

inputEl.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const term = inputEl.value.trim();

  if (term.length < 2) {
    resultsEl.innerHTML = '';
    hintEl.textContent = 'Type at least 2 characters to search.';
    return;
  }

  debounceTimer = setTimeout(() => runSearch(term), 350);
});

renderSourceBadges();
renderExplainerPanel();
