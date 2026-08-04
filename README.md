# PenguinPath

A desktop app that unifies app search across Linux package formats, built for people who are new to Linux.

## The problem

Someone coming to Linux from Windows or macOS wants to install an app and hits a wall immediately: should they use `apt`, Flatpak, Snap, or an AppImage? Software Center results are inconsistent, terminal instructions assume prior knowledge, and most guides don't explain *why* there are four different ways to install the same program in the first place. PenguinPath aims to fix that with a single search that covers all of them, plus plain-English explanations of what each format actually means and a guided onboarding path for people who are new to Linux.

## Status

- **Landing page: live** — [mrdonnynopants.github.io/penguinpath](https://mrdonnynopants.github.io/penguinpath/)
- **Distro quiz, website search, and Learn section: live** on the site
- **Desktop app backend: done** — unified search, cross-source picker, and format explainers all work in the Electron app in [`app/`](./app)
- **Packaged desktop app: built and tested** (AppImage + .deb) — not yet published for download

## Roadmap

1. ~~Landing page live~~
2. ~~Distro quiz, website search, Learn section live~~
3. ~~Desktop app backend done~~ (search, cross-source picker, explainers)
4. ~~Packaged desktop app built and tested~~ (AppImage + .deb)
5. Publish the packaged app for download (current)

## Repo layout

- `index.html`, `styles.css`, `nav.js` — the landing page and shared site navigation (root of this repo, served via GitHub Pages)
- `learn.html`, `learn.js`, `learn.css`, `learn-content.js` — the Learn section: a guided "Start Here" path plus a browsable reference library of plain-English Linux lessons.
- `quiz.html`, `quiz.js`, `quiz.css`, `distros.js` — the four-question distro recommendation quiz.
- `search.html`, `search.js`, `search.css` — the unified apt/flatpak/snap search, in-browser.
- `install.html`, `install.js`, `install.css`, `install-content.js` — the install guide hub: interactive, checklist-driven install walkthroughs for a wide range of distros.
- `app/` — the Electron application: search, cross-source picker, and format explainers, packaged as an AppImage/.deb (not yet published for download)

## License

MIT, see [LICENSE](./LICENSE).
