"use server";
import styles from './page.module.css';
import PageHeader from '@/components/page_header/page-header';
import { verifyAuth } from '@/app/lib/auth';
import { capitalize } from '@/app/lib/helper';
import { redirect } from 'next/navigation';
import { getApplicationById } from '@/app/lib/application_actions';
import getAllSampleTypes from '@/app/lib/lab_sample_actions';
import ApplicationTabs from '@/components/application_components/application_tabs/application_tabs';
export default async function PerApplicationPage({params}){
    
    const result = await verifyAuth()
    
    if(result.user === null){
        redirect("/login")
    }

    if(result.user.isDetailsComplete !== true){
        redirect(`/users/${result.user.id}`)
    }


    const parameters = await params
    const application = await getApplicationById(parameters.id)
    const sampleTypes = await getAllSampleTypes()

    return (
        <div className={styles.page}>
            <PageHeader title={`ELR Application - ${capitalize(application.laboratory.laboratoryName)}`} 
            />

            <ApplicationTabs
                sampleTypes={sampleTypes}
            />
        </div>
    )
}