/*
  Warnings:

  - Added the required column `addedById` to the `ELRApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ELRApplication" ADD COLUMN     "addedById" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ELRApplication" ADD CONSTRAINT "ELRApplication_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
