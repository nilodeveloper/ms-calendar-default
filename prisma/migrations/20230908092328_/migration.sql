-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "dia" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "emailCriador" TEXT NOT NULL,
    "emailDonoEvento" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeEvent" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "TypeEvent_pkey" PRIMARY KEY ("id")
);
