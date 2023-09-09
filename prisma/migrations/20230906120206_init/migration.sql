/*
  Warnings:

  - Changed the type of `feriado` on the `Day` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dia` on the `Day` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `diaSemana` on the `Day` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mes` on the `Day` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ano` on the `Day` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Day" DROP COLUMN "feriado",
ADD COLUMN     "feriado" INTEGER NOT NULL,
DROP COLUMN "dia",
ADD COLUMN     "dia" INTEGER NOT NULL,
DROP COLUMN "diaSemana",
ADD COLUMN     "diaSemana" INTEGER NOT NULL,
DROP COLUMN "mes",
ADD COLUMN     "mes" INTEGER NOT NULL,
DROP COLUMN "ano",
ADD COLUMN     "ano" INTEGER NOT NULL;
