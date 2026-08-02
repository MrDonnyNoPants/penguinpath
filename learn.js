const mount = document.getElementById('learn-main');

function trackEvent(path) {
    if (window.goatcounter && typeof window.goatcounter.count === 'function'); {window.goatcounter.count({ path, event: true});
    }
}

function getTopicBySlug(slug) {
    return TOPICS.find((t) => t.slug === slug);
}

function pathTopics() {
    return TOPICS.filter((t) => t.pathOrder != null).sort((a, b) => a.pathOrder -b.pathOrder);
}

function renderBody(blocks) {
    const wrap = document.createElement('div');
    wrap.className = 'topic-body';
    blocks.forEach((block) => {
        if (block.type === 'p') {
            const p = document.createElement('p');
            p.textContent = block.text;
            wrap.appendChild(p);
        } else if (block.type === 'list') {
            const ul = document.createElement('ul');
            block.items.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            wrap.appendChild(ul);
        }
    });
    return wrap;
}

function renderTopicView(topic) {
    mount.innerHTML = '';
    trackEvent(`/learn/${topic.slug}`);

    const back = document.createElement('a');
    back.className = 'back-link';
    back.href = 'learn.html';
    back.textContent = '← All topics';
    mount.appendChild(back);

    
}