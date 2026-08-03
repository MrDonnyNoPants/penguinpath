const mount = document.getElementById("install-main");

function trackEvent(path) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, event: true });
  }
}

function getGuideBySlug(slug) {
    return INSTALL_GUIDES.find((g) => g.slug === slug);
}

function renderDetail(blocks) {
    const wrap = document.createElement("div");
    wrap.className = "step-detail-body";
    blocks.forEach((block) => {
        if (block.type === "p") {
            const p = document.createElement("p");
            p.textContent = block.text;
            wrap.appendChild(p);
        } else if (block.type === "list") {
            const ul = document.createElement("ul");
            block.items.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            wrap.appendChild(ul);
        }
    });
    return wrap;
}

function buildStepRow(step, index) {
  const row = document.createElement("div");
  row.className = "step-row";

  const summary = document.createElement("div");
  summary.className = "step-summary";

  const number = document.createElement("span");
  number.className = "step-number";
  number.textContent = index + 1;
  summary.appendChild(number);

  const text = document.createElement("span");
  text.className = "step-text";
  text.innerHTML = `<strong>${step.title}</strong><br>${step.summary}`;
  summary.appendChild(text);

  row.appendChild(summary);

  const detail = renderDetail(step.detail);
  detail.hidden = true;
  row.appendChild(detail);

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

  const list = document.createElement("div");
  list.className = "step-list";
  guide.steps.forEach((step, i) => list.appendChild(buildStepRow(step, i)));
  mount.appendChild(list);

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

  const grid = document.createElement("div");
  grid.className = "guide-grid";
  INSTALL_GUIDES.forEach((guide) => {
    const card = document.createElement("a");
    card.href = `install.html?os=${guide.slug}`;
    card.className = "feature-card guide-card";
    card.style.setProperty("--guide-accent", guide.accent);
    card.innerHTML = `<h3>${guide.name}</h3><p>${guide.summary}</p>`;
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