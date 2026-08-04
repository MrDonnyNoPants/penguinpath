const mount = document.getElementById("install-main");

function trackEvent(path) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, event: true });
  }
}

function getGuideBySlug(slug) {
  return INSTALL_GUIDES.find((g) => g.slug === slug);
}

function getProgress(slug) {
  try {
    const raw = JSON.parse(localStorage.getItem(`install-progress-${slug}`));
    const steps = Array.isArray(raw && raw.steps) ? raw.steps : [];
    const rawSubsteps =
      raw && raw.substeps && typeof raw.substeps === "object" && !Array.isArray(raw.substeps)
        ? raw.substeps
        : {};
    const substeps = {};
    for (const key of Object.keys(rawSubsteps)) {
      substeps[key] = Array.isArray(rawSubsteps[key]) ? rawSubsteps[key] : [];
    }
    return { steps, substeps };
  } catch {
    return { steps: [], substeps: {} };
  }
}

function saveProgress(slug, progress) {
  try {
    localStorage.setItem(`install-progress-${slug}`, JSON.stringify(progress));
  } catch {
    // ignore storage failures (quota exceeded, disabled, etc.)
  }
}

function getAllChecklistItemTexts(step) {
  return step.detail
    .filter((block) => block.type === "checklist")
    .flatMap((block) => block.items);
}

function isStepChecked(progress, stepKey) {
  return progress.steps.includes(stepKey);
}

function getCheckedSubItems(progress, stepKey) {
  return progress.substeps[stepKey] || [];
}

function updateProgressNote(progressNote, guideSlug, guideSteps) {
  const validTitles = new Set(guideSteps.map((s) => s.title));
  const doneCount = getProgress(guideSlug).steps.filter((key) => validTitles.has(key)).length;
  progressNote.textContent = `${doneCount} of ${guideSteps.length} steps done`;
}

