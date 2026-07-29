const DISTROS = {
  mint: {
    name: 'Linux Mint',
    tagline: 'The reliable all-rounder',
    why: 'A familiar, Windows-like layout, a huge community for when you get stuck, and it just works out of the box without much tinkering.',
    downloadUrl: 'https://linuxmint.com/download.php',
    accent: '#3ecf8e',
  },
  popos: {
    name: 'Pop!_OS',
    tagline: 'Built for gaming and power users',
    why: 'Excellent Nvidia and Steam/Proton support out of the box, a clean modern design, and it stays out of your way once set up.',
    downloadUrl: 'https://pop.system76.com/',
    accent: '#48b9c7',
  },
  zorin: {
    name: 'Zorin OS',
    tagline: 'The gentlest landing pad from Windows or Mac',
    why: 'Its layout can be switched to look like Windows or macOS, which makes it the least disorienting first step if you\'re coming from either.',
    downloadUrl: 'https://zorin.com/os/download/',
    accent: '#16a3e0',
  },
  mx: {
    name: 'MX Linux',
    tagline: 'Lightweight and fast',
    why: 'It runs well on older or lower-spec hardware that struggles with heavier distros, without giving up a real desktop experience.',
    downloadUrl: 'https://mxlinux.org/download-links/',
    accent: '#d9a441',
  },
};

const QUESTIONS = [
  {
    id: 'usage',
    prompt: 'What will you mainly use this computer for?',
    options: [
      { label: 'General browsing, office work, everyday stuff', points: { mint: 2, zorin: 1 } },
      { label: 'Gaming', points: { popos: 3 } },
      { label: 'Programming or development', points: { popos: 1, mint: 1 } },
      { label: 'Not sure yet — just exploring', points: { mint: 2 } },
    ],
  },
  {
    id: 'comfort',
    prompt: 'How comfortable are you with computers generally?',
    options: [
      { label: 'I want it to just work — minimal tinkering', points: { mint: 2, zorin: 2 } },
      { label: "I don't mind learning some new things", points: { mint: 1, popos: 1 } },
      { label: 'I like having full control and customization', points: { popos: 1 } },
    ],
  },
  {
    id: 'hardware',
    prompt: "What's the computer you're installing on?",
    options: [
      { label: 'Modern — last ~5 years', points: { popos: 1, zorin: 1 } },
      { label: 'Older or lower-spec', points: { mx: 3 } },
    ],
  },
  {
    id: 'coming_from',
    prompt: 'Are you coming from Windows or Mac?',
    options: [
      { label: 'Windows', points: { zorin: 2, mint: 1 } },
      { label: 'Mac', points: { zorin: 2 } },
      { label: "Neither / doesn't matter", points: { mint: 1, popos: 1 } },
    ],
  },
];
