import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  iconPosition = "left",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 text-sm md:text-base";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 hover:-translate-y-0.5",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
