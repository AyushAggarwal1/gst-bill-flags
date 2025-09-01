"use client";
import { useSearchParams, useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TenantUsersPage() {
  const params = useParams<{ tenantId: string }>();
  const { data, error, isLoading, mutate } = useSWR(
    `/api/tenants/${params.tenantId}/users`,
    fetcher
  );

  async function addUser(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    if (!email) return;
    await fetch(`/api/tenants/${params.tenantId}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    mutate();
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Users in Tenant</h1>
      <form action={addUser} className="mb-4 flex gap-2 flex-wrap">
        <input name="name" placeholder="Name" className="border px-2 py-1" />
        <input name="email" placeholder="Email" className="border px-2 py-1" />
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-600">Failed to load</p>}
      <ul className="space-y-2">
        {Array.isArray(data) && data.map((u: any) => (
          <li key={u.id} className="border p-3 rounded">
            <div className="font-medium">{u.name || u.email}</div>
            <div className="text-xs text-gray-500">{u.email} · {u.id}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}

