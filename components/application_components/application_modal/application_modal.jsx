'use client'

import {useEffect, useState} from "react";
import styles from './component.module.css'
import Image from "next/image";
import LabForm from "../application_form/application_form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



export default function ApplicationModal(props) {

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
        if(Object.keys(result).includes("done")){
            if(result.error === null){
                setSnackBarMessage("Laboratory successfully created! Please proceed in providing the necessary details to file an ELR application.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to create laboratory!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }




    return (
        <>  
            <div className={styles.button_container}>
                <button onClick={toggle_modal} className={styles.add_button}>Add ELR Application</button>
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
                            <h2>Add laboratory</h2>
                            <p>Fill out the form to add a new laboratory record.</p>
                            <hr />
                        </div>
                        <LabForm toggle_function={toggle_modal} user={props.user}/>
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