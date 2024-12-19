/*
  Warnings:

  - Added the required column `form_type` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "form_type" TEXT NOT NULL;
