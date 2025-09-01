import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };

const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, hasError, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "focus-ring w-full rounded-lg border bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:bg-gray-900",
        hasError ? "border-red-500" : "border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    />
  );
});

export default Input;


