/*
  Warnings:

  - The values [proposal] on the enum `CustomersStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CustomersStatus_new" AS ENUM ('active', 'inactive', 'pending', 'blocked');
ALTER TABLE "Customers" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Customers" ALTER COLUMN "status" TYPE "CustomersStatus_new" USING ("status"::text::"CustomersStatus_new");
ALTER TYPE "CustomersStatus" RENAME TO "CustomersStatus_old";
ALTER TYPE "CustomersStatus_new" RENAME TO "CustomersStatus";
DROP TYPE "CustomersStatus_old";
ALTER TABLE "Customers" ALTER COLUMN "status" SET DEFAULT 'inactive';
COMMIT;

-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "totalSpent" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "totalAmount" SET DATA TYPE DECIMAL(65,30);
