"use client";
import styles from './page-header.module.css';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Image from 'next/image';
import addApplication from '@/app/lib/application_actions';
import { useActionState } from 'react';

export default function PageHeaderWithAction(props){

    const lab = props.lab
    const [formState, formAction] = useActionState(addApplication, {error:null})
    const [showModal, setShowModal] = useState(false)

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };


    function toggle_modal(result={}) {
        setShowModal(!showModal)
        if(Object.keys(result).includes("success")){
            if(result.error === null){
                setSnackBarMessage("Accreditation record successfully added.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add accreditation record!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }


    useEffect(() => {
        if(Object.keys(formState).includes("success")){
            toggle_modal()
            if(formState.error === null){
                setSnackBarMessage(`Successfully created the ELR application.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to create ELR application!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[formState])

    
    return (
        <>
        <div className={styles.header_container_2}>
            <h1 className={styles.header_text}>{props.title}</h1>
            {props.showButton && <button className={styles.application_button} onClick={toggle_modal}>New Application</button>}
        </div>

        {showModal && <div className={styles.overlay}></div>}

        {showModal &&     
            <div className={styles.modal_container}>
                <div className={styles.close_button_container}>
                    <Image src="/icons/close-icon.png" 
                            alt="close-icon" 
                            height={15} 
                            width={15}
                            onClick={toggle_modal}
                            className={styles.close_button}
                            />
                </div>

                <div className={styles.form_container}>
                    <div className={styles.form_header}>
                        <h2 className={styles.modal_header}>New ELR Application</h2>
                        <p className={styles.modal_sub_header}>Are you sure you want to create an application for {props.lab.laboratoryName}?</p>
                        <hr />
                    </div>
                    <form action={formAction}>
                      <input type="text" name='labId' hidden readOnly value={lab.id}/>
                      <div className={styles.row_button_container}>
                            <button className={styles.add_buton_cancel} onClick={toggle_modal}>
                              Cancel
                          </button>
                          <button className={styles.add_buton}>
                              Create
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