
"use client";
import styles from './component.module.css';
import { generic_setter } from '@/app/lib/helper';
import { useState, useEffect } from 'react';
import { convertRegionToReadable, convertRoleToReadable } from '@/app/lib/helper';
import Image from 'next/image';
import SaveIcon from '@mui/icons-material/Save';
import { useActionState } from 'react';
import { updateUser } from '@/app/lib/user_actions';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function UserUpdateForm(props){
    const user = props.user
    const userDetails = props.userDetails

    const [input_first_name, set_input_first_name] = useState(userDetails.firstName)
    const [input_last_name, set_input_last_name] = useState(userDetails.lastName)
    const [input_email, set_input_email] = useState(user.email)
    const [input_region, set_input_region] = useState(convertRegionToReadable(user.region))
    const [input_role, set_input_role] = useState(convertRoleToReadable(user.role))
    const [input_contact, set_input_contact] = useState(userDetails.contactNumber === null ? "" : userDetails.contactNumber)
    const [input_address, set_input_address] = useState(userDetails.address === null ? "" : userDetails.address)
    
    const [input_company_name, set_input_company_name] = useState(userDetails.companyName === null ? "" : userDetails.companyName)
    const [input_company_job_title, set_input_company_job_title] = useState((userDetails.companyJobTitle === null ? "" : userDetails.companyJobTitle))
    const [input_company_contact, set_input_company_contact] = useState((userDetails.companyContact === null ? "" : userDetails.companyContact))
    const [input_company_address, set_input_company_address] = useState((userDetails.companyAddress === null ? "" : userDetails.companyAddress))

    const [formState, formAction] = useActionState(updateUser, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")



    
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };


    useEffect(() => {
        if(user){
            if(user.isDetailsComplete === false){
                setSnackBarMessage("Please make sure to complete all the necessary profile information to activate your account.")
                setOpenSnackBar(true)
                setSnackBarSeverity("warning")
            }
        }
    },[])

    useEffect(() => {
        if(formState.error === null && Object.keys(formState).includes("success") && Object.keys(formState).includes("detailsComplete")){
            if(formState.detailsComplete === true){
                setSnackBarMessage("User successfully updated!")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            }
            else {
                setSnackBarMessage("Please make sure to add a signature and profile picture to activate your account.")
                setOpenSnackBar(true)
                setSnackBarSeverity("warning")
            }
        }
        else if(formState.error !== null){
            setSnackBarMessage(`User update error! ${formState.error}`)
            setOpenSnackBar(true)
            setSnackBarSeverity("error")
        }
    },[formState])

    const handlePhoneChange = (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
        
        if (input.length > 3 && input.length <= 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 3) {
          input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        }
        
        set_input_contact(input); // Update the state with the formatted phone number
      };

    const handleContactChange = (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
        
        if (input.length > 3 && input.length <= 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 3) {
          input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        }
        
        set_input_company_contact(input); // Update the state with the formatted phone number
      };

    
      const addStatusContainer = () => {
        return (
            <div className={styles.status_container}>
                <Image src={user.isDetailsComplete === true ? "/icons/check.png" : "/icons/remove.png"} alt={"indicator"} height={30} width={30} priority/>
                <p>{user.isDetailsComplete === true ? "User active" : "User inactive"}</p>
            </div>
        )
      }
    return (
        <>  
            <div className={styles.header_container_end}>
                {addStatusContainer()}
            </div>

            <div className={styles.header_container}>
                <p className={styles.profile_header_2}>Personal Details</p>
            </div>
            
            

            <form action={formAction} className={styles.form_style}>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <p className={styles.item_label}>First name:</p>
                        <input type="text" className={styles.item_input} name='first_name' value={input_first_name} onChange={generic_setter(set_input_first_name)} required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Last name:</p>
                        <input type="text" className={styles.item_input} name='last_name' value={input_last_name} onChange={generic_setter(set_input_last_name)} required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Email address:</p>
                        <input type="text" className={styles.item_input} name='email' value={input_email} onChange={generic_setter(set_input_email)} disabled readOnly required/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Region:</p>
                        <input type="text" className={styles.item_input} name='region' value={input_region} onChange={generic_setter(set_input_region)} disabled required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Role:</p>
                        <input type="text" className={styles.item_input} name='role' value={input_role} onChange={generic_setter(set_input_role)} disabled required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Contact number:</p>
                        <input type="text" className={styles.item_input} name='contact_number' value={input_contact} onChange={handlePhoneChange} placeholder="(xxx) xxx-xxxx" required/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Permanent address:</p>
                        <textarea rows={3} type="text" className={styles.item_input_textarea} name='address' value={input_address} onChange={generic_setter(set_input_address)} required/>
                    </div>
                </div>

                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>Company Details</p>
                </div>

                <div className={styles.row}>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Company name:</p>
                        <input type="text" className={styles.item_input} name='company_name' value={input_company_name} onChange={generic_setter(set_input_company_name)} required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Job title:</p>
                        <input type="text" className={styles.item_input} name='job_title' value={input_company_job_title} onChange={generic_setter(set_input_company_job_title)} required/>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Company contact number:</p>
                        <input type="text" className={styles.item_input} name='company_contact' value={input_company_contact} onChange={handleContactChange} required/>
                    </div>
                    
                </div>

                <div className={styles.row}>
                    <div className={styles.item}>
                        <p className={styles.item_label}>Company address:</p>
                        <textarea 
                            rows={3} type="text" 
                            className={styles.item_input_textarea} 
                            name='company_address' 
                            value={input_company_address} 
                            onChange={generic_setter(set_input_company_address)} 
                            required
                        />
                    </div>
                </div>

                <input type="text" name='userId' value={user.id} readOnly hidden/>

                <hr style={{marginTop:"20px", marginBottom:"0px"}}/>
                <div className={styles.row_end}>
                    <button className={styles.submit_button}>
                        <SaveIcon style={{fill:"white"}}/>
                        Save
                    </button>
                </div>
            </form>
            <Snackbar open={openSnackBar} autoHideDuration={5000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}>
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