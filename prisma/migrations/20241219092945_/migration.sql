-- DropForeignKey
ALTER TABLE "Remark" DROP CONSTRAINT "Remark_elrApplicationId_fkey";

-- AddForeignKey
ALTER TABLE "Remark" ADD CONSTRAINT "Remark_elrApplicationId_fkey" FOREIGN KEY ("elrApplicationId") REFERENCES "ELRApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
