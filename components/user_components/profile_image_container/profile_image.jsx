"use client";

import styles from './component.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image';
import { useActionState } from 'react';
import { updateProfilePicture } from '@/app/lib/user_actions';



export default function ProfileImage(props){

    const ref = useRef()
    const formRef = useRef()


    const [formState, formAction] = useActionState(updateProfilePicture, {error:null})


    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if(!file){
            return;
        }

        const fileReader = new FileReader()
        fileReader.onload =  () => {
            formRef.current.requestSubmit();
        };

        fileReader.readAsDataURL(file)
    }

    const handlePickClick = () => {
        ref.current.click()
    }



    return (
        <div className={styles.main_container}>
            <p className={styles.profile_header}>Profile image</p>
            <div className={styles.main_profile_picture_container}>
                <Image src={props.imageSource} priority alt='profile_picture' height={200} width={200} style={{borderRadius:"10px"}}/>
            </div>
            <form action={formAction} ref={formRef}>
                <input 
                    className={styles.input} 
                    type="file"
                    accept='image/png, image/jpg' 
                    name={"profile_picture"}
                    ref={ref}
                    onChange={handleImageChange}
                    hidden
                />
                <input type="text" name="userId" hidden value={props.userId} readOnly/>
                <button type='button' className={styles.profile_button} onClick={handlePickClick}>Update profile picture</button>
            </form>

        </div>
    )
}