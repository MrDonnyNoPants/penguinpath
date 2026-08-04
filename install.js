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
    return { steps: (raw && raw.steps) || [], substeps: (raw && raw.substeps) || {} };
  } catch {
    return { steps: [], substeps: {} };
  }
}

function saveProgress(slug, progress) {
  localStorage.setItem(`install-progress-${slug}`, JSON.stringify(progress));
}

function countChecklistItems(step) {
  return step.detail
    .filter((block) => block.type === "checklist")
    .reduce((sum, block) => sum + block.items.length, 0);
}

function isStepChecked(progress, stepIndex) {
  return progress.steps.includes(stepIndex);
}

function getCheckedSubItems(progress, stepIndex) {
  return progress.substeps[stepIndex] || [];
}

function updateProgressNote(progressNote, guideSlug, totalSteps) {
  const doneCount = getProgress(guideSlug).steps.length;
  progressNote.textContent = `${doneCount} of ${totalSteps} steps done`;
}

function buildStepRow(step, index, guideSlug, progressNote, totalSteps) {
  const row = document.createElement("div");
  row.className = "step-row";

  const summary = document.createElement("div");
  summary.className = "step-summary";

  const main = document.createElement("div");
  main.className = "step-summary-main";

  const number = document.createElement("span");
  number.className = "step-number";
  number.textContent = index + 1;
  main.appendChild(number);

  const text = document.createElement("span");
  text.className = "step-text";
  text.innerHTML = `<strong>${step.title}</strong><br>${step.summary}`;
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
  const totalSubItems = countChecklistItems(step);
  let nextItemIndex = 0;

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
        const itemIndex = nextItemIndex++;
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
          toggleSubItem(itemIndex);
        });
        subCheck.addEventListener("keydown", (evt) => {
          if (evt.key === "Enter" || evt.key === " ") evt.stopPropagation();
        });

        li.appendChild(subCheck);
        li.appendChild(subText);
        ul.appendChild(li);
        subCheckboxes.push({ el: subCheck, li, itemIndex });
      });
      detail.appendChild(ul);
    }
  });

  row.appendChild(detail);

  function refreshFromProgress() {
    const progress = getProgress(guideSlug);
    const stepDone = isStepChecked(progress, index);
    const checkedSubs = getCheckedSubItems(progress, index);

    check.classList.toggle("checked", stepDone);
    check.setAttribute("aria-pressed", String(stepDone));
    row.classList.toggle("done", stepDone);

    subCheckboxes.forEach(({ el, li, itemIndex }) => {
      const isChecked = checkedSubs.includes(itemIndex);
      el.classList.toggle("checked", isChecked);
      el.setAttribute("aria-pressed", String(isChecked));
      li.classList.toggle("checked", isChecked);
    });
  }

  function setStepChecked(nextChecked) {
    const progress = getProgress(guideSlug);
    const steps = new Set(progress.steps);
    if (nextChecked) {
      steps.add(index);
      progress.substeps[index] = Array.from({ length: totalSubItems }, (_, i) => i);
    } else {
      steps.delete(index);
      progress.substeps[index] = [];
    }
    progress.steps = Array.from(steps);
    saveProgress(guideSlug, progress);
    refreshFromProgress();
    updateProgressNote(progressNote, guideSlug, totalSteps);
  }

  function toggleSubItem(itemIndex) {
    const progress = getProgress(guideSlug);
    const current = new Set(getCheckedSubItems(progress, index));
    if (current.has(itemIndex)) {
      current.delete(itemIndex);
    } else {
      current.add(itemIndex);
    }
    progress.substeps[index] = Array.from(current);

    const steps = new Set(progress.steps);
    if (totalSubItems > 0 && current.size === totalSubItems) {
      steps.add(index);
    } else {
      steps.delete(index);
    }
    progress.steps = Array.from(steps);

    saveProgress(guideSlug, progress);
    refreshFromProgress();
    updateProgressNote(progressNote, guideSlug, totalSteps);
  }

  check.addEventListener("click", (evt) => {
    evt.stopPropagation();
    setStepChecked(!check.classList.contains("checked"));
  });
  check.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" || evt.key === " ") evt.stopPropagation();
  });

  refreshFromProgress();

  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-expanded", "false");

  function toggleOpen() {
    const open = row.classList.toggle("open");
    row.setAttribute("aria-expanded", String(open));
    detail.hidden = !open;
  }

  row.addEventListener("click", () => toggleOpen());
  row.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" || evt.key === " ") {
      evt.preventDefault();
      toggleOpen();
    }
  });

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
    list.appendChild(buildStepRow(step, i, guide.slug, progressNote, guide.steps.length))
  );
  mount.appendChild(list);

  updateProgressNote(progressNote, guide.slug, guide.steps.length);

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

function renderHub() {
  mount.innerHTML = "";
  trackEvent("/install");

  const heading = document.createElement("h2");
  heading.textContent = "Pick your distro";
  mount.appendChild(heading);

  const hubNote = document.createElement("p");
  hubNote.className = "hub-note";
  hubNote.textContent =
    "These are the most beginner-friendly picks. More advanced and niche distros will be searchable here soon.";
  mount.appendChild(hubNote);

  const grid = document.createElement("div");
  grid.className = "guide-grid";
  INSTALL_GUIDES.forEach((guide) => {
    const card = document.createElement("a");
    card.href = `install.html?os=${guide.slug}`;
    card.className = "feature-card guide-card";
    card.style.setProperty("--guide-accent", guide.accent);
    card.innerHTML = `<h3>${guide.name}</h3><p>${guide.tagline}</p>`;
    grid.appendChild(card);
  });
  mount.appendChild(grid);
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