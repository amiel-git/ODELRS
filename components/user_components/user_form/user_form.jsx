'use client'
import styles from './user_form.module.css';
import { useActionState } from 'react';
import addUser from '@/app/lib/user_actions';
import { useCallback } from 'react';
import role_mapping from '@/app/mappings/role_mapping';


export default function UserForm({toggle_function}){

    const [formState, formAction] = useActionState(addUser, {error:null})

    useCallback(() => {
        if(Object.keys(formState).includes("status")){
            if(formState.status === "done"){
                toggle_function()
            }
        }
    },[formState,toggle_function])

    
    return (
        <>
            <form action={formAction} onSubmit={toggle_function} className={styles.form_style}>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="first_name">First name</label>
                        <input className={styles.input} type="text" name="first_name" required/>
                    </div>

                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="last_name">Last name</label>
                        <input className={styles.input} type="text" name="last_name" required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.input} type="email" name="email" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="role">Role</label>
                        <select name='role' className={styles.input} required>
                            {role_mapping.map((item) => {
                                return <option key={item.value} value={item.value}>{item.label}</option>
                            })}
                        </select>
                    </div>

                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="region">Region</label>
                        <select name='region' className={styles.input} required>
                            <option value="car">CAR</option>
                            <option value="central_office">Central Office</option>
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

                    <div className={styles.form_item}>
                        {/* Filler item */}
                    </div>
                </div>
                <hr />
                <div className={styles.button_container}>
                    {formState.error && <small 
                                                        style={{textAlign:"left", width:"100%", color:"red"}}>
                                                            {formState.errors[0]}
                                                    </small>}
                    <button className={styles.add_button}>Add</button>
                </div>

            </form>
        </>
    )
}