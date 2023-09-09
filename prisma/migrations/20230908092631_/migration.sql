/*
  Warnings:

  - Added the required column `dataHora` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diaInteiro` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "diaInteiro" INTEGER NOT NULL,
ADD COLUMN     "horario" TEXT NOT NULL;
