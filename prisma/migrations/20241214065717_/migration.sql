-- DropForeignKey
ALTER TABLE "AssessmentTeam" DROP CONSTRAINT "AssessmentTeam_external_assessor_mgmtId_fkey";

-- DropForeignKey
ALTER TABLE "AssessmentTeam" DROP CONSTRAINT "AssessmentTeam_external_assessor_plId_fkey";

-- DropForeignKey
ALTER TABLE "AssessmentTeam" DROP CONSTRAINT "AssessmentTeam_liat_chairId_fkey";

-- AlterTable
ALTER TABLE "AssessmentTeam" ALTER COLUMN "liat_chairId" DROP NOT NULL,
ALTER COLUMN "external_assessor_mgmtId" DROP NOT NULL,
ALTER COLUMN "external_assessor_plId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_liat_chairId_fkey" FOREIGN KEY ("liat_chairId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_external_assessor_mgmtId_fkey" FOREIGN KEY ("external_assessor_mgmtId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_external_assessor_plId_fkey" FOREIGN KEY ("external_assessor_plId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
