'use client'
import styles from './component.module.css';
import { useActionState, useState, useEffect} from 'react';
import { addAccreditationRecord } from '@/app/lib/lab_actions';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

export default function AccreditationForm({toggle_function, user, lab}){

    const [formState, formAction] = useActionState(addAccreditationRecord, {error:null})
    const [certificate, setCertificate] = useState("")
    const [fileName, setFileName] = useState("")


    useEffect(() => {
        if(Object.keys(formState).includes("success")){
            console.log("FORM STATE UPDATED: ", formState);
            toggle_function(formState);
        }
    }, [formState, toggle_function]);


    const fileUpload = (event) => {
        const file__ = event.target.files[0]
        setCertificate(file__)
        setFileName(file__.name)
    }
    
    return (
        <>
            <form action={formAction} className={styles.form_style}>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="body">Accrediting Body/Address:</label>
                        <input className={styles.input} type="text" name="body" required/>
                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="scope">Nature/Scope of accreditation:</label>
                        <input className={styles.input} type="text" name="scope" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="expiration">Expiration Date:</label>
                        <input className={styles.input} type="date" name="expiration" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="certificate">Certificate:</label>
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
                                    name='certificate'
                                    required
                                    onChange={fileUpload}
                                />
                            </Button>
                            {fileName === "" && 
                                <p className={styles.file_name}>
                                    {"upload certificate ..."}
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
                <input type="text" value={lab.id} name='labId' readOnly hidden required/>


                <hr />
                <div className={styles.button_container}>
                    {formState.error && <small 
                                                        style={{textAlign:"left", width:"100%", color:"red"}}>
                                                            {formState.error}
                                                    </small>}
                    <button className={styles.add_button}>
                        <SaveIcon style={{fill:"white", scale:"0.8"}}/>
                        Save
                    </button>
                </div>

            </form>
        </>
    )
}