'use client';
import styles from './page.module.css';
import Link from 'next/link';

import { useActionState } from 'react';
import {userSignup} from '@/app/lib/user_actions';
import { useState, useEffect } from 'react';
import { generic_setter } from '../lib/helper';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { redirect as red, redirect } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SignUpPage() {
    const [formState, formAction] = useActionState(userSignup,{error:null})
    const [inputPassword, setInputPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [passwordMatched, setPasswordMatched] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false)

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setDisableSubmit(true)
        setOpenSnackBar(false);
        redirect("login")
    };



    useEffect(() => {
        if(inputPassword === confirmPassword){
            setPasswordMatched(true)
        } else {
            setPasswordMatched(false)
        }
    },[inputPassword,confirmPassword])


    const onChangeCheckbox = (event) => {
        setShowPassword(event.target.checked)
    }


    useEffect(() => {
        if(formState.error === null && Object.keys(formState).includes("success")){
            setSnackBarMessage("User successfully created!")
            setOpenSnackBar(true)
            setSnackBarSeverity("success")
        }
        else if(formState.error !== null){
            setSnackBarMessage("User creation error!")
            setOpenSnackBar(true)
            setSnackBarSeverity("error")
        }
    },[formState])


    return (
        <div className={styles.main_body}>
            <div className={styles.logo_container}>
                <div className={styles.form_container}>
                    <h2 className={styles.login_header}>Applicant Sign up</h2>

                    <form action={formAction} className={styles.form}> 
                        <div className={styles.form_row}>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="name">First name</label>
                                <input className={styles.input} type="text" name="first_name" placeholder='first name' required /> 
                            </div>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="name">Last name</label>
                                <input className={styles.input} type="text" name="last_name" placeholder='last name' required /> 
                            </div>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="name">Email</label>
                                <input className={styles.input} type="text" name="email" placeholder='email address' required /> 
                            </div>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="region">Region</label>
                                <select name='region' className={styles.input} required>
                                    <option value="car">CAR</option>
                                    <option value="ncr">NCR</option>
                                    <option value="r1">Region 1</option>
                                    <option value="r2">Region 2</option>
                                    <option value="r3">Region 3</option>
                                    <option value="r4a">Region 4a</option>
                                    <option value="r4b">Region 4b</option>
                                    <option value="r5">Region 5</option>
                                    <option value="r6">Region 6</option>
                                    <option value="r7">Region 7</option>
                                    <option value="r8">Region 8</option>
                                    <option value="r9">Region 9</option>
                                    <option value="r10">Region 10</option>
                                    <option value="r11">Region 11</option>
                                    <option value="r12">Region 12</option>
                                    <option value="r13">Region 13</option>
                                </select>
                            </div>
                        </div>    

                        <div className={styles.form_row}>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="address">Address</label>
                                <input className={styles.input} type="text" name="address" placeholder='Address' required /> 
                            </div>
                        </div>
 

                        <div className={styles.form_row}>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="password">Password</label>
                                <input className={styles.input} type={showPassword ? "text" : "password"} name="password" value={inputPassword} onChange={generic_setter(setInputPassword)} required />  
                            </div>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="confirm_password">Confirm password</label>
                                <input className={styles.input} type={showPassword ? "text" : "password"} name="confirm_password" value={confirmPassword} onChange={generic_setter(setConfirmPassword)} required />  
                            </div>
                            <div className={styles.form_item} style={{alignSelf:"end"}}>
                                <FormGroup sx={{color:"dimgray",
                                    "& span":{
                                        fontSize:"12px !important"
                                    },
                                }}>
                                    <FormControlLabel  control={<Checkbox style={{transform:"scale(0.8)"}} value={showPassword} onChange={onChangeCheckbox}/>} label="show password" />
                                </FormGroup>
                            </div>
                            <div className={styles.form_item}></div>
                        </div>

                        
                        <div className={styles.form_row_action}>
                            <div className={styles.form_item}>
                                {formState.error && <small style={{color:"red", textAlign:"center"}}>{formState.error}</small>}
                                {inputPassword !== "" && confirmPassword !== "" && passwordMatched === false &&
                                    <small style={{color:"red", textAlign:"center"}}>{"Password mismatch"}</small>
                                }
                                <button className={styles.login_button} disabled={!passwordMatched && !disableSubmit}>Signup</button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.signup_container}>
                        <small>Already have an account? <Link href={"/login"} style={{fontWeight:"700"}}>LOGIN</Link></small>
                    </div>
                </div>
            </div>

            <Snackbar open={openSnackBar} autoHideDuration={1000} onClose={handleCloseSnackBar} anchorOrigin={{vertical:"bottom", horizontal:"center"}}>
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