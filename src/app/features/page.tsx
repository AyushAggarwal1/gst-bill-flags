"use client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { Card, CardHeader, CardContent } from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { useToast } from "@/src/components/ui/Toast";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const ALL_FEATURES = [
  "DASHBOARD",
  "CUSTOMERS",
  "ITEMS",
  "BILLS",
  "TEMPLATES",
  "USER_MANAGEMENT",
  "API_DOCS",
  "GST_SEARCH",
  "HSN_SEARCH",
] as const;

function FeaturesPageContent() {
  const { show } = useToast();
  const sp = useSearchParams();
  const initialTenantId = sp.get("tenantId") ?? undefined;
  const [tenantId, setTenantId] = useState<string | undefined>(initialTenantId);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "enabled" | "disabled">("all");
  const { data: tenants } = useSWR("/api/tenants", fetcher);
  const { data: flags, mutate } = useSWR(
    () => (tenantId ? `/api/tenants/${tenantId}/features` : null),
    fetcher
  );

  useEffect(() => {
    if (!tenantId && Array.isArray(tenants) && tenants.length) {
      setTenantId(tenants[0].id);
    }
  }, [tenantId, tenants]);

  const flagMap = useMemo(() => {
    const map = new Map<string, boolean>();
    if (Array.isArray(flags)) {
      for (const f of flags) map.set(f.feature, !!f.enabled);
    }
    return map;
  }, [flags]);

  async function toggle(feature: string, enabled: boolean) {
    if (!tenantId) return;
    await fetch(`/api/tenants/${tenantId}/features`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feature, enabled }),
    });
    mutate();
    show({
      title: enabled ? "Feature enabled" : "Feature disabled",
      description: feature.replaceAll("_", " "),
      variant: enabled ? "success" : "default",
    });
  }

  const allOn = useMemo(() => {
    return ALL_FEATURES.every((f) => (flagMap.get(f) ?? true) === true);
  }, [flagMap]);

  const enabledCount = useMemo(() => {
    return ALL_FEATURES.filter((f) => (flagMap.get(f) ?? true) === true).length;
  }, [flagMap]);
  
  async function toggleAll(enabled: boolean) {
    if (!tenantId) return;
    await fetch(`/api/tenants/${tenantId}/features`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ all: true, enabled }),
    });
    mutate();
    show({
      title: enabled ? "All features enabled" : "All features disabled",
      variant: enabled ? "success" : "default",
    });
  }

  const featureItems = useMemo(() => {
    return ALL_FEATURES.map((f) => ({
      key: f,
      label: f.replaceAll("_", " "),
      enabled: (flagMap.get(f) ?? true) === true,
    }));
  }, [flagMap]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return featureItems.filter((it) => {
      if (filter === "enabled" && !it.enabled) return false;
      if (filter === "disabled" && it.enabled) return false;
      if (q && !it.label.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [featureItems, filter, query]);

  return (
    <main>
      <div className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold">Feature Flags</h1>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">Tenant</label>
              <select
                value={tenantId || ""}
                onChange={(e) => setTenantId(e.target.value)}
                className="rounded-lg border bg-white px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900"
              >
                {Array.isArray(tenants) && tenants.map((t: any) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
            <div className="w-48">
              <Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search features" />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`focus-ring rounded-lg px-3 py-1.5 text-sm ${filter==='all' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >All</button>
              <button
                type="button"
                onClick={() => setFilter("enabled")}
                className={`focus-ring rounded-lg px-3 py-1.5 text-sm ${filter==='enabled' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' : 'text-green-700 hover:bg-gray-50 dark:text-green-300 dark:hover:bg-gray-800'}`}
              >Enabled</button>
              <button
                type="button"
                onClick={() => setFilter("disabled")}
                className={`focus-ring rounded-lg px-3 py-1.5 text-sm ${filter==='disabled' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}
              >Disabled</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Enable all</span>
              <button
                onClick={() => toggleAll(!allOn)}
                role="switch"
                aria-checked={allOn}
                aria-label="Enable all features"
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${allOn ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${allOn ? 'translate-x-5' : 'translate-x-1'}`}
                />
              </button>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Enabled {enabledCount} / {ALL_FEATURES.length}</div>
          </div>
        </div>
      </div>

      {!tenantId && <p className="text-sm text-gray-600">Select a tenant to manage features.</p>}
      {tenantId && (
        <Card>
          <CardHeader>Toggle features for the selected tenant.</CardHeader>
          <CardContent>
            {flags === undefined && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-lg border px-4 py-3 dark:border-gray-800">
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-100 dark:bg-gray-800 mb-2" />
                    <div className="h-3 w-40 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
                  </div>
                ))}
              </div>
            )}
            {flags !== undefined && filteredItems.length === 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400">No features match your filters.</p>
            )}
            {flags !== undefined && filteredItems.length > 0 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((it) => (
                  <div key={it.key} className="flex items-center justify-between rounded-lg border px-4 py-3 dark:border-gray-800">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg ${it.enabled ? 'bg-primary-600/10 text-primary-700 dark:text-primary-300' : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">{it.label}</div>
                        <div className="text-xs text-gray-500">Enable access to {it.label.toLowerCase()}.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs ${it.enabled ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}>{it.enabled ? 'Enabled' : 'Disabled'}</span>
                      <button
                        onClick={() => toggle(it.key, !it.enabled)}
                        role="switch"
                        aria-checked={it.enabled}
                        aria-label={`Toggle ${it.label}`}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${it.enabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${it.enabled ? 'translate-x-5' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </main>
  );
}

export default function FeaturesPage() {
  return (
    <Suspense fallback={null}>
      <FeaturesPageContent />
    </Suspense>
  );
}

