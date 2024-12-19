-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "addedById" INTEGER;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
