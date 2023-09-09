/*
  Warnings:

  - You are about to drop the column `horario` on the `Event` table. All the data in the column will be lost.
  - Added the required column `idHorario` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "horario",
ADD COLUMN     "idHorario" INTEGER NOT NULL;
