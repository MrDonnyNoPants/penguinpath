const TOPICS = [
    {
        slug: 'terminal-basics',
        title: 'what a terminal actually is',
        category: 'Getting Oriented',
        summary: 'The black window with text everyone warns you about - demystified.',
        path0rder: 1,
        body: [
            { type: 'p', text: "A terminal is just a text-based way to talk to your computer - you type a command, press Enter, and it runs immediately, instead of clicking through menus and icons. That's it. It's not a hacker-movie prop, and using one doesn't mean you're doing anything advanced or risky by itself."},
            { type: 'p', text: "Every operating system has one under the hood - Linux just puts it in front and center more often, because a lot of software (including package managers like apt, covered in the next lesson) is easiest to install and troubleshoot through it. You'll open one for lass than you'd expect once your system is set up."},
            { type: 'list', items: [
                "A prompt, usually ending in $, waiting for you to type something.",
                "Whatever you type, shown as you type it (unlike a password field).",
                "The output of your command printed right below it, then a new prompt.",
            ] },
            { type: 'p', text: "Two habits that trip up almost everyone at first: paste with Ctrl+Shift+V instead of plain Ctrl+V (which can do something else in a terminal), and remember that spelling and case matter exactly - Sudo and sudo are not the same command, and a typo just means \"command not found,\" not a broken computer."},
            { type: 'p', text: "You can't break your computer just by typing a command and pressing Enter. The commands you'll actually be told to run in this guide are safe, common, and used by millions of people daily. The next lesson covers the part that looks scariest: typing your password with nothing showing on screen."},
        ],
        related: [],
    },
];