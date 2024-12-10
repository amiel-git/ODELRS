'use client'
import styles from './component.module.css';
import { useActionState, useState, useEffect} from 'react';
import { addPersonnelRecord } from '@/app/lib/lab_actions';
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

export default function PersonnelForm({toggle_function, user, lab}){

    const [formState, formAction] = useActionState(addPersonnelRecord, {error:null})

    const [cv, setCv] = useState("")
    const [cvFileName, setCvFileName] = useState("")

    const [license, setLicense] = useState("")
    const [licenseFileName, setLicenseFileName] = useState("")


    useEffect(() => {
        if(Object.keys(formState).includes("success")){
            console.log("FORM STATE UPDATED: ", formState);
            toggle_function(formState);
        }
    }, [formState, toggle_function]);


    const fileUpload = (file_setter,filename_setter) => (event) => {
        const file__ = event.target.files[0]
        file_setter(file__)
        filename_setter(file__.name)
    }
    
    return (
        <>
            <form action={formAction} className={styles.form_style}>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="name">Full name:</label>
                        <input className={styles.input} type="text" name="name" required/>
                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="education">Highest Educational Attainment/ License Number:</label>
                        <input className={styles.input} type="text" name="education" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="job_title">Job Title:</label>
                        <input className={styles.input} type="text" name="job_title" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="experience">Years of experience in environmental analysis/ management:</label>
                        <input className={styles.input} type="number" name="experience" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="cv">CV / Resume</label>
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
                                    name='cv'
                                    onChange={fileUpload(setCv, setCvFileName)}
                                />
                            </Button>
                            {cvFileName === "" && 
                                <p className={styles.file_name}>
                                    {"upload resume ..."}
                                </p>
                            }
                            {cvFileName !== "" && 
                                <p className={styles.file_name}>
                                    {cvFileName}
                                </p>
                            }
                        </div>

                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="license">License</label>
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
                                    name='license'
                                    onChange={fileUpload(setLicense, setLicenseFileName)}
                                />
                            </Button>
                            {licenseFileName === "" && 
                                <p className={styles.file_name}>
                                    {"upload license ..."}
                                </p>
                            }
                            {licenseFileName !== "" && 
                                <p className={styles.file_name}>
                                    {licenseFileName}
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