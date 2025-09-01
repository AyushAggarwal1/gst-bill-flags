"use client";
import useSWR from "swr";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import { Card, CardContent } from "@/src/components/ui/Card";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data: tenants, isLoading } = useSWR("/api/tenants", fetcher);
  const tenantsCount = Array.isArray(tenants) ? tenants.length : undefined;
  const FEATURE_COUNT = 9;
  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">GSTly Admin</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Manage tenants and feature flags for your GSTly portal.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="transition hover:translate-y-[-2px] hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/10 text-primary-700 dark:text-primary-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 22a9 9 0 1118 0" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Tenants</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">View tenants and users from gst-bill.</p>
                <div className="mt-2 text-xs text-gray-500">
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2"><span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-primary-600"/>Loading…</span>
                  ) : (
                    <span className="inline-flex items-center gap-2"><span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-700 dark:bg-gray-800 dark:text-gray-300">Total: {tenantsCount ?? 0}</span></span>
                  )}
                </div>
                <Link href="/tenants" className="inline-block mt-4">
                  <Button>Open</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="transition hover:translate-y-[-2px] hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/10 text-primary-700 dark:text-primary-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Features</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Enable/disable features per tenant.</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-700 dark:bg-gray-800 dark:text-gray-300">Available: {FEATURE_COUNT}</span>
                </div>
                <Link href="/features" className="inline-block mt-4">
                  <Button>Open</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

