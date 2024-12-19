-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "applicationId" INTEGER;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "ELRApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
