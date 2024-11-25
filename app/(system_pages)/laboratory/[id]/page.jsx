"use server";
import styles from './page.module.css';
import PageHeader from '@/components/page_header/page-header';
import { verifyAuth } from '@/app/lib/auth';
import { getLabById } from '@/app/lib/lab_actions';
import { capitalize } from '@/app/lib/helper';
import LabTabs from '@/components/lab_components/lab_tabs/lab_tabs';
import { redirect } from 'next/navigation';

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
    
    return (
        <div className={styles.page}>
            <PageHeader title={capitalize(lab.laboratoryName)}/>
            <LabTabs user={result.user} lab={lab}/>
        </div>
    )
}