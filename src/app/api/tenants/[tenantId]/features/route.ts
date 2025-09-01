import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Feature } from "src/generated/prisma";

export async function GET(
  _req: Request,
  { params }: any
) {
  const awaitedParams = await params;
  const tenantId = Array.isArray(awaitedParams.tenantId) ? awaitedParams.tenantId[0] : awaitedParams.tenantId;
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
  const awaitedParams = await params;
  const tenantId = Array.isArray(awaitedParams.tenantId) ? awaitedParams.tenantId[0] : awaitedParams.tenantId;
  // body can be either { feature: Feature, enabled: boolean } OR { all: true, enabled: boolean }
  if (body?.all === true) {
    const enabled = Boolean(body.enabled);
    // Update all features for this tenant
    const features: Feature[] = [
      "DASHBOARD",
      "CUSTOMERS",
      "ITEMS",
      "BILLS",
      "TEMPLATES",
      "USER_MANAGEMENT",
      "API_DOCS",
      "GST_SEARCH",
      "HSN_SEARCH",
    ] as unknown as Feature[];

    const results = await prisma.$transaction(
      features.map((feature) =>
        prisma.tenantFeatureFlag.upsert({
          where: { tenantId_feature: { tenantId, feature } },
          create: { tenantId, feature, enabled },
          update: { enabled },
        })
      )
    );
    return NextResponse.json(results);
  }

  // Single feature toggle
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

