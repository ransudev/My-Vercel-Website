interface TechBadgeProps {
  label: string;
  variant?: "default" | "outline";
}

export default function TechBadge({ label, variant = "default" }: TechBadgeProps) {
  const variants = {
    default:
      "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
    outline:
      "border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
