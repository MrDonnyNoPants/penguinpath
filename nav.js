const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'learn.html', label: 'Learn' },
    { href: 'search.html', label: 'Search' },
    { href: 'quiz.html', label: 'Quiz' },
    { href: 'install.html', label: 'Install' },
];

function renderNav() {
    const mount = document.getElementById('site-nav');
    if (!mount) return;

    const currentPage = location.pathname.split('/').pop() || 'index.html';

    const nav = document.createElement('nav');
    nav.className = 'site-nav';

    const inner = document.createElement('div');
    inner.className = 'container site-nav-inner';

    NAV_LINKS.forEach(({ href, label }) => {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        link.className = 'site-nav-link' + (href === currentPage ? ' active' : '');
        inner.appendChild(link);
    });

    nav.appendChild(inner);
    mount.appendChild(nav);
}

renderNav();
