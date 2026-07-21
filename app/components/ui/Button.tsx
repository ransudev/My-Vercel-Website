import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconSize?: number;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  state?: "default" | "loading" | "error" | "success";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  iconSize = 20,
  iconPosition = "left",
  className = "",
  type = "button",
  disabled = false,
  state = "default",
}: ButtonProps) {
  const variants = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
  };

  const styles = `btn ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={iconSize} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={iconSize} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        data-state={state}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled} data-state={state}>
      {content}
    </button>
  );
}
