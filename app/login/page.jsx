'use client';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useActionState } from 'react';
import loginAction from '../lib/auth';


export default function LoginPage() {
    const [formState, formAction] = useActionState(loginAction,{error:null})
    
    return (
        <div className={styles.main_body}>
            <div className={styles.logo_container}>
                <div className={styles.form_container}>
                    <Image src="/images/denr_logo.png" alt="denr-logo" className={styles.logo} height={150} width={150}/>
                    <p className={styles.logo_text_large}>Online DENR Environmental Laboratory Recognition System</p>
                    <p className={styles.logo_text_regular}>( ODELRS )</p>
                    <h2 className={styles.login_header}>Login</h2>

                    <form action={formAction} className={styles.form}> 
                        <div className={styles.form_row}>
                            <label className={styles.label} htmlFor="name">Email</label>
                            <input className={styles.input} type="text" name="email" required />  
                        </div>    

                        <div className={styles.form_row_no_margin}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <input className={styles.input} type="password" name="password" required />  
                        </div>

                        <div className={styles.form_row_right_no_border}>
                            <small><Link href={"/"}>forgot password?</Link></small>
                        </div>

                        
                        <div className={styles.form_row}>
                            {formState.error && <small style={{color:"red"}}>{formState.error}</small>}
                            <button className={styles.login_button}>Login</button>
                        </div>
                    </form>
                    <div className={styles.signup_container}>
                        <small>{"Don' have an account yet?"} <Link href={"/signup"} style={{fontWeight:"700"}}>SIGN UP</Link></small>
                    </div>
                </div>
            </div>

        </div>
    )
}