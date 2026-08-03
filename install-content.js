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
          {
            type: "p",
            text: "Go to linuxmint.com/download.php . You'll see three editions - Cinnamon, MATE, and Xfce. If you're not sure which one, pick Cinnamon: it's the default, most polished, and what most guides (including this one) assume.",
          },
          {
            type: "p",
            text: "Click Cinnamon, then pick a mirror close to your location (any of them work - closer just means a faster download). The file that downloads is the ISO - a single file, usually 2-3GB, that contains the entire installer and operating system.",
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
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer), and you should back up anything on it first - this process erases it completely.",
          },
          {
            type: "p",
            text: "Download balenaEtcher (balena.io/etcher) - it's free and works on Windows, Mac, and Linux. Install it and open it.",
          },
          {
            type: "list",
            items: [
              'Click "Flash from file" and select the Mint ISO you downloaded.',
              'Click "Select target" and choose your USB drive - double-check you\'ve picked the right one, since this step erases it.',
              'Click "Flash!" and wait. It usually takes 5-15 minutes depending on the USB drive\'s speed.',
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
            type: "p",
            text: "With the USB still plugged in, restart your computer. As it powers back on, you need to hit your boot-menu key before Windows (or macOS) loads - this varies by manufacturer:",
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
            text: "From the boot menu, select your USB drive (it'll usually show the brand name of the drive, not \"Linux Mint\"). Your computer will boot into a live version of Linux Mint - you're now running it directly off the USB, nothing is installed yet.",
          },
          {
            type: "p",
            text: 'On the desktop that appears, look for an icon labeled "Install Linux Mint" and double-click it to begin.',
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
            text: 'During the installer, you\'ll reach a screen asking how to install. This checklist covers the full, single-OS install - where Linux Mint becomes the only operating system on the drive. Look for an option along the lines of "Erase disk and install Linux Mint."',
          },
          {
            type: "p",
            text: "Important: this step permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else (an external drive, cloud storage) before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot - a different process with its own separate guide, not covered by this walkthrough. If that's what you actually want, stop here rather than guessing at this screen.",
          },
          {
            type: "p",
            text: 'Once you\'ve selected "Erase disk and install Linux Mint" (or equivalent), click Continue.',
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account - then let it install.",
        detail: [
          {
            type: "list",
            items: [
              "Select your language and click Continue.",
              "Select your keyboard layout (the installer usually detects this correctly already) and click Continue.",
              "Confirm your timezone — it's usually auto-detected from your internet connection.",
              "Create your account: a name, a computer name, a username, and a password. Remember this password — it's what you'll use both to log in and for sudo afterward.",
              'Optionally check "Log in automatically" if this is a personal computer only you use, or leave it unchecked to require the password at every startup.',
            ],
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait; there's nothing else to configure during this part.",
          },
          {
            type: "p",
            text: "When it finishes, it'll prompt you to restart. Do so, and remove the USB drive when prompted (or as soon as the screen goes black during restart) — leaving it in can boot you back into the installer instead of your new system.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to do in the first few minutes after your new install starts up.",
        detail: [
          {
            type: "p",
            text: "Your computer will restart into Linux Mint itself for the first time — log in with the password you set in the previous step.",
          },
          {
            type: "p",
            text: "The first thing worth doing is checking for updates. Look for a shield icon in the bottom-right taskbar (it may show a small red mark) — that's the Update Manager. Open it and install everything it lists. This is normal and safe; it's the same kind of update prompt as any operating system.",
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
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the right Pop!_OS installer file for your graphics hardware.",
        detail: [
          {
            type: "p",
            text: "Go to pop.system76.com and click Download. Unlike most distros, Pop!_OS offers two different ISOs — pick the one that matches your graphics hardware, not just whichever is listed first.",
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
            type: "p",
            text: "The download is a single ISO file, typically 2-3GB. Don't extract it — it gets used as-is in the next step.",
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
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer), and you should back up anything on it first — this process erases it completely.",
          },
          {
            type: "p",
            text: "Download balenaEtcher (balena.io/etcher) — it's free and works on Windows, Mac, and Linux. Install it and open it.",
          },
          {
            type: "list",
            items: [
              'Click "Flash from file" and select the Pop!_OS ISO you downloaded.',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it.',
              'Click "Flash!" and wait. It usually takes 5-15 minutes depending on the USB drive\'s speed.',
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
            type: "p",
            text: "With the USB still plugged in, restart your computer. As it powers back on, you need to hit your boot-menu key before Windows (or macOS) loads — this varies by manufacturer:",
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
            text: 'Select your USB drive from the boot menu (it\'ll show the brand name of the drive, not "Pop!_OS"). Unlike some distros that boot to a live desktop first, Pop!_OS\'s USB boots straight into a "Try Demo" / "Install Pop!_OS" screen — click Install Pop!_OS to begin.',
          },
        ],
      },
      {
        title: "Choose how to install",
        summary:
          "Decide between a clean install and Pop!_OS's custom/advanced option — and consider disk encryption.",
        detail: [
          {
            type: "p",
            text: 'After selecting your language and keyboard layout, you\'ll reach "How would you like to install Pop!_OS?" This checklist covers Clean Install — where Pop!_OS becomes the only operating system on the drive, replacing anything currently there.',
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
            type: "list",
            items: [
              "Confirm the drive you're installing to (only relevant if you have more than one drive connected).",
              "Create your account: your name, a username, and a password. Remember this password — you'll use it to log in and for sudo afterward.",
            ],
          },
          {
            type: "p",
            text: "After confirming these, installation begins — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "p",
            text: "When it finishes, it'll prompt you to restart. Remove the USB drive when prompted or as soon as the screen goes black — leaving it in can boot you back into the installer instead of your new system.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary:
          "What to expect the first time Pop!_OS starts up, and how to check for updates.",
        detail: [
          {
            type: "p",
            text: "Log in with the password you just set. Pop!_OS opens a Welcome app on first login to help finish setting things up and highlight a few features, like COSMIC's keyboard-driven window tiling — worth clicking through once, but entirely skippable.",
          },
          {
            type: "p",
            text: "For updates, open COSMIC Store (Pop!_OS's current software center — look for it in the dock, or press Super and search for it). Click Updates in the left menu, then Check for updates and Update all. This is normal and safe, the same as any operating system checking for updates.",
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
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the Zorin OS installer file — Core is the right pick for most people.",
        detail: [
          {
            type: "p",
            text: "Go to zorin.com/os/download/. You'll see a few editions — Core, Lite, and Pro. Core is free, full-featured, and the right choice for most people; Lite is a lighter-weight free option for older or lower-spec hardware; Pro is a paid edition with extra layouts and pre-installed apps that isn't necessary to get a complete experience.",
          },
          {
            type: "p",
            text: "Click Download under Core (or Lite if your hardware is older) and choose the 64-bit version — nearly every computer made in the last decade needs this one, not 32-bit. The file that downloads is the ISO, typically 2-3GB.",
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
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer), and you should back up anything on it first — this process erases it completely.",
          },
          {
            type: "p",
            text: "Download balenaEtcher (balena.io/etcher) — it's free and works on Windows, Mac, and Linux. Install it and open it.",
          },
          {
            type: "list",
            items: [
              'Click "Flash from file" and select the Zorin OS ISO you downloaded.',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it.',
              'Click "Flash!" and wait. It usually takes 5-15 minutes depending on the USB drive\'s speed.',
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
            type: "p",
            text: "With the USB still plugged in, restart your computer. As it powers back on, you need to hit your boot-menu key before Windows (or macOS) loads — this varies by manufacturer:",
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
            text: 'Select your USB drive from the boot menu (it\'ll show the brand name of the drive, not "Zorin OS"). Your computer will boot into a live version of Zorin OS. On the desktop that appears, look for an icon labeled "Install Zorin OS" and double-click it to begin.',
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
            text: 'During the installer, you\'ll reach a screen asking how to install. This checklist covers the full, single-OS install — where Zorin OS becomes the only operating system on the drive. Look for an option along the lines of "Erase disk and install Zorin OS."',
          },
          {
            type: "p",
            text: "Important: this step permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
          {
            type: "p",
            text: 'Once you\'ve selected "Erase disk and install Zorin OS" (or equivalent), click Continue.',
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your language, keyboard, timezone, and account — then let it install.",
        detail: [
          {
            type: "list",
            items: [
              "Select your language and click Continue.",
              "Select your keyboard layout (the installer usually detects this correctly already) and click Continue.",
              "Confirm your timezone — it's usually auto-detected from your internet connection.",
              "Create your account: a name, a computer name, a username, and a password. Remember this password — you'll use it to log in and for sudo afterward.",
            ],
          },
          {
            type: "p",
            text: "After confirming these, the installer starts copying files — this typically takes 10-20 minutes. You can just wait.",
          },
          {
            type: "p",
            text: "When it finishes, it'll prompt you to restart. Remove the USB drive when prompted or as soon as the screen goes black — leaving it in can boot you back into the installer instead of your new system.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "Pick your layout, then check for updates.",
        detail: [
          {
            type: "p",
            text: "The first time you log in, Zorin OS Welcome opens automatically. This is where Zorin's signature feature lives — under Appearance, you can switch the entire desktop layout to look and behave like Windows, macOS, or a more traditional Linux layout. Pick whichever feels most familiar; you can change it again anytime later from the same app.",
          },
          {
            type: "p",
            text: "For updates, open Software Updater from the app menu (it may also prompt you automatically after a few minutes). Install everything it lists — this is normal and safe, the same as any operating system checking for updates.",
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
    summary: "Full install walkthrough, start to finish.",
    steps: [
      {
        title: "Download the ISO",
        summary:
          "Grab the MX Linux installer file — Xfce is the default and right choice for most people.",
        detail: [
          {
            type: "p",
            text: "Go to mxlinux.org/download-links/. You'll see a few editions — Xfce, KDE, and Fluxbox. Xfce is the flagship, default edition and the right choice for most people, especially on older or lower-spec hardware, which is exactly where MX Linux tends to shine.",
          },
          {
            type: "p",
            text: "Under the Xfce section, download the 64-bit (AMD64) ISO — nearly every computer made in the last decade needs this one. A 32-bit version exists too, but it's only relevant for genuinely old hardware.",
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
            text: "You'll need a USB drive that's at least 4GB (8GB+ is safer), and you should back up anything on it first — this process erases it completely.",
          },
          {
            type: "p",
            text: "Download balenaEtcher (balena.io/etcher) — it's free and works on Windows, Mac, and Linux. Install it and open it.",
          },
          {
            type: "list",
            items: [
              'Click "Flash from file" and select the MX Linux ISO you downloaded.',
              'Click "Select target" and choose your USB drive — double-check you\'ve picked the right one, since this step erases it.',
              'Click "Flash!" and wait. It usually takes 5-15 minutes depending on the USB drive\'s speed.',
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
            type: "p",
            text: "With the USB still plugged in, restart your computer. As it powers back on, you need to hit your boot-menu key before Windows (or macOS) loads — this varies by manufacturer:",
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
            text: 'Select your USB drive from the boot menu. MX Linux boots to a full live desktop, the same as it would look once installed — look for an icon labeled "Install MX Linux" on the desktop (or in the applications menu) and double-click it to open MX Linux\'s installer, called Minstall.',
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
            text: 'During Minstall, you\'ll reach a screen asking how to install. This checklist covers the full, single-OS install — where MX Linux becomes the only operating system on the drive. Look for an option along the lines of "Erase Disk."',
          },
          {
            type: "p",
            text: "Important: this step permanently erases everything currently on that drive. Make sure anything you want to keep is backed up somewhere else before continuing.",
          },
          {
            type: "p",
            text: "If you want to keep your existing operating system and choose between the two each time you start your computer, that's dual-boot — a different process with its own separate guide, not covered by this walkthrough.",
          },
        ],
      },
      {
        title: "Follow the installer prompts",
        summary:
          "Set your timezone and account — Minstall also offers an optional root account, which you can safely skip.",
        detail: [
          {
            type: "list",
            items: [
              "Confirm your timezone and keyboard layout.",
              "Create your user account: your name, a username, and a password.",
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
            type: "p",
            text: "When it finishes, it'll prompt you to restart. Remove the USB drive when prompted or as soon as the screen goes black — leaving it in can boot you back into the installer instead of your new system.",
          },
        ],
      },
      {
        title: "First boot and updates",
        summary: "What to expect on first login, and how to check for updates.",
        detail: [
          {
            type: "p",
            text: "Log in with your regular user password.",
          },
          {
            type: "p",
            text: "For updates, open the MX Update tool from the app menu (sometimes shown as a small icon in the taskbar). Install everything it lists — this is normal and safe, the same as any operating system checking for updates.",
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
