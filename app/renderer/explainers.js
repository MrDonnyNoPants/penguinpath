const EXPLAINERS = {
  apt: {
    label: 'apt',
    text: "Debian's original package format. Apps come from your distro's own repositories, so they're vetted and share libraries with the rest of your system — but you're on your distro maintainers' release schedule, not the app developer's, so versions can lag behind.",
  },
  flatpak: {
    label: 'flatpak',
    text: 'Runs the app in a sandbox with its own bundled dependencies, usually straight from the developer via Flathub. Normally the newest version available, at the cost of extra disk space since each app carries its own copies of shared libraries.',
  },
  snap: {
    label: 'snap',
    text: "Same sandboxed idea as flatpak, backed by Canonical (Ubuntu's company) via the Snap Store. Auto-updates in the background by default — convenient, but less manual control over exactly when updates happen.",
  },
  appimage: {
    label: 'AppImage',
    text: "A single file you download and run directly — no install step, no package manager involved at all. PenguinPath doesn't search AppImages: unlike the three above, there's no reliable, actively maintained way to search them from the command line, so we won't pretend otherwise.",
  },
};
