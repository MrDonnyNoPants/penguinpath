const TOPICS = [
  {
    slug: "terminal-basics",
    title: "what a terminal actually is",
    category: "Getting Oriented",
    summary:
      "The black window with text everyone warns you about - demystified.",
    pathOrder: 1,
    body: [
      {
        type: "p",
        text: "A terminal is just a text-based way to talk to your computer - you type a command, press Enter, and it runs immediately, instead of clicking through menus and icons. That's it. It's not a hacker-movie prop, and using one doesn't mean you're doing anything advanced or risky by itself.",
      },
      {
        type: "p",
        text: "Every operating system has one under the hood - Linux just puts it in front and center more often, because a lot of software (including package managers like apt, covered in the next lesson) is easiest to install and troubleshoot through it. You'll open one for lass than you'd expect once your system is set up.",
      },
      {
        type: "list",
        items: [
          "A prompt, usually ending in $, waiting for you to type something.",
          "Whatever you type, shown as you type it (unlike a password field).",
          "The output of your command printed right below it, then a new prompt.",
        ],
      },
      {
        type: "p",
        text: 'Two habits that trip up almost everyone at first: paste with Ctrl+Shift+V instead of plain Ctrl+V (which can do something else in a terminal), and remember that spelling and case matter exactly - Sudo and sudo are not the same command, and a typo just means "command not found," not a broken computer.',
      },
      {
        type: "p",
        text: "You can't break your computer just by typing a command and pressing Enter. The commands you'll actually be told to run in this guide are safe, common, and used by millions of people daily. The next lesson covers the part that looks scariest: typing your password with nothing showing on screen.",
      },
    ],
    related: [],
  },
  {
    slug: "sudo-basics",
    title: "Why sudo asks for your password (and why nothing shows)",
    category: "Getting oriented",
    summary: "The one part of the terminal that looks the scariest, explained.",
    pathOrder: 2,
    body: [
      {
        type: "p",
        text: 'sudo stands for "superuser do" — it means "run this one command with full administrator permissions." Some actions (installing software, changing system settings) can affect the whole computer, not just your user account, so Linux asks you to explicitly confirm you mean it, the same way Windows shows a UAC prompt or Mac asks for your password to install something.',
      },
      {
        type: "p",
        text: "When a command starts with sudo, you'll be asked for your password — the same one you log in with, not a separate admin password. Type it and press Enter. Nothing will appear on screen while you type, not even dots or asterisks. That's not a bug — it's a deliberate security choice so nobody looking over your shoulder (or reading a screen recording) can even see how many characters your password has.",
      },
      {
        type: "list",
        items: [
          "You typed it correctly and it's working if the command just... continues, printing new output below.",
          'If you got the password wrong, it\'ll say "Sorry, try again" and let you retype it — no penalty, no lockout on the first couple tries.',
          "Once you've entered it successfully, most systems won't ask again for a few minutes, so a string of sudo commands in a row usually only prompts you once.",
        ],
      },
      {
        type: "p",
        text: "One real rule worth keeping, not just a scare tactic: only run sudo in front of a command someone actually explained to you, from a source you trust (like this guide). sudo commands can change or delete things system-wide, so it's the one place \"copy, paste, understand what it does first\" genuinely matters — not because it's fragile, but because it does exactly what you tell it, with full permission to do it.",
      },
      {
        type: "p",
        text: "That's the whole trick. The next lesson covers the actual four ways apps get installed on Linux — apt, Flatpak, Snap, and AppImage — and what genuinely differs between them.",
      },
    ],
    related: [],
  },
  {
    slug: "package-managers-explained",
    title: "apt vs Flatpak vs Snap vs AppImage — what actually differs",
    category: "Getting oriented",
    summary:
      "Four ways to install the same app, and when each one actually matters.",
    pathOrder: 3,
    body: [
      {
        type: "p",
        text: "Linux doesn't have one single \"app store\" — it has several, and unlike Windows or Mac, you'll actually see all of them from day one. That sounds like a downside, but each one solves a different problem, and PenguinPath's search lets you compare them side by side for the same app.",
      },
      {
        type: "p",
        text: "apt is your distro's own repository — it's Debian's original format, and it's what Ubuntu, Mint, Pop!_OS, Zorin, and MX all use under the hood. Apps here are vetted by your distro's maintainers and share libraries with the rest of your system, which is efficient but means you're on their release schedule, not the developer's — versions can lag a bit behind the newest release.",
      },
      {
        type: "p",
        text: "Flatpak runs an app in a sandbox with its own bundled dependencies, usually distributed straight from the developer via Flathub. You typically get the newest version available, at the cost of more disk space, since each Flatpak app carries its own copies of shared libraries instead of reusing your system's.",
      },
      {
        type: "p",
        text: "Snap is the same sandboxed idea as Flatpak, built and backed by Canonical (Ubuntu's company) through the Snap Store. It auto-updates in the background by default, which is convenient, but gives you less manual control over exactly when updates happen.",
      },
      {
        type: "p",
        text: "AppImage is different from all three: it's a single file you download and just run directly — no install step, no package manager involved at all. PenguinPath's search doesn't cover AppImage, because unlike the other three, there's no reliable, actively maintained way to search AppImages from the command line — we won't pretend otherwise.",
      },
      {
        type: "list",
        items: [
          "Prefer apt when it's available and you don't need the newest version — it's the most tightly integrated with your system.",
          "Prefer Flatpak or Snap when you want the latest release, or the app isn't packaged for your distro at all.",
          "Reach for AppImage only when an app doesn't offer any of the other three — it works everywhere, but you're responsible for updating it yourself.",
        ],
      },
      {
        type: "p",
        text: "You don't have to memorize any of this before you start — when PenguinPath's search shows an app available from more than one source, this is the lesson to come back to. The next lesson is about the distro decision itself, and how much less it matters than it feels like right now.",
      },
    ],
    related: [],
  },
  {
    slug: "picking-a-distro",
    title: "Picking a distro (and why it matters less than you think)",
    category: "Getting oriented",
    summary:
      'What a "distro" actually is, and how to stop overthinking the choice.',
    pathOrder: 4,
    body: [
      {
        type: "p",
        text: 'A "distro" (short for distribution) is just a full package: the Linux kernel at the core, plus a desktop environment (how it looks and feels), a package manager (how you install apps), and a set of default choices and support, all put together and maintained by a specific team or company.',
      },
      {
        type: "p",
        text: "Here's the part that removes most of the pressure: most beginner-friendly distros — Linux Mint, Pop!_OS, Zorin OS, MX Linux — are all built on the same underlying base (Ubuntu or Debian), so the apps, the terminal commands, and the overall experience are far more similar between them than different. You're mostly choosing a look, a set of defaults, and who tuned it for what kind of hardware — not a fundamentally different operating system each time.",
      },
      {
        type: "p",
        text: 'It\'s also not a lifetime commitment. Switching distros later is realistic and common — plenty of people run two or three over the years as their needs change. The goal on your first pick isn\'t "the perfect one," it\'s "a good one to actually get started with."',
      },
      {
        type: "p",
        text: "PenguinPath's quiz asks four quick questions — what you'll use the computer for, how much tinkering you want to do, your hardware, and what you're coming from — and gives you a specific recommendation with why, plus the actual install steps.",
      },
    ],
    related: [{ href: "quiz.html", label: "Take the distro quiz →" }],
  },
  {
    slug: "installing-your-first-app",
    title: "Installing your first app",
    category: "Getting oriented",
    summary: "Turning everything so far into your first real install.",
    pathOrder: 5,
    body: [
      {
        type: "p",
        text: "This lesson ties everything together: terminal basics, sudo, and the differences between apt, Flatpak, and Snap, applied to actually installing something.",
      },
      {
        type: "list",
        items: [
          "Open PenguinPath's search and look up the app you want.",
          "Click a result to expand it. If it's available from more than one source, pick one using the source buttons — apt if you're not sure, otherwise whichever fits what you read in the earlier lesson.",
          "Click Copy next to the install command.",
          'Open a terminal (most distros: search for "Terminal" in your app menu, or press Ctrl+Alt+T).',
          "Paste with Ctrl+Shift+V (not plain Ctrl+V — see the terminal basics lesson) and press Enter.",
        ],
      },
      {
        type: "p",
        text: 'If the command starts with sudo, you\'ll be prompted for your password — type it (nothing will show) and press Enter, exactly as covered in the previous lesson. You may also see a prompt like "Do you want to continue? [Y/n]" — type y and press Enter to confirm.',
      },
      {
        type: "p",
        text: "When it finishes, the terminal prompt returns and you can type in it again — that's your sign it's done. The app should now show up in your application menu/launcher like anything else you've installed; you generally don't need to keep using the terminal to open it afterward.",
      },
      {
        type: "p",
        text: "If something goes wrong — \"command not found,\" a permissions error, anything unexpected — it's genuinely not something you broke. Copy the exact error text; it's almost always a quick, well-documented fix. You've now got the full loop: find an app, understand your options, install it, and know it worked.",
      },
    ],
    related: [{ href: "search.html", label: "Search for an app →" }],
  },
  {
    slug: "desktop-environments",
    title: "Desktop environments explained (GNOME, KDE, Cinnamon, XFCE)",
    category: "Reference",
    summary:
      "Why the same distro can look completely different depending on what you pick.",
    pathOrder: null,
    body: [
      {
        type: "p",
        text: "A desktop environment is everything you actually see and click: the taskbar or dock, the app menu, the file manager, window styling, settings app — basically your computer's whole visual identity and workflow. It sits on top of the Linux kernel and is separate from which distro or package manager you're using, which is why two different distros can look nearly identical, and one distro can look totally different depending on which desktop environment you installed.",
      },
      {
        type: "p",
        text: "GNOME is the default on many major distros (including plain Ubuntu). It's clean, minimal, and trades some customization for a more guided, opinionated workflow — closer in spirit to macOS in how deliberately simplified it is.",
      },
      {
        type: "p",
        text: "KDE Plasma is the most customizable of the mainstream options — nearly everything about how it looks and behaves can be changed through its settings, no config files required. It tends to feel the most immediately familiar to someone coming from Windows.",
      },
      {
        type: "p",
        text: "Cinnamon (Linux Mint's default) is built specifically to feel familiar to Windows users: a taskbar, a start-menu-style app launcher, and traditional overlapping windows, with a minimal learning curve.",
      },
      {
        type: "p",
        text: "XFCE is the lightest of the four, using the least memory and CPU by design. It looks more dated out of the box, but it's the best choice for older or lower-spec hardware, which is why MX Linux defaults to it.",
      },
      {
        type: "p",
        text: "None of these are permanent — most distros let you install additional desktop environments alongside the default and pick which one to log into at the login screen. If you're not sure, whichever your chosen distro ships with by default is a perfectly good place to start.",
      },
    ],
    related: [
      {
        href: "learn.html?topic=picking-a-distro",
        label: "Picking a distro →",
      },
    ],
  },
  {
    slug: "dual-boot-vs-vm",
    title: "Dual-boot vs virtual machine vs full install",
    category: "Reference",
    summary:
      "Three different ways to try Linux, each trading off risk, speed, and commitment differently.",
    pathOrder: null,
    body: [
      {
        type: "p",
        text: "There's more than one way to get Linux running, and they trade off risk, performance, and commitment very differently. Here's the honest breakdown.",
      },
      {
        type: "p",
        text: "Full install means Linux becomes the only operating system on the machine — your existing OS is erased. Best performance, since Linux has the whole machine to itself, but it's the most committed option and the hardest to undo.",
      },
      {
        type: "p",
        text: "Dual-boot means Linux and your existing OS (Windows or macOS) live side by side on the same computer, and you choose which one to start up into each time you turn it on. Full native performance for whichever OS you're in, but it does require resizing your existing drive to make room, which carries some real (if well-documented) risk to your existing data if a step is skipped.",
      },
      {
        type: "p",
        text: "A virtual machine runs Linux as a program inside your current OS — no partitioning, no risk to your existing setup, and you can delete it entirely with zero trace. The tradeoff is performance: it's sharing your computer's resources with your main OS running underneath it, so it's noticeably slower and not ideal for anything demanding like gaming.",
      },
      {
        type: "list",
        items: [
          "New to Linux and just want to look around risk-free? Start with a virtual machine (VirtualBox or GNOME Boxes are common free options).",
          "Ready to actually use it day-to-day but not ready to commit? Dual-boot.",
          "Already decided, and want the full experience with best performance? Full install.",
        ],
      },
      {
        type: "p",
        text: "Whichever you pick, back up anything irreplaceable first — not because any of these are especially likely to fail, but because that's just good practice before touching disk partitions at all.",
      },
    ],
    related: [],
  },
  {
    slug: "first-week-gotchas",
    title: "Common first-week gotchas",
    category: "Reference",
    summary:
      "The handful of things that trip up almost everyone early on — and why none of them mean you broke something.",
    pathOrder: null,
    body: [
      {
        type: "p",
        text: "A short list of the most common early hiccups, so you recognize them as normal instead of alarming.",
      },
      {
        type: "list",
        items: [
          '"Command not found" — almost always a typo, a missing space, or the program genuinely isn\'t installed yet. Not a sign anything is broken.',
          'Wi-Fi not working right after install — most common on laptops with certain wireless chipsets that need an extra driver; usually fixable via your distro\'s "Additional Drivers" or "Driver Manager" tool, or a wired connection while you sort it out.',
          "\"Permission denied\" — you tried to do something that needs sudo and didn't use it, or you're trying to edit a file you don't own.",
          "A password you type in the terminal shows nothing at all — expected behavior for sudo, not a stuck or broken terminal.",
          "An app installed via apt looks out of date compared to what you expected — check whether it's available via Flatpak or Snap instead for a newer version.",
        ],
      },
      {
        type: "p",
        text: "The general pattern: Linux tends to surface problems with clear, specific error messages rather than hiding them, which can feel alarming coming from operating systems that fail more silently. Copy the exact error text into a search engine — because these errors are common and public, you'll almost always find the exact fix within the first couple of results.",
      },
    ],
    related: [
      {
        href: "learn.html?topic=sudo-basics",
        label: "Why sudo asks for your password →",
      },
    ],
  },
  {
    slug: "glossary",
    title: "Glossary of terms",
    category: "Reference",
    summary:
      "Quick definitions for words you'll see thrown around without explanation.",
    pathOrder: null,
    body: [
      {
        type: "p",
        text: "Short, plain-English definitions for terms you'll run into elsewhere on this site (and around the Linux world generally) without much explanation.",
      },
      {
        type: "list",
        items: [
          'Kernel — the core program that talks directly to your computer\'s hardware; "Linux" technically refers to just this piece, with everything else (desktop, apps) built around it.',
          "Distro (distribution) — a complete, ready-to-install package built around the Linux kernel: desktop environment, package manager, default apps, and support, all bundled by a specific team.",
          'Repository ("repo") — a server that stores installable packages for a package manager like apt to pull from.',
          "Root — the built-in administrator account with unrestricted access to the whole system; sudo temporarily borrows root's permissions for one command instead of you being logged in as root all the time.",
          "PPA (Personal Package Archive) — an unofficial, third-party apt repository, usually run by an individual developer or team, offering software or versions not in the default Ubuntu/Debian repos. Convenient, but less vetted than the official repos, so only add ones from sources you trust.",
          "Dependency — a piece of software one app needs installed in order to run; package managers resolve and install these automatically so you don't have to track them down by hand.",
          'GUI — "graphical user interface," i.e. anything you interact with by clicking, as opposed to typing commands.',
          'CLI — "command-line interface," i.e. the terminal itself.',
        ],
      },
      {
        type: "p",
        text: "This list will grow as more lessons get added — if you hit a term anywhere on this site that isn't here yet, that's a gap worth filling.",
      },
    ],
    related: [],
  },
  {
    slug: "will-i-break-something",
    title: "Will I break something?",
    category: "Reference",
    summary:
      "The honest, reassuring answer to the question everyone new to Linux is quietly asking.",
    pathOrder: null,
    body: [
      {
        type: "p",
        text: "Short answer: it's much harder than it feels like right now, and the things that actually do go wrong are almost always fixable.",
      },
      {
        type: "p",
        text: "The commands you'll actually be told to run — through this guide, official documentation, or well-known community sites — are run by thousands of other people daily without incident. Software installation, in particular, is about as safe an action as exists on Linux: apt, Flatpak, and Snap all install into contained, well-defined locations, and uninstalling is just as clean.",
      },
      {
        type: "p",
        text: "The real risk area isn't typing commands you were told to run — it's copying commands from random, unfamiliar sources without understanding what they do, especially anything involving sudo, or manually editing disk partitions without a backup. Both of those are avoidable simply by knowing what a command does before you run it, which is exactly what the earlier lessons are for.",
      },
      {
        type: "p",
        text: "And even in a genuine worst case — a setting you can't undo, a boot that won't start — full reinstalls are fast (typically under 30 minutes) and your personal files, if kept on a separate partition or backed up beforehand, aren't touched by any of this. There's very little here that's actually permanent.",
      },
      {
        type: "p",
        text: "The instinct to move carefully is a good one, not something to talk yourself out of. Just don't let it stop you from actually trying things — that caution, combined with the lessons in this guide, is exactly the right amount of care to have.",
      },
    ],
    related: [],
  },
];
