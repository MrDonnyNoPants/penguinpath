const INSTALL_GUIDES = [
  {
    slug: "linux-mint",
    name: "Linux Mint",
    accent: "#3ecf8e",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Linux Mint installer file from the official site.",
        detail: [
          { type: "p", text: "Go to linuxmint.com/download.php . You'll see three editions - Cinnamon, MATE, and Xfce. If you're not sure which one, pick Cinnamon: 's the default, most polished, and what most guides (including this one) assume." },
          { type: "p", text: "Click Cinnamon, then pick a mirror close to your location (any of them work - closer just means a faster download). The file that downloads is the IDO - a single file, usually 2-3GB, that contains the entire installer and operating system." },
          { type: "list", items: [
            "Don't extract or open the ISO after downloading - it gets used as-is in the next step.",
            "If your browser offers to verify/checksum the file and you're not sure what that means, it's safe to skip for a first install.",
          ] },
        ],
      },
      {
        title: "Create a bootable USB",
        summary: "Turn a USB drive into something your computer can install Linux Mint from.",
        detail: [
          { type: "p", text: "You'll need a USB drive that's at least 4GB (8GB+ is safer), and you should back up anything on it first - this process erases it completely." },
          { type: "p", text: "Download balenaEtcher (balena.io/etcher) - it's freeand works on Windows, Mac, and Linux. Install it and open it." },
          { type: "list", items: [
            "Click \"Flash from file\" and select the Mint ISO you downloaded.",
            "Click \"Select target\" and choose your USB drive - double-check you've picked the right one, since this step erases it.",
            "Click \"Flash\" and wait. It usually takes 5-15 minutes depending on the USB drive's speed.",
          ] },
          { type: "p", text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in - you'll boot from it in the next step." },
        ],
      },
      {
        title: "Boot into the installer",
        summary: "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          { type: "p", text: "With the USB still plugged in, restart your computer. As it powers back on, you need to hit your boot-menu key before Windows (or macOS) loads - this varies by manufacturer:" },
          { type: "list", items: [
            "Dell: F12",
            "HP: F9 or Esc",
            "Lenovo: F12 or the Novo button",
            "ASUS: F8 or Esc",
            "Acer: F12",
            "Mac: hold Option/Alt at startup",
          ] },
          { type: "p", text: "If you're not sure which key, watch closely during the very first second of startup - many computersbriefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again." },
          { type: "p", text: "From the the boot menu,, select your USB drive (it'll usually show the brand name of the drive, not \"Linux Mint\"). Your computer will boot into a live version of Linux Mint - you're now running it directly off the USB, nothing is installed yet." },
          { type: "p", text: "On the desktop that appears, look for an icon labeled \"Install Linux Mint\" and double-click it to begin." },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Linux Mint replaces your current OS or lives alongside it.",
        detail: [
          { type: "p", text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install - where Linux Mint becomes the only operating system on the drive. Look for an option along the lines of \"Erase disk and install Linux Mint.\""},
          { type: "p", text: "Important: this step permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else (an external drive, cloud storage) before continuing." },
          { type: "p", text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot - a different process with its own separate guide, not covered by this walkthrough. If that's what you actually want, stop here rather than guessing at this screen." },
          { type: "p", text: "Once you've selected \"Erase disk and install Linux Mint\" (or equivalent), click Continue." },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary: "Set your language, keyboard, timezone, and account - then let it install.",
        detail: [
          { type: "list", items: [
            "Select your language and click Continue.",
            "Select your keyboard layout (the installer usually detects this correctly already) and click Continue.",
            "Confirm your timezone — it's usually auto-detected from your internet connection.",
            "Create your account: a name, a computer name, a username, and a password. Remember this password — it's what you'll use both to log in and for sudo afterward.",
            "Optionally check \"Log in automatically\" if this is a personal computer only you use, or leave it unchecked to require the password at every startup.",
          ] },
          { type: "p", text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait; there's nothing else to configure during this part." },
          { type: "p", text: "When it finishes, it'll prompt you to restart. Do so, and remove the USB drive when prompted (or as soon as the screen goes black during restart) — leaving it in can boot you back into the installer instead of your new system." },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to do in the first few minutes after your new install starts up.",
        detail: [
          { type: "p", text: "Your computer will restart into Linux Mint itself for the first time — log in with the password you set in the previous step." },
          { type: "p", text: "The first thing worth doing is checking for updates. Look for a shield icon in the bottom-right taskbar (it may show a small red mark) — that's the Update Manager. Open it and install everything it lists. This is normal and safe; it's the same kind of update prompt as any operating system." },
          { type: "p", text: "If the Update Manager asks to update itself first, let it — then it'll relaunch and show the rest of the available updates." },
          { type: "p", text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off." },
        ],
      },
    ],
    related: [{ href: "learn.html?topic=terminal-basics", label: "Next: what a terminal actually is →" }],
  },
];