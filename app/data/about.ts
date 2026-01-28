import { GraduationCap, MapPin, Code, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface InfoCard {
  title: string;
  value: string;
  icon: LucideIcon;
}

export const aboutText = `I'm a passionate student who turns ideas into reality through code. 
I specialize in building clean, efficient, and user-friendly applications. 
My approach combines technical skills with creativity, leveraging AI tools to enhance productivity and deliver exceptional results.`;

export const infoCards: InfoCard[] = [
  {
    title: "Education",
    value: "Computer Science Student", // Update with your actual education
    icon: GraduationCap,
  },
  {
    title: "Location",
    value: "Philippines", // Update with your location
    icon: MapPin,
  },
  {
    title: "Focus",
    value: "Full Stack Development",
    icon: Code,
  },
  {
    title: "Specialty",
    value: "AI-Assisted Development",
    icon: Sparkles,
  },
];
