/*
  Warnings:

  - You are about to alter the column `totalSpent` on the `Customers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `totalAmount` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "totalSpent" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "totalAmount" SET DATA TYPE INTEGER;
