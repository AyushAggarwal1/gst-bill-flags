import { ButtonHTMLAttributes } from "react";
import { cn } from "@/src/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export default function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  const base = "focus-ring inline-flex items-center justify-center rounded-lg font-medium transition disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "border text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800",
    ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  } as const;
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
  } as const;
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}


