-- AlterTable
ALTER TABLE "Laboratory" ADD COLUMN     "attachment_record_complete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lab_details_complete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "personnel_record_complete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "required_files_complete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "track_record_complete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Personnel" ALTER COLUMN "licenseId" DROP NOT NULL;
