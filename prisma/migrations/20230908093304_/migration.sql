/*
  Warnings:

  - You are about to drop the column `dataHora` on the `Event` table. All the data in the column will be lost.
  - Changed the type of `horario` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "dataHora",
DROP COLUMN "horario",
ADD COLUMN     "horario" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "inicio" INTEGER NOT NULL,
    "fim" INTEGER NOT NULL,
    "idEvento" INTEGER NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);
