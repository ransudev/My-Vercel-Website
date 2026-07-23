export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Repeatable",
    description: "A Windows macro recorder and player built in Rust, letting users record mouse and keyboard actions and replay them with adjustable speed, looping, global hotkeys, and both compact and expanded UI modes.",
    techStack: ["Rust", "Windows", "Macro Automation"],
    githubUrl: "https://github.com/ransudev/Repeatable",
  },
  {
    id: 2,
    title: "StewardshipHub",
    description: "An environmental learning platform built with Next.js and TypeScript, featuring an interactive waste-sorting game, rotating eco facts, and a community gallery for sharing sustainability stories.",
    techStack: ["Next.js", "TypeScript", "Interactive Learning"],
    githubUrl: "https://github.com/ransudev/StewardshipHub",
    liveUrl: "https://stewardship-hub-nine.vercel.app",
  },
  {
    id: 3,
    title: "JellyAddons",
    description: "A Kotlin and Java Fabric mod adding quality-of-life addons for Hypixel SkyBlock",
    techStack: ["Kotlin", "Java", "Fabric Modding"],
    githubUrl: "https://github.com/ransudev/JellyAddons",
  },
];
