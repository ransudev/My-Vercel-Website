import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  icon: Icon,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-white" size={24} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
