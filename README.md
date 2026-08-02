# PenguinPath

A desktop app that unifies app search across Linux package formats, built for people who are new to Linux.

## The problem

Someone coming to Linux from Windows or macOS wants to install an app and hits a wall immediately: should they use `apt`, Flatpak, Snap, or an AppImage? Software Center results are inconsistent, terminal instructions assume prior knowledge, and most guides don't explain *why* there are four different ways to install the same program in the first place. PenguinPath aims to fix that with a single search that covers all of them, plus plain-English explanations of what each format actually means and a guided onboarding path for people who are new to Linux.

## Status

- **Landing page: live** — [mrdonnynopants.github.io/penguinpath](https://mrdonnynopants.github.io/penguinpath/)
- **Backend: in development** — the Electron app is being built out in the [`app/`](./app) subdirectory.
- **Full app: not yet released**

## Roadmap

1. ~~Landing page live~~
2. Backend in development (current)
3. Full app — unified apt/flatpak/snap/AppImage search, plain-English format explanations, guided onboarding for Linux newcomers

## Repo layout

- `index.html`, `styles.css` — the landing page (root of this repo, served via GitHub Pages)
- `learn.html`, `learn.js`, `learn.css`, `learn-content.js` — the Learn section: a guided "Start Here" path plus a browsable reference library of plain-English Linux lessons.
- `app/` — the Electron application (work in progress)

## License

MIT, see [LICENSE](./LICENSE).
