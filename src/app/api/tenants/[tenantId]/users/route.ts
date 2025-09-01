import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: any
) {
  const base = process.env.BILL_SERVICE_URL;
  const token = process.env.FLAGS_ADMIN_TOKEN;
  const tenantId = Array.isArray(params.tenantId) ? params.tenantId[0] : params.tenantId;
  if (base && token) {
    const res = await fetch(`${base}/api/admin/tenants/${tenantId}/users`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
    return NextResponse.json({ error: "Failed to fetch users from BILL service" }, { status: res.status });
  }
  return NextResponse.json({ error: "BILL_SERVICE_URL or FLAGS_ADMIN_TOKEN not configured" }, { status: 500 });
}

export async function POST(
  req: Request,
  { params }: any
) {
  const body = await req.json();
  const base = process.env.BILL_SERVICE_URL;
  const token = process.env.FLAGS_ADMIN_TOKEN;
  const tenantId = Array.isArray(params.tenantId) ? params.tenantId[0] : params.tenantId;
  if (!base || !token) {
    return NextResponse.json({ error: "BILL_SERVICE_URL or FLAGS_ADMIN_TOKEN not configured" }, { status: 500 });
  }
  const res = await fetch(`${base}/api/admin/tenants/${tenantId}/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

