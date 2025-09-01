"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? stored === "dark" : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 15a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75Zm9-5.25a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21Zm-15 0a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h3Zm13.086-6.836a.75.75 0 0 1 1.061 1.061l-1.06 1.06a.75.75 0 1 1-1.062-1.06l1.06-1.06Zm-12.02 12.02a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.062l-1.061-1.061a.75.75 0 0 1 0-1.06Zm12.02 0a.75.75 0 0 1 1.062 1.06l-1.061 1.061a.75.75 0 1 1-1.061-1.061l1.06-1.06Zm-12.02-12.02a.75.75 0 0 1 0 1.06L4.966 8.826a.75.75 0 0 1-1.06-1.06L4.966 6.705a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M17.293 15.293A8 8 0 0 1 8.707 6.707a8.001 8.001 0 1 0 8.586 8.586Z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}


