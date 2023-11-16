/*
  Warnings:

  - You are about to drop the column `deleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AltOptionChecked` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Alternative` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Criteria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EvaluatedAlternatives` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Scenario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Alternative" DROP CONSTRAINT "Alternative_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluatedAlternatives" DROP CONSTRAINT "EvaluatedAlternatives_scenarioId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_creatorId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deleted",
DROP COLUMN "password",
DROP COLUMN "phone",
DROP COLUMN "role";

-- DropTable
DROP TABLE "AltOptionChecked";

-- DropTable
DROP TABLE "Alternative";

-- DropTable
DROP TABLE "Criteria";

-- DropTable
DROP TABLE "EvaluatedAlternatives";

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "Scenario";

-- DropEnum
DROP TYPE "HydroVar";

-- DropEnum
DROP TYPE "ProjectType";

-- DropEnum
DROP TYPE "Role";
