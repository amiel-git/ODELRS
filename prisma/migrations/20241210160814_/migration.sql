/*
  Warnings:

  - Added the required column `addedById` to the `LaboratoryAttachments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LaboratoryAttachments" DROP CONSTRAINT "LaboratoryAttachments_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "LaboratoryAttachments" DROP CONSTRAINT "LaboratoryAttachments_laboratoryId_fkey";

-- AlterTable
ALTER TABLE "LaboratoryAttachments" ADD COLUMN     "addedById" INTEGER NOT NULL,
ADD COLUMN     "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "LaboratoryAttachments" ADD CONSTRAINT "LaboratoryAttachments_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryAttachments" ADD CONSTRAINT "LaboratoryAttachments_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryAttachments" ADD CONSTRAINT "LaboratoryAttachments_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
