import * as React from "react";
import { cn } from "@/lib/utils"; // optional helper for merging Tailwind classes

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants: Record<typeof variant, string> = {
    default: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
