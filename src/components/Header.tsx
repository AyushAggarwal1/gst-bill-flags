"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/logout";
  const links = [
    { href: "/", label: "Home" },
    { href: "/tenants", label: "Tenants" },
    { href: "/features", label: "Features" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-primary-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 4v14l4-2 4 2 4-2V4H6z" fill="white"/>
              <path d="M10 7h6v2h-6z" fill="#fbbf24"/>
            </svg>
          </div>
          <span className="font-semibold">GSTly Admin</span>
        </div>
        {!isAuthPage && (
          <nav className="flex items-center gap-1 text-sm">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "focus-ring inline-flex items-center rounded-lg px-3 py-2",
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/logout"
              className="focus-ring inline-flex items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Logout
            </Link>
            <a
              href="https://gstly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GSTly Portal in a new tab"
              title="Go to portal"
              className="focus-ring group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-3 py-2 text-white shadow-sm transition hover:shadow-md hover:from-primary-600 hover:to-primary-600"
            >
              <span>Go to GSTly</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden
              >
                <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M21 3l-9 9" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 7v12h12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </nav>
        )}
        {isAuthPage && (
          <div className="flex items-center gap-2">
            <a
              href="https://gstly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GSTly Portal in a new tab"
              title="Go to portal"
              className="focus-ring group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-3 py-2 text-white shadow-sm transition hover:shadow-md hover:from-primary-600 hover:to-primary-600"
            >
              <span>Go to GSTly</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden
              >
                <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M21 3l-9 9" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 7v12h12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}


