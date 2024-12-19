/*
  Warnings:

  - Added the required column `remarkType` to the `Remark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Remark" ADD COLUMN     "remarkType" TEXT NOT NULL;
