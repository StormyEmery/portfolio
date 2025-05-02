export default [
  {
    id: "prize-kingdoms",
    title: "Prize Kingdoms",
    description: "A strategy-based mobile game where players build kingdoms, battle against other players, and win prizes! I was a full-stack engineer on this project and a lead on every feature I worked on.",
    image: "/images/pk_4x3.PNG",
    tech: ["Unity", "C#", ".NET", "MongoDB", "Sentry", "Firebase", "UniTask"],
    link: "/projects/prize-kingdoms",
    externalLinks: [
      { type: "ios", url: "https://apps.apple.com/us/app/prize-kingdoms/id1554511237" },
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.inkgames.prizekingdoms&hl=en_US" }
    ]
  },
  {
    id: "monopoly-slots",
    title: "MONOPOLY Slots",
    description: "Contributed to feature development and performance optimization for this popular mobile slot game.",
    details: "I started off doing feature work and eventually transitioned to working on/refactoring/architecting core game systems, integrating 3rd party SDKs, and performing major Unity version upgrades. My time was mostly spent on the client, but I also dabbled in the server side of things using PHP and Couchbase. Some of the features I worked on include: the FTUE (first time user experience), quests/tasks, team challenges, widgets, Message of the Day, and many more.",
    thumbnail: "/images/monopoly-slots.png",
    images: ["/images/ms_ftue_2.png", "/images/ms_tasks.png", "/images/ms_team_challenge.png"],
    videos: ["/videos/ms_block.mov"],
    tech: ["Unity", "C#", "Couchbase", "PHP", "AWS S3"],
    link: "/projects/monopoly-slots",
    externalLinks: [
      { type: "ios", url: "https://apps.apple.com/us/app/monopoly-slots-casino-go-spin/id1215145992" },
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.scientificgames.monopolyslots" }
    ]
  },
  {
    id: "auto-clicker",
    title: "Auto Clicker",
    description: "An auto clicker app for Windows, built with Python and Win32 API.",
    details: "This was a fun little project I made to help me playing the game Clicker Heroes. The auto-clicker I was using wanted to start charging for it, so I decided to make my own. It simulates mouse clicks on a given window by providing the window name, click speed, and the position, which you set by selecting a button on the GUI and then clicking where you want the click to be.",
    thumbnail: "/images/clicker.ico",
    images: ["/images/auto-clicker_gui.png"],
    videos: ["/videos/auto_clicker.mp4"],
    tech: ["Python", "Win32 API", "pynput", "ctypes", "Python Threading"],
    link: "/projects/auto-clicker",
    externalLinks: [
      { type: "github", url: "https://github.com/StormyEmery/auto-clicker/tree/master" }
    ]
  },
  {
    id: "static-site-generator",
    title: "Static Site Generator",
    description: "A simple static site generator built with Python.",
    details: "This is a simple static site generator I made while taking a course on Boot.dev. It takes a directory of markdown files and generates a static site with a given template using Python to convert the markdown into valid HTML.",
    thumbnail: "/images/static-site-gen.png",
    images: ["/images/markdown.png", "/images/parent-node.png", "/images/static-site.png"],
    videos: [],
    tech: ["Python", "Markdown", "HTML", "CSS"],
    link: "/projects/static-site-generator",
    externalLinks: [
      { type: "github", url: "https://github.com/StormyEmery/bootdev_static_site_generator" },
      { type: "website", url: "https://stormyemery.github.io/bootdev_static_site_generator/" }
    ]
  }
];