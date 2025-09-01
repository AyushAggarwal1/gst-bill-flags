"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function doLogout() {
      try {
        await fetch("/api/logout", { method: "POST" });
      } finally {
        router.replace("/login");
      }
    }
    doLogout();
  }, [router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-sm items-center">
      <div className="w-full rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-primary-600" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Signing you out…</p>
        </div>
      </div>
    </main>
  );
}


