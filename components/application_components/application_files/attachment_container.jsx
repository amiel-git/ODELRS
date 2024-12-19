"use client";

import { useState, useEffect } from 'react';
import styles from './component.module.css';
import ApplicationAttachmentTable from '@/components/application_components/application_files/attachment_table';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useActionState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import { uploadApplicationFile } from '@/app/lib/file_management';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { capitalize } from '@/app/lib/helper';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });




export default function ApplicationAttachmentContainer(props){

    const [showModal, setShowModal] = useState(false)
    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState("")

    const title = String(props.title)

    const user = props.user
    const application = props.application

    const records = props.records === undefined ? [] : props.records


    const [formState, formAction] = useActionState(uploadApplicationFile, {error:null})


    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    function toggle_modal() {
        setShowModal(!showModal)
        setFileName("")
        setFile("")
    }

    useEffect(() => {
        if(Object.keys(formState).includes("success")){
            toggle_modal()
            if(formState.error === null){
                setSnackBarMessage(`File successfully added.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add accreditation record!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    },[formState])


    const fileUpload = (file_setter,filename_setter) => (event) => {
        const file__ = event.target.files[0]
        file_setter(file__)
        filename_setter(file__.name)
    }



    return (
        <div className={styles.attachment_container}>
            <div className={styles.attachment_header_container}>
                <button onClick={toggle_modal} className={styles.add_button}>
                    <AddIcon/>
                </button>
            </div>
            <div className={styles.attachment_table_container}>
                <ApplicationAttachmentTable records={props.records} user={props.user}/>
            </div>


            {showModal && <div className={styles.overlay}></div>}

            {showModal &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image 
                            src="/icons/close-icon.png" 
                            alt="close-icon" 
                            height={15} 
                            width={15}
                            onClick={toggle_modal}
                            className={styles.close_button}
                        />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h3 style={{fontSize:"18px"}}>Add new file{title}</h3>
                            <p style={{fontSize:"13px"}}></p>
                            <hr />
                        </div>

                       
                        <form action={formAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.label} htmlFor="input_file">File:</label>
                                    <div className={styles.upload_button_container}>
                                        <Button
                                        component="label"
                                        variant="contained"
                                        tabIndex={-1}
                                        sx={{width:"20px",
                                            "& .MuiButton-icon":{
                                                margin:"0px"
                                            }
                                        }}
                                        startIcon={<CloudUploadIcon />}
                                        >
                                            <VisuallyHiddenInput
                                                type="file"
                                                accept=".pdf"
                                                required
                                                name='input_file'
                                                onChange={fileUpload(setFile, setFileName)}
                                            />
                                        </Button>
                                        {fileName === "" && 
                                            <p className={styles.file_name}>
                                                {"upload file ..."}
                                            </p>
                                        }
                                        {fileName !== "" && 
                                            <p className={styles.file_name}>
                                                {fileName}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>

                            <input type="text" value={user.id} name='userId' readOnly hidden required/>
                            <input type="text" value={application.id} name='applicationId' readOnly hidden required/>
                            <input type="text" value={props.file_type} name='fileType' readOnly hidden required/>


                            <hr />
                            <div className={styles.button_container}>
                                {formState.error && <small 
                                                                    style={{textAlign:"center", width:"100%", color:"red"}}>
                                                                        {formState.error}
                                                                </small>}
                                <button className={styles.add_button}>
                                    <SaveIcon style={{fill:"white", scale:"0.8"}}/>
                                    Save
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
        </div>
    )
}