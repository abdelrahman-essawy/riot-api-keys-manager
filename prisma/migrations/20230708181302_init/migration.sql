-- CreateEnum
CREATE TYPE "KeyStatus" AS ENUM ('AVAILABLE', 'NEAR_AVAILABILITY', 'NEAR_EXHAUSTION', 'EXHAUSTED', 'EXPIRED', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "KeyState" AS ENUM ('WORKING', 'NOT_WORKING', 'RESTING');

-- CreateTable
CREATE TABLE "Key" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalRequestCount" INTEGER NOT NULL DEFAULT 0,
    "requestCountSinceLastReset" INTEGER NOT NULL DEFAULT 0,
    "lastRequestAt" TIMESTAMP(3),
    "status" "KeyStatus" NOT NULL DEFAULT 'UNKNOWN',
    "state" "KeyState" NOT NULL DEFAULT 'NOT_WORKING',
    "resetAt" TIMESTAMP(3),
    "resetCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "keyId" INTEGER,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Key_value_key" ON "Key"("value");

-- CreateIndex
CREATE INDEX "Key_value_idx" ON "Key" USING HASH ("value");

-- AddForeignKey
ALTER TABLE "Consumer" ADD CONSTRAINT "Consumer_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "Key"("id") ON DELETE SET NULL ON UPDATE CASCADE;
