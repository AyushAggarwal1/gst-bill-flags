import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { tenantId: string } }
) {
  const base = process.env.BILL_SERVICE_URL;
  const token = process.env.FLAGS_ADMIN_TOKEN;
  if (base && token) {
    const res = await fetch(`${base}/api/admin/tenants/${params.tenantId}/users`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  }
  const users = await prisma.user.findMany({
    where: { tenantId: params.tenantId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(users);
}

export async function POST(
  req: Request,
  { params }: { params: { tenantId: string } }
) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      tenantId: params.tenantId,
    },
  });
  return NextResponse.json(user, { status: 201 });
}

