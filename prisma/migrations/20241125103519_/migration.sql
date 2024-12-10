-- AlterTable
ALTER TABLE "Laboratory" ADD COLUMN     "updateById" INTEGER,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_updateById_fkey" FOREIGN KEY ("updateById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
