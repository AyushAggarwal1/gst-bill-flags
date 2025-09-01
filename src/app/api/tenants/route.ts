import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const base = process.env.BILL_SERVICE_URL;
  const token = process.env.FLAGS_ADMIN_TOKEN;
  if (base && token) {
    const res = await fetch(`${base}/api/admin/tenants`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
    return NextResponse.json({ error: "Failed to fetch tenants from BILL service" }, { status: res.status });
  }
  return NextResponse.json({ error: "BILL_SERVICE_URL or FLAGS_ADMIN_TOKEN not configured" }, { status: 500 });
}
