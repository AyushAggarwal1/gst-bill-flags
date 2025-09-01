/*
  Warnings:

  - You are about to drop the `Tenant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TenantFeatureFlag" DROP CONSTRAINT "TenantFeatureFlag_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tenantId_fkey";

-- DropIndex
DROP INDEX "TenantFeatureFlag_tenantId_idx";

-- DropTable
DROP TABLE "Tenant";

-- DropTable
DROP TABLE "User";
