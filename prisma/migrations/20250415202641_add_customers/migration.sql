-- CreateEnum
CREATE TYPE "CustomersStatus" AS ENUM ('active', 'inactive', 'pending', 'proposal', 'blocked');

-- CreateEnum
CREATE TYPE "CustomersSegment" AS ENUM ('individual', 'small_business', 'enterprise', 'government', 'non_profit');

-- CreateTable
CREATE TABLE "Customers" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "company" VARCHAR(255) NOT NULL,
    "status" "CustomersStatus" NOT NULL DEFAULT 'inactive',
    "segment" "CustomersSegment" NOT NULL,
    "totalSpent" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "notes" VARCHAR(255),
    "lastPurchase" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_phone_key" ON "Customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");
