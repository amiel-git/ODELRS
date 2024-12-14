/*
  Warnings:

  - You are about to drop the column `remarks` on the `ELRApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ELRApplication" DROP COLUMN "remarks";

-- CreateTable
CREATE TABLE "Remark" (
    "id" SERIAL NOT NULL,
    "addedById" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "elrApplicationId" INTEGER NOT NULL,

    CONSTRAINT "Remark_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Remark" ADD CONSTRAINT "Remark_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Remark" ADD CONSTRAINT "Remark_elrApplicationId_fkey" FOREIGN KEY ("elrApplicationId") REFERENCES "ELRApplication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
