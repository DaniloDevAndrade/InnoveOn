-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('colaborate', 'manager', 'admin');

-- CreateEnum
CREATE TYPE "AuthStatus" AS ENUM ('active', 'pending');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "numberAddress" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "uf" VARCHAR(255) NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'colaborate',
    "pinAuth" VARCHAR(255),
    "AuthStatus" "AuthStatus" NOT NULL DEFAULT 'pending',
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_role_key" ON "Users"("role");
