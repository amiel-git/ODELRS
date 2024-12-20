"use server";
import styles from './page.module.css';
import PageHeaderWithAction from '@/components/page_header/page-header-action';
import { verifyAuth } from '@/app/lib/auth';
import { getLabById } from '@/app/lib/lab_actions';
import { capitalize } from '@/app/lib/helper';
import LabTabs from '@/components/lab_components/lab_tabs/lab_tabs';
import { redirect } from 'next/navigation';
import getAllSampleTypes from '@/app/lib/lab_sample_actions';
import { 
            getLaboratoryAccreditationRecords,
            getPersonnelRecords,
            getAllTrackRecords,
            getAllLabAttachments,
            isLabReadyForApplication
        } from '@/app/lib/lab_actions';

export default async function PerLabPage({params}){
    
    const result = await verifyAuth()
    
    if(result.user === null){
        redirect("/login")
    }

    if(result.user.isDetailsComplete !== true){
        redirect(`/users/${result.user.id}`)
    }

    

    const parameters = await params
    const lab = await getLabById(parameters.id)
    const accreditationRecords = await getLaboratoryAccreditationRecords(parameters.id)
    const personnelRecords = await getPersonnelRecords(parameters.id)
    const trackRecords = await getAllTrackRecords(parameters.id)

    const sampleTypes = await getAllSampleTypes()
    const labAttachments = await getAllLabAttachments(parameters.id)

    const labCheck = await isLabReadyForApplication(parameters.id)
    
    const isLabReady = labCheck.result

    if(result.user.role === "applicant"){
        if(result.user.id !== lab.addedById){
            redirect("/laboratory")
        }
    }

    return (
        <div className={styles.page}>
            <PageHeaderWithAction 
                title={capitalize(lab.laboratoryName)} 
                isLabReady={isLabReady}
                user={result.user} 
                lab={lab}
                sampleTypes={sampleTypes}
            />
            <LabTabs 
                user={result.user} 
                lab={lab}
                accreditationRecords={accreditationRecords}
                personnelRecords={personnelRecords}
                sampleTypes={sampleTypes}
                trackRecords={trackRecords}
                labAttachments={labAttachments}
                showButton={isLabReady}
            />
        </div>
    )
}