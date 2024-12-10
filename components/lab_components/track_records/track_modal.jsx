'use client'

import {useEffect, useState} from "react";
import styles from './component.module.css';
import Image from "next/image";
import TrackForm from "./track_form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';


export default function TracksModal(props) {

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




    return (
        <>  
            <div className={styles.button_container}>
                <p></p>
                <p className={styles.profile_header_2}>Track Records</p>
                <button onClick={toggle_modal} className={styles.add_button}>
                    <AddIcon/>
                </button>
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
                            <h2>Add track record.</h2>
                            <p>Fill out the form to add a new track record.</p>
                            <hr />
                        </div>
                        <TrackForm 
                            toggle_function={toggle_modal} 
                            user={props.user} 
                            lab={props.lab} 
                            sampleTypes={props.sampleTypes}
                        />
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