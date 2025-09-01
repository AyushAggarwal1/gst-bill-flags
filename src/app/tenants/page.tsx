"use client";
import useSWR from "swr";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Card, CardHeader, CardContent } from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { useToast } from "@/src/components/ui/Toast";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TenantsPage() {
  const { data, error, isLoading } = useSWR("/api/tenants", fetcher);
  const { show } = useToast();
  const [query, setQuery] = useState("");
  const list: any[] = Array.isArray(data) ? data : [];
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const filtered = useMemo(() => {
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter((t) => String(t.name).toLowerCase().includes(q) || String(t.id).toLowerCase().includes(q));
  }, [list, query]);

  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Tenants</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Select a tenant to manage users and features.</p>
      </div>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">All tenants in your GSTly workspace.</div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-600 dark:text-gray-400">Total: {list.length}</div>
            <div className="w-56">
              <Input placeholder="Search by name or ID" value={query} onChange={(e)=>setQuery(e.target.value)} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-lg border p-4 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-40 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-8 w-28 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
                  </div>
                  <div className="mt-3 h-4 w-56 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
                </div>
              ))}
            </div>
          )}
          {error && (
            <p className="px-1 py-2 text-sm text-red-600">Failed to load tenants.</p>
          )}
          {Array.isArray(data) && list.length === 0 && (
            <p className="px-1 py-2 text-sm text-gray-600 dark:text-gray-400">No tenants found.</p>
          )}
          <div className="space-y-3">
            {filtered.map((t: any) => (
              <div key={t.id} className="rounded-lg border p-4 dark:border-gray-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={expanded[t.id] ? "Collapse users" : "Expand users"}
                        className="focus-ring inline-flex h-6 w-6 items-center justify-center rounded border text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                        onClick={() => setExpanded((s) => ({ ...s, [t.id]: !s[t.id] }))}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" className={`${expanded[t.id] ? '' : ''}`}/>
                        </svg>
                      </button>
                      <span className="font-medium">{t.name}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <span>{t.id}</span>
                      <button
                        type="button"
                        onClick={async ()=>{ await navigator.clipboard.writeText(String(t.id)); show({ title: "Copied", description: "Tenant ID copied", variant: "success" }); }}
                        className="focus-ring inline-flex h-7 items-center rounded border px-2 text-xs text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                      >
                        Copy ID
                      </button>
                    </div>
                  </div>
                  <div>
                    <Link className="focus-ring inline-flex px-3 py-1.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700" href={`/features?tenantId=${t.id}`}>Features</Link>
                  </div>
                </div>
                {expanded[t.id] && (
                  <div className="mt-3">
                    <TenantUsers tenantId={t.id} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

function TenantUsers({ tenantId }: { tenantId: string }) {
  const { data, error, isLoading } = useSWR(`/api/tenants/${tenantId}/users`, fetcher);
  if (isLoading) {
    return (
      <ul className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="rounded border p-3 dark:border-gray-800">
            <div className="h-4 w-48 animate-pulse rounded bg-gray-100 dark:bg-gray-800 mb-2" />
            <div className="h-3 w-64 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
          </li>
        ))}
      </ul>
    );
  }
  if (error) return <p className="text-sm text-red-600">Failed to load users.</p>;
  if (Array.isArray(data) && data.length === 0) return <p className="text-sm text-gray-600 dark:text-gray-400">No users found for this tenant.</p>;
  return (
    <ul className="space-y-2">
      {Array.isArray(data) && data.map((u: any) => {
        const label = u.name || u.email;
        const initials = String(label || "?").split(" ").map((s: string) => s[0]).slice(0,2).join("").toUpperCase();
        return (
          <li key={u.id} className="flex items-center justify-between rounded border p-3 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600/10 text-xs font-semibold text-primary-700 dark:text-primary-300">{initials || "?"}</div>
              <div>
                <div className="font-medium">{label}</div>
                <div className="text-xs text-gray-500">{u.email} · {u.id}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

