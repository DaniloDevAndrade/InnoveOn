-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('software', 'hardware', 'service', 'subscription', 'other');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "ProductCategory" NOT NULL,
    "sku" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageUrl" VARCHAR(255),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
