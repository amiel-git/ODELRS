'use client'
import styles from './component.module.css';
import { useActionState, useState, useEffect} from 'react';
import { addScopeOfRecognition } from '@/app/lib/application_actions';
import SaveIcon from '@mui/icons-material/Save';
import { generic_setter } from '@/app/lib/helper';

export default function ScopeForm({toggle_function, user, applicationId, sampleTypes}){

    const [formState, formAction] = useActionState(addScopeOfRecognition, {error:null})
    const [certificate, setCertificate] = useState("")
    const [fileName, setFileName] = useState("")


    const [selected_sampletype_idx, set_selected_sampletype_idx] = useState(0)
    const [selected_sampletypeId, set_selected_sampletypeId] = useState(sampleTypes[0].id)

    const [selected_parameter_idx, set_selected_parameter_idx] = useState(0)
    const [selected_parameterId, set_selected_parameterId] = useState(
        sampleTypes[0].parameters[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].id
    )

    const [selected_method_idx, set_selected_method_idx] = useState(0)
    const [selected_methodId, set_selected_methodId] = useState(
        sampleTypes[0].parameters[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].sampleMethods[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].sampleMethods[0].id
    )
    
    
    
    const [selected_ref_idx, set_selected_ref_idx] = useState(0)
    const [selected_refId, set_selected_selected_refId] = useState(
        sampleTypes[0].parameters[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].sampleMethods[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].sampleMethods[0].sampleReferences[0] === undefined ? 0 :
        sampleTypes[0].parameters[0].sampleMethods[0].sampleReferences[0].id
    )

    useEffect(() => {
        set_selected_parameter_idx(0)
        set_selected_method_idx(0)
        set_selected_ref_idx(0)

        set_selected_sampletypeId(sampleTypes[selected_sampletype_idx].id)


        console.log("Def parameter: ",sampleTypes[selected_sampletype_idx])
        set_selected_parameterId(
            sampleTypes[selected_sampletype_idx].parameters[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].id
        )
        set_selected_methodId(
            sampleTypes[selected_sampletype_idx].parameters[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].sampleMethods[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].sampleMethods[0].id
        )
        set_selected_selected_refId(
            sampleTypes[selected_sampletype_idx].parameters[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].sampleMethods[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].sampleMethods[0].sampleReferences[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[0].sampleMethods[0].sampleReferences[0].id
        )
    },[selected_sampletype_idx])

    useEffect(() => {
        set_selected_method_idx(0)
        set_selected_ref_idx(0)

        set_selected_parameterId(sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].id)


        set_selected_methodId(
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[0].id
        )
        set_selected_selected_refId(
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[0].sampleReferences[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[0].sampleReferences[0].id
        )
    },[selected_parameter_idx])

    useEffect(() => {
        set_selected_ref_idx(0)

        set_selected_methodId(sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx].id)
        
        set_selected_selected_refId(
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx].sampleReferences[0] === undefined ? 0 :
            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx].sampleReferences[0].id
        )
    },[selected_method_idx])



    useEffect(() => {
        if(Object.keys(formState).includes("success")){
            toggle_function(formState);
        }
    }, [formState, toggle_function]);
    
    return (
        <>
            <form action={formAction} className={styles.form_style}>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="sampleType">Sample:</label>
                        <select 
                            className={styles.input} 
                            name='sampleType'
                            value={selected_sampletype_idx}
                            required
                            onChange={generic_setter(set_selected_sampletype_idx)}
                        >
                            {sampleTypes.map((item,idx) => {
                                return (
                                    <option key={idx} value={idx}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="parameter">Parameter:</label>
                        <select 
                            className={styles.input} 
                            name='parameter'
                            value={selected_parameter_idx}
                            required
                            onChange={generic_setter(set_selected_parameter_idx)}
                        >
                            {sampleTypes[selected_sampletype_idx].parameters.map((item,idx) => {
                                return (
                                    <option key={idx} value={idx}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="method">Method:</label>
                        <select 
                            className={styles.input} 
                            name='method'
                            value={selected_method_idx}
                            onChange={generic_setter(set_selected_method_idx)}
                        >   
                            {sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx] !== undefined &&
                            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods.map((item,idx) => {
                                return (
                                    <option key={idx} value={idx} title={item.name}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="reference">Reference:</label>
                        <select 
                            className={styles.input} 
                            name='reference'
                            value={selected_ref_idx}
                            onChange={generic_setter(set_selected_method_idx)}
                        >   
                            {sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx] !== undefined &&
                            sampleTypes[selected_sampletype_idx].parameters[selected_parameter_idx].sampleMethods[selected_method_idx].sampleReferences.map((item,idx) => {
                                return (
                                    <option key={idx} value={idx} title={item.name}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>


                <input type="text" value={user.id} name='userId' readOnly hidden required/>
                <input type="text" value={applicationId} name='applicationId' readOnly hidden required/>

                <input type="text" value={selected_sampletypeId} name='sampleTypeId' readOnly hidden required/>
                <input type="text" value={selected_parameterId} name='parameterId' readOnly hidden required/>
                <input type="text" value={selected_methodId} name='methodId' readOnly hidden required/>
                <input type="text" value={selected_refId} name='referenceId' readOnly hidden required/>


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