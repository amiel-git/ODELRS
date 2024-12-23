"use server";
import styles from './page.module.css';
import PageHeader from '@/components/page_header/page-header';
import { verifyAuth } from '@/app/lib/auth';
import { capitalize } from '@/app/lib/helper';
import { redirect } from 'next/navigation';
import { getApplicationById,
         getAllScopeForTable, 
         getFormsForApplication,
         getAllTeamMemberChoices,
         getTeamMembersForTable,
         getApplicationFilesForTable,
         getAllApplicationRemark,
         getApplicationChecklists
        } from '@/app/lib/application_actions';
import getAllSampleTypes from '@/app/lib/lab_sample_actions';
import ApplicationTabs from '@/components/application_components/application_tabs/application_tabs';
import { getAllUsersForCustodian } from '@/app/lib/user_actions';
import { getLabById,getPersonnelRecords } from '@/app/lib/lab_actions';

export default async function PerApplicationPage({params}){
    
    const result = await verifyAuth()
    
    if(result.user === null){
        redirect("/login")
    }

    if(result.user.isDetailsComplete !== true){
        redirect(`/users/${result.user.id}`)
    }

    const parameters = await params
    const application = await getApplicationById(parameters.id, result.user.role)
    const sampleTypes = await getAllSampleTypes()
    const scope_of_recognitions = await getAllScopeForTable(parameters.id)
    const forms = await getFormsForApplication(parameters.id)
    const laboratory = await getLabById(application.laboratoryId)

    const custodians = await getAllUsersForCustodian(getLabById)
    const teamMemberChoices = await getAllTeamMemberChoices(parameters.id)
    const teamMemberForTable = await getTeamMembersForTable(parameters.id)
    const applicationFiles = await getApplicationFilesForTable(parameters.id)
    const remarks = await getAllApplicationRemark(parameters.id)
    const checklists = await getApplicationChecklists(parameters.id)

    const personnelRecords = await getPersonnelRecords(application.laboratory.id)


    return (
        <div className={styles.page}>
            <PageHeader title={`ELR Application - ${capitalize(application.laboratory.laboratoryName)}`} 
            />

            <ApplicationTabs
                user={result.user}
                application={application}
                sampleTypes={sampleTypes}
                scope={scope_of_recognitions}
                custodians={custodians}
                forms={forms}
                labId={application.laboratoryId}
                lab={laboratory}
                teamMemberChoices={teamMemberChoices}
                teamMemberForTable={teamMemberForTable}
                applicationFiles={applicationFiles}
                remarks={remarks}
                checklists={checklists}
                personnelRecords={personnelRecords}
            />
        </div>
    )
}