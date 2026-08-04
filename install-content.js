const INSTALL_GUIDES = [
  {
    slug: "linux-mint",
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
            text: "Pop!_OS offers two different ISOs — pick the one that matches your graphics hardware, not just whichever is listed first.",
          },
          {
            type: "list",
            items: [
              "NVIDIA — choose this if your computer has an NVIDIA graphics card (common on gaming laptops and desktops with a dedicated GPU). This version comes with NVIDIA's drivers pre-loaded, which is exactly why Pop!_OS is a common recommendation for Nvidia/gaming setups.",
              "Intel/AMD — choose this for integrated Intel graphics, AMD graphics, or if you're just not sure and your machine doesn't have a dedicated NVIDIA card.",
            ],
          },
          {
            type: "p",
            text: "Not sure which graphics card you have? On Windows, right-click the Start button → Device Manager → Display adapters will tell you. When in doubt and you don't see NVIDIA listed anywhere, use the Intel/AMD ISO.",
          },
          {
            type: "checklist",
            items: [
              "Go to pop.system76.com",
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
            text: "Next you'll be asked whether to encrypt your drive. Encryption protects your files if the laptop is ever lost or stolen, at a small performance cost. If you say yes, Pop!_OS generates a recovery key — write it down or save it somewhere other than this computer, since losing both your password and this key means losing access to your files permanently. If you're unsure, it's safe to skip encryption for a first install.",
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
            text: "Zorin OS has a few editions — Core, Lite, and Pro. Core is free, full-featured, and the right choice for most people; Lite is a lighter-weight free option for older or lower-spec hardware; Pro is a paid edition with extra layouts and pre-installed apps that isn't necessary to get a complete experience.",
          },
          {
            type: "checklist",
            items: [
              "Go to zorin.com/os/download/",
              "Click Download under Core (or Lite if your hardware is older)",
              "Choose the 64-bit version — nearly every computer made in the last decade needs this one, not 32-bit",
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
            type: "p",
            text: "A 32-bit version exists too, but it's only relevant for genuinely old hardware.",
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
              "Go to getfedora.org/en/workstation/download/",
              "Click Download — the file that comes down is the ISO (typically 2GB)",
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
            text: "Fedora's installer (called Anaconda) will ask you to choose an installation destination. This checklist covers the full, single-OS install — where Fedora becomes the only operating system on the drive.",
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
        summary: "Set your language, timezone, and account — then let it install.",
        detail: [
          {
            type: "checklist",
            items: [
              "Select your language",
              "Confirm your timezone and keyboard layout",
              "Create your account: your full name, a username, and a password",
            ],
          },
          {
            type: "p",
            text: "Remember your password — it's what you'll use both to log in and for sudo afterward.",
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
              "Open Software (GNOME Software) and check the Updates tab, then install everything it lists",
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
              "Click Download — the file that comes down is the ISO (typically 3-4GB)",
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
              "Click Download Now — the file that comes down is the ISO (typically 2-3GB)",
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
              "Click the current release's download link — the file that comes down is the ISO (typically 1.5-2GB)",
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
];
