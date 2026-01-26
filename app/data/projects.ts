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
    title: "RedClient",
    description: "A Minecraft quality of life client mod for hunting and gameplay enhancements. Built with Java and creative development tools.",
    techStack: ["Java", "Minecraft Modding"],
    githubUrl: "https://github.com/ransudev/RedClient",
  },
  {
    id: 2,
    title: "GoPay",
    description: "A modern payment processing application built with TypeScript. Features a clean interface and secure transaction handling.",
    techStack: ["TypeScript", "React", "Payment API"],
    githubUrl: "https://github.com/ransudev/gopay",
  },
  {
    id: 3,
    title: "Computer Store Webapp",
    description: "A full-featured e-commerce web application for computer hardware and accessories. Built with modern web technologies.",
    techStack: ["TypeScript", "Next.js", "E-commerce"],
    githubUrl: "https://github.com/ransudev/Computer-Store-Webapp",
  },
  {
    id: 4,
    title: "Enrollment System",
    description: "A comprehensive enrollment management system built with Java and MySQL for handling student registrations and course enrollments.",
    techStack: ["Java", "MySQL", "JDBC"],
    githubUrl: "https://github.com/ransudev/enrollmentsystem",
  },
  {
    id: 5,
    title: "Fishmaster",
    description: "Enhanced Minecraft fishing mod with hand animations for a more immersive experience. Fork with custom improvements.",
    techStack: ["Java", "Minecraft Modding"],
    githubUrl: "https://github.com/ransudev/fishmaster",
  },
];
