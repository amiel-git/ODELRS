"use server";
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { getUserById } from '@/app/lib/user_actions';
import ProfileImage from '@/components/user_components/profile_image_container/profile_image';
import Signature from '@/components/user_components/signature_image_container/signature';
import PageHeader from '@/components/page_header/page-header';
import { verifyAuth } from '@/app/lib/auth';
import UserUpdateForm from '@/components/user_components/user_update_form/user_update_form';


export default async function ProfilePage({params}){

    const result = await verifyAuth()
    
    // if(result.user === null){
    //     redirect("/login")
    // }

    const parameters = await params

    if(result.user.role !== "admin" && result.user.role !== "elr_secretariat" && parseInt(result.user.id) !== parseInt(parameters.id)){
        notFound()
    }


    const user = await getUserById(parseInt(parameters.id))
    if(!user){
        notFound()
    }

    
    const userDetails = user.userDetails
    const profilePicture = userDetails.profilePicture === "" || userDetails.profilePicture === null ? "/images/default_profile.png" : userDetails.profilePicture
    const signature = userDetails.signature === "" || userDetails.signature === null ? "/images/default_signature.png" : userDetails.signature
    
    return (
        <div className={styles.user_page}>
            <PageHeader title={"User profile"}/>
            
            <div className={styles.profile_body}>
                <div className={styles.profile_section_left}>
                    <ProfileImage imageSource={profilePicture} userId={user.id}/>
                    <Signature imageSource={signature} userId={user.id}/>
                </div>

                <div className={styles.profile_section_right}>
                    <UserUpdateForm user={user} userDetails={userDetails}/>
                </div>
            </div>
            
        </div>
    )
}