const INSTALL_GUIDES = [
  {
    slug: "linux-mint",
    featured: true,
    name: "Linux Mint",
    accent: "#3ecf8e",
    tagline: "The reliable all-rounder",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Linux Mint installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Linux Mint offers three editions — Cinnamon, MATE, and Xfce. If you're not sure which one, Cinnamon is the default, most polished, and what most guides (including this one) assume.",
          },
          {
            type: "checklist",
            items: [
              "Go to linuxmint.com/download.php",
              "Click Cinnamon",
              "Pick a mirror close to your location and download the ISO (usually 2-3GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading - it gets used as-is in the next step.",
              "If your browser offers to verify/checksum the file and you're not sure what that means, it's safe to skip for a first install.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Linux Mint from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Mint ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in - you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Linux Mint")',
              'Double-click the "Install Linux Mint" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Linux Mint replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install - where Linux Mint becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else (an external drive, cloud storage) before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot - a different process with its own separate guide, not covered by this walkthrough. If that's what you actually want, stop here rather than guessing at this screen.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Linux Mint" (or equivalent) and click Continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account - then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout (the installer usually detects this correctly already) and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
              'Optionally check "Log in automatically" if this is a personal computer only you use',
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait; there's nothing else to configure during this part.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open the Update Manager (shield icon, bottom-right taskbar) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "If the Update Manager asks to update itself first, let it — then it'll relaunch and show the rest of the available updates.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "pop-os",
    featured: true,
    name: "Pop!_OS",
    accent: "#48b9c7",
    tagline: "Built for gaming and power users",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the right Pop!_OS installer file for your graphics hardware.",
        detail: [
          {
            type: "p",
            text: "Pop!_OS offers a few different ISOs — pick the one that matches your graphics hardware, not just whichever is listed first.",
          },
          {
            type: "list",
            items: [
              "Pop!_OS 24.04 LTS (standard) — choose this for Intel graphics, AMD graphics, or an NVIDIA card from the GTX 10-series or older (e.g. GTX 1060 and earlier). This is also the safe default if you're not sure — you can always add NVIDIA drivers later.",
              "Pop!_OS 24.04 LTS with NVIDIA — choose this only if your NVIDIA card is from the GTX 16-series or newer (e.g. GTX 1660, RTX 20/30/40/50-series). This version comes with NVIDIA's drivers pre-loaded.",
            ],
          },
          {
            type: "p",
            text: "Not sure which graphics card you have, or what generation it is? On Windows, right-click the Start button → Device Manager → Display adapters will show the card's name. If the name alone doesn't make the generation obvious, search the exact model name (e.g. \"GTX 1660\") plus \"release year\" — GTX 10-series and older (GTX 1080, 1070, 1060, 1050, 950, 750, etc.) means standard; GTX 16-series and newer (GTX 1660, RTX 2060 and up) means the NVIDIA ISO. When in doubt, or if you don't see NVIDIA listed at all, use the standard ISO.",
          },
          {
            type: "p",
            text: "There are also ARM-based ISOs, but those are only for ARM64 computers (not standard Intel/AMD PCs) — almost nobody following this guide needs them.",
          },
          {
            type: "checklist",
            items: [
              "Go to system76.com/pop/download",
              "Click Download and choose the ISO that matches your graphics hardware (see above)",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Pop!_OS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Pop!_OS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and boot from the USB — Pop!_OS drops you straight into its installer.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Pop!_OS")',
              "Click Install Pop!_OS on the screen that appears",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: 'Unlike some distros that boot to a live desktop first, Pop!_OS\'s USB boots straight into a "Try Demo" / "Install Pop!_OS" screen.',
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide between a clean install and Pop!_OS's custom/advanced option — and consider disk encryption.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              'Select "Clean Install" when asked how you\'d like to install Pop!_OS',
            ],
          },
          {
            type: "p",
            text: "Important: Clean Install permanently erases everything currently on that drive. Back up anything you want to keep before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two at startup, that's dual-boot — Pop!_OS's \"Custom (Advanced)\" option handles that, but it's a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "p",
            text: "Next you'll be asked whether to encrypt your drive. Encryption protects your files if the laptop is ever lost or stolen, at a small performance cost. If you say yes, you'll either reuse your account password as the encryption password (a checkbox for this), or set a separate encryption password that you'll need to enter every time you boot. Important: Pop!_OS does not generate or show you a separate recovery key — your password is the only key. If you forget it, your files are gone for good, with no backup way in. Write your password down somewhere safe if there's any chance you'll forget it. If you're unsure, it's safe to skip encryption for a first install.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary: "Confirm the disk, create your account, and let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm the drive you're installing to (only relevant if you have more than one drive connected)",
              "Create your account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember this password — you'll use it to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to expect the first time Pop!_OS starts up, and how to check for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you just set",
              "Open COSMIC Store (in the dock, or press Super and search for it)",
              "Click Updates in the left menu, then Check for updates and Update all",
            ],
          },
          {
            type: "p",
            text: "Pop!_OS opens a Welcome app on first login to help finish setting things up and highlight a few features, like COSMIC's keyboard-driven window tiling — worth clicking through once, but entirely skippable.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "zorin-os",
    featured: true,
    name: "Zorin OS",
    accent: "#16a3e0",
    tagline: "The gentlest landing pad from Windows or Mac",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Zorin OS installer file — Core is the right pick for most people.",
        detail: [
          {
            type: "p",
            text: "Zorin OS has a few editions. Core is free, full-featured, and the right choice for most people. Pro is a paid edition with extra layouts and pre-installed apps that isn't necessary to get a complete experience. There's also a free Lite edition built for older or lower-spec hardware — it's no longer on the main download page, but it's still available and fully supported (see below).",
          },
          {
            type: "checklist",
            items: [
              "Go to zorin.com/os/download/",
              "Click Download under Core — Zorin OS is 64-bit only now, so there's no version to choose, the button just starts the ISO download",
            ],
          },
          {
            type: "p",
            text: "If your computer is older or lower-spec, Zorin OS Lite is a lighter alternative worth using instead of Core. It's been moved off the main download page, but you can still get it directly from Zorin's help site:",
          },
          {
            type: "checklist",
            items: [
              "Go to help.zorin.com/docs/getting-started/getting-zorin-os-lite/",
              'Click the download button for the current release (labeled something like "Download Zorin OS 18.1 Lite") — it downloads the ISO directly, the same as Core',
            ],
          },
          {
            type: "p",
            text: "Zorin OS Lite is still actively maintained and safe to use today. Worth knowing for later: Zorin has announced Lite won't continue as an official edition starting with Zorin OS 19, though it doesn't affect anyone installing the current version now.",
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Zorin OS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Zorin OS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Zorin OS")',
              'Double-click the "Install Zorin OS" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Zorin OS replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Zorin OS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Zorin OS" (or equivalent) and click Continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout (the installer usually detects this correctly already) and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — you'll use it to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "Pick your layout, then check for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in for the first time",
              "Open Zorin OS Welcome (opens automatically) and choose your Appearance layout — Windows-style, macOS-style, or traditional Linux",
              "Open Software Updater from the app menu and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "You can change your Appearance layout again anytime later from the same app if you change your mind.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "mx-linux",
    featured: true,
    name: "MX Linux",
    accent: "#d9a441",
    tagline: "Lightweight and fast",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the MX Linux installer file — Xfce is the default and right choice for most people.",
        detail: [
          {
            type: "p",
            text: "MX Linux has a few editions — Xfce, KDE, and Fluxbox. Xfce is the flagship, default edition and the right choice for most people, especially on older or lower-spec hardware, which is exactly where MX Linux tends to shine.",
          },
          {
            type: "checklist",
            items: [
              "Go to mxlinux.org/download-links/",
              "Under the Xfce section, download the 64-bit (AMD64) ISO",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "MX Linux no longer offers a 32-bit ISO as of the current release — if you're on genuinely old 32-bit-only hardware, that's outside what this guide covers.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install MX Linux from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the MX Linux ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              "Select your USB drive from the boot menu",
              'Double-click the "Install MX Linux" icon on the desktop (or find it in the applications menu) to open Minstall',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "MX Linux boots to a full live desktop, the same as it would look once installed.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether MX Linux replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During Minstall, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where MX Linux becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your timezone and account — Minstall also offers an optional root account, which you can safely skip.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your timezone and keyboard layout",
              "Create your user account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Minstall includes a checkbox to enable a separate root account with its own password. By default it's unchecked, and it's fine to leave it that way — root is disabled out of the box here too, exactly like Mint, Pop!_OS, and Zorin OS, and you'll do everything through sudo with your normal account password. Only check that box if you specifically know you want a traditional root account.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to expect on first login, and how to check for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with your regular user password",
              "Open the MX Update tool from the app menu (or taskbar icon) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "ubuntu",
    featured: true,
    name: "Ubuntu",
    accent: "#e9724c",
    tagline: "The most recognized name in Linux",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Ubuntu Desktop installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Ubuntu Desktop doesn't split into multiple editions the way some distros do — there's just one download for most computers.",
          },
          {
            type: "checklist",
            items: [
              "Go to ubuntu.com/download/desktop",
              "Click Download — the file that comes down is the ISO (typically 4-6GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Ubuntu from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Ubuntu ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Ubuntu")',
              "Choose Try or Install Ubuntu, then launch the installer",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Ubuntu replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Ubuntu becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Ubuntu" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software Updater and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "fedora",
    featured: true,
    name: "Fedora",
    accent: "#4a7fc9",
    tagline: "Modern, polished, and close to upstream",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Fedora Workstation installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Fedora Workstation is the desktop edition you want here — Fedora also makes server and specialized editions, but Workstation is the general-purpose one.",
          },
          {
            type: "checklist",
            items: [
              "Go to fedoraproject.org/workstation/download",
              "Click Download — the file that comes down is the ISO (typically 2.5-3GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Fedora from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Fedora ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Fedora")',
              'Double-click the "Install to Hard Drive" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Fedora replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "Fedora's installer (called Anaconda) walks you through a few short screens: Welcome, Installation method, Storage configuration, and Review and install. This checklist covers the full, single-OS install — where Fedora becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough. If that's what you actually want, stop here rather than guessing at these screens.",
          },
          {
            type: "checklist",
            items: [
              "On the Welcome screen, select your language, confirm your keyboard layout (Anaconda usually detects this correctly already), and click Next",
              "On the Installation method screen, check the drive listed under Destination — if you have more than one drive connected, click Change destination to pick the right one",
              'Select "Use entire disk" when asked how you\'d like to install — this erases the drive and lets Fedora set up partitions automatically',
            ],
          },
          {
            type: "p",
            text: 'Next, on Storage configuration, you\'ll see a single "Encrypt my data" checkbox. Encryption protects your files if the laptop is ever lost or stolen, at a small performance cost — if you check it, you\'ll set a passphrase and Fedora encrypts the whole drive. If you\'re unsure, it\'s safe to leave this unchecked for a first install.',
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Confirm your choices and let it install — Fedora sets up your account afterward, not here.",
        detail: [
          {
            type: "p",
            text: "This is the part that's changed recently: Fedora's installer no longer asks you to create a user account. All it does from here is confirm what you've chosen and start copying files — your account gets set up later, the first time your new install boots.",
          },
          {
            type: "checklist",
            items: [
              "On the Review and install screen, check the summary — installation type, target drive, and partition layout — then click Install (or similar wording) to confirm",
              "Wait while Fedora installs — this typically takes 10-20 minutes. There's nothing else to configure during this part",
            ],
          },
          {
            type: "p",
            text: 'When you see "Successfully Installed," click Exit to live desktop (or similar) — this returns you to the live USB session rather than restarting automatically.',
          },
          {
            type: "checklist",
            items: [
              "From the live desktop's menu, choose Restart (or Shut Down, then power back on), and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Your account actually gets created here, not during install — then check for updates.",
        detail: [
          {
            type: "p",
            text: "The first time your new install starts up, you won't land on a login screen straight away — a first-boot wizard called GNOME Initial Setup opens automatically. This is where your account actually gets created, not the installer.",
          },
          {
            type: "checklist",
            items: [
              "Click Start Setup, then click through Privacy (location services and automatic problem reporting — safe to leave on or turn off, your choice) and Third-Party Repositories (optional — enables things like NVIDIA drivers and Chrome; safe to skip and add later)",
              "On Online Accounts, connect a Google/Microsoft/Nextcloud account if you want to, or skip it — this can always be done later from Settings",
              "On About You, enter your name and choose a username",
              "Set your password and confirm it — remember this, it's what you'll use to log in and for sudo afterward",
              "Click through to finish and land on the desktop",
            ],
          },
          {
            type: "p",
            text: "Fedora auto-detects your timezone using location services rather than asking directly — if it's wrong, you can fix it afterward in Settings > Date & Time. Depending on your Fedora version you may also see a one-off Screen Time / Wellbeing screen during setup; it's optional and skippable.",
          },
          {
            type: "checklist",
            items: [
              "Once you're on the desktop, open Software (GNOME Software) and check the Updates tab, then install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "kubuntu",
    featured: true,
    name: "Kubuntu",
    accent: "#9b7fd4",
    tagline: "Windows-like customization via KDE Plasma",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Kubuntu installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Kubuntu is Ubuntu with the KDE Plasma desktop instead of GNOME — same underlying system, different look and feel. There's just one main download.",
          },
          {
            type: "checklist",
            items: [
              "Go to kubuntu.org/getkubuntu/",
              "Click Download — the file that comes down is the ISO (typically 4.5-5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Kubuntu from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Kubuntu ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Kubuntu")',
              'Double-click the "Install Kubuntu" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Kubuntu replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Kubuntu becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Kubuntu" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Discover (KDE's software center) and check the Updates tab, then install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "elementary-os",
    featured: true,
    name: "elementary OS",
    accent: "#ec6fa8",
    tagline: "Clean, Mac-like design and polish",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the elementary OS installer file from the official site — it's free, even though the page shows a price slider.",
        detail: [
          {
            type: "p",
            text: "elementary OS uses a \"pay what you want\" download page, including $0 — it is not required to pay anything. This trips people up, so it's worth calling out clearly before you get there.",
          },
          {
            type: "checklist",
            items: [
              "Go to elementary.io",
              "Click Download elementary OS",
              "On the payment slider, drag it down to $0 (or type 0) if you don't want to pay",
              "Click Download Now — the file that comes down is the ISO (typically 3-3.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install elementary OS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the elementary OS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "elementary")',
              'Double-click the "Install elementary OS" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether elementary OS replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where elementary OS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase Disk and Install" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open AppCenter (elementary's software center) and check for updates, then install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "linux-lite",
    featured: true,
    name: "Linux Lite",
    accent: "#d4574f",
    tagline: "Built for Windows XP/7 switchers on older hardware",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Linux Lite installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Linux Lite is built specifically for people switching from older versions of Windows on lower-spec hardware — there's just one main edition, no picking between desktop environments.",
          },
          {
            type: "checklist",
            items: [
              "Go to linuxliteos.com/download.php",
              "Click the current release's download link — the file that comes down is the ISO (typically 2.3-2.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Linux Lite from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Linux Lite ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Linux Lite")',
              'Double-click the "Install Linux Lite" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Linux Lite replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Linux Lite becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Linux Lite" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Go through Lite Welcome, a built-in getting-started app that opens automatically on first login",
              "Open the Software Updater and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "manjaro",
    name: "Manjaro",
    accent: "#4f9d3c",
    tagline: "A friendlier on-ramp to Arch Linux",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Manjaro installer file — Xfce is the traditional default.",
        detail: [
          {
            type: "p",
            text: "Manjaro ships three official editions — Xfce, KDE Plasma, and GNOME — all fully supported, not one \"real\" edition and two afterthoughts. Xfce has traditionally carried Manjaro's \"flagship\" label as the lightest and most stability-first option; today Manjaro's own download page gives KDE Plasma equal or top billing as its most fully-featured desktop. This guide assumes Xfce, matching Manjaro's traditional default — the rest of the steps read the same if you pick Plasma or GNOME instead.",
          },
          {
            type: "checklist",
            items: [
              "Go to manjaro.org/download",
              "Click Xfce (or Plasma / GNOME if you'd rather use one of those)",
              'If asked to choose between "Full" and "Minimal", pick Full — it comes with common apps preinstalled, where Minimal expects you to add them yourself',
              "Download the ISO (roughly 3-4GB depending on edition)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Manjaro from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Manjaro ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Manjaro")',
              'Double-click the "Install Manjaro Linux" icon on the desktop that appears to launch the Calamares installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "An honest note about rolling releases, then decide whether Manjaro replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "Worth knowing before you get here: Manjaro is a rolling release. Instead of periodic big-version upgrades like Mint or Ubuntu, packages update continuously, indefinitely — which keeps software current, but also means more chances for an update to occasionally break something and expect you to troubleshoot it, rather than just wait for a polished new release. Manjaro softens this compared to plain Arch by holding packages back for a few weeks of testing before they reach you. It's a solid next step once you're comfortable with the basics from somewhere like Mint or Ubuntu — not usually the best choice for your very first distro.",
          },
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Manjaro becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" and click Next'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Next",
              "Confirm your timezone and keyboard layout",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward. Like every other distro in this guide, root is disabled by default and you'll manage everything through your normal account.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              'Open Pamac (the package icon in the taskbar, or search for "Add/Remove Software") and click the Updates tab',
              "Install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Pamac is a real graphical update tool — under the hood it's driving pacman, the same package manager other Arch-based distros use, so a normal update never strictly requires the terminal. That said, Manjaro's own documentation, forums, and troubleshooting guides lean on terminal commands more than the apt-based tools elsewhere on this site, so expect to open one sooner rather than later once you're past the basics.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "endeavouros",
    name: "EndeavourOS",
    accent: "#7c3fc4",
    tagline: "Arch Linux, minus the manual install",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the EndeavourOS installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "EndeavourOS ships a single ISO rather than separate editions to choose between at download time. The live environment itself boots straight into Xfce, but that's not locked in — during install, if you're online, you can pick a different desktop environment to actually install instead. More on that in the next few steps.",
          },
          {
            type: "checklist",
            items: [
              "Go to endeavouros.com",
              "Click Download and grab the current ISO (currently around 3.4GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install EndeavourOS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the EndeavourOS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB into a live Xfce desktop.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "EndeavourOS")',
              'Once the live Xfce desktop loads, a Welcome app opens automatically — click "Install" to launch the Calamares installer (or find it via the applications menu if you close the Welcome window)',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "An honest note about rolling releases, an online-vs-offline choice, then how to erase and install.",
        detail: [
          {
            type: "p",
            text: "Worth knowing before you get here: EndeavourOS deliberately stays close to vanilla Arch — unlike Manjaro, it doesn't hold packages back for extra testing, so updates arrive about as fast as Arch itself publishes them. That's appealing if you want the newest software and don't mind occasionally needing to search a forum or wiki page to fix something an update broke, but it's a meaningfully different day-to-day experience than a point-release distro like Mint or Ubuntu. Treat this as a solid next step once you're comfortable with Linux basics, not necessarily your very first install.",
          },
          {
            type: "list",
            items: [
              "Online install — requires a working internet connection during setup, but lets you pick your desktop environment (Xfce, KDE Plasma, GNOME, and several more minimal window-manager options) instead of just using Xfce",
              "Offline install — doesn't need internet during setup, but installs Xfce only, exactly as it appears in the live session",
            ],
          },
          {
            type: "p",
            text: "Either way, you'll then reach a partitioning screen. This checklist covers the full, single-OS install — where EndeavourOS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes, though if you chose Online mode it's also downloading your selected desktop environment's packages over the internet at the same time, so it can run longer on a slower connection.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to expect on first login, and an honest look at how updates actually work here.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you just set",
              "The Welcome app opens automatically again — it's also a shortcut to install extra apps and set your mirrors, worth a look but skippable",
              'Open a terminal and run sudo pacman -Syu (or click "Update System" in the Welcome app, which does the same thing) to check for and install updates',
            ],
          },
          {
            type: "p",
            text: "Worth being upfront about: unlike the apt-based Update Managers elsewhere on this site, EndeavourOS doesn't ship a full graphical software-update center by default. The Welcome app's \"Update System\" button is really just a shortcut that runs pacman — and yay, for community-maintained AUR packages — in a terminal window on your behalf. Being willing to open a terminal occasionally isn't optional here the way it can be on Mint or Ubuntu; it's part of normal use on EndeavourOS.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "garuda-linux",
    name: "Garuda Linux",
    accent: "#b83280",
    tagline: "Bold, heavily themed Arch built for gaming and performance",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Garuda installer file — Dr460nized is the flagship KDE Plasma edition.",
        detail: [
          {
            type: "p",
            text: "Garuda offers several desktop editions — Dr460nized (KDE Plasma), GNOME, Xfce, LXQt-KWin, and a few more minimal options — plus a separate \"Gaming\" variant of some editions that adds extra pre-installed gaming software and tools on top. Dr460nized, Garuda's signature dark and heavily animated KDE Plasma theme, is the flagship, most popular edition. This guide assumes the standard (non-Gaming) Dr460nized edition.",
          },
          {
            type: "checklist",
            items: [
              "Go to garudalinux.org/downloads.html",
              "Under Dr460nized, download the standard edition — not Dr460nized Gaming — unless you specifically want the extra gaming software preinstalled (roughly 3.3GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Garuda from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Garuda ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB into Garuda's distinctive, heavily themed live desktop.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Garuda")',
              'Double-click the "Install" icon on the desktop that appears to launch the Calamares installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Garuda's boot process is more involved than most other distros on this site — the boot menu may ask you to choose between open-source and proprietary graphics drivers before you even reach a desktop (pick proprietary if you have a newer NVIDIA card and aren't sure otherwise). What loads next is a dark, heavily animated Plasma desktop with visual effects most distros only add later, if ever — that's intentional, it's part of Garuda's identity, not a sign anything's wrong.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "An honest note about rolling releases and Garuda's snapshot safety net, then how to erase and install.",
        detail: [
          {
            type: "p",
            text: "Worth knowing before you get here: Garuda is Arch underneath, and updates as a rolling release — the same real tradeoff as Manjaro and EndeavourOS, new software fast, with occasional breakage that expects you to troubleshoot rather than just wait it out. Garuda adds something most others skip: it installs onto a Btrfs filesystem by default and automatically takes a system snapshot before every update, so if an update does break something, you can typically boot into a snapshot from right before it happened and roll back, straight from the boot menu. That's a genuinely useful safety net for a rolling release — but it doesn't change who this is really for. Garuda is a good next step once you already want more control and don't mind occasionally solving your own problems, not usually anyone's first distro.",
          },
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Garuda becomes the only operating system on the drive, set up automatically on Btrfs with the snapshot support described above.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes, though Garuda's editions ship with more preinstalled software and desktop effects than most distros on this site, so it can run toward the longer end.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to expect on first login, and an honest look at how updates actually work here.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you just set",
              "Garuda opens an all-in-one welcome/assistant app automatically (Garuda Rani) that bundles driver installs, extra software, and system tools in one place — worth a look, entirely skippable",
              "Open Pamac (the package icon in the taskbar) and check the Updates tab, then install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Garuda includes Pamac, the same graphical package manager Manjaro uses, so a normal update can be done entirely through a GUI without opening a terminal. That said, Garuda's own recommended update command — garuda-update, which bundles a few extra fixes on top of a plain update — is terminal-only, and Garuda's own documentation and forum regularly point people toward using it directly, so don't be surprised if you end up there before long.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "kde-neon",
    name: "KDE neon",
    accent: "#7ec850",
    tagline: "The newest KDE Plasma, built by KDE itself",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the KDE neon User Edition installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "KDE neon isn't just Ubuntu with KDE Plasma pre-installed — it's built and maintained directly by the KDE project itself, specifically to ship the very latest Plasma releases as soon as they're ready, on top of a stable Ubuntu LTS base. That's different from Kubuntu, which packages Plasma more like the rest of Ubuntu — slower-moving and more heavily tested before it reaches you. Neon trades some of that predictability for being first in line for new Plasma features.",
          },
          {
            type: "p",
            text: "There are four editions: User, Testing, Unstable, and Developer. User Edition is the only one meant for regular daily use — Testing, Unstable, and Developer all ship pre-release KDE software and exist for people helping test or build KDE itself, not for a first Linux install.",
          },
          {
            type: "checklist",
            items: [
              "Go to neon.kde.org/download",
              "Click Download under the User Edition Desktop image",
              "Wait for the ISO to download (typically around 3GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "Neon's version numbers are dates (like 20260730) rather than the release numbers you might expect from other distros — that's normal, not a sign you grabbed the wrong file.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary: "Turn a USB drive into something your computer can install KDE neon from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the KDE neon ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary: "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "KDE neon")',
              'Click the "Install neon" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether KDE neon replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where KDE neon becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "list",
            items: [
              "Plain guided install — the option this guide uses",
              "Guided install with LVM — adds a flexible storage layer most beginners don't need",
              "Guided install with LVM and encryption — protects your files if the device is lost or stolen, at the cost of a small performance hit and a passphrase you must remember",
            ],
          },
          {
            type: "checklist",
            items: ['Select the plain guided "Erase disk" option (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary: "Set your language, keyboard, timezone, network, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Next",
              "Select your keyboard layout and click Next",
              "Connect to Wi-Fi if you're not already on a wired connection",
              "Confirm your timezone/location",
              "Create your account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "Log in, then understand how neon's updates actually work before you check for them.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Discover (KDE's software center) from the app launcher",
              "Go to the Updates tab and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "KDE neon updates in two different speeds at once, and it's worth understanding before you dive in: the Ubuntu base underneath — the kernel, drivers, core system — stays on the same Ubuntu LTS release for stability, while KDE's own software (Plasma, the file manager, settings, and other KDE apps) updates on a rolling basis straight from KDE's own repositories, often within days of a new release. That's the entire point of neon: it exists to get you the newest Plasma, not the newest everything.",
          },
          {
            type: "p",
            text: "If you prefer the terminal, sudo apt update followed by sudo apt full-upgrade (not the plain upgrade) covers the same ground.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "feren-os",
    name: "Feren OS",
    accent: "#a855c9",
    tagline: "A Windows-styled KDE Plasma desktop, independently built",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Feren OS installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Feren OS is a small, independently-developed distro built on Ubuntu LTS — worth knowing going in, since its release pace is slower and less predictable than a project with a larger team behind it. It's still actively maintained and downloadable, just don't expect the frequent release cadence of a bigger distro.",
          },
          {
            type: "p",
            text: "Feren OS's default desktop today is a heavily customized, Windows-styled KDE Plasma desktop — not Cinnamon. If you've come across older reviews describing it as Cinnamon-based, that was true of much earlier releases; the project moved its main edition to Plasma years ago, and only one edition is currently offered for download.",
          },
          {
            type: "checklist",
            items: [
              "Go to ferenos.weebly.com/get-feren-os.html",
              'Click "Download Feren OS" — the file that comes down is the ISO (roughly 2.8GB)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "If that download is slow, the same ISO is mirrored on SourceForge (linked from the same page) as a fallback.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary: "Turn a USB drive into something your computer can install Feren OS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Feren OS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary: "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Feren OS")',
              'Choose "Try Feren OS without installing" to reach the live desktop, then double-click the "Install Feren OS" icon',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup - many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Feren OS replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Feren OS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select the guided "Erase Disk" option and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary: "Set your language, location, and keyboard — the installer doesn't create your account yet.",
        detail: [
          {
            type: "p",
            text: "Unlike most installers, Feren OS's installer only handles language, location/timezone, keyboard, and disk setup here — it does not ask you to create a username or password. That happens in a setup wizard after your first restart, covered in the next step. Don't worry if the installer finishes without ever asking for a password — that's expected, not a bug.",
          },
          {
            type: "checklist",
            items: [
              "Select your language and continue",
              "Set your location on the map (or use the dropdown menus) to set your timezone",
              "Select your keyboard layout",
              "Confirm the disk, click Install, then Install Now on the final confirmation",
            ],
          },
          {
            type: "p",
            text: "Installation typically takes 10-20 minutes. You can just wait — there's nothing else to configure during this part.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "Create your account in the first-boot setup wizard, then check for updates.",
        detail: [
          {
            type: "p",
            text: "When Feren OS restarts, it automatically logs into a restricted setup session and launches Feren OS Setup — this is where your actual account gets created, not during the installer.",
          },
          {
            type: "checklist",
            items: [
              "Connect to Wi-Fi if you're not already on a wired connection, so Setup can fetch anything it needs",
              "Work through Feren OS Setup: confirm language and keyboard, then create your name, username, and password",
              "Optionally enable third-party codecs if Setup offers them",
              "Finish Setup, then log in with the password you just created",
            ],
          },
          {
            type: "p",
            text: "Remember that password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "checklist",
            items: [
              "Open Update Manager (a tool borrowed from Linux Mint, found in the app menu) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "antix",
    name: "antiX",
    accent: "#8c2f39",
    tagline: "Ultra-lightweight and systemd-free, built for old hardware",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the antiX installer file — the full edition is the right pick for most people.",
        detail: [
          {
            type: "p",
            text: "antiX comes from the same lineage as MX Linux and runs beautifully on old, low-spec machines — but it's more hands-on than everything else on this site. There's no automatic update notification, and (covered in the installer step below) it handles the root account differently than MX does. If this is your very first Linux install ever, MX Linux covers similar hardware with a gentler landing.",
          },
          {
            type: "checklist",
            items: [
              "Go to antixlinux.com/download/",
              "Under antiX-26, download the full edition, 64-bit (x64) ISO — the file is named antiX-26_x64-full.iso, around 2GB",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "antiX also offers a Core edition with no desktop at all, meant for advanced users who want to build the system up from a minimal base — skip it unless you specifically want that.",
              "A 32-bit (386) ISO exists for very old hardware, but 64-bit is the right choice for the vast majority of computers.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install antiX from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the antiX ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "antiX")',
              'From the live desktop that loads, click the "Install antiX" icon in the top-left corner',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "antiX boots to a full live desktop running IceWM — a plainer, more old-school-looking window manager than what you'll see after installing most other distros on this site. That's normal, and it's part of what keeps antiX so light on old hardware.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether antiX replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to partition the disk. This checklist covers the full, single-OS install — where antiX becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — the installer's \"Custom install on existing partition\" option handles that, but it's a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Auto-install using entire disk" and continue',
            ],
          },
          {
            type: "p",
            text: "The same screen offers advanced disk-encryption settings if you want to encrypt the drive. If you're unsure what that means, it's safe to skip for a first install.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your account and timezone — then set a root password too, since antiX doesn't make that optional.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your timezone and keyboard layout",
              "Create your user account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Here's the key difference from MX Linux: MX's installer offers root as an optional, unchecked checkbox you can safely skip. antiX's installer doesn't — it has its own dedicated \"Root (administrator) Account\" screen with no option to skip, and it's a required step before you can continue.",
          },
          {
            type: "checklist",
            items: [
              "When prompted, set a root (administrator) password and confirm it — it's fine to reuse your user password here if you don't want to track two separate ones",
            ],
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Log in, then check for updates yourself — antiX won't remind you.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with your user password",
              "Open Synaptic Package Manager (Menu > System > Synaptic Package Manager)",
              "Click Reload, then Mark All Upgrades, then Apply",
            ],
          },
          {
            type: "p",
            text: "Unlike Mint, Ubuntu, or the other guides on this site, antiX doesn't ship with an update-notification icon that pops up when something's available. You'll need to check in yourself now and then, either through Synaptic or by running sudo apt update && sudo apt upgrade in a terminal.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "deepin",
    name: "Deepin",
    accent: "#a13fa0",
    tagline: "A strikingly polished, custom-built desktop",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the deepin installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "deepin is developed by UnionTech, a Chinese software company, and its official site and download page is deepin.org — that's where the checklist below points you. Stick to that domain rather than a random mirror you find elsewhere.",
          },
          {
            type: "checklist",
            items: [
              "Go to deepin.org/en/download/",
              "Under the current release (25.2.0), choose AMD64 — the right pick for virtually all PCs and laptops",
              "Click a download source (Official Mirror or BitTorrent) — the ISO is a large download, around 7GB",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "ARM64, Loong64, and RISC-V builds are also listed on the page, but those are for specific non-standard hardware, not typical Intel/AMD PCs.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install deepin from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 8GB — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the deepin ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer, start up from the USB, and choose Install from the boot menu.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "deepin")',
              'On the menu that appears, choose "Install deepin" rather than "Try deepin Desktop"',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "If the USB won't boot at all, go into your BIOS/UEFI settings and turn off Secure Boot — deepin's installer and some of its drivers can run into trouble with Secure Boot switched on.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether deepin replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to partition the disk. This checklist covers the full, single-OS install — where deepin becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Full Disk" when asked how to partition, choose your drive, and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Create your account, then confirm your timezone — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Create your account: a computer name, a username, and a password (avoid special characters in the username)",
              "Confirm your timezone — click your location on the map, or search for your city",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "Log in, then check Control Center for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Control Center (search for it, or find its icon in the dock)",
              "Go to System Update and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "lmde",
    name: "Linux Mint Debian Edition (LMDE)",
    accent: "#7a9d3c",
    tagline: "The same Mint experience, with Debian underneath instead of Ubuntu",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the LMDE installer file — there's just one edition, Cinnamon.",
        detail: [
          {
            type: "p",
            text: "LMDE is the Linux Mint team's own build of Mint running directly on Debian instead of Ubuntu — same Cinnamon desktop, same tools, no Ubuntu or Canonical code underneath. The team maintains it partly as insurance, so that Mint could keep going even if Ubuntu ever stopped being a workable base — which makes it a genuine, well-supported release rather than a side experiment. The current version, LMDE 7 \"Gigi\", is built on Debian 13 and is a long-term support release, not a rolling one, so updates work the same steady way as regular Mint.",
          },
          {
            type: "checklist",
            items: [
              "Go to linuxmint.com/download_lmde.php",
              "Download the ISO — Cinnamon is the only desktop offered for LMDE, so there's no edition to choose between (file is around 2.8GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "LMDE is 64-bit only — there's no 32-bit build for this release.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install LMDE from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the LMDE ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "LMDE")',
              'Double-click the "Install Linux Mint" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether LMDE replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where LMDE becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout (the installer usually detects this correctly already) and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward. Like every other guide on this site, root stays locked by default here too — you won't be asked to set a separate root password.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open the Update Manager (shield icon, bottom-right taskbar) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "If the Update Manager asks to update itself first, let it — then it'll relaunch and show the rest of the available updates.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "rocky-linux",
    name: "Rocky Linux",
    accent: "#8c7a6b",
    tagline: "RHEL-compatible and enterprise-grade — not really built for desktops",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Rocky Linux Workstation live image — and know what you're getting into first.",
        detail: [
          {
            type: "p",
            text: "Rocky Linux is a free, community-built rebuild of Red Hat Enterprise Linux (RHEL) — it exists to run the exact same software RHEL runs, with the same long support windows, at zero cost. That focus on enterprise stability means its packages are chosen for years of reliability rather than the newest features, so software here tends to be noticeably older than what you'd find on Fedora, Ubuntu, or most other distros on this site. If you specifically want to learn RHEL-style system administration, or need something certified to run software built for RHEL, Rocky is exactly the right tool. If you just want a modern, fuss-free everyday desktop, one of the other guides on this site will likely serve you better.",
          },
          {
            type: "checklist",
            items: [
              "Go to rockylinux.org/download",
              "Look for the Live Images (sometimes listed separately from the main DVD/Minimal downloads) and choose Workstation",
              "Download the Workstation ISO for x86_64 (typically 1.7-1.8GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Rocky Linux also offers Workstation-Lite and KDE live images, plus larger DVD and Minimal ISOs meant for server installs without a graphical installer — this guide assumes the standard Workstation (GNOME) live image.",
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Rocky Linux from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Rocky Linux ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Rocky Linux")',
              'On the welcome screen, choose "Install to Hard Drive" — if you don\'t see it right away, open Activities (top-left) and search for "Install"',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Rocky Linux replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "Rocky Linux uses Anaconda — the same installer used by Fedora and RHEL itself — which asks you to choose an installation destination. This checklist covers the full, single-OS install, where Rocky Linux becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              "Select your drive, choose the Automatic partitioning option, and confirm",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language",
              "Confirm your timezone and keyboard layout",
              "Click User Creation and set up your account: your full name, a username, and a password",
              'Check "Make this user administrator" — Rocky disables the traditional root account by default, so this is what gives your account sudo access afterward',
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "Unlike Fedora, on Rocky Linux this account creation happens directly in the installer, not through a separate first-boot wizard — once you click Begin Installation, this part is done.",
          },
          {
            type: "p",
            text: "After confirming these, click Begin Installation — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              'Open a terminal (search for "Terminal" from Activities) and run sudo dnf upgrade -y to install all available updates',
            ],
          },
          {
            type: "p",
            text: "Rocky Linux also includes a graphical Software app, but it's known to be inconsistent about detecting new updates — the dnf command above is the more reliable way to stay current, and it's how most Rocky/RHEL-family documentation expects you to update.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "solus",
    name: "Solus",
    accent: "#3b4d8c",
    tagline: "An independent distro built entirely from scratch, home of Budgie",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Solus installer file — Budgie is the flagship edition.",
        detail: [
          {
            type: "p",
            text: "Solus offers four editions — Budgie, GNOME, Plasma, and Xfce — all built on the same independent base (Solus isn't derived from Ubuntu, Debian, or Arch; it's built from scratch). Budgie is Solus's own desktop environment and the one the project curates as its flagship, so it's the one this guide assumes.",
          },
          {
            type: "checklist",
            items: [
              "Go to getsol.us/download",
              "Click Download under Budgie (or your preferred edition)",
              "Wait for the ISO to finish downloading (roughly 4GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary: "Turn a USB drive into something your computer can install Solus from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Solus ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Solus")',
              'On the live desktop that appears, double-click the "Install OS" icon',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Solus uses the Calamares installer — the same one used by several other independent distros — so if anything here looks familiar from elsewhere, that's why.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Solus replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Solus becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a computer name, a username, and a password",
              'Optionally check "Log in automatically" if this is a personal computer only you use',
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to expect on first login, and how to check for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software Center from the applications menu and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Solus uses its own package manager, eopkg, under the hood — the Software Center is the graphical front end for it. If you ever prefer the terminal, sudo eopkg up does the same job.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "void-linux",
    name: "Void Linux",
    accent: "#96a83e",
    tagline: "Minimal and independent — but with no graphical installer at all",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Void Linux live image — and read this first, because Void isn't like the other guides here.",
        detail: [
          {
            type: "p",
            text: "Before anything else: Void Linux does not have a graphical installer. Every other guide on this site walks you through clicking through screens with a mouse; Void's installer is entirely text-based and keyboard-driven, and part of it (disk partitioning especially) requires typing commands rather than clicking options. This guide keeps the same six-step structure as the rest of the site for consistency, but it's honest where that structure stops fitting. If you've never used a terminal before, Void is a genuinely rough starting point — the other guides on this site (Linux Mint especially) will get you to a working desktop with far less friction. If you're comfortable typing commands and want to understand your system at a lower level, Void is a good place to actually learn that.",
          },
          {
            type: "list",
            items: [
              "glibc vs musl: Void ships two versions of its C library. glibc is the standard, more broadly compatible choice and the one this guide assumes; musl is lighter but some software can be trickier to get running on it.",
              'base vs Xfce image: the "base" image is command-line only with no desktop at all; the "Xfce" image boots into a live Xfce desktop and is what this guide assumes, since it\'s the option that actually gets you to a usable desktop.',
            ],
          },
          {
            type: "checklist",
            items: [
              "Go to voidlinux.org/download",
              "Under x86_64, download the Xfce live image, glibc variant (typically 1.3-1.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Void Linux from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Void Linux ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer, boot from the USB, and open a terminal to start the installer.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Void")',
              "Wait for the live Xfce desktop to load — it logs in automatically",
              "Open a terminal from the desktop (look for a terminal icon on the panel or desktop) and run sudo void-installer to start the installer",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "The live session logs in automatically as a user called anon; if anything asks for a password before you reach the installer, the default live-session password is voidlinux.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "There's no automatic option here — Void's disk setup is manual, and this step says so plainly.",
        detail: [
          {
            type: "p",
            text: "This is the step where Void diverges most from every other guide on this site. There's no \"Erase disk and install\" button — Void's installer doesn't offer automatic partitioning at all. You'll partition the drive yourself using a tool called cfdisk, which the installer opens for you partway through. This genuinely can't be simplified into a checklist the way it can for other distros; what it involves depends on whether your computer uses UEFI or older BIOS firmware, and on how you want the drive laid out.",
          },
          {
            type: "list",
            items: [
              "UEFI (most computers made since roughly 2012): create a GPT partition table, with an EFI System partition (roughly 200MB-1GB, FAT32) plus a root partition (ext4) using the rest of the space.",
              "Older BIOS: create an MBR partition table, with a small 1MB BIOS boot partition plus a root partition (ext4) using the rest of the space.",
              "Void's stock installer doesn't support LVM, LUKS disk encryption, or ZFS — if you specifically need any of those, Void's installer isn't the tool for it.",
            ],
          },
          {
            type: "p",
            text: "If any of the above is unfamiliar, that's a normal reaction — it assumes background this site's other guides don't require. The Void Linux Handbook's installation guide (docs.voidlinux.org) covers this step in far more detail than fits here.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Work through void-installer's menu top to bottom — including the partitioning from the previous step.",
        detail: [
          {
            type: "p",
            text: "void-installer runs as one long, linear menu — you work through each item top to bottom, pressing Enter to confirm each one before moving to the next.",
          },
          {
            type: "checklist",
            items: [
              "Set your keyboard layout",
              "Configure networking (a wired connection usually just works; Wi-Fi needs to be set up here)",
              "For the package source, choose Local — this installs from the live image itself rather than downloading everything fresh (important if you booted the Xfce image, since choosing Network here skips the desktop packages)",
              "Set a hostname, locale, and timezone",
              "Set a root password",
              "Create your user account: a username, a password, and group membership — make sure to include the wheel group, or you won't have sudo access afterward",
              "Choose a bootloader (GRUB is the standard choice) and the disk to install it to",
              "Partition and format the disk (see the previous step)",
              "Review the summary screen, then confirm to begin installation",
            ],
          },
          {
            type: "p",
            text: "Installation itself is quick once everything above is set — usually just a few minutes, since the Xfce live image is small to begin with.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the username and password you created during install",
              "Open a terminal and run sudo xbps-install -Syu to sync and install all available updates",
            ],
          },
          {
            type: "p",
            text: "Void has no graphical update tool — xbps-install -Syu in a terminal is the standard way everyone updates a Void system, not a fallback. If the update includes XBPS itself (Void's package manager), it updates itself first and asks you to run the same command a second time to finish updating everything else — that's expected, not an error.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off — though if you're new to the terminal, it's worth spending extra time there before going much further with Void.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "debian",
    name: "Debian",
    accent: "#b8312f",
    tagline: "The rock-solid foundation many other distros are built on",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the right Debian installer — the live image with the graphical installer, not the classic text-based one.",
        detail: [
          {
            type: "p",
            text: "Debian actually offers two different installers, and it's easy to grab the wrong one. The classic Debian Installer (found on the netinst and DVD images) is a text-based installer built for maximum control — powerful, but not aimed at beginners. This guide uses the Live images instead, which boot into a normal desktop and use the graphical Calamares installer, the same style of installer used elsewhere in this guide.",
          },
          {
            type: "checklist",
            items: [
              "Go to debian.org/distrib/",
              'Scroll to the "Try Debian live before installing" section and click "Live GNOME" — GNOME is Debian\'s default desktop, and this is the ISO the rest of this guide assumes (roughly 3GB)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "Live images are also offered with KDE, Xfce, LXDE, Cinnamon, and MATE if you'd rather use one of those desktops — the steps that follow work the same either way.",
              "You may see older advice about downloading a separate 'unofficial' image with extra firmware bundled in so WiFi and graphics cards work correctly. That's no longer necessary — as of Debian 12, the standard images already include that firmware.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Debian from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Debian ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Debian")',
              'Once the live desktop loads, double-click the "Install Debian" icon on the desktop to launch the installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Debian replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to partition the disk. This checklist covers the full, single-OS install — where Debian becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary: "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: 'Calamares shows a checkbox for "use the same password for the administrator account," checked by default — it\'s fine to leave it checked. That means the root account also gets a password (the same one you just set), on top of your account being able to use sudo. That\'s a little different from some other distros in this guide, where root has no password at all and only sudo works — on Debian, both work out of the box.',
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo (or root) afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software (GNOME Software), go to the Updates tab, and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "xubuntu",
    name: "Xubuntu",
    accent: "#2e86c1",
    tagline: "Ubuntu's lightweight, traditional-desktop-style spin",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Xubuntu installer file — Desktop is the right pick for most people.",
        detail: [
          {
            type: "p",
            text: "Xubuntu offers two editions — Desktop and Minimal. Desktop comes with a full set of everyday apps already installed and is the right choice for most people; Minimal strips almost everything out so you add only what you want, which really is meant for people who already know what they're doing.",
          },
          {
            type: "checklist",
            items: [
              "Go to xubuntu.org/download/",
              "Under the current release, choose the Desktop (64-bit) edition",
              'Pick a download mirror near you (or use the torrent link, marked "Highly recommended!") and download the ISO — roughly 4.5GB',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "Unlike some distros, Xubuntu doesn't have one single \"Download\" button — you'll choose either a torrent or a mirror close to your location. If torrents aren't familiar to you, a direct mirror download works just as well.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Xubuntu from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Xubuntu ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Xubuntu")',
              "Choose Try or Install Xubuntu, then launch the installer",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Xubuntu replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Xubuntu becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Xubuntu" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your internet connection",
              "Create your account: your name, a computer name, a username, and a password",
              "Confirm your timezone (usually auto-detected from your internet connection)",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software Updater (in the Settings section of the applications menu) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "lubuntu",
    name: "Lubuntu",
    accent: "#c9a227",
    tagline: "The leanest official Ubuntu flavor, built for older hardware",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Lubuntu installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Lubuntu has just one main edition — a 64-bit Desktop ISO — built specifically to run well on older or lower-spec machines, in the same spirit as Linux Lite and MX Linux elsewhere in this guide.",
          },
          {
            type: "checklist",
            items: [
              "Go to lubuntu.me/downloads/",
              'Under the current release, download the "Desktop 64-bit" ISO (roughly 3.6GB) — the direct link, or the magnet link if you\'re comfortable with torrents (the site calls this the "auto-verified" option)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Lubuntu from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Lubuntu ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Lubuntu")',
              'Choose "Try Lubuntu", then double-click the "Install Lubuntu" icon in the top-left corner of the desktop (or find it under System Tools) to launch the installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Unlike most other Ubuntu-based distros in this guide, which now use Ubuntu's newer installer, Lubuntu uses Calamares — the same installer used by Debian and MX Linux elsewhere in this guide.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Lubuntu replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During the installer, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Lubuntu becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your language and keyboard layout",
              "Connect to Wi-Fi if you're not already on a wired connection",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to expect on first login, and how to check for updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              'Open Lubuntu Update from the Preferences menu (or click the tray icon if one appears) and press "Check for Updates", then "Install Updates"',
            ],
          },
          {
            type: "p",
            text: "Lubuntu also includes Discover, a general software center with its own Updates tab for browsing and installing new apps. Either one will get you updated — Lubuntu Update is just the smaller, dedicated tool for it.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "ubuntu-mate",
    name: "Ubuntu MATE",
    accent: "#8fac35",
    tagline: "A classic desktop layout on modern Ubuntu underpinnings",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Ubuntu MATE installer file from the official site — and why the version number matters more than usual right now.",
        detail: [
          {
            type: "p",
            text: "Ubuntu MATE ships one 64-bit desktop edition — there's no separate flavor split to choose between. (There are also Raspberry Pi images, but those are a different install process this guide doesn't cover.)",
          },
          {
            type: "p",
            text: "Worth knowing before you download: Ubuntu MATE's founder stepped back from the project in early 2026, and the team didn't have a release ready in time for Ubuntu's 26.04 cycle — so there's no Ubuntu MATE 26.04. That's not a problem for you: 24.04 LTS is still fully supported into 2027 and is the version this guide is written for. If you see the older 25.10 release listed anywhere, skip it — it's already past its support window.",
          },
          {
            type: "checklist",
            items: [
              "Go to ubuntu-mate.org/download/",
              'Download the 24.04 LTS "Noble Numbat" ISO (roughly 4.2GB)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Ubuntu MATE from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Ubuntu MATE ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB — Ubuntu MATE uses a newer installer that behaves a bit differently than older guides describe.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Ubuntu MATE")',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Ubuntu MATE switched to Ubuntu's newer installer (built on Flutter and Subiquity) starting with 24.04, replacing the older Ubiquity installer some other distros still use. In practice this means the USB doesn't drop you into a full live desktop first — you'll go straight into a short sequence of setup screens before installation begins.",
          },
          {
            type: "checklist",
            items: [
              "Select your language, accessibility options (if any), and keyboard layout as each screen appears",
              "Click Install Ubuntu MATE on the Try or Install screen",
            ],
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Ubuntu MATE replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "You'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Ubuntu MATE becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Ubuntu MATE" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Confirm your timezone and create your account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software Updater and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Ubuntu MATE 24.04 replaced its old Software Boutique app store with App Center — that's where you go later to browse and install new software (both Snap and .deb packages). It's not needed for this first update, just worth knowing it's there.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "ubuntu-budgie",
    name: "Ubuntu Budgie",
    accent: "#5b6fd6",
    tagline: "A sleek, modern desktop with Ubuntu's stability underneath",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Ubuntu Budgie installer file from the official site.",
        detail: [
          {
            type: "p",
            text: "Ubuntu Budgie ships one 64-bit desktop edition. There's also a Raspberry Pi image for the 24.04 LTS release, but that's a different install process this guide doesn't cover.",
          },
          {
            type: "checklist",
            items: [
              "Go to ubuntubudgie.org/downloads/",
              'Download the 26.04 LTS "Resolute Raccoon" ISO (roughly 3.8GB)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Ubuntu Budgie from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Ubuntu Budgie ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB — Ubuntu Budgie uses a newer installer that behaves a bit differently than older guides describe.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Ubuntu Budgie")',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Ubuntu Budgie moved to Ubuntu's newer installer (built on Flutter and Subiquity) starting with 24.04, replacing the older Ubiquity installer some other distros still use. In practice this means the USB doesn't drop you into a full live desktop first — you'll go straight into a short sequence of setup screens before installation begins.",
          },
          {
            type: "checklist",
            items: [
              "Select your language, accessibility options (if any), and keyboard layout as each screen appears",
              "Click Install Ubuntu Budgie on the Try or Install screen",
            ],
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Ubuntu Budgie replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "You'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Ubuntu Budgie becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk and install Ubuntu Budgie" (or equivalent) and continue',
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Confirm your timezone and create your account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Software Updater and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Budgie Welcome opens automatically on first login — it's a quick orientation to the desktop, applets, and a few recommended apps. Worth a look, but entirely skippable.",
          },
          {
            type: "p",
            text: "26.04 is Ubuntu Budgie's first release to run entirely on Wayland, using a compositor called labwc, with no Xorg/X11 session offered as a fallback. This is invisible for most people, but if you rely on an older app or a driver setup (some NVIDIA configurations, certain screen-recording or remote-desktop tools) that specifically needs X11, know that this release doesn't provide it.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "peppermint-os",
    name: "Peppermint OS",
    accent: "#b84fc2",
    tagline: "Minimal by default — you decide what gets added",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary: "Grab the Peppermint OS installer file from the official site.",
        detail: [
          {
            type: "p",
            text: 'Peppermint OS is built on Debian — currently Debian 13 "Trixie" — and ships one main 64-bit edition called Flagship. There\'s also a newer Devuan-based edition (a systemd-free alternative) for people who specifically want that, but that\'s a separate, less common path this guide doesn\'t cover.',
          },
          {
            type: "checklist",
            items: [
              "Go to peppermintos.com",
              "Click Download Peppermint",
              "Download the Flagship 64-bit ISO (roughly 2GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "Peppermint runs on very little — the published minimum is 1GB of RAM and 10GB of disk space, though 2GB of RAM and a 20GB+ drive make for a noticeably smoother experience.",
              'Earlier Peppermint releases offered separate "Fully Loaded" and "Mini" editions; the current Trixie-based release ships as a single Flagship build.',
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Peppermint from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Peppermint ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Peppermint")',
              'Double-click the "Install Peppermint" icon on the desktop that appears',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Peppermint boots to a full live desktop, the same as it would look once installed.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Peppermint replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During Calamares (Peppermint's installer), you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Peppermint becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" (or equivalent) and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer copies files while a slideshow plays — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Pick the apps you actually want, then check for system updates.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Go through Suggested Packages (opens automatically) and toggle on a browser, office suite, and media player — whatever you actually want",
              "Open Update Manager and install the available System Updates (there's a separate Pep Tools section for Peppermint's own tools — not needed today)",
            ],
          },
          {
            type: "p",
            text: "This pick-your-own-apps step is central to how Peppermint works: rather than shipping a full desktop's worth of software you might not want, it installs a minimal base and lets you add exactly what you need afterward. You can reopen Suggested Packages later from the app menu anytime if you skip something now.",
          },
          {
            type: "p",
            text: "Worth knowing about for later: Peppermint includes a distinctive built-in tool called Ice, which turns any website into what looks and behaves like its own desktop app — its own window, its own icon, no browser tabs or bookmarks bar. It's one of the things Peppermint is best known for, though it's not something you need to touch today.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "slackware",
    name: "Slackware",
    accent: "#546a7b",
    tagline: "The oldest actively maintained Linux distro — manual, no-frills, and unapologetically old-school",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Slackware installer file — but read this first, because Slackware isn't like the other distros here.",
        detail: [
          {
            type: "p",
            text: "Before downloading anything: Slackware is one of the oldest Linux distributions still actively maintained, and its installer has stayed deliberately manual for over two decades. There's no automatic partitioning, no dependency-resolving package manager, and no graphical installer — everything is done by hand, from a text-based menu system, with real comfort using the terminal assumed going in.",
          },
          {
            type: "p",
            text: "If this is your first time installing Linux at all, a distro like Linux Mint or Zorin OS is a far gentler place to start. This guide is written for people who specifically want Slackware and are ready for that — not as a way to ease into Linux generally. The step structure below matches the rest of this site for consistency, but the steps themselves are genuinely more advanced.",
          },
          {
            type: "p",
            text: "The current stable release is Slackware 15.0 — released in February 2022 and still the latest stable branch as of this writing. Slackware moves slowly and deliberately by design; that gap isn't a sign the project is inactive.",
          },
          {
            type: "checklist",
            items: [
              "Go to slackware.com/getslack/ and follow the link to the current mirrors list",
              "On a mirror, open the slackware-iso/slackware64-15.0-iso/ folder",
              "Download slackware64-15.0-install-dvd.iso (around 3.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "There's also a 32-bit 'slackware' tree alongside 'slackware64' on the mirrors — nearly every computer made in the last decade needs the 64-bit version, not 32-bit.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Slackware from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely. Slackware's ISOs are built as 'isohybrid' images, so the same flash-and-boot process used elsewhere on this site works fine here too.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Slackware ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB — Slackware drops you into a plain text login, not a desktop.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              "Select your USB drive from the boot menu",
              "If asked about a non-US keyboard map, press Enter to keep the US default (or press 1 first to pick another)",
              'At the "slackware login:" prompt, type root and press Enter — there is no password at this stage',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "If your computer has Secure Boot enabled in UEFI settings, Slackware's installer won't boot — go into your UEFI/BIOS settings first and disable Secure Boot, then try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Partition the disk by hand — Slackware has no 'erase disk and install' option to click.",
        detail: [
          {
            type: "p",
            text: "This is the step where Slackware differs most from the rest of this site. There's no single button that erases the disk and installs — partitioning is something you do yourself, with a text-based tool, before running the actual installer. This checklist covers a straightforward single-OS setup, where Slackware becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this still permanently erases everything on that drive. Back up anything you want to keep before continuing.",
          },
          {
            type: "p",
            text: "Dual-boot is possible on Slackware but involves partitioning carefully around your existing OS and configuring the bootloader by hand — a more advanced process not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              "At the root prompt, run lsblk to identify your main disk (e.g. /dev/sda), then run cfdisk /dev/sda",
              "Select gpt as the partition table type if asked",
              "Select the free space, choose New, size it to roughly match your RAM (e.g. 4G), and set its type to Linux swap",
              "Select the remaining free space, choose New, use the rest of the disk, and set its type to Linux filesystem",
              "Select Write, type yes to confirm, then select Quit",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Run setup — Slackware's actual installer — and work through its many manual steps.",
        detail: [
          {
            type: "checklist",
            items: [
              "Type setup and press Enter to launch the installer",
              "Select ADDSWAP to enable the swap partition you just created",
              "Select TARGET, choose your root partition, select Format, then choose ext4",
              "Select SOURCE and choose your install media (matching how you booted — USB stick or CD/DVD)",
              'Select SELECT and accept the default package series (all of them, for a first install)',
              'Select INSTALL and choose the "full" installation method',
            ],
          },
          {
            type: "p",
            text: "This is also where Slackware's lack of dependency resolution matters most: there's no package manager quietly working out what you need as you go. Choosing \"full\" installs everything Slackware ships, which sidesteps that problem entirely for a first install. Trimming packages down to a leaner system is something to explore later, once you know what you actually use.",
          },
          {
            type: "checklist",
            items: [
              'When prompted for a bootloader, choose LILO, then "simple", then MBR — this installs a working bootloader automatically for a single-OS setup',
              "Work through the remaining prompts (console mouse, network, startup services, timezone, default text editor), accepting the defaults if you're unsure",
              "When asked to set a root password, choose one and remember it — this is the only account that exists until you create one after rebooting",
            ],
          },
          {
            type: "p",
            text: "After confirming these, exit the installer and reboot, removing the USB drive as it restarts.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Create your actual user account — Slackware doesn't do this during install — then update the system.",
        detail: [
          {
            type: "p",
            text: "Slackware boots to a text login, not a graphical one, until you set that up yourself — and unlike every other distro on this site, it doesn't create a personal user account for you during installation at all. Only root exists at this point.",
          },
          {
            type: "checklist",
            items: [
              "Log in as root using the password you set during install",
              "Create your everyday account by typing adduser and following its prompts (username, password, and a few group questions — the defaults are fine for a personal computer)",
              "Update the system by typing slackpkg update, then slackpkg upgrade-all",
            ],
          },
          {
            type: "p",
            text: "From here, getting a graphical desktop running by default, connecting to Wi-Fi, and general day-to-day use all involve more manual setup than any other distro on this site — worth knowing going in. The Slackware Documentation Project (docs.slackware.com) is the best next stop for that.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up — though given how manual Slackware is by design, expect to lean on outside documentation more than usual as you go.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "puppy-linux",
    name: "Puppy Linux",
    accent: "#c17d3a",
    tagline: "A tiny distro that runs entirely from RAM off a USB — built to revive old hardware",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab a Puppy Linux build — Puppy is really a family of small, related distros, not one single download.",
        detail: [
          {
            type: "p",
            text: "Puppy Linux isn't a single operating system the way the other distros on this site are — it's a family of small, independently built systems that share common tools and design principles, each built on top of a different base (Debian, Ubuntu, Slackware, or Void). TrixiePup64 is the current, actively developed, Debian-based build and the right starting point for most people.",
          },
          {
            type: "p",
            text: "It also works fundamentally differently from every other distro in this guide: Puppy is designed to run entirely from your computer's RAM off a USB or CD, not from a normal disk install. The next few steps reflect that — some of what's below won't look like the usual \"erase disk and install\" flow, because that's not really how Puppy works.",
          },
          {
            type: "checklist",
            items: [
              "Go to forum.puppylinux.com/puppy-linux-collection (Puppy Linux's official downloads hub)",
              "Under \"Debian base\", find TrixiePup64_Wayland (or TrixiePup64_Retro, an older-style interface some people prefer) and click through to its download link",
              "Download the ISO (typically around 1-1.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "There's also a 32-bit build (TrixiePup32) for genuinely old 32-bit-only hardware, and other Puppy variants built on Ubuntu, Slackware, or Void instead of Debian — outside the scope of this guide.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can boot Puppy from — using different tools than the rest of this site.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 2GB (4GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "list",
            items: [
              "Puppy Linux's own documentation and forums specifically flag balenaEtcher as unreliable for its ISOs — this is one of the few real exceptions on this site to the usual Etcher-based flow used for every other distro here.",
            ],
          },
          {
            type: "checklist",
            items: [
              "On Windows, download Rufus from rufus.ie, open it, select your USB drive and the Puppy ISO, and click Start",
              "On Linux or Mac, write the ISO directly to the USB device using the dd command (see puppylinux-woof-ce.github.io/install.html for exact commands and safety notes) — Puppy's ISOs are isohybrid images built specifically to support this",
              "Wait for the write to finish, then safely eject the drive",
            ],
          },
          {
            type: "p",
            text: "Leave the USB plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and boot the USB — this takes you straight to a working desktop, not an installer screen.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              "Select your USB drive from the boot menu",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Unlike the other distros on this site, there's no separate \"installer\" screen to launch here — booting the USB takes you straight to a full, usable Puppy desktop running entirely in your computer's RAM. Nothing on your hard drive is touched yet. You can use Puppy exactly like this, every time, straight off the USB, if you never want anything more permanent.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether to stay fully live, do a lightweight 'frugal' install, or do a traditional full install.",
        detail: [
          {
            type: "p",
            text: "This is where Puppy diverges most from every other distro on this site. There's no \"erase disk and install\" step, because Puppy doesn't need a dedicated partition to run at all — it's built to run live, with your choice of how much (if any) of it becomes permanent.",
          },
          {
            type: "list",
            items: [
              "Stay live only — use Puppy straight from the USB each time, choosing whether to save your changes when you shut down. Nothing gets installed anywhere.",
              "Frugal install (Puppy's own recommended option) — copies Puppy's core files into a folder on an existing partition on your hard drive, alongside whatever's already there. It doesn't need a dedicated partition and doesn't erase your existing OS.",
              "Full install — the traditional approach: a dedicated, formatted partition used only for Puppy. This is the option closest to \"erase disk and install\" on the other distros in this list, and the only one here where GParted needs to build a proper Linux partition.",
            ],
          },
          {
            type: "p",
            text: "For most people trying Puppy for the first time, staying live or doing a frugal install is the better starting point — a full install gives up much of the flexibility that's the actual reason to pick Puppy in the first place. Whichever you choose, if you're touching your internal drive at all, back up anything important first.",
          },
          {
            type: "checklist",
            items: [
              "If you want to install (frugal or full), open the Puppy Installer from Menu > Setup at the live desktop",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Work through the Puppy Installer for whichever option you picked — there's no account setup involved.",
        detail: [
          {
            type: "checklist",
            items: [
              "Choose Frugal install (or Full install) when prompted",
              "If there's no suitable existing partition, use the included GParted tool to create or resize one",
              "Confirm the location of your Puppy files (it'll already point at your boot USB or ISO) and confirm to copy them across",
              "Let it install a bootloader, then reboot when prompted, removing the USB drive as it restarts",
            ],
          },
          {
            type: "p",
            text: "There's no username, password, or account setup during any of this — Puppy doesn't ask for one at this stage.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "The real equivalent of account setup happens at shutdown, not boot — and Puppy logs you in as root by default.",
        detail: [
          {
            type: "p",
            text: "The first meaningful prompt you'll see isn't at boot — it's at shutdown. This is Puppy's real equivalent of the account-creation screen other distros show during install.",
          },
          {
            type: "checklist",
            items: [
              "Use Puppy as normal, then shut down or reboot when you're done for the session",
              "When prompted to save your session, choose to create a save file (or save folder) — this remembers your settings, files, and installed software between reboots, in place of a normal user account",
            ],
          },
          {
            type: "p",
            text: "On future boots, Puppy finds this save file automatically and restores things exactly as you left them. Puppy also logs you in as root by default rather than a separate limited user — a deliberate, long-standing design choice very different from the other distros in this guide. A restricted account called spot exists for running internet-facing apps like the browser with less risk, but it's optional and not something you need to set up yourself.",
          },
          {
            type: "checklist",
            items: [
              "Check for updates through the Puppy Package Manager (or Synaptic/apt, on Debian-based builds like TrixiePup) from the menu",
            ],
          },
          {
            type: "p",
            text: "That's the full picture for Puppy Linux, start to finish — though \"finish\" is looser here than elsewhere on this site, since staying live, going frugal, or doing a full install are all genuinely valid endpoints depending on what you want it for. From here, the Learn section's lessons and the Search page pick up, though some of it — especially around user accounts — will map onto Puppy only loosely given how differently it works.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "q4os",
    name: "Q4OS",
    accent: "#2f9e8f",
    tagline: "Lightweight and Debian-based, with a desktop built to feel instantly familiar to Windows switchers",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Q4OS installer file — Trinity is the signature, lightweight edition most people want.",
        detail: [
          {
            type: "p",
            text: "Q4OS offers two desktop editions — Trinity and Plasma. Trinity is Q4OS's signature, extremely lightweight desktop and what it's best known for, with a layout that feels immediately familiar coming from Windows; Plasma is heavier and more modern-looking, and wants somewhat newer hardware.",
          },
          {
            type: "checklist",
            items: [
              "Go to q4os.org/downloads1.html",
              'Under Installation media, download "Q4OS Andromeda, Trinity, live - 64bit / x64" (around 1.4GB)',
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "If your hardware is older or lower-spec, the smaller \"Trinity, install-cd\" option (about 1GB) skips the live-desktop preview and installs more directly — a fine alternative, just without trying Q4OS out first.",
              "There's also a 32-bit edition for genuinely old hardware, and a Windows-based installer (WinSetup.exe) that adds Q4OS alongside an existing Windows install — neither is covered by this single-OS guide.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Q4OS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Q4OS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Q4OS")',
              "Double-click the Install icon on the desktop that appears (or find it in the applications menu) to launch Calamares, Q4OS's installer",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether Q4OS replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Q4OS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase disk" (or equivalent) and continue',
            ],
          },
          {
            type: "p",
            text: "If you downloaded the smaller install-cd ISO instead of the live image, you'll see a slightly different flow here — a choice between \"classic\" and \"fast install\" rather than Calamares. Fast install does the same single-OS erase-and-install this checklist covers, just with fewer screens, and it creates a predefined account that asks you to set a password on first login instead of during setup.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and click Continue",
              "Select your keyboard layout and click Continue",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: a name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Q4OS leads with a setup tool before updates — worth doing in that order.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open Desktop Profiler (it may prompt automatically) and choose a profile that matches how you plan to use the desktop — optional, but it tailors Q4OS in one step",
              "Open Software Centre from the start menu and install Update Manager if it isn't already present",
              "Run Update Manager (or, from a terminal, sudo apt update followed by sudo apt dist-upgrade) and install everything it lists",
            ],
          },
          {
            type: "p",
            text: "Q4OS already applies security updates automatically in the background by default, so this step is about catching anything else and getting into the habit — not fixing something that's broken.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "cachyos",
    name: "CachyOS",
    accent: "#8bc34a",
    tagline: "Performance-tuned, rolling-release Arch Linux",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the CachyOS Desktop ISO — you'll pick your desktop environment during the install itself.",
        detail: [
          {
            type: "p",
            text: "A quick note before you start: CachyOS is Arch Linux underneath — a rolling release that keeps every package on the newest version instead of shipping occasional big-version upgrades the way Mint or Fedora do. That makes it fast and current, but things also change more often and you'll occasionally need to troubleshoot something. If this is your very first Linux install, a distro like Linux Mint or Zorin OS will be a gentler start — CachyOS is a great next step once you're comfortable finding your way around.",
          },
          {
            type: "p",
            text: "CachyOS has one main Desktop edition ISO — there's also a Handheld edition built for devices like the Steam Deck and ROG Ally, but that's a separate download this guide doesn't cover. You don't need to pick a desktop environment (KDE Plasma, GNOME, and over a dozen others are all available) before downloading — that choice happens later, inside the installer.",
          },
          {
            type: "checklist",
            items: [
              "Go to cachyos.org/download",
              "Click Download under the Desktop edition — the file that comes down is the ISO (typically around 2.8GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "The installer needs an internet connection to finish setting up your chosen desktop environment, so make sure you're near Wi-Fi or plugged into ethernet before you get to the boot step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install CachyOS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the CachyOS ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer, start up from the USB, and launch the installer from the live desktop.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "CachyOS")',
              'Once the live desktop loads, open "Launch Installer" (an icon on the desktop or taskbar) to start Calamares, CachyOS\'s installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Unlike some distros, CachyOS boots into a full live desktop first rather than dropping you straight into the installer — you're briefly using CachyOS itself before you decide to install it.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether CachyOS replaces your current OS or lives alongside it, and pick a filesystem.",
        detail: [
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where CachyOS becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              'Select "Erase Disk" and continue',
              "When asked for a filesystem, leave Btrfs selected unless you have a specific reason to pick XFS — Btrfs is the default and supports system snapshots, which can save you if an update ever breaks something",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, choose a desktop environment and kernel, then create your account.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language, location, and keyboard layout",
              "Choose a desktop environment — KDE Plasma and GNOME are the most beginner-friendly starting points, and the installer shows a short preview of each before you commit",
              "Leave the kernel selection on its default — that's CachyOS's own performance-tuned kernel",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 12-18 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to do the first time your new CachyOS install starts up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "CachyOS Hello (the welcome app) usually opens automatically — if it doesn't, open it from the app menu",
              "Open a terminal and run sudo pacman -Syu to update every package to its latest version, confirming with y when it asks",
            ],
          },
          {
            type: "p",
            text: "That terminal command is the most reliable way to update CachyOS. GUI tools exist too — CachyOS Hello includes a small tray notifier for available updates — but pacman in a terminal is what CachyOS itself recommends, and it's worth getting comfortable with, since you'll be typing it fairly often on a rolling release.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "opensuse",
    name: "openSUSE",
    accent: "#a0522d",
    tagline: "Enterprise-grade stability, free for your desktop",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the openSUSE Leap installer — the stable, point-release edition most people want.",
        detail: [
          {
            type: "p",
            text: "openSUSE actually comes in two quite different flavors. Leap is the point-release edition — new versions arrive roughly once a year, and it stays put in between, which makes it a calmer, more predictable choice for a first install. Tumbleweed is openSUSE's rolling release — always the newest packages, updated continuously, but that also means more frequent changes to get used to. This guide covers Leap; if you already know you want the newest software the moment it's out and don't mind troubleshooting a bit more often, Tumbleweed is worth looking into separately.",
          },
          {
            type: "checklist",
            items: [
              "Go to get.opensuse.org",
              "Click Leap",
              "Download the Offline Image for your architecture (almost always x86_64) — the file that comes down is the ISO (typically around 4.2GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "You don't need to pick a desktop environment before downloading — GNOME, KDE Plasma, and an experimental Xfce option are all chosen later, during the install itself.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install openSUSE from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the openSUSE ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer, start up from the USB, and choose Install from the boot screen.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "openSUSE")',
              'On the screen that appears, choose "Install Leap 16.0" (or the current version number) and press Enter',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "openSUSE's installer, called Agama, takes a minute or so to load after you press Enter — that's normal, just wait for it. Unlike most installers, Agama doesn't walk you through one screen at a time — it shows a single overview page with a menu down the left side (Localization, Software, Storage, Users, and more), and you can visit each section in whatever order you like. The green Install button stays grayed out until everything required is filled in.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide whether openSUSE replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "In Agama, open the Storage section from the menu on the left. This checklist covers the full, single-OS install — where openSUSE becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              "In the Storage section, select your drive and let Agama use the whole disk — it lays out an EFI partition, a Btrfs root partition, and swap automatically",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Fill in your language, desktop, hostname, and account — in any order Agama's overview page allows.",
        detail: [
          {
            type: "checklist",
            items: [
              "In Localization, set your language, keyboard layout, and timezone",
              "In Software, click Change selection and choose a desktop — GNOME is a solid default, and KDE Plasma is an equally well-supported alternative if you prefer it",
              "In Hostname, give your computer a name you'll recognize",
              "In Users, create your account: your full name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "You won't be asked to set a separate root password — the first user account you create is automatically given sudo access, the same setup used throughout this site. Remember your password either way, since it's what you'll use to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "Once every section shows complete, click Install. This typically takes 10-20 minutes — you can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Log in, then update your system from a terminal — openSUSE's GUI update tools are still catching up.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Open a terminal (search for it in your app menu) and run: sudo zypper refresh",
              "Then run: sudo zypper update, and confirm with y when it asks",
            ],
          },
          {
            type: "p",
            text: "Worth flagging honestly: Leap 16 replaced its long-standing YaST tools with a newer set (Agama for installing, Myrlyn for package management), and the transition means there isn't yet a single obvious update icon the way there is on Mint or Fedora. The zypper commands above are the officially documented way to update, and they work regardless of which desktop you picked.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "nobara",
    name: "Nobara",
    accent: "#d6336c",
    tagline: "Fedora, tuned for gaming and content creation",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Nobara edition that matches your desktop preference and graphics card.",
        detail: [
          {
            type: "p",
            text: "Nobara is built on Fedora, with gaming-focused patches, drivers, and codecs added on top by its maintainer, GloriousEggroll (also known for the Proton-GE compatibility layer used by Steam). It stays close to Fedora's release cycle — Nobara 43 is based on Fedora 43 — but it's its own project with its own installer and update tools, not just Fedora with a new wallpaper.",
          },
          {
            type: "p",
            text: "Nobara offers several editions, each also available in a standard version and an NVIDIA (\"-NV\") version with NVIDIA's proprietary driver pre-installed.",
          },
          {
            type: "list",
            items: [
              "Official — a custom KDE Plasma setup tuned specifically for gaming and creative work; the recommended starting point for most people",
              "GNOME — a cleaner, more minimal desktop if you'd rather not use KDE Plasma",
              "KDE — a more standard Plasma desktop without Official's gaming-specific tweaks",
              "Steam-HTPC and Steam-Handheld — built for living-room and handheld devices, not covered by this guide",
            ],
          },
          {
            type: "p",
            text: "Add \"-NV\" to your chosen edition only if you have an NVIDIA graphics card and specifically want its proprietary driver pre-installed — otherwise pick the standard version, which works fine on AMD, Intel, and NVIDIA cards using open-source drivers.",
          },
          {
            type: "checklist",
            items: [
              "Go to nobaraproject.org/download.html",
              "Download the Official edition (or Official-NV if you have an NVIDIA card) — the file that comes down is the ISO (typically around 4.5GB)",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Nobara from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 8GB — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Nobara ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB instead of your normal operating system.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              'Select your USB drive from the boot menu (it\'ll show the drive\'s brand name, not "Nobara")',
              'Once the live desktop loads, double-click the "Install Nobara Linux" icon to open Calamares, Nobara\'s installer',
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Nobara's installer bundles everything it needs directly on the ISO, so — unlike some distros — it doesn't require an internet connection to complete the install.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary: "Decide whether Nobara replaces your current OS or lives alongside it.",
        detail: [
          {
            type: "p",
            text: "During Calamares, you'll reach a screen asking how to install. This checklist covers the full, single-OS install — where Nobara becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: ['Select "Erase Disk" and continue'],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language and keyboard layout",
              "Confirm your timezone (usually auto-detected from your internet connection)",
              "Create your account: your name, a computer name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "This happens directly in the installer, not in a separate setup step after rebooting. Remember your password — it's what you'll use both to log in and for sudo afterward.",
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "checklist",
            items: [
              "Restart when prompted, and remove the USB drive as the screen goes black — leaving it in can boot you back into the installer instead of your new system",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Nobara Welcome walks you through drivers, codecs, and your first update automatically.",
        detail: [
          {
            type: "checklist",
            items: [
              "Log in with the password you set during install",
              "Nobara Welcome opens automatically on first login — work through it: install codecs, set up GPU drivers if prompted, and pick a desktop layout if offered",
              'On the update section (labeled something like "Update my System"), click through to bring your system fully up to date',
            ],
          },
          {
            type: "p",
            text: "If Nobara Welcome doesn't open automatically, you can also update any time by opening the Update System app from the applications menu, or through DNF App Center, Nobara's software center.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up exactly where this leaves off.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "arch-linux",
    name: "Arch Linux",
    accent: "#06b6d4",
    tagline: "The DIY, rolling-release distro you build up from nothing yourself",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the official Arch Linux ISO — but read this first, because Arch expects more from you than most distros on this site.",
        detail: [
          {
            type: "p",
            text: "Before downloading anything: Arch Linux is one of the most hands-on distros around. For most of its history it had no installer at all — everything was done manually, from a command prompt. Arch now ships an official guided installer called archinstall, which is what this guide uses, but it's still text-based, still expects you to understand what a disk partition and a bootloader are, and still assumes real comfort typing commands and reading their output. It doesn't hold your hand the way a graphical installer does.",
          },
          {
            type: "p",
            text: "If this is your first time installing Linux at all, a distro like Linux Mint or Zorin OS is a far gentler place to start. This guide is written for people who specifically want Arch and are ready for that — not as a way to ease into Linux generally. The step structure below matches the rest of this site for consistency, but the steps themselves are genuinely more advanced.",
          },
          {
            type: "p",
            text: "Arch cuts a fresh install image every month, named something like archlinux-2026.08.01-x86_64.iso — the date in the filename is just the build date, not a version you need to track. The current image is around 1.5GB, noticeably smaller than most distros on this site, because it doesn't include a desktop environment or a live desktop to try before installing — you choose and install a desktop later, inside the installer itself. There's also only one build: Arch is 64-bit (x86_64) only, no 32-bit option.",
          },
          {
            type: "checklist",
            items: [
              "Go to archlinux.org/download",
              "Download the current ISO — either via the BitTorrent magnet/torrent link (Arch's own recommended method) or from an HTTP/HTTPS mirror near you",
            ],
          },
          {
            type: "list",
            items: [
              "Don't extract or open the ISO after downloading — it gets used as-is in the next step.",
              "If you want to verify the download, Arch also publishes SHA256/BLAKE2b checksums and a PGP signature on the download page — worthwhile if you're security-conscious, but safe to skip for a first install.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary:
          "Turn a USB drive into something your computer can install Arch Linux from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer) — back up anything on it first, since this process erases it completely.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the Arch Linux ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB — Arch drops you straight into a command prompt, not a menu or a live desktop.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              "Select your USB drive from the boot menu, then select Arch Linux install medium from the boot loader screen that follows",
              "Wait for it to finish loading — you'll land directly at a root command prompt with no login required",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "Arch's install media doesn't support Secure Boot at all — if your computer has it enabled, the USB won't boot. Go into your UEFI/BIOS settings first and disable Secure Boot, then try again. You can turn it back on after installing if you want it, but setting that up afterward is a separate, more advanced step this guide doesn't cover.",
          },
          {
            type: "p",
            text: "A wired ethernet connection works automatically the moment it's plugged in. If you're on Wi-Fi, connect now, before continuing: type iwctl, then inside it run device list to find your wireless device's name (commonly wlan0), station <device> scan, station <device> get-networks, and station <device> connect \"YourNetworkName\" — entering your Wi-Fi password when asked — then type exit. The installer in the next step won't set up Wi-Fi for you.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Launch archinstall and tell it to erase the whole disk — Arch's version of a single-OS install.",
        detail: [
          {
            type: "p",
            text: "Nothing launches automatically here — at the prompt, you type archinstall yourself to start Arch's official guided installer. It opens as a single scrollable menu of setup categories (mirrors, disk, bootloader, accounts, and more) that you can visit in whatever order you like, rather than one linear wizard screen after another. This checklist covers a straightforward single-OS setup, where Arch becomes the only operating system on the drive.",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything on that drive. Back up anything you want to keep before continuing.",
          },
          {
            type: "p",
            text: "Dual-boot is possible on Arch but involves manually partitioning around your existing OS using archinstall's Manual Partitioning mode (or the regular manual install process) — a more advanced setup not covered by this walkthrough.",
          },
          {
            type: "checklist",
            items: [
              "Type archinstall and press Enter to launch the installer",
              "From the menu that appears, select Disk configuration",
              "Select the drive you want to install to",
              "Choose \"Use a best-effort default partition layout\" — this automatically partitions and formats the entire selected drive for a single-OS Arch install",
              "When asked for a filesystem, choose ext4 (Btrfs is offered too, but ext4 is the simpler default for a first install)",
              "Confirm you want to wipe the drive when prompted",
            ],
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Work through the rest of archinstall's menu — this is where your account, desktop, and everything else gets set up.",
        detail: [
          {
            type: "p",
            text: "Back at the main menu, a handful of items still need your input before you can install. Most others (language, kernel, swap) can be left on their sensible defaults.",
          },
          {
            type: "checklist",
            items: [
              "Mirrors and repositories — leave the pre-filled default, it's fine for most people",
              "Bootloader — leave the default (systemd-boot on UEFI systems; GRUB is used automatically instead on older BIOS systems)",
              "Hostname — type a name for this computer",
              "Authentication — set a root password, then add a regular user account for yourself and make sure sudo/admin privileges are enabled for it; this is the only place a personal account gets created, and it's the account you'll actually log into afterward",
              "Profile — select Desktop, then pick a desktop environment (GNOME or KDE Plasma are the most beginner-friendly); archinstall installs it and sets up a matching graphical login screen automatically",
              "Applications — choose PipeWire as the audio server",
              "Timezone — select yours",
            ],
          },
          {
            type: "p",
            text: "Once you've filled in everything required, select Install at the bottom of the menu and confirm — archinstall will then download and set up the whole system, which takes a while depending on your internet connection.",
          },
          {
            type: "checklist",
            items: [
              "When it finishes, archinstall will say it's safe to reboot",
              "Type reboot, and remove the USB drive as your computer restarts",
            ],
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Log in and bring the system fully up to date — Arch doesn't do this for you after install.",
        detail: [
          {
            type: "p",
            text: "Because you selected a desktop profile and created a sudo-enabled user account, your Arch install should boot straight to a graphical login screen (GDM for GNOME, SDDM for KDE Plasma, and so on), and then into your desktop after you log in. If you'd skipped the desktop profile, it would boot to a plain text login instead, with setting up a graphical environment left as an entirely manual step afterward.",
          },
          {
            type: "checklist",
            items: [
              "Log in with the user account you created during install",
              "Open a terminal and run sudo pacman -Syu to bring every package fully up to date",
            ],
          },
          {
            type: "p",
            text: "That's the full install, start to finish. Arch is a rolling release, so there's no separate \"upgrade to the next version\" the way Mint or Fedora work — running pacman -Syu regularly is how it stays current. From here, the Learn section's lessons and the Search page pick up — though given how hands-on Arch is by design, expect to lean on the Arch Wiki (wiki.archlinux.org) more than usual as you go, even beyond this site.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
  {
    slug: "nixos",
    name: "NixOS",
    accent: "#2f6690",
    tagline:
      "A Linux distribution where the whole system is described in one config file, not clicked together app by app",
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the NixOS installer — but read this first, because NixOS works on a genuinely different idea than every other distro on this site.",
        detail: [
          {
            type: "p",
            text: "Before downloading anything: on every other distro in this guide, you install a system, then add or remove individual apps over time using a package manager, roughly the way you'd use an app store. NixOS flips that. Your entire system — every package installed, every setting, every service running — is described in a single text file (/etc/nixos/configuration.nix), and the system is rebuilt from that description whenever you change it. Nothing you didn't declare in that file is supposed to stick around permanently. It's a genuinely different mental model, not just a different installer.",
          },
          {
            type: "p",
            text: "If you're brand new to Linux and just want a comfortable daily-driver desktop, a distro like Linux Mint or Zorin OS will get you there with far less to learn up front. This guide is written for people who specifically want NixOS and are ready for that trade-off — not as a general first step into Linux. The step structure below matches the rest of this site, but expect more new concepts along the way, especially at the end.",
          },
          {
            type: "p",
            text: "The good news for installing it: NixOS does ship an official graphical installer built on Calamares (the same installer framework used by several other distros on this site), and it's the option nixos.org itself recommends for desktop users. That's the path this guide follows. There's also an older, fully manual path — partition by hand, write the config file yourself, run nixos-install from a text console — which some longtime users still prefer, but it's a more advanced route this walkthrough doesn't cover.",
          },
          {
            type: "checklist",
            items: [
              "Go to nixos.org/download",
              'Under "Graphical ISO image," download the 64-bit Intel/AMD build (currently around 3.8GB) — this is the version this guide follows, and the one recommended for desktop installs',
            ],
          },
          {
            type: "list",
            items: [
              "There's also a \"Minimal ISO image\" (around 1.7GB) that skips the graphical desktop and installer entirely — it boots to a text console and expects you to partition the disk and write the config file by hand. It's a legitimate, well-documented path, just not the beginner-friendly one this guide follows.",
              "The graphical installer checks your system before letting you continue — you'll need at least 3GB of RAM and 10GB of free disk space, and an internet connection (it's required, not optional, during install).",
              "64-bit ARM builds of both editions exist too, but this guide assumes typical Intel/AMD PC hardware.",
              "At the time of writing, the current stable release is NixOS 26.05 — NixOS uses a year.month version scheme and releases roughly twice a year.",
            ],
          },
        ],
      },
      {
        title: "Create a bootable USB",
        summary: "Turn a USB drive into something your computer can install NixOS from.",
        detail: [
          {
            type: "p",
            text: "You'll need a USB drive that's at least 8GB — back up anything on it first, since this process erases it completely. NixOS's own manual recommends balenaEtcher for this, the same tool used elsewhere on this site.",
          },
          {
            type: "checklist",
            items: [
              "Download balenaEtcher from balena.io/etcher and install it",
              'Open Etcher, click "Flash from file", and select the NixOS graphical ISO you downloaded',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it',
              'Click "Flash!" and wait (usually 5-15 minutes depending on the USB drive\'s speed)',
            ],
          },
          {
            type: "p",
            text: "When it finishes, Etcher will say the flash succeeded and safely eject the drive. Leave it plugged in — you'll boot from it in the next step.",
          },
        ],
      },
      {
        title: "Boot into the installer",
        summary:
          "Restart your computer and start up from the USB — NixOS boots to a live desktop and opens its graphical installer automatically.",
        detail: [
          {
            type: "checklist",
            items: [
              "Restart your computer with the USB still plugged in",
              "Press your boot-menu key during startup (see the list below for your computer's brand)",
              "Select your USB drive from the boot menu",
              "At the installer's own boot menu, leave the default option selected and press Enter (or just wait)",
            ],
          },
          {
            type: "list",
            items: [
              "Dell: F12",
              "HP: F9 or Esc",
              "Lenovo: F12 or the Novo button",
              "ASUS: F8 or Esc",
              "Acer: F12",
              "Mac: hold Option/Alt at startup",
            ],
          },
          {
            type: "p",
            text: "If you're not sure which key, watch closely during the very first second of startup — many computers briefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again.",
          },
          {
            type: "p",
            text: "If your computer has Secure Boot enabled in UEFI settings, disable it first — NixOS's install media isn't signed for Secure Boot, and the installer won't boot with it turned on.",
          },
          {
            type: "p",
            text: "From here, the system loads a live desktop (GNOME, by default) and the graphical NixOS installer opens on its own shortly after — this can take a minute or two, since it's loading a full desktop environment from the USB first. You don't need to click anything to launch it.",
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "On the installer's Partitioning screen, erase the disk and let it set things up automatically.",
        detail: [
          {
            type: "p",
            text: "This checklist covers a straightforward single-OS setup, where NixOS becomes the only operating system on the drive. On the Partitioning screen, the simplest option is \"Erase disk\", which wipes the selected drive and lays out partitions for you automatically (ext4 by default).",
          },
          {
            type: "p",
            text: "Important: this permanently erases everything on that drive. Back up anything you want to keep before continuing.",
          },
          {
            type: "checklist",
            items: [
              'On the "Partitioning" screen, select "Erase disk"',
              "Double-check the correct drive is selected at the top of the screen before continuing — this is the drive that gets wiped",
              'In the swap dropdown, select "Swap (with Hibernation)" unless you have a specific reason not to',
              "Optional: the installer also offers whole-disk encryption (LUKS) here — if you're not sure whether you need it, it's safe to leave unchecked for a first install",
            ],
          },
          {
            type: "p",
            text: "Dual-boot is possible on NixOS but involves partitioning carefully around your existing OS — a more advanced process not covered by this walkthrough.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Work through the rest of the installer — language, timezone, keyboard, your user account, and which desktop you want.",
        detail: [
          {
            type: "checklist",
            items: [
              "On the \"Welcome\" screen, choose your installer/system language — leaving it as American English makes it easier to search for error messages online later",
              "Choose your location on the map to set your timezone (the installer guesses based on your IP address, so double-check it)",
              "Choose your keyboard layout — the default model works fine for most desktop keyboards",
              'On the "Users" screen, enter your display name, login name, and password — this account gets full admin (sudo) access automatically, the same as most other distros on this site',
              "Optional: enable automatic login to the desktop on the same screen, if you want it",
            ],
          },
          {
            type: "p",
            text: 'Next, you\'ll pick a desktop environment. NixOS\'s installer offers a real choice here — GNOME, Plasma, Xfce, Pantheon, Cinnamon, MATE, Enlightenment, LXQt, and Budgie are all listed, plus a "No desktop" option for a bare system. GNOME is the default; if you\'re not sure which to pick, the installer itself suggests GNOME or Plasma as the two most popular, well-tested options — they just have quite different designs, so it comes down to preference.',
          },
          {
            type: "checklist",
            items: [
              "Select the desktop environment you want, then continue",
              "On the next screen, you can choose to allow unfree software (needed for some hardware drivers and codecs) — if you're unsure, it's fine to leave this off for now; it can be changed later in the config file",
              'Review your choices on the "Summary" screen, then click "Install"',
            ],
          },
          {
            type: "p",
            text: "The install itself takes roughly 15 minutes, depending on your desktop environment choice, internet speed, and disk speed. When it's done, remove the USB drive and reboot into your new system.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "Log in normally — but know that updating and installing software on NixOS doesn't work like it does anywhere else on this site.",
        detail: [
          {
            type: "p",
            text: "You'll land on a login screen matching the desktop you picked, and the account you created works exactly as you'd expect — full sudo access, normal password login. That part feels completely ordinary.",
          },
          {
            type: "p",
            text: "What's different is everything after that. There's no app-store-style update button and no apt/dnf/pacman-style \"install this one package\" command that sticks around on its own. The entire system is described in /etc/nixos/configuration.nix, and you change the system by editing that file, then telling NixOS to rebuild itself to match it.",
          },
          {
            type: "checklist",
            items: [
              "To update everything on the system to the newest available versions: sudo nixos-rebuild switch --upgrade",
              "To install a new application (for example, Firefox): open /etc/nixos/configuration.nix with sudo in a text editor, add it to the environment.systemPackages list, save, then run sudo nixos-rebuild switch to apply it",
              "To browse available packages and their exact config-file names, use search.nixos.org rather than guessing",
              "For NixOS's own built-in manual and full option reference at any time, run nixos-help",
            ],
          },
          {
            type: "p",
            text: "One genuinely nice side effect of this approach: every time you run nixos-rebuild, it creates a new numbered \"generation\" of your system rather than overwriting the old one, and older generations stay selectable from the boot menu. If a change breaks something, you can boot into the previous generation and you're back to normal — a safety net most other distros don't give you this easily.",
          },
          {
            type: "p",
            text: "You'll also likely run into \"flakes\" fairly quickly if you look up NixOS tutorials online — a newer, alternative way of managing configuration that a lot of the community has moved toward. It's optional, and this guide deliberately doesn't cover it; the configuration.nix approach above is the traditional, still fully supported starting point, and flakes are worth exploring once the basics feel comfortable.",
          },
          {
            type: "p",
            text: "That's the full install, start to finish. From here, the Learn section's lessons and the Search page pick up as usual — though given how different NixOS's day-to-day workflow is, expect to lean on the official manual and search.nixos.org more than you would on other distros.",
          },
        ],
      },
    ],
    related: [
      {
        href: "learn.html?topic=terminal-basics",
        label: "Next: what a terminal actually is →",
      },
    ],
  },
];
