/*
  Warnings:

  - You are about to drop the column `attachment_record_complete` on the `Laboratory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Laboratory" DROP COLUMN "attachment_record_complete",
ADD COLUMN     "accreditation_record_complete" BOOLEAN NOT NULL DEFAULT false;