function buildStepRow(step, index, guideSlug, progressNote, guideSteps) {
  const stepKey = step.title;

  const row = document.createElement("div");
  row.className = "step-row";

  const summary = document.createElement("div");
  summary.className = "step-summary";

  const main = document.createElement("button");
  main.type = "button";
  main.className = "step-summary-main";
  main.setAttribute("aria-expanded", "false");

  const number = document.createElement("span");
  number.className = "step-number";
  number.textContent = index + 1;
  main.appendChild(number);

  const text = document.createElement("span");
  text.className = "step-text";
  const titleEl = document.createElement("strong");
  titleEl.textContent = step.title;
  text.appendChild(titleEl);
  text.appendChild(document.createElement("br"));
  text.appendChild(document.createTextNode(step.summary));
  main.appendChild(text);

  summary.appendChild(main);

  const check = document.createElement("button");
  check.type = "button";
  check.className = "step-check";
  check.setAttribute("aria-pressed", "false");
  check.setAttribute("aria-label", `Mark "${step.title}" as done`);
  summary.appendChild(check);
  row.appendChild(summary);

  const detail = document.createElement("div");
  detail.className = "step-detail-body";
  detail.hidden = true;

  const subCheckboxes = [];
  const allItemTexts = getAllChecklistItemTexts(step);
  const totalSubItems = allItemTexts.length;

  step.detail.forEach((block) => {
    if (block.type === "p") {
      const p = document.createElement("p");
      p.textContent = block.text;
      detail.appendChild(p);
    } else if (block.type === "list") {
      const ul = document.createElement("ul");
      block.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      detail.appendChild(ul);
    } else if (block.type === "checklist") {
      const ul = document.createElement("ul");
      ul.className = "sub-checklist";
      block.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "sub-checklist-item";

        const subCheck = document.createElement("button");
        subCheck.type = "button";
        subCheck.className = "sub-check";
        subCheck.setAttribute("aria-pressed", "false");
        subCheck.setAttribute("aria-label", `Mark "${item}" as done`);

        const subText = document.createElement("span");
        subText.textContent = item;

        subCheck.addEventListener("click", (evt) => {
          evt.stopPropagation();
          toggleSubItem(item);
        });
        subCheck.addEventListener("keydown", (evt) => {
          if (evt.key === "Enter" || evt.key === " ") evt.stopPropagation();
        });

        li.appendChild(subCheck);
        li.appendChild(subText);
        ul.appendChild(li);
        subCheckboxes.push({ el: subCheck, li, itemText: item });
      });
      detail.appendChild(ul);
    }
  });

  row.appendChild(detail);

  function refreshFromProgress() {
    const progress = getProgress(guideSlug);
    const stepDone = isStepChecked(progress, stepKey);
    const checkedSubs = getCheckedSubItems(progress, stepKey);

    check.classList.toggle("checked", stepDone);
    check.setAttribute("aria-pressed", String(stepDone));
    row.classList.toggle("done", stepDone);

    subCheckboxes.forEach(({ el, li, itemText }) => {
      const isChecked = checkedSubs.includes(itemText);
      el.classList.toggle("checked", isChecked);
      el.setAttribute("aria-pressed", String(isChecked));
      li.classList.toggle("checked", isChecked);
    });
  }

  function setStepChecked(nextChecked) {
    const progress = getProgress(guideSlug);
    const steps = new Set(progress.steps);
    if (nextChecked) {
      steps.add(stepKey);
      progress.substeps[stepKey] = [...allItemTexts];
    } else {
      steps.delete(stepKey);
      progress.substeps[stepKey] = [];
    }
    progress.steps = Array.from(steps);
    saveProgress(guideSlug, progress);
    refreshFromProgress();
    updateProgressNote(progressNote, guideSlug, guideSteps);
  }

  function toggleSubItem(itemText) {
    const progress = getProgress(guideSlug);
    const current = new Set(getCheckedSubItems(progress, stepKey));
    if (current.has(itemText)) {
      current.delete(itemText);
    } else {
      current.add(itemText);
    }
    progress.substeps[stepKey] = Array.from(current);

    const steps = new Set(progress.steps);
    if (totalSubItems > 0 && current.size === totalSubItems) {
      steps.add(stepKey);
    } else {
      steps.delete(stepKey);
    }
    progress.steps = Array.from(steps);

    saveProgress(guideSlug, progress);
    refreshFromProgress();
    updateProgressNote(progressNote, guideSlug, guideSteps);
  }

  check.addEventListener("click", (evt) => {
    evt.stopPropagation();
    setStepChecked(!check.classList.contains("checked"));
  });
  check.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" || evt.key === " ") evt.stopPropagation();
  });

  refreshFromProgress();

  function toggleOpen() {
    const open = row.classList.toggle("open");
    main.setAttribute("aria-expanded", String(open));
    detail.hidden = !open;
  }

  main.addEventListener("click", () => toggleOpen());

  return row;
}

function renderGuide(guide) {
  mount.innerHTML = "";
  trackEvent(`/install/${guide.slug}`);

  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "install.html";
  back.textContent = "← All install guides";
  mount.appendChild(back);

  const h2 = document.createElement("h2");
  h2.className = "guide-title";
  h2.style.setProperty("--guide-accent", guide.accent);
  h2.textContent = guide.name;
  mount.appendChild(h2);

  const summary = document.createElement("p");
  summary.className = "guide-summary";
  summary.textContent = guide.summary;
  mount.appendChild(summary);

  const progressRow = document.createElement("div");
  progressRow.className = "progress-row";

  const progressNote = document.createElement("p");
  progressNote.className = "progress-note";
  progressRow.appendChild(progressNote);

  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "reset-progress-btn";
  resetBtn.textContent = "Reset progress";
  resetBtn.addEventListener("click", () => {
    saveProgress(guide.slug, { steps: [], substeps: {} });
    renderGuide(guide);
  });
  progressRow.appendChild(resetBtn);

  mount.appendChild(progressRow);

  const list = document.createElement("div");
  list.className = "step-list";
  guide.steps.forEach((step, i) =>
    list.appendChild(buildStepRow(step, i, guide.slug, progressNote, guide.steps))
  );
  mount.appendChild(list);

  updateProgressNote(progressNote, guide.slug, guide.steps);

  if (guide.related && guide.related.length) {
    const relatedBox = document.createElement("div");
    relatedBox.className = "topic-related";
    guide.related.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "related-link";
      a.textContent = link.label;
      relatedBox.appendChild(a);
    });
    mount.appendChild(relatedBox);
  }
}

