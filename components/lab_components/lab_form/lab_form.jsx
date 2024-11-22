'use client'
import styles from './component.module.css';
import { useActionState, useState, useEffect} from 'react';
import addLab from '@/app/lib/lab_actions';
import { useCallback } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { provincesByRegion } from '@/app/mappings/provinceByRegion';
import { generic_setter } from '@/app/lib/helper';


export default function LabForm({toggle_function, user}){

    const [formState, formAction] = useActionState(addLab, {error:null})
    const [selectedRegion, setSelectedRegion] = useState("car")

    useEffect(() => {
        if(Object.keys(formState).includes("done")){
            console.log("FORM STATE UPDATED: ", formState);
            toggle_function(formState);
        }
    }, [formState]);
    
    return (
        <>
            <form action={formAction} className={styles.form_style}>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lab_name">Laboratory name</label>
                        <input className={styles.input} type="text" name="lab_name" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="region">Region</label>
                        <select name='region' className={styles.input} value={selectedRegion} onChange={generic_setter(setSelectedRegion)} required>
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

                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="province">Province</label>
                        <select name='province' className={styles.input} required>
                            {provincesByRegion[selectedRegion].map((province, idx) => {
                                return (
                                    <option value={province.value} key={idx}>{province.label}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="address">Address</label>
                        <textarea rows={3} className={styles.input_textarea} type="text" name="address" required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lat">Latitude</label>
                        <input className={styles.input} type="number" name="lat" step={0.0000000000000000000001} required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lon">Longitude</label>
                        <input className={styles.input} type="number" name="lon" step={0.0000000000000000000001} required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="date_established">Date established</label>
                        <input className={styles.input} type="date" name="date_established" required/>
                    </div>
                    <div className={styles.form_item}>
                        {/* blank item */}
                    </div>
                </div>

                <input type="text" value={user.id} name='userId' readOnly hidden required/>

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