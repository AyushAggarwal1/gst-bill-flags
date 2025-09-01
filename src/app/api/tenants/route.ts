import { prisma } from "@/lib/prisma";
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
  }
  const tenants = await prisma.tenant.findMany({
    include: { users: true, flags: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tenants);
}

export async function POST(req: Request) {
  const body = await req.json();
  const tenant = await prisma.tenant.create({
    data: { name: body.name },
  });
  return NextResponse.json(tenant, { status: 201 });
}

