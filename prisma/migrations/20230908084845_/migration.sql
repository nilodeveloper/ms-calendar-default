-- DropIndex
DROP INDEX "Day_lua_key";

-- CreateTable
CREATE TABLE "Month" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "maxDias" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "bissexto" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);