function buildGuideCard(guide) {
  const card = document.createElement("a");
  card.href = `install.html?os=${guide.slug}`;
  card.className = "feature-card guide-card";
  card.style.setProperty("--guide-accent", guide.accent);

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = guide.name;
  const cardTagline = document.createElement("p");
  cardTagline.textContent = guide.tagline;
  card.appendChild(cardTitle);
  card.appendChild(cardTagline);

  return card;
}

function renderHub() {
  mount.innerHTML = "";
  trackEvent("/install");

  const heading = document.createElement("h2");
  heading.textContent = "Pick your distro";
  mount.appendChild(heading);

  const hubNote = document.createElement("p");
  hubNote.className = "hub-note";
  hubNote.textContent =
    "These are the most beginner-friendly picks. Search below to browse the full library.";
  mount.appendChild(hubNote);

  const grid = document.createElement("div");
  grid.className = "guide-grid";
  INSTALL_GUIDES.filter((guide) => guide.featured).forEach((guide) => {
    grid.appendChild(buildGuideCard(guide));
  });
  mount.appendChild(grid);

  const searchHeading = document.createElement("h2");
  searchHeading.className = "hub-search-heading";
  searchHeading.textContent = "Browse all distros";
  mount.appendChild(searchHeading);

  const searchNote = document.createElement("p");
  searchNote.className = "hub-note";
  searchNote.textContent = `Search all ${INSTALL_GUIDES.length} guides by name or what they're good for (e.g. "gaming", "lightweight", "Arch").`;
  mount.appendChild(searchNote);

  const searchRow = document.createElement("div");
  searchRow.className = "hub-search-row";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "hub-search";
  searchInput.placeholder = "Search distros...";
  searchInput.setAttribute("aria-label", "Search all distros");
  searchRow.appendChild(searchInput);
  mount.appendChild(searchRow);

  const resultsCount = document.createElement("p");
  resultsCount.className = "hub-note hub-results-count";
  mount.appendChild(resultsCount);

  const resultsGrid = document.createElement("div");
  resultsGrid.className = "guide-grid guide-grid-compact";
  mount.appendChild(resultsGrid);

  const allGuidesSorted = [...INSTALL_GUIDES].sort((a, b) => a.name.localeCompare(b.name));

  function renderResults(query) {
    const normalized = query.trim().toLowerCase();
    const matches = normalized
      ? allGuidesSorted.filter(
          (guide) =>
            guide.name.toLowerCase().includes(normalized) ||
            guide.tagline.toLowerCase().includes(normalized)
        )
      : allGuidesSorted;

    resultsCount.textContent = normalized
      ? `${matches.length} of ${INSTALL_GUIDES.length} distros match "${query.trim()}"`
      : `Showing all ${INSTALL_GUIDES.length} distros`;

    resultsGrid.innerHTML = "";
    if (matches.length === 0) {
      const emptyNote = document.createElement("p");
      emptyNote.className = "hub-note";
      emptyNote.textContent = "No distros match that search.";
      resultsGrid.appendChild(emptyNote);
      return;
    }
    matches.forEach((guide) => {
      resultsGrid.appendChild(buildGuideCard(guide));
    });
  }

  searchInput.addEventListener("input", () => renderResults(searchInput.value));
  renderResults("");
}

function render() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("os");
  if (slug) {
    const guide = getGuideBySlug(slug);
    if (guide) {
      renderGuide(guide);
      return;
    }
  }
  renderHub();
}

render();
