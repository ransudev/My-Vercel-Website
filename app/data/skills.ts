import { Code, Database, Terminal, Sparkles, Layout, Server } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
    ],
  },
  {
    category: "Tools & Others",
    icon: Terminal,
    skills: [
      { name: "Git" },
      { name: "MySQL" },
      { name: "VS Code" },
    ],
  },
  {
    category: "Special Skills",
    icon: Sparkles,
    skills: [
      { name: "AI Prompting" },
      { name: "Problem Solving" },
      { name: "Quick Learning" },
    ],
  },
];
