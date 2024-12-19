-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "ELRApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
