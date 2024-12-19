"use server";

import PageHeader from "@/components/page_header/page-header"
import styles from './page.module.css'
import ApplicationModal from '@/components/application_components/application_modal/application_modal';
import ApplicationTable from '@/components/application_components/applicaton_table/application_table';
import { Suspense } from "react";
import { verifyAuth } from '@/app/lib/auth';
import { getAllApplications } from "@/app/lib/application_actions";
import { redirect } from "next/navigation";

export default async function ApplicationPage(){

    const result = await verifyAuth()
    
    // if(result.user === null){
    //     redirect("/login")
    // }

    if(result.user.isDetailsComplete !== true){
        redirect(`/users/${result.user.id}`)
    }


    const applications = await getAllApplications(result.user.role, result.user.id)

    return (
        <div className={styles.page_style}>
            <PageHeader title={"ELR Applications"}/>
            <ApplicationModal user={result.user}/>
            <div className={styles.table_container}>
                <Suspense fallback={<p>Loading data .........</p>}>  
                        <ApplicationTable applications={applications}/>
                </Suspense>
            </div>
        </div>
    )
}