"use client";
import styles from './component.module.css';
import {useState, useEffect, useActionState } from 'react';
import ApplicationHeader from '@/components/application_components/application_header/application_header';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { addAssessmentTeamMember,deleteTeamMember} from '@/app/lib/application_actions';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import { generic_setter } from '@/app/lib/helper';
import ApplicationAttachmentContainer from '@/components/application_components/application_files/attachment_container';


export default function ApplicationFiles(props){

    const user = props.user
    const application = props.application
    const records = props.applicationFiles !== null ? props.applicationFiles : []

    const [showAddModal, setShowAddModal] = useState(false)
    const [submitFormState, submitFormAction] = useActionState(addAssessmentTeamMember, {error:null}) 

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")


    const [selectedRecordId, setSelectedRecordId] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [deleteFormState, deleteFormAction] = useActionState(deleteTeamMember, {error:null})




    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    const toggle_add_modal = () => {
        setShowAddModal(!showAddModal)
    }


    useEffect(() => {
        if(Object.keys(submitFormState).includes("success")){
            toggle_add_modal()
            if(submitFormState.error === null){
                setSnackBarMessage(`Successfully added assessment team member.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add assessment team member.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[submitFormState])



    function toggle_delete_modal() {
        setShowModalDelete(!showModalDelete)
  
        if(!showModalDelete === false){
          setSelectedRecordId("")
          setSelectedType("")
        }
      }


      useEffect(() => {
        if(Object.keys(deleteFormState).includes("success")){
            toggle_delete_modal()
            if(deleteFormState.error === null){
                setSnackBarMessage(`Team member successfully removed.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to remove team member")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deleteFormState])


    return (
        <>
            <ApplicationHeader application={application} user={user}/>

            <div className={styles.header_container}>
                <p className={styles.profile_header}>Application Files</p>
            </div>


            <ApplicationAttachmentContainer
                title={""}
                application={application}
                file_type={"application_file"}
                records={records}
                user = {props.user}
                isRequired = {false}
            />


            {showModalDelete && <div className={styles.overlay}></div>}

            {showModalDelete &&     
                <div className={styles.sub_modal_container}>
                    <div className={styles.close_button_container}>
                        <Image 
                            src="/icons/close-icon.png" 
                            alt="close-icon" 
                            height={15} 
                            width={15}
                            onClick={toggle_delete_modal}
                            className={styles.close_button}
                        />
                    </div>


                    <div className={styles.form_container}>
                    <div className={styles.form_header}>
                        <h2 className={styles.modal_header}>Delete team member</h2>
                        <p className={styles.modal_sub_header}>Are you sure you want to delete this team member?</p>
                        <hr />
                    </div>
                    <form action={deleteFormAction}>
                        <input type="text" name='recordId' hidden readOnly value={selectedRecordId}/>
                        <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                        <input type="text" name='selectedType' hidden readOnly value={selectedType}/>
                        <div className={styles.row_button_container}>
                            <button className={styles.remove_button_cancel} onClick={toggle_delete_modal}>
                                Cancel
                            </button>
                            <button className={styles.remove_button}>
                                Delete
                            </button>
                        </div>
                    </form>
                    
                    </div>

                </div>
            }

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