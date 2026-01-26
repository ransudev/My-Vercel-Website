import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function SocialLink({
  href,
  icon: Icon,
  label,
  showLabel = false,
  size = "md",
}: SocialLinkProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`${sizes[size]} inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/25`}
    >
      <Icon size={iconSizes[size]} />
      {showLabel && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}
