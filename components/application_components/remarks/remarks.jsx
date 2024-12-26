"use client";

import styles from './component.module.css';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Image from 'next/image';
import { useState,useActionState, useEffect } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import ApplicationHeader from '../application_header/application_header';
import { addRemark } from '../../../app/lib/application_actions';
import { isEMBEmployee } from '@/app/lib/helper';


export default function Remarks(props){

    const user = props.user
    const application = props.application
    const allRemarks = props.remarks
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")
    const isEMB = isEMBEmployee(user.role)
    const [remarkType, setRemarkType] = useState(isEMB === true ? "internal" : "external")
    const [formState, formAction] = useActionState(addRemark, {error:null})


    const [filteredRemarks, setFilteredRemarks] = useState(allRemarks[remarkType])


    useEffect(() => {
        setFilteredRemarks(allRemarks[remarkType])
    },[remarkType])



    useEffect(() => {
            if(Object.keys(formState).includes("success")){
                if(formState.error === null){
                    setSnackBarMessage(`Successfully added a remark.`)
                    setOpenSnackBar(true)
                    setSnackBarSeverity("success")
                    setFilteredRemarks(allRemarks[remarkType])
                } else {
                    setSnackBarMessage("Unable to add remark.")
                    setOpenSnackBar(true)
                    setSnackBarSeverity("error")
                }
            }
          },[formState])
    

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };


    


    const handleChangeRemarkType = (event, remarkType) => {
        if (remarkType !== null) {
            setRemarkType(remarkType);
          }
        
    };

    return (
        <>
            <ApplicationHeader application={application} user={user}/>

            <div className={styles.header_container}>
                <p className={styles.profile_header}>Remarks</p>
            </div>

            <div className={styles.details_container_column}>
                <form action={formAction} className={styles.form_style}>
                    {isEMB && 
                        <ToggleButtonGroup
                            color="primary"
                            value={remarkType}
                            exclusive
                            onChange={handleChangeRemarkType}
                            className={styles.toggle_group}
                            sx={{
                                "& .Mui-selected":{
                                    background:"cornflowerblue !important",
                                    color:"white !important",
                                    fontWeight:"700 !important"
                                }
                            }}
                        >
                            <ToggleButton value="internal" className={styles.toggle}>Internal</ToggleButton>
                            <ToggleButton value="external" className={styles.toggle}>External</ToggleButton>
                        </ToggleButtonGroup>
                    }
                    <textarea name="comment" className={styles.textarea} rows={5}/>
                    <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                    <input type="text" name='remarkType' hidden readOnly value={remarkType}/>
                    <input type="text" name='userId' hidden readOnly value={user.id}/>
                    <div className={styles.button_container}>
                        <button className={styles.submit_button}>Submit</button>
                    </div>
                </form>
                

                <div className={styles.comments_main_container}>
                    {filteredRemarks !== undefined &&
                    
                        filteredRemarks.map((item,idx) => {
                            return (
                            <div key={idx} className={styles.comment_container}>
                                <div className={styles.comment_header}>
                                    <div style={{display:"flex", flexDirection:"row", gap:"5px", alignItems:"end"}}>
                                        <Image 
                                            src={item.addedByProfilePicture} 
                                            height={40} 
                                            width={40} 
                                            alt='profile_picture'
                                            className={styles.profile_picture}
                                        />
                                        <p>{item.addedByName}</p>
                                    </div>
                                    
                                    <p>{item.created}</p>
                                </div>
                                <div className={styles.comment_content}>
                                    {item.content}
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>

            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar} anchorOrigin={{vertical:"bottom", horizontal:"center"}}>
                <Alert
                    onClose={handleCloseSnackBar}
                    severity={snackBarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        </>
    )
}