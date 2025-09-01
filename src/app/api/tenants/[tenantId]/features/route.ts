import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Feature } from "src/generated/prisma";

export async function GET(
  _req: Request,
  { params }: any
) {
  const tenantId = Array.isArray(params.tenantId) ? params.tenantId[0] : params.tenantId;
  const flags = await prisma.tenantFeatureFlag.findMany({
    where: { tenantId },
  });
  return NextResponse.json(flags);
}

export async function PUT(
  req: Request,
  { params }: any
) {
  const body = await req.json();
  const tenantId = Array.isArray(params.tenantId) ? params.tenantId[0] : params.tenantId;
  // body: { feature: Feature, enabled: boolean }
  const updated = await prisma.tenantFeatureFlag.upsert({
    where: {
      tenantId_feature: {
        tenantId,
        feature: body.feature as Feature,
      },
    },
    create: {
      tenantId,
      feature: body.feature as Feature,
      enabled: Boolean(body.enabled),
    },
    update: { enabled: Boolean(body.enabled) },
  });
  return NextResponse.json(updated);
}

