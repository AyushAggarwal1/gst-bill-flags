"use client";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TenantsPage() {
  const { data, error, isLoading, mutate } = useSWR("/api/tenants", fetcher);

  async function createTenant(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    if (!name) return;
    await fetch("/api/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    mutate();
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Tenants</h1>
        <form action={createTenant} className="flex gap-2">
          <input name="name" placeholder="New tenant name" className="border px-3 py-2 rounded-lg text-sm" />
          <button className="px-3 py-2 rounded-lg bg-primary-600 text-white text-sm hover:bg-primary-700">Create</button>
        </form>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Tenant</th>
              <th className="px-4 py-3 text-left">Tenant ID</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {isLoading && (
              <tr><td className="px-4 py-3" colSpan={3}>Loading...</td></tr>
            )}
            {error && (
              <tr><td className="px-4 py-3 text-red-600" colSpan={3}>Failed to load</td></tr>
            )}
            {Array.isArray(data) && data.map((t: any) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{t.name}</td>
                <td className="px-4 py-3 text-gray-500">{t.id}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Link className="inline-flex px-3 py-1.5 rounded-lg border text-gray-700 hover:bg-gray-50" href={`/tenants/${t.id}`}>Users</Link>
                  <Link className="inline-flex px-3 py-1.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700" href={`/features?tenantId=${t.id}`}>Features</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

