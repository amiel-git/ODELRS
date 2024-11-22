/*
  Warnings:

  - You are about to drop the column `city` on the `Establishment` table. All the data in the column will be lost.
  - Added the required column `province` to the `Establishment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Establishment" DROP COLUMN "city",
ADD COLUMN     "province" TEXT NOT NULL;
