/*
  Warnings:

  - Added the required column `addedById` to the `Laboratory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Laboratory" ADD COLUMN     "addedById" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
