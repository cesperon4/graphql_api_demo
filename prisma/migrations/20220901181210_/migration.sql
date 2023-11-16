-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GUEST', 'USER', 'ADMIN', 'COUNTY');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('NS', 'IES', 'NF', 'EF');

-- CreateEnum
CREATE TYPE "HydroVar" AS ENUM ('ANNUAL', 'SEASONAL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectType" "ProjectType"[],
    "avgAnnSupply" INTEGER NOT NULL,
    "fCapacity" INTEGER NOT NULL,
    "hydroVar" "HydroVar" NOT NULL,
    "capitalCost" INTEGER NOT NULL,
    "annualOM" INTEGER NOT NULL,
    "annualWPC" INTEGER NOT NULL,
    "prc" TEXT NOT NULL,
    "wqc" TEXT NOT NULL,
    "addInfo" TEXT NOT NULL,
    "creatorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alternative" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creatorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alternative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AltOptionChecked" (
    "id" SERIAL NOT NULL,
    "altId" INTEGER NOT NULL,
    "optId" INTEGER NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AltOptionChecked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criteria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "data_source" TEXT NOT NULL,
    "scoring_level" INTEGER NOT NULL,
    "scoring_assignment" TEXT[],
    "scoring_points" TEXT[],
    "weight" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL,

    CONSTRAINT "Criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scenario" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL,

    CONSTRAINT "Scenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluatedAlternatives" (
    "id" SERIAL NOT NULL,
    "score" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "critId" INTEGER NOT NULL,
    "altId" INTEGER NOT NULL,
    "scenarioId" INTEGER,
    "deleted" BOOLEAN NOT NULL,

    CONSTRAINT "EvaluatedAlternatives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Option_name_key" ON "Option"("name");

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alternative" ADD CONSTRAINT "Alternative_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluatedAlternatives" ADD CONSTRAINT "EvaluatedAlternatives_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "Scenario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
