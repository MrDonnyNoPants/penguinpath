const mount = document.getElementById("learn-main");

function trackEvent(path) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, event: true });
  }
}

function getTopicBySlug(slug) {
  return TOPICS.find((t) => t.slug === slug);
}

function pathTopics() {
  return TOPICS.filter((t) => t.pathOrder != null).sort((a, b) => a.pathOrder - b.pathOrder);
}

function renderBody(blocks) {
  const wrap = document.createElement("div");
  wrap.className = "topic-body";
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

function renderTopicView(topic) {
  mount.innerHTML = "";
  trackEvent(`/learn/${topic.slug}`);

  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "learn.html";
  back.textContent = "← All topics";
  mount.appendChild(back);

  const h2 = document.createElement("h2");
  h2.className = "topic-title";
  h2.textContent = topic.title;
  mount.appendChild(h2);

  mount.appendChild(renderBody(topic.body));

  if (topic.related && topic.related.length) {
    const relatedBox = document.createElement("div");
    relatedBox.className = "topic-related";
    topic.related.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "related-link";
      a.textContent = link.label;
      relatedBox.appendChild(a);
    });
    mount.appendChild(relatedBox);
  }

  if (topic.pathOrder != null) {
    const path = pathTopics();
    const idx = path.findIndex((t) => t.slug === topic.slug);
    const prev = path[idx - 1];
    const next = path[idx + 1];

    const pager = document.createElement("div");
    pager.className = "topic-pager";

    if (prev) {
      const a = document.createElement("a");
      a.href = `learn.html?topic=${prev.slug}`;
      a.className = "pager-link prev";
      a.textContent = `← ${prev.title}`;
      pager.appendChild(a);
    }
    if (next) {
      const a = document.createElement("a");
      a.href = `learn.html?topic=${next.slug}`;
      a.className = "pager-link next";
      a.textContent = `${next.title} →`;
      pager.appendChild(a);
    }
    mount.appendChild(pager);
  }
}

function renderHub() {
  mount.innerHTML = "";
  trackEvent("/learn");

  const pathSection = document.createElement("section");
  pathSection.className = "learn-path";
  const pathHeading = document.createElement("h2");
  pathHeading.textContent = "Start here";
  pathSection.appendChild(pathHeading);

  const list = document.createElement("ol");
  list.className = "path-list";
  pathTopics().forEach((topic) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `learn.html?topic=${topic.slug}`;
    a.className = "path-item";
    a.innerHTML = `<span class="path-step">${topic.pathOrder}</span><span><strong>${topic.title}</strong><br>${topic.summary}</span>`;
    li.appendChild(a);
    list.appendChild(li);
  });
  pathSection.appendChild(list);
  mount.appendChild(pathSection);

  const refTopics = TOPICS.filter((t) => t.pathOrder === null);
  if (refTopics.length) {
    const refSection = document.createElement("section");
    refSection.className = "learn-reference";
    const refHeading = document.createElement("h2");
    refHeading.textContent = "Reference library";
    refSection.appendChild(refHeading);

    const grid = document.createElement("div");
    grid.className = "reference-grid";
    refTopics.forEach((topic) => {
      const card = document.createElement("a");
      card.href = `learn.html?topic=${topic.slug}`;
      card.className = "feature-card reference-card";
      card.innerHTML = `<h3>${topic.title}</h3><p>${topic.summary}</p>`;
      grid.appendChild(card);
    });
    refSection.appendChild(grid);
    mount.appendChild(refSection);
  }
}

function render() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("topic");
  if (slug) {
    const topic = getTopicBySlug(slug);
    if (topic) {
      renderTopicView(topic);
      return;
    }
  }
  renderHub();
}

render();
