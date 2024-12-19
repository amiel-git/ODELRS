import styles from './page.module.css';
import PageHeader from "@/components/page_header/page-header";
import UserModal from '@/components/user_components/user_modal/user-modal';
import { Suspense } from 'react';
import { verifyAuth } from '@/app/lib/auth';
import UserTable from '@/components/user_components/user_table/user_table';
import { getAllUsersForTable } from '@/app/lib/user_actions';
import { redirect } from 'next/navigation';

export default async function UsersPage(){
    // const result = await verifyAuth()
    
    // if(result.user === null){
    //     redirect("/login")
    // }

    // if(result.user.isDetailsComplete !== true){
    //     redirect(`/users/${result.user.id}`)
    // }

    const users = await getAllUsersForTable("admin")


    return (
        <div className={styles.user_page}>
            <PageHeader title={"Users"}/>
            <UserModal/>
            <div className={styles.table_container}>
                <Suspense fallback={<p>Loading data .........</p>}>  
                        <UserTable users={users}/>
                </Suspense>
            </div>
        </div>
    )
}