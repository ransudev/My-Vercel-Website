import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ransudev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ransu", // Update with your actual LinkedIn URL
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ransu", // Update with your actual Twitter URL
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:ransu.email@gmail.com",
    icon: Mail,
  },
];

export const contactInfo = {
  email: "ransu.email@gmail.com",
  discord: "ransuog_",
};
