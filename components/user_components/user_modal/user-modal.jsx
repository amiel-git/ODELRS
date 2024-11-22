'use client'

import {useState} from "react";
import styles from './user-modal.module.css'
import Image from "next/image";
import UserForm from "../user_form/user_form";

export default function UserModal() {

    const [showModal, setShowModal] = useState(false)

    function toggle_modal() {
        setShowModal(!showModal)
    }

    return (
        <>  
        <div className={styles.button_container}>
            <button onClick={toggle_modal} className={styles.add_button}>Add user</button>
        </div>
            
            {showModal && <div className={styles.overlay}></div>}

            {showModal &&     
                <div className={styles.user_modal_container}>
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
                            <h1>Add user</h1>
                            <p>Fill out the form to add a new system user.</p>
                            <hr />
                        </div>
                        <UserForm toggle_function={toggle_modal}/>
                    </div>
                    

                </div>
            }
        </>
    )
}