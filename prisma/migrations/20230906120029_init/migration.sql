/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "feriado" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "curiosidade" TEXT NOT NULL,
    "lua" INTEGER NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Day_lua_key" ON "Day"("lua");
