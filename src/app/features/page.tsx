"use client";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

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

export default function FeaturesPage({ searchParams }: { searchParams?: { tenantId?: string } }) {
  const [tenantId, setTenantId] = useState<string | undefined>(searchParams?.tenantId);
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
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Feature Flags</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Tenant</label>
          <select
            value={tenantId || ""}
            onChange={(e) => setTenantId(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            {Array.isArray(tenants) && tenants.map((t: any) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
      </div>

      {!tenantId && <p className="text-sm text-gray-600">Select a tenant to manage features.</p>}
      {tenantId && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-100 text-sm text-gray-600">Toggle features for the selected tenant.</div>
          <div className="divide-y divide-gray-100">
            {ALL_FEATURES.map((f) => (
              <div key={f} className="flex items-center justify-between px-4 py-3">
                <div className="font-medium">{f.replaceAll("_", " ")}</div>
                <button
                  onClick={() => toggle(f, !(flagMap.get(f) ?? true))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${flagMap.get(f) ?? true ? 'bg-primary-600' : 'bg-gray-300'}`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${flagMap.get(f) ?? true ? 'translate-x-5' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

