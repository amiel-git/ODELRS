-- AlterTable
ALTER TABLE "Checklist" ADD COLUMN     "personnelInterviewedId" INTEGER;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_personnelInterviewedId_fkey" FOREIGN KEY ("personnelInterviewedId") REFERENCES "Personnel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
