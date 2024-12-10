/*
  Warnings:

  - You are about to drop the `_ccoForCyanide` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ccoForLead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ccoForPolychlorinatedBiphenyls` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ccoRegistrationCertificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_certificateToOperateChemLab` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_complianceCertificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_dischargePermits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_equipmentCalibrationMaintenanceProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_floorPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_hazardousWasteGenerator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_labTestResultForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_pcoAccreditation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_pcwManagementPractices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_pdeaLicense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_pnpPurchaserLicense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_pnriLicense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ptoAirPollution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_qaqcProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_refLiterature` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `attachmentId` to the `LaboratoryAttachments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_type` to the `LaboratoryAttachments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ccoForCyanide" DROP CONSTRAINT "_ccoForCyanide_A_fkey";

-- DropForeignKey
ALTER TABLE "_ccoForCyanide" DROP CONSTRAINT "_ccoForCyanide_B_fkey";

-- DropForeignKey
ALTER TABLE "_ccoForLead" DROP CONSTRAINT "_ccoForLead_A_fkey";

-- DropForeignKey
ALTER TABLE "_ccoForLead" DROP CONSTRAINT "_ccoForLead_B_fkey";

-- DropForeignKey
ALTER TABLE "_ccoForPolychlorinatedBiphenyls" DROP CONSTRAINT "_ccoForPolychlorinatedBiphenyls_A_fkey";

-- DropForeignKey
ALTER TABLE "_ccoForPolychlorinatedBiphenyls" DROP CONSTRAINT "_ccoForPolychlorinatedBiphenyls_B_fkey";

-- DropForeignKey
ALTER TABLE "_ccoRegistrationCertificate" DROP CONSTRAINT "_ccoRegistrationCertificate_A_fkey";

-- DropForeignKey
ALTER TABLE "_ccoRegistrationCertificate" DROP CONSTRAINT "_ccoRegistrationCertificate_B_fkey";

-- DropForeignKey
ALTER TABLE "_certificateToOperateChemLab" DROP CONSTRAINT "_certificateToOperateChemLab_A_fkey";

-- DropForeignKey
ALTER TABLE "_certificateToOperateChemLab" DROP CONSTRAINT "_certificateToOperateChemLab_B_fkey";

-- DropForeignKey
ALTER TABLE "_complianceCertificate" DROP CONSTRAINT "_complianceCertificate_A_fkey";

-- DropForeignKey
ALTER TABLE "_complianceCertificate" DROP CONSTRAINT "_complianceCertificate_B_fkey";

-- DropForeignKey
ALTER TABLE "_dischargePermits" DROP CONSTRAINT "_dischargePermits_A_fkey";

-- DropForeignKey
ALTER TABLE "_dischargePermits" DROP CONSTRAINT "_dischargePermits_B_fkey";

-- DropForeignKey
ALTER TABLE "_equipmentCalibrationMaintenanceProgram" DROP CONSTRAINT "_equipmentCalibrationMaintenanceProgram_A_fkey";

-- DropForeignKey
ALTER TABLE "_equipmentCalibrationMaintenanceProgram" DROP CONSTRAINT "_equipmentCalibrationMaintenanceProgram_B_fkey";

-- DropForeignKey
ALTER TABLE "_floorPlan" DROP CONSTRAINT "_floorPlan_A_fkey";

-- DropForeignKey
ALTER TABLE "_floorPlan" DROP CONSTRAINT "_floorPlan_B_fkey";

-- DropForeignKey
ALTER TABLE "_hazardousWasteGenerator" DROP CONSTRAINT "_hazardousWasteGenerator_A_fkey";

-- DropForeignKey
ALTER TABLE "_hazardousWasteGenerator" DROP CONSTRAINT "_hazardousWasteGenerator_B_fkey";

-- DropForeignKey
ALTER TABLE "_labTestResultForm" DROP CONSTRAINT "_labTestResultForm_A_fkey";

-- DropForeignKey
ALTER TABLE "_labTestResultForm" DROP CONSTRAINT "_labTestResultForm_B_fkey";

-- DropForeignKey
ALTER TABLE "_pcoAccreditation" DROP CONSTRAINT "_pcoAccreditation_A_fkey";

-- DropForeignKey
ALTER TABLE "_pcoAccreditation" DROP CONSTRAINT "_pcoAccreditation_B_fkey";

-- DropForeignKey
ALTER TABLE "_pcwManagementPractices" DROP CONSTRAINT "_pcwManagementPractices_A_fkey";

-- DropForeignKey
ALTER TABLE "_pcwManagementPractices" DROP CONSTRAINT "_pcwManagementPractices_B_fkey";

-- DropForeignKey
ALTER TABLE "_pdeaLicense" DROP CONSTRAINT "_pdeaLicense_A_fkey";

-- DropForeignKey
ALTER TABLE "_pdeaLicense" DROP CONSTRAINT "_pdeaLicense_B_fkey";

-- DropForeignKey
ALTER TABLE "_pnpPurchaserLicense" DROP CONSTRAINT "_pnpPurchaserLicense_A_fkey";

-- DropForeignKey
ALTER TABLE "_pnpPurchaserLicense" DROP CONSTRAINT "_pnpPurchaserLicense_B_fkey";

-- DropForeignKey
ALTER TABLE "_pnriLicense" DROP CONSTRAINT "_pnriLicense_A_fkey";

-- DropForeignKey
ALTER TABLE "_pnriLicense" DROP CONSTRAINT "_pnriLicense_B_fkey";

-- DropForeignKey
ALTER TABLE "_ptoAirPollution" DROP CONSTRAINT "_ptoAirPollution_A_fkey";

-- DropForeignKey
ALTER TABLE "_ptoAirPollution" DROP CONSTRAINT "_ptoAirPollution_B_fkey";

-- DropForeignKey
ALTER TABLE "_qaqcProgram" DROP CONSTRAINT "_qaqcProgram_A_fkey";

-- DropForeignKey
ALTER TABLE "_qaqcProgram" DROP CONSTRAINT "_qaqcProgram_B_fkey";

-- DropForeignKey
ALTER TABLE "_refLiterature" DROP CONSTRAINT "_refLiterature_A_fkey";

-- DropForeignKey
ALTER TABLE "_refLiterature" DROP CONSTRAINT "_refLiterature_B_fkey";

-- AlterTable
ALTER TABLE "LaboratoryAttachments" ADD COLUMN     "attachmentId" INTEGER NOT NULL,
ADD COLUMN     "file_type" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ccoForCyanide";

-- DropTable
DROP TABLE "_ccoForLead";

-- DropTable
DROP TABLE "_ccoForPolychlorinatedBiphenyls";

-- DropTable
DROP TABLE "_ccoRegistrationCertificate";

-- DropTable
DROP TABLE "_certificateToOperateChemLab";

-- DropTable
DROP TABLE "_complianceCertificate";

-- DropTable
DROP TABLE "_dischargePermits";

-- DropTable
DROP TABLE "_equipmentCalibrationMaintenanceProgram";

-- DropTable
DROP TABLE "_floorPlan";

-- DropTable
DROP TABLE "_hazardousWasteGenerator";

-- DropTable
DROP TABLE "_labTestResultForm";

-- DropTable
DROP TABLE "_pcoAccreditation";

-- DropTable
DROP TABLE "_pcwManagementPractices";

-- DropTable
DROP TABLE "_pdeaLicense";

-- DropTable
DROP TABLE "_pnpPurchaserLicense";

-- DropTable
DROP TABLE "_pnriLicense";

-- DropTable
DROP TABLE "_ptoAirPollution";

-- DropTable
DROP TABLE "_qaqcProgram";

-- DropTable
DROP TABLE "_refLiterature";

-- AddForeignKey
ALTER TABLE "LaboratoryAttachments" ADD CONSTRAINT "LaboratoryAttachments_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
