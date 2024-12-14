-- CreateEnum
CREATE TYPE "ChecklistType" AS ENUM ('part1', 'part2', 'part3', 'part4a', 'part4b', 'part4c', 'part4d');

-- CreateTable
CREATE TABLE "ELRApplication" (
    "id" SERIAL NOT NULL,
    "laboratoryId" INTEGER NOT NULL,
    "assigneeId" INTEGER NOT NULL,
    "custodianId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "remarks" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "elr_code" TEXT NOT NULL,

    CONSTRAINT "ELRApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnSiteAssessment" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "OnSiteAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonComplianceReport" (
    "id" SERIAL NOT NULL,
    "onsiteAssessmentId" INTEGER NOT NULL,
    "req_document" JSONB,
    "schedule_start" TIMESTAMP(3) NOT NULL,
    "schedule_end" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "handlerId" INTEGER NOT NULL,
    "addedById" INTEGER NOT NULL,

    CONSTRAINT "NonComplianceReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendationReport" (
    "id" SERIAL NOT NULL,
    "onsiteAssessmentId" INTEGER NOT NULL,
    "req_document" JSONB,
    "schedule_start" TIMESTAMP(3) NOT NULL,
    "schedule_end" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "handlerId" INTEGER NOT NULL,
    "addedById" INTEGER NOT NULL,

    CONSTRAINT "RecommendationReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" SERIAL NOT NULL,
    "onsiteAssessmentId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "is_done" BOOLEAN NOT NULL DEFAULT false,
    "type" "ChecklistType" NOT NULL,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssessmentTeam" (
    "id" SERIAL NOT NULL,
    "onsiteAssessmentId" INTEGER NOT NULL,
    "liat_chairId" INTEGER NOT NULL,
    "external_assessor_mgmtId" INTEGER NOT NULL,
    "external_assessor_plId" INTEGER NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AssessmentTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ELRApplicationToSample" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ChecklistToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LIATMemberedCO" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LIATMemberedRO" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OnSiteAssessment_applicationId_key" ON "OnSiteAssessment"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "NonComplianceReport_onsiteAssessmentId_key" ON "NonComplianceReport"("onsiteAssessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "RecommendationReport_onsiteAssessmentId_key" ON "RecommendationReport"("onsiteAssessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Checklist_onsiteAssessmentId_key" ON "Checklist"("onsiteAssessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "AssessmentTeam_onsiteAssessmentId_key" ON "AssessmentTeam"("onsiteAssessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "_ELRApplicationToSample_AB_unique" ON "_ELRApplicationToSample"("A", "B");

-- CreateIndex
CREATE INDEX "_ELRApplicationToSample_B_index" ON "_ELRApplicationToSample"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChecklistToUser_AB_unique" ON "_ChecklistToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChecklistToUser_B_index" ON "_ChecklistToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LIATMemberedCO_AB_unique" ON "_LIATMemberedCO"("A", "B");

-- CreateIndex
CREATE INDEX "_LIATMemberedCO_B_index" ON "_LIATMemberedCO"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LIATMemberedRO_AB_unique" ON "_LIATMemberedRO"("A", "B");

-- CreateIndex
CREATE INDEX "_LIATMemberedRO_B_index" ON "_LIATMemberedRO"("B");

-- AddForeignKey
ALTER TABLE "ELRApplication" ADD CONSTRAINT "ELRApplication_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ELRApplication" ADD CONSTRAINT "ELRApplication_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ELRApplication" ADD CONSTRAINT "ELRApplication_custodianId_fkey" FOREIGN KEY ("custodianId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnSiteAssessment" ADD CONSTRAINT "OnSiteAssessment_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "ELRApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonComplianceReport" ADD CONSTRAINT "NonComplianceReport_onsiteAssessmentId_fkey" FOREIGN KEY ("onsiteAssessmentId") REFERENCES "OnSiteAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonComplianceReport" ADD CONSTRAINT "NonComplianceReport_handlerId_fkey" FOREIGN KEY ("handlerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonComplianceReport" ADD CONSTRAINT "NonComplianceReport_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationReport" ADD CONSTRAINT "RecommendationReport_onsiteAssessmentId_fkey" FOREIGN KEY ("onsiteAssessmentId") REFERENCES "OnSiteAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationReport" ADD CONSTRAINT "RecommendationReport_handlerId_fkey" FOREIGN KEY ("handlerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationReport" ADD CONSTRAINT "RecommendationReport_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_onsiteAssessmentId_fkey" FOREIGN KEY ("onsiteAssessmentId") REFERENCES "OnSiteAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_onsiteAssessmentId_fkey" FOREIGN KEY ("onsiteAssessmentId") REFERENCES "OnSiteAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_liat_chairId_fkey" FOREIGN KEY ("liat_chairId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_external_assessor_mgmtId_fkey" FOREIGN KEY ("external_assessor_mgmtId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentTeam" ADD CONSTRAINT "AssessmentTeam_external_assessor_plId_fkey" FOREIGN KEY ("external_assessor_plId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ELRApplicationToSample" ADD CONSTRAINT "_ELRApplicationToSample_A_fkey" FOREIGN KEY ("A") REFERENCES "ELRApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ELRApplicationToSample" ADD CONSTRAINT "_ELRApplicationToSample_B_fkey" FOREIGN KEY ("B") REFERENCES "Sample"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChecklistToUser" ADD CONSTRAINT "_ChecklistToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Checklist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChecklistToUser" ADD CONSTRAINT "_ChecklistToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LIATMemberedCO" ADD CONSTRAINT "_LIATMemberedCO_A_fkey" FOREIGN KEY ("A") REFERENCES "AssessmentTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LIATMemberedCO" ADD CONSTRAINT "_LIATMemberedCO_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LIATMemberedRO" ADD CONSTRAINT "_LIATMemberedRO_A_fkey" FOREIGN KEY ("A") REFERENCES "AssessmentTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LIATMemberedRO" ADD CONSTRAINT "_LIATMemberedRO_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
