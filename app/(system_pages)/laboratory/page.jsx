"use server";

import PageHeader from "@/components/page_header/page-header"
import styles from './page.module.css'
import LabModal from "@/components/lab_components/lab_modal/lab_modal";
import LabTable from "@/components/lab_components/lab_table/lab_table";
import { Suspense } from "react";
import { verifyAuth } from '@/app/lib/auth';
import { getAllLabsForTable } from "@/app/lib/lab_actions";
import { redirect } from "next/navigation";

export default async function LaboratoryPage(){

    const result = await verifyAuth()
    
    if(result.user === null){
        redirect("/login")
    }

    if(result.user.isDetailsComplete !== true){
        redirect(`/users/${result.user.id}`)
    }


    const labs = await getAllLabsForTable(result.user.role, result.user.id)

    return (
        <div className={styles.page_style}>
            <PageHeader title={"Laboratories"}/>
            <LabModal user={result.user}/>
            <div className={styles.table_container}>
                <Suspense fallback={<p>Loading data .........</p>}>  
                        <LabTable labs={labs}/>
                </Suspense>
            </div>
        </div>
    )
}