-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'denr_secretary';

-- CreateTable
CREATE TABLE "AccreditationRecord" (
    "id" SERIAL NOT NULL,
    "accreditation_body" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "certificateId" INTEGER NOT NULL,
    "laboratoryId" INTEGER NOT NULL,

    CONSTRAINT "AccreditationRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personnel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "yearsOfExperience" INTEGER NOT NULL,
    "cvId" INTEGER NOT NULL,
    "licenseId" INTEGER NOT NULL,
    "laboratoryId" INTEGER NOT NULL,

    CONSTRAINT "Personnel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SampleType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SampleType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parameter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sampleTypeId" INTEGER NOT NULL,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SampleMethod" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parameterId" INTEGER NOT NULL,

    CONSTRAINT "SampleMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SampleReference" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sampleMethodId" INTEGER NOT NULL,

    CONSTRAINT "SampleReference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sample" (
    "id" SERIAL NOT NULL,
    "sampleTypeId" INTEGER NOT NULL,
    "parameterId" INTEGER NOT NULL,
    "sampleMethodId" INTEGER NOT NULL,
    "sampleReferenceId" INTEGER NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackRecord" (
    "id" SERIAL NOT NULL,
    "sampleId" INTEGER NOT NULL,
    "numberOfSamples" INTEGER NOT NULL,
    "dateCoveredStart" TIMESTAMP(3) NOT NULL,
    "dateCoveredEnd" TIMESTAMP(3) NOT NULL,
    "laboratoryId" INTEGER NOT NULL,

    CONSTRAINT "TrackRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Establishment" (
    "id" SERIAL NOT NULL,
    "region" "Region" NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "addedById" INTEGER NOT NULL,
    "updatedById" INTEGER NOT NULL,

    CONSTRAINT "Establishment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaboratoryAttachments" (
    "id" SERIAL NOT NULL,
    "laboratoryId" INTEGER NOT NULL,

    CONSTRAINT "LaboratoryAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laboratory" (
    "id" SERIAL NOT NULL,
    "laboratoryName" TEXT NOT NULL,
    "establishmentId" INTEGER NOT NULL,
    "certificationDate" TIMESTAMP(3),
    "certificationExpiration" TIMESTAMP(3),
    "labHeadName" TEXT NOT NULL,
    "labHeadEmail" TEXT NOT NULL,
    "labHeadContact" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "faxNumber" TEXT NOT NULL,
    "tin" TEXT NOT NULL,
    "missionStatement" TEXT NOT NULL,
    "dateEstablished" TIMESTAMP(3) NOT NULL,
    "businessPermitId" INTEGER NOT NULL,
    "businessPermitNumber" TEXT NOT NULL,
    "businessPermitIssueDate" TIMESTAMP(3) NOT NULL,
    "businessPermitExpiration" TIMESTAMP(3) NOT NULL,
    "businessPermitPlaceOfIssuance" TEXT NOT NULL,
    "categoryOfClient" JSONB NOT NULL,
    "ServicesOffered" JSONB NOT NULL,
    "scopeOfWork" TEXT NOT NULL,
    "areaServed" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Laboratory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_labTestResultForm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_equipmentCalibrationMaintenanceProgram" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_pcwManagementPractices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_refLiterature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_qaqcProgram" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_floorPlan" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_pcoAccreditation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_complianceCertificate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_hazardousWasteGenerator" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ccoRegistrationCertificate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ccoForCyanide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ccoForLead" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ccoForPolychlorinatedBiphenyls" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ptoAirPollution" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_dischargePermits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_pnpPurchaserLicense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_pdeaLicense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_pnriLicense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_certificateToOperateChemLab" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_cvId_key" ON "Personnel"("cvId");

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_licenseId_key" ON "Personnel"("licenseId");

-- CreateIndex
CREATE UNIQUE INDEX "LaboratoryAttachments_laboratoryId_key" ON "LaboratoryAttachments"("laboratoryId");

-- CreateIndex
CREATE UNIQUE INDEX "_labTestResultForm_AB_unique" ON "_labTestResultForm"("A", "B");

-- CreateIndex
CREATE INDEX "_labTestResultForm_B_index" ON "_labTestResultForm"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_equipmentCalibrationMaintenanceProgram_AB_unique" ON "_equipmentCalibrationMaintenanceProgram"("A", "B");

-- CreateIndex
CREATE INDEX "_equipmentCalibrationMaintenanceProgram_B_index" ON "_equipmentCalibrationMaintenanceProgram"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pcwManagementPractices_AB_unique" ON "_pcwManagementPractices"("A", "B");

-- CreateIndex
CREATE INDEX "_pcwManagementPractices_B_index" ON "_pcwManagementPractices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_refLiterature_AB_unique" ON "_refLiterature"("A", "B");

-- CreateIndex
CREATE INDEX "_refLiterature_B_index" ON "_refLiterature"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_qaqcProgram_AB_unique" ON "_qaqcProgram"("A", "B");

-- CreateIndex
CREATE INDEX "_qaqcProgram_B_index" ON "_qaqcProgram"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_floorPlan_AB_unique" ON "_floorPlan"("A", "B");

-- CreateIndex
CREATE INDEX "_floorPlan_B_index" ON "_floorPlan"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pcoAccreditation_AB_unique" ON "_pcoAccreditation"("A", "B");

-- CreateIndex
CREATE INDEX "_pcoAccreditation_B_index" ON "_pcoAccreditation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_complianceCertificate_AB_unique" ON "_complianceCertificate"("A", "B");

-- CreateIndex
CREATE INDEX "_complianceCertificate_B_index" ON "_complianceCertificate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_hazardousWasteGenerator_AB_unique" ON "_hazardousWasteGenerator"("A", "B");

-- CreateIndex
CREATE INDEX "_hazardousWasteGenerator_B_index" ON "_hazardousWasteGenerator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ccoRegistrationCertificate_AB_unique" ON "_ccoRegistrationCertificate"("A", "B");

-- CreateIndex
CREATE INDEX "_ccoRegistrationCertificate_B_index" ON "_ccoRegistrationCertificate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ccoForCyanide_AB_unique" ON "_ccoForCyanide"("A", "B");

-- CreateIndex
CREATE INDEX "_ccoForCyanide_B_index" ON "_ccoForCyanide"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ccoForLead_AB_unique" ON "_ccoForLead"("A", "B");

-- CreateIndex
CREATE INDEX "_ccoForLead_B_index" ON "_ccoForLead"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ccoForPolychlorinatedBiphenyls_AB_unique" ON "_ccoForPolychlorinatedBiphenyls"("A", "B");

-- CreateIndex
CREATE INDEX "_ccoForPolychlorinatedBiphenyls_B_index" ON "_ccoForPolychlorinatedBiphenyls"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ptoAirPollution_AB_unique" ON "_ptoAirPollution"("A", "B");

-- CreateIndex
CREATE INDEX "_ptoAirPollution_B_index" ON "_ptoAirPollution"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_dischargePermits_AB_unique" ON "_dischargePermits"("A", "B");

-- CreateIndex
CREATE INDEX "_dischargePermits_B_index" ON "_dischargePermits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pnpPurchaserLicense_AB_unique" ON "_pnpPurchaserLicense"("A", "B");

-- CreateIndex
CREATE INDEX "_pnpPurchaserLicense_B_index" ON "_pnpPurchaserLicense"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pdeaLicense_AB_unique" ON "_pdeaLicense"("A", "B");

-- CreateIndex
CREATE INDEX "_pdeaLicense_B_index" ON "_pdeaLicense"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pnriLicense_AB_unique" ON "_pnriLicense"("A", "B");

-- CreateIndex
CREATE INDEX "_pnriLicense_B_index" ON "_pnriLicense"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_certificateToOperateChemLab_AB_unique" ON "_certificateToOperateChemLab"("A", "B");

-- CreateIndex
CREATE INDEX "_certificateToOperateChemLab_B_index" ON "_certificateToOperateChemLab"("B");

-- AddForeignKey
ALTER TABLE "AccreditationRecord" ADD CONSTRAINT "AccreditationRecord_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccreditationRecord" ADD CONSTRAINT "AccreditationRecord_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personnel" ADD CONSTRAINT "Personnel_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personnel" ADD CONSTRAINT "Personnel_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personnel" ADD CONSTRAINT "Personnel_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameter" ADD CONSTRAINT "Parameter_sampleTypeId_fkey" FOREIGN KEY ("sampleTypeId") REFERENCES "SampleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SampleMethod" ADD CONSTRAINT "SampleMethod_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "Parameter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SampleReference" ADD CONSTRAINT "SampleReference_sampleMethodId_fkey" FOREIGN KEY ("sampleMethodId") REFERENCES "SampleMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_sampleTypeId_fkey" FOREIGN KEY ("sampleTypeId") REFERENCES "SampleType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "Parameter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_sampleMethodId_fkey" FOREIGN KEY ("sampleMethodId") REFERENCES "SampleMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_sampleReferenceId_fkey" FOREIGN KEY ("sampleReferenceId") REFERENCES "SampleReference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackRecord" ADD CONSTRAINT "TrackRecord_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "Sample"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackRecord" ADD CONSTRAINT "TrackRecord_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Establishment" ADD CONSTRAINT "Establishment_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Establishment" ADD CONSTRAINT "Establishment_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryAttachments" ADD CONSTRAINT "LaboratoryAttachments_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "Establishment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_businessPermitId_fkey" FOREIGN KEY ("businessPermitId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_labTestResultForm" ADD CONSTRAINT "_labTestResultForm_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_labTestResultForm" ADD CONSTRAINT "_labTestResultForm_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_equipmentCalibrationMaintenanceProgram" ADD CONSTRAINT "_equipmentCalibrationMaintenanceProgram_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_equipmentCalibrationMaintenanceProgram" ADD CONSTRAINT "_equipmentCalibrationMaintenanceProgram_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pcwManagementPractices" ADD CONSTRAINT "_pcwManagementPractices_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pcwManagementPractices" ADD CONSTRAINT "_pcwManagementPractices_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_refLiterature" ADD CONSTRAINT "_refLiterature_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_refLiterature" ADD CONSTRAINT "_refLiterature_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_qaqcProgram" ADD CONSTRAINT "_qaqcProgram_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_qaqcProgram" ADD CONSTRAINT "_qaqcProgram_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_floorPlan" ADD CONSTRAINT "_floorPlan_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_floorPlan" ADD CONSTRAINT "_floorPlan_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pcoAccreditation" ADD CONSTRAINT "_pcoAccreditation_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pcoAccreditation" ADD CONSTRAINT "_pcoAccreditation_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_complianceCertificate" ADD CONSTRAINT "_complianceCertificate_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_complianceCertificate" ADD CONSTRAINT "_complianceCertificate_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hazardousWasteGenerator" ADD CONSTRAINT "_hazardousWasteGenerator_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hazardousWasteGenerator" ADD CONSTRAINT "_hazardousWasteGenerator_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoRegistrationCertificate" ADD CONSTRAINT "_ccoRegistrationCertificate_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoRegistrationCertificate" ADD CONSTRAINT "_ccoRegistrationCertificate_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForCyanide" ADD CONSTRAINT "_ccoForCyanide_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForCyanide" ADD CONSTRAINT "_ccoForCyanide_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForLead" ADD CONSTRAINT "_ccoForLead_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForLead" ADD CONSTRAINT "_ccoForLead_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForPolychlorinatedBiphenyls" ADD CONSTRAINT "_ccoForPolychlorinatedBiphenyls_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ccoForPolychlorinatedBiphenyls" ADD CONSTRAINT "_ccoForPolychlorinatedBiphenyls_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ptoAirPollution" ADD CONSTRAINT "_ptoAirPollution_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ptoAirPollution" ADD CONSTRAINT "_ptoAirPollution_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dischargePermits" ADD CONSTRAINT "_dischargePermits_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dischargePermits" ADD CONSTRAINT "_dischargePermits_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pnpPurchaserLicense" ADD CONSTRAINT "_pnpPurchaserLicense_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pnpPurchaserLicense" ADD CONSTRAINT "_pnpPurchaserLicense_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pdeaLicense" ADD CONSTRAINT "_pdeaLicense_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pdeaLicense" ADD CONSTRAINT "_pdeaLicense_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pnriLicense" ADD CONSTRAINT "_pnriLicense_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pnriLicense" ADD CONSTRAINT "_pnriLicense_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_certificateToOperateChemLab" ADD CONSTRAINT "_certificateToOperateChemLab_A_fkey" FOREIGN KEY ("A") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_certificateToOperateChemLab" ADD CONSTRAINT "_certificateToOperateChemLab_B_fkey" FOREIGN KEY ("B") REFERENCES "LaboratoryAttachments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
