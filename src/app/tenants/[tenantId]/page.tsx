"use client";
import { useSearchParams, useParams } from "next/navigation";
import useSWR from "swr";
import { Card, CardHeader, CardContent } from "@/src/components/ui/Card";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TenantUsersPage() {
  const params = useParams<{ tenantId: string }>();
  const { data, error, isLoading, mutate } = useSWR(
    `/api/tenants/${params.tenantId}/users`,
    fetcher
  );

  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">All users for this tenant.</p>
      </div>
      <Card>
        <CardHeader className="text-sm text-gray-600 dark:text-gray-400">Directory of users in the selected tenant.</CardHeader>
        <CardContent>
          {isLoading && (
            <ul className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="rounded border p-3 dark:border-gray-800">
                  <div className="h-4 w-48 animate-pulse rounded bg-gray-100 dark:bg-gray-800 mb-2" />
                  <div className="h-3 w-64 animate-pulse rounded bg-gray-100 dark:bg-gray-800" />
                </li>
              ))}
            </ul>
          )}
          {error && <p className="text-red-600">Failed to load users.</p>}
          {Array.isArray(data) && data.length === 0 && (
            <p className="text-gray-600 dark:text-gray-400">No users found for this tenant.</p>
          )}
          <ul className="space-y-2">
            {Array.isArray(data) && data.map((u: any) => (
              <li key={u.id} className="rounded border p-3 dark:border-gray-800">
                <div className="font-medium">{u.name || u.email}</div>
                <div className="text-xs text-gray-500">{u.email} · {u.id}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}

