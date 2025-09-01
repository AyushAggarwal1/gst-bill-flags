import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Feature } from "src/generated/prisma";

export async function GET(
  _req: Request,
  { params }: { params: { tenantId: string } }
) {
  const flags = await prisma.tenantFeatureFlag.findMany({
    where: { tenantId: params.tenantId },
  });
  return NextResponse.json(flags);
}

export async function PUT(
  req: Request,
  { params }: { params: { tenantId: string } }
) {
  const body = await req.json();
  // body: { feature: Feature, enabled: boolean }
  const updated = await prisma.tenantFeatureFlag.upsert({
    where: {
      tenantId_feature: {
        tenantId: params.tenantId,
        feature: body.feature as Feature,
      },
    },
    create: {
      tenantId: params.tenantId,
      feature: body.feature as Feature,
      enabled: Boolean(body.enabled),
    },
    update: { enabled: Boolean(body.enabled) },
  });
  return NextResponse.json(updated);
}

