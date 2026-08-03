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
          { type: "p", text: "If you're not sure which key, watch closely during the very first second of startup - many computersbriefly flash a message like \"Press F12 for boot menu\" before it's covered by the manufacturer's logo. If you miss it, just restart and try again." }
          { type: "p", text: "From the the boot menu,, select your USB drive (it'll usually show the brand name of the drive, not \"Linux Mint\"). Your computer will boot into a live version of Linux Mint - you're now running it directly off the USB, nothing is installed yet." },
          { type: "p", text: "On the desktop that appears, look for an icon labeled \"Install Linux Mint\" and double-click it to begin." },
        ],
      },


          
