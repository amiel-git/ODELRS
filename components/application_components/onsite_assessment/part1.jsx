"use client";


import { capitalize } from '@/app/lib/helper';
import styles from './component.module.css';
import { useState,useActionState, useEffect, useRef } from 'react';
import { assignPersonnelInterviewed } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



export default function Part1(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const team = application.onsite_assessment.assessmentTeam
    const part = props.part
    const checklists = props.checklists

    const personnelFormRef = useRef()
    const personnels = lab?.personnels ?? []
    const [selectedPersonnel, setSelectedPersonnel] = useState(checklists[part]?.personnelInterviewedId ?? "")
    const [personnelFormState, personnelFormAction] = useActionState(assignPersonnelInterviewed, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const onChangeInterviewedPersonnel = (event) => {
        setSelectedPersonnel(event.target.value)
        setTimeout(() =>{
            personnelFormRef.current.requestSubmit()
        },[100])
    }

    useEffect(() => {
        if(Object.keys(personnelFormState).includes("success")){
            if(personnelFormState.error === null){
                setSnackBarMessage(`Successfully updated personnel interviewed.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update onsite assessment.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[personnelFormState])


    const handleCloseSnackBar = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
            setOpenSnackBar(false);
    };


    return (
        <div className={styles.main_container}>
            <div className={styles.form_section}>
                <p className={styles.section_header}>Assessor</p>
                <div className={styles.details_container_row}>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>Name:</p>
                        <p className={styles.sub_header_value}>
                            {`${capitalize(team.external_assessor_mgmt?.userDetails?.firstName ?? "")} ${capitalize(team.external_assessor_mgmt?.userDetails?.lastName ?? "")}`}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>Email:</p>
                        <p className={styles.sub_header_value}>{team.external_assessor_mgmt.email}</p>
                    </div>
                </div>
            </div>

            <div className={styles.form_section}>
                <p className={styles.section_header}>Personnel Interviewed</p>
                <div className={styles.details_container_row}>
                    <form action={personnelFormAction} ref={personnelFormRef}>
                        <div className={styles.item_container}>
                            <p className={styles.sub_header}>Personnel:</p>
                            <select name="personnel" value={selectedPersonnel} onChange={onChangeInterviewedPersonnel} className={styles.input}>
                                <option value={""}>---</option>
                                {personnels.map((item, idx) => {
                                    return(
                                        <option key={idx} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input type="text" name="part" value={part} hidden readOnly />
                        </div>
                    </form> 
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
        </div>
    )
}