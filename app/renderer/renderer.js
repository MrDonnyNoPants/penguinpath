const SOURCE_LABELS = { apt: 'apt', flatpak: 'flatpak', snap: 'snap' };

const sourcesEl = document.getElementById('sources');
const inputEl = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const hintEl = document.getElementById('hint');

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

function buildResultCard(item) {
  const card = document.createElement('div');
  card.className = 'result-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-expanded', 'false');

  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = item.name;

  const desc = document.createElement('div');
  desc.className = 'description';
  desc.textContent = item.description || '';

  card.appendChild(name);
  card.appendChild(desc);

  let installPanel = null;

  function toggle() {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    if (open && !installPanel) {
      installPanel = document.createElement('div');
      installPanel.className = 'install-panel';

      const label = document.createElement('div');
      label.className = 'install-label';
      label.textContent = 'Run this to install it:';

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

      installPanel.appendChild(label);
      installPanel.appendChild(code);
      installPanel.appendChild(copyBtn);
      card.appendChild(installPanel);
    } else if (installPanel) {
      installPanel.style.display = open ? '' : 'none';
    }
  }

  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      toggle();
    }
  });

  return card;
}

function renderResults(payload) {
  resultsEl.innerHTML = '';
  const { sources, results, errors } = payload;

  for (const key of Object.keys(SOURCE_LABELS)) {
    if (!sources[key]) continue;

    const group = document.createElement('div');
    group.className = 'source-group';

    const heading = document.createElement('h2');
    heading.textContent = `${SOURCE_LABELS[key]} (${(results[key] || []).length})`;
    group.appendChild(heading);

    if (errors[key]) {
      const err = document.createElement('p');
      err.className = 'error-note';
      err.textContent = `Search failed: ${errors[key]}`;
      group.appendChild(err);
    } else if (!results[key] || results[key].length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty-note';
      empty.textContent = 'No matches.';
      group.appendChild(empty);
    } else {
      const list = document.createElement('div');
      list.className = 'result-list';
      for (const item of results[key].slice(0, 25)) {
        list.appendChild(buildResultCard(item));
      }
      group.appendChild(list);
    }

    resultsEl.appendChild(group);
  }
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
