"use client";


import { capitalize, convertArrayToString, generic_setter } from '@/app/lib/helper';
import styles from './component.module.css';
import { useState,useActionState, useEffect, useRef } from 'react';
import { assignPersonnelInterviewed, realTimeFormFunction,deletePart4Table1Data, addPart4Table1Data, addCalibrationData } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

export default function Part4(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const team = application.onsite_assessment.assessmentTeam
    const part = props.part
    const checklists = props.checklists


    const [showModal, setShowModal] = useState(false)
    const [showModalCalibration, setShowModalCalibration] = useState(false)
    
    
    //Form ref
    const personnelFormRef = useRef()

    

    const personnels = lab?.personnels ?? []
    const applicationFiles = props.applicationFiles
    const accreditationRecords = props.accreditationRecords

    const track_records = props.trackRecords
    const [checklist_data, set_checklist_data] = useState(checklists[part]?.data ?? {})
    const [selectedPersonnel, setSelectedPersonnel] = useState(checklists[part]?.personnelInterviewedId ?? "")
    const [personnelFormState, personnelFormAction] = useActionState(assignPersonnelInterviewed, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const [realtimeFormState, realtimeFormAction] = useActionState(realTimeFormFunction, {error:null})

    const [table1FormState, table1FormAction] = useActionState(addPart4Table1Data, {error:null})
    const [calibrationFormState,calibrationFormAction] = useActionState(addCalibrationData, {error:null})
    const [track_record_personnel, set_track_record_personnel] = useState("")
    const [selected_sample, set_selected_sample] = useState("")
    const [selected_sample_json, set_selected_sample_json] = useState({}) 


    const [deleteTable1FormState, deleteTable1FormAction] = useActionState(deletePart4Table1Data, {error:null})


    const realtimeForm1 = useRef();
    const realtimeForm2 = useRef();
    const realtimeForm3 = useRef();
    const realtimeForm4 = useRef();
    const realtimeForm5 = useRef();
    const realtimeForm6 = useRef();
    const realtimeForm7 = useRef();
    const realtimeForm8 = useRef();
    const realtimeForm9 = useRef();
    const realtimeForm10 = useRef();
    const realtimeForm11 = useRef();
    const realtimeForm12 = useRef();
    const realtimeForm13 = useRef();
    const realtimeForm14 = useRef();
    const realtimeForm15 = useRef();
    const realtimeForm16 = useRef();
    const realtimeForm17 = useRef();
    const realtimeForm18 = useRef();
    const realtimeForm19 = useRef();
    const realtimeForm20 = useRef();
    const realtimeForm21 = useRef();
    const realtimeForm22 = useRef();
    const realtimeForm23 = useRef();
    const realtimeForm24 = useRef();
    const realtimeForm25 = useRef();
    const realtimeForm26 = useRef();
    const realtimeForm27 = useRef();
    const realtimeForm28 = useRef();
    const realtimeForm29 = useRef();
    const realtimeForm30 = useRef();
    const realtimeForm31 = useRef();
    const realtimeForm32 = useRef();


    const [item1, set_item1] = useState(checklist_data?.item1 ?? "");
    const [item2, set_item2] = useState(checklist_data?.item2 ?? "");
    const [item3, set_item3] = useState(checklist_data?.item3 ?? "");
    const [item4, set_item4] = useState(checklist_data?.item4 ?? "");
    const [item5, set_item5] = useState(checklist_data?.item5 ?? "");
    const [item6, set_item6] = useState(checklist_data?.item6 ?? "");
    const [item7, set_item7] = useState(checklist_data?.item7 ?? "");
    const [item8, set_item8] = useState(checklist_data?.item8 ?? "");
    const [item9, set_item9] = useState(checklist_data?.item9 ?? "");
    const [item10, set_item10] = useState(checklist_data?.item10 ?? "");
    const [item11, set_item11] = useState(checklist_data?.item11 ?? "");
    const [item12, set_item12] = useState(checklist_data?.item12 ?? "");
    const [item13, set_item13] = useState(checklist_data?.item13 ?? "");
    const [item14, set_item14] = useState(checklist_data?.item14 ?? "");
    const [item15, set_item15] = useState(checklist_data?.item15 ?? "");
    const [item16, set_item16] = useState(checklist_data?.item16 ?? "");
    const [item17, set_item17] = useState(checklist_data?.item17 ?? "");
    const [item18, set_item18] = useState(checklist_data?.item18 ?? "");
    const [item19, set_item19] = useState(checklist_data?.item19 ?? "");
    const [item20, set_item20] = useState(checklist_data?.item20 ?? "");
    const [item21, set_item21] = useState(checklist_data?.item21 ?? "");
    const [item22, set_item22] = useState(checklist_data?.item22 ?? "");
    const [item23, set_item23] = useState(checklist_data?.item23 ?? "");
    const [item24, set_item24] = useState(checklist_data?.item24 ?? "");
    const [item25, set_item25] = useState(checklist_data?.item25 ?? "");
    const [item26, set_item26] = useState(checklist_data?.item26 ?? "");
    const [item27, set_item27] = useState(checklist_data?.item27 ?? "");
    const [item28, set_item28] = useState(checklist_data?.item28 ?? "");
    const [item29, set_item29] = useState(checklist_data?.item29 ?? "");
    const [item30, set_item30] = useState(checklist_data?.item30 ??(""));
    const [item31, set_item31] = useState(checklist_data?.item31 ?? "");
    const [item32, set_item32] = useState(checklist_data?.item32 ?? "");


    const handleRealTimeSubmit = (formRef) => {
        setTimeout(() =>{
            formRef.current.requestSubmit()
        },[200])
    }


    useEffect(() => {
        try {
            set_selected_sample_json(JSON.parse(selected_sample))
        } catch (error) {
            set_selected_sample_json({
                sampleType:"",
                parameter:"",
                sampleMethod:"",
                sampleReference:""
            })
        }
    },[selected_sample])




    function toggle_modal(result={}) {
        setShowModal(!showModal)
        set_selected_sample("")
        if(Object.keys(result).includes("done")){
            if(result.error === null){
                setSnackBarMessage("Successfully added a new record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add a new record.!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }


    function toggle_modal_calibration() {
        setShowModalCalibration(!showModalCalibration)
    }


    useEffect(() => {
        if(Object.keys(deleteTable1FormState).includes("success")){
            if(deleteTable1FormState.error === null){
                setSnackBarMessage(`Successfully deleted track record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(deleteTable1FormState.data)
            } else {
                setSnackBarMessage("Unable to delete new track record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deleteTable1FormState])


    useEffect(() => {
        if(Object.keys(table1FormState).includes("success")){
            toggle_modal()
            if(table1FormState.error === null){
                setSnackBarMessage(`Successfully added new record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(table1FormState.data)
            } else {
                setSnackBarMessage("Unable to add new new record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[table1FormState])


    useEffect(() => {
        if(Object.keys(calibrationFormState).includes("success")){
            toggle_modal_calibration()
            if(calibrationFormState.error === null){
                setSnackBarMessage(`Successfully added a new record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(calibrationFormState.data)
            } else {
                setSnackBarMessage("Unable to add new record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[calibrationFormState])



    useEffect(() => {
        if(Object.keys(realtimeFormState).includes("data")){
            set_checklist_data(realtimeFormState.data)
        }
        
    },[realtimeFormState])



    // INPUT VARIABLES





    const onChangeInterviewedPersonnel = (event) => {
        setSelectedPersonnel(event.target.value)
        setTimeout(() =>{
            personnelFormRef.current.requestSubmit()
        },[100])
    }

    useEffect(() => {
        if(Object.keys(personnelFormState).includes("success")){
            if(personnelFormState.error === null){
                setSnackBarMessage(`Successfully updated personnel interviewed.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update onsite assessment.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[personnelFormState])


    const handleCloseSnackBar = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
            setOpenSnackBar(false);
    };


    return (
            <div className={styles.main_container}>
                <div className={styles.form_section}>
                    <p className={styles.section_header}>Assessor</p>
                    <div className={styles.details_container_row}>
                        <div className={styles.item_container}>
                            <p className={styles.sub_header}>Name:</p>
                            <p className={styles.sub_header_value}>
                                {`${capitalize(team.liat_chair?.userDetails?.firstName ?? "")} ${capitalize(team.liat_chair?.userDetails?.lastName ?? "")}`}
                            </p>
                        </div>
                        <div className={styles.item_container}>
                            <p className={styles.sub_header}>Email:</p>
                            <p className={styles.sub_header_value}>{team.liat_chair.email}</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className={styles.form_section}>
                    <p className={styles.section_header}>Personnel Interviewed</p>
                    <div className={styles.details_container_row}>
                        <form action={personnelFormAction} ref={personnelFormRef}>
                            <div className={styles.item_container}>
                                <p className={styles.sub_header}>Personnel:</p>
                                <select name="personnel" value={selectedPersonnel} onChange={onChangeInterviewedPersonnel} className={styles.input}>
                                    <option value={""}>---</option>
                                    {personnels.map((item, idx) => {
                                        return(
                                            <option key={idx} value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                    </div>
                </div>
                
                <hr className={styles.separator}/>

                <div className={styles.form_section}>
                    <div className={styles.note_container}>
                        <b style={{fontSize:"16px"}}>Item/ Requirement</b>
                        <ul style={{padding:"20px"}}>
                            <li style={{marginBottom:"20px"}}>
                                <b>Laboratory Procedures</b>
                                <ul style={{paddingLeft:"20px", marginTop:"5px"}}>
                                    <li style={{fontSize:"14px", fontStyle:"italic"}}>All laboratory procedures adopted by the laboratory shall compliance to the DENR approved methods of analysis or other procedures that may be recommended or adopted by the DENR.</li>
                                </ul>
                            </li>
                            <li style={{marginBottom:"20px"}}>
                                <b>Reagents</b>
                                <ul style={{paddingLeft:"20px", marginTop:"5px"}}>
                                    <li style={{fontSize:"14px", fontStyle:"italic"}}>All laboratory procedures adopted by the laboratory shall compliance to the DENR approved methods of analysis or other procedures that may be recommended or adopted by the DENR.</li>
                                </ul>
                            </li>
                            <li style={{marginBottom:"20px"}}>
                                <b>Equipment and instruments & 03.a (16) Equipment, calibration and maintenance program of the laboratory</b>
                                <ul style={{paddingLeft:"20px", marginTop:"5px"}}>
                                    <li style={{fontSize:"14px", fontStyle:"italic"}}>All equipment, instruments, and consumables shall compliance to the requirements of the analytical methods approved, recommended or adopted by the DENR.</li>
                                </ul>
                            </li>
                            <li style={{marginBottom:"20px"}}>
                                <b>Quality control & 03.a (17)Quality assurance program of the laboratory</b>
                                <ul style={{paddingLeft:"20px", marginTop:"5px"}}>
                                    <li style={{fontSize:"14px", fontStyle:"italic"}}>The laboratory shall prepare and adopt a quality assurance program to enhance the quality of data generated by the laboratory. The laboratory shall analyze quality control samples to check on the proficiency of its analysis and equipment on a regular basis. Quality control charts shall be displayed in a conspicuous place in the laboratory.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                

                <div style={{width:"100%", display:"flex", justifyContent:"end", marginBottom:"-20px"}}>
                    <button onClick={toggle_modal} className={styles.add_button}>
                        <AddIcon/>
                    </button>
                </div>

                <div className={styles.table_container}>
                    <table className={styles.information_table}>
                        <tbody>
                            <tr className={styles.fillout_table_header_multilevel}>
                                <td  className={styles.fillout_table_cell_header_no_flex} colSpan={1} rowSpan={2}>Matrix</td>
                                <td className={styles.fillout_table_cell_header_no_flex}  colSpan={1} rowSpan={2}>Parameter</td>
                                <td  className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Track Record</td>
                                <td  className={styles.fillout_table_cell_header_no_flex_double} colSpan={2}>Laboratory Procedure</td>
                                <td  className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Reagents</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Equipment/Instruments</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Sample Analysed</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}></td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Charts</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1} rowSpan={2}>Comments</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1} rowSpan={2}>Action</td>
                            </tr>
                            <tr className={styles.fillout_table_header_multilevel}>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Compliant / Non-Compliant</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Compliant / Non-Compliant</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>MDL</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Compliant / Non-Compliant</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Compliant / Non-Compliant</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Yes / No</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Source</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Yes / No</td>
                            </tr>


                            {
                                checklist_data?.part4Table1?.map((item,idx) => {
                                    return (
                                        <tr key={idx} >
                                            <td className={styles.fillout_table_cell_no_flex}>{item.matrix}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.parameters}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.tr_compliance === "compliant" ? "Compliant" : "Non-Compliant"}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.lp_compliance === "compliant" ? "Compliant" : "Non-Compliant"}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.mdl}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.reagents_compliance === "compliant" ? "Compliant" : "Non-Compliant"}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.equipment_compliance === "compliant" ? "Compliant" : "Non-Compliant"}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{capitalize(item.qc_analyzed)}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.source}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{capitalize(item.qc_charts)}</td>
                                            <td className={styles.fillout_table_cell_no_flex}>{item.comments}</td>
                                            <td className={styles.action_col_no_flex}>
                                                <form action={deleteTable1FormAction}>
                                                    <input type="text" name="recordIdx" value={idx} hidden readOnly />
                                                    <input type="text" name="part" value={part} hidden readOnly />
                                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                                    <button>
                                                        <ClearIcon style={{fill:"red", cursor:"pointer", scale:"0.8"}}/>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <hr className={styles.separator}/>

                <div className={styles.form_section_row}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Quality Control</p>
                    </div>
                </div>
                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`The laboratory shall prepare and adopt a quality assurance program to enhance the quality of data generated by the laboratory.`}</p>  
                                <p><b>Note:</b>{` Secure copy of laboratory quality manual and/ or procedures to verify compliance to their documented QA program. Any non-compliance to the Lab’s QA program is considered as non-compliance.`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm1} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item1} onChange={(event) => {  
                                            set_item1(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm1)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item1"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm2} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item2} onChange={generic_setter(set_item2)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm2)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item2"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>
                        <tr>
                            <td className={styles.information_table_row_header}>
                                <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Documented Quality Assurance programme</p>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Analytical Methodologies`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm3} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item3} onChange={(event) => {  
                                            set_item3(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm3)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item3"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm4} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item4} onChange={generic_setter(set_item4)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm4)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item4"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Assessing data precision and accuracy and determining method detection limits`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm5} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item5} onChange={(event) => {  
                                            set_item5(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm5)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item5"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm6} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item6} onChange={generic_setter(set_item6)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm6)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item6"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Cleaning of glassware`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm7} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item7} onChange={(event) => {  
                                            set_item7(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm7)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item7"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm8} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item8} onChange={generic_setter(set_item8)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm8)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item8"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Measures to ensure good housekeeping i.e. regarding analysts worksheets, user’s logbooks, standard logbooks, MSDS data, etc.`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm9} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item9} onChange={(event) => {  
                                            set_item9(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm9)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item9"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm10} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item10} onChange={generic_setter(set_item10)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm10)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item10"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Use of reagent preparation logs; includes, as appropriate, supplier, grade, batch no., dates of preparation or verification, purity, measurement of weights, volumes, time intervals, temperatures and related calculations, verification results, discard date`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm11} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item11} onChange={(event) => {  
                                            set_item11(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm11)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item11"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm12} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item12} onChange={generic_setter(set_item12)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm12)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item12"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`ensure reagent water is free of substances that interfere with analytical methods by carrying out appropriate testing`}</p>
                                <p>- minimum quality parameters to be analyzed and recorded are pH and electrical conductivity.</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm13} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item13} onChange={(event) => {  
                                            set_item13(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm13)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item13"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm14} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item14} onChange={generic_setter(set_item14)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm14)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item14"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Use of reagent blank or method blank to establish baseline`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm15} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item15} onChange={(event) => {  
                                            set_item15(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm15)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item15"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm16} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item16} onChange={generic_setter(set_item16)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm16)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item16"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Use of equivalent standard/ sample reagent background in method calibration`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm17} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item17} onChange={(event) => {  
                                            set_item17(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm17)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item17"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm18)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item18"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Use of adequate no. of standards in method calibration ( at least five and will cover the concentration range of the test analyte)`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item19} onChange={(event) => {  
                                            set_item19(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm19)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item19"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm20)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item20"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>


                        <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Adequate use of duplicates, reference samples, analyte spikes, method blanks, and control samples to monitor precision, accuracy, recovery, contamination and biological response`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select name="form_value" className={styles.input_max} value={item21} onChange={(event) => {  
                                        set_item21(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm21)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input type="text" name="identifier" value={"item21"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm22)  
                                    }}/>  
                                    <input type="text" name="identifier" value={"item22"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Availability and use of CRMs or quality control samples`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select name="form_value" className={styles.input_max} value={item23} onChange={(event) => {  
                                        set_item23(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm23)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input type="text" name="identifier" value={"item23"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm24} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item24} onChange={generic_setter(set_item24)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm24)  
                                    }}/>  
                                    <input type="text" name="identifier" value={"item24"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>

                    <tr className={styles.fillout_table_row}>  
                        <td className={styles.fillout_table_cell}>  
                            <p>{`Maintain all CRM certificates or quality control samples traceability on file`}</p>  
                        </td>  
                        <td className={styles.fillout_table_yesno_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm25} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <select name="form_value" className={styles.input_max} value={item25} onChange={(event) => {  
                                        set_item25(event.target.value)  
                                        handleRealTimeSubmit(realtimeForm25)  
                                    }}>  
                                        <option value={""}>---</option>  
                                        <option value={"yes"}>Yes</option>  
                                        <option value={"no"}>No</option>  
                                    </select>  
                                    <input type="text" name="identifier" value={"item25"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                        <td className={styles.fillout_table_cell}>  
                            <form action={realtimeFormAction} ref={realtimeForm26} className={styles.form}>  
                                <div className={styles.item_container_row}>  
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item26} onChange={generic_setter(set_item26)} onBlur={(event) => {  
                                        handleRealTimeSubmit(realtimeForm26)  
                                    }}/>  
                                    <input type="text" name="identifier" value={"item26"} hidden readOnly />  
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                    <input type="text" name="part" value={part} hidden readOnly />  
                                </div>  
                            </form>  
                        </td>  
                    </tr>
                    </tbody>
                </table>


                
                <hr className={styles.separator}/>

                <div className={styles.form_section_row}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Instrument Calibration</p>
                    </div>
                </div>

                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`The laboratory shall formulate and adopt a system for calibration and maintenance of its laboratory facilities. Ensure availability of class S weights for balance calibrations`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm27} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item27} onChange={(event) => {  
                                            set_item27(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm27)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item27"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm28} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item28} onChange={generic_setter(set_item28)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm28)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item28"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Ensure accuracy of volumetric measurement by using class A glassware, where appropriate`}</p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm29} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item29} onChange={(event) => {  
                                            set_item29(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm29)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item29"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm30} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item30} onChange={generic_setter(set_item30)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm30)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item30"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>
                        <tr className={styles.fillout_table_row}>  
                            <td className={styles.fillout_table_cell}>  
                                <p>{`Ensure availability of certified thermometer, if appropriate`}</p>  
                                <p><b>{`Certificates of equipment calibration shall be compiled and made available upon request by the DENR.`}</b></p>  
                            </td>  
                            <td className={styles.fillout_table_yesno_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm31} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <select name="form_value" className={styles.input_max} value={item31} onChange={(event) => {  
                                            set_item31(event.target.value)  
                                            handleRealTimeSubmit(realtimeForm31)  
                                        }}>  
                                            <option value={""}>---</option>  
                                            <option value={"yes"}>Yes</option>  
                                            <option value={"no"}>No</option>  
                                        </select>  
                                        <input type="text" name="identifier" value={"item31"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                            <td className={styles.fillout_table_cell}>  
                                <form action={realtimeFormAction} ref={realtimeForm32} className={styles.form}>  
                                    <div className={styles.item_container_row}>  
                                        <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item32} onChange={generic_setter(set_item32)} onBlur={(event) => {  
                                            handleRealTimeSubmit(realtimeForm32)  
                                        }}/>  
                                        <input type="text" name="identifier" value={"item32"} hidden readOnly />  
                                        <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />  
                                        <input type="text" name="part" value={part} hidden readOnly />  
                                    </div>  
                                </form>  
                            </td>  
                        </tr>

                    </tbody>
                </table>


                
                <hr className={styles.separator}/>


                <div className={styles.form_section_row}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Instrument / Equipment Calibration</p>
                    </div>
                    <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                        <button onClick={toggle_modal_calibration} className={styles.add_button}>
                            <AddIcon/>
                        </button>
                    </div>
                </div>
            
                <div className={styles.table_container}>
                    <table className={styles.information_table}>
                        <tbody>
                            <tr className={styles.fillout_table_header_multilevel}>
                                <td  className={styles.fillout_table_cell_header_no_flex} colSpan={1} rowSpan={2}>Instrument/ Equipment</td>
                                <td  className={styles.fillout_table_cell_header_no_flex} colSpan={1} rowSpan={2}>Parameter/s Affected</td>
                                <td className={styles.fillout_table_cell_header_no_flex_quad}  colSpan={4} rowSpan={1}>Calibration</td>
                                <td className={styles.fillout_table_cell_header_no_flex_quad}  colSpan={4} rowSpan={1}>Maintenance</td>
                                <td className={styles.action_col_no_flex}  colSpan={1} rowSpan={2}>Action</td>
                            </tr>
                            <tr className={styles.fillout_table_header_multilevel}>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Program</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Internal</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>External</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Record</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Program</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Internal</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>External</td>
                                <td className={styles.fillout_table_cell_header_no_flex} colSpan={1}>Record</td>
                            </tr>


                            {
                                
                            }


                        </tbody>
                    </table>
                </div>
                
            
            {showModal && <div className={styles.overlay}></div>}

            {showModal &&     
                <div className={styles.modal_container}>
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
                            <h2>Add new record</h2>
                            <p>Fill out the form to add a new record.</p>
                            <hr />
                        </div>
                        <form action={table1FormAction} className={styles.form_style}>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="matrix">Matrix</label>
                                    <input type="text" name='matrix' className={styles.input_max} required/>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="parameters">Parameters</label>
                                    <input type="text" name='parameters' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="tr_compliance">Track Record Compliance?</label>
                                    <select name="tr_compliance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"compliant"}>Compliant</option>
                                        <option value={"non_compliant"}>Non-Compliant</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="lp_compliance">Laboratory Procedure/s Compliance?</label>
                                    <select name="lp_compliance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"compliant"}>Compliant</option>
                                        <option value={"non_compliant"}>Non-Compliant</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="mdl">MDL</label>
                                    <input type="text" name='mdl' className={styles.input_max} required/>
                                </div>
                            </div>


                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="reagents_compliance">Reagents Compliance?</label>
                                    <select name="reagents_compliance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"compliant"}>Compliant</option>
                                        <option value={"non_compliant"}>Non-Compliant</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="equipment_compliance">Equipment/ instruments Compliance?</label>
                                    <select name="equipment_compliance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"compliant"}>Compliant</option>
                                        <option value={"non_compliant"}>Non-Compliant</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="qc_analyzed">QC Sample Analysed</label>
                                    <select name="qc_analyzed" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="source">Source</label>
                                    <input type="text" name='source' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="qc_charts">QC Charts</label>
                                    <select name="qc_charts" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="comments">Comments</label>
                                    <textarea rows={3} type="text" name='comments' className={styles.input_textarea} required/>
                                </div>
                            </div>


                            <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input type="text" name="part" value={part} hidden readOnly />
                            <hr />
                            <div className={styles.button_container}>
                                {table1FormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {table1FormState.error}
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

            {showModalCalibration && <div className={styles.overlay}></div>}

            {showModalCalibration &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image src="/icons/close-icon.png" 
                                alt="close-icon" 
                                height={15} 
                                width={15}
                                onClick={toggle_modal_calibration}
                                className={styles.close_button}
                                />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2>Add new calibration record</h2>
                            <p>Fill out the form to add a new calibation record.</p>
                            <hr />
                        </div>
                        <form action={calibrationFormAction} className={styles.form_style}>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="instrument">Instrument/Equipment</label>
                                    <input type="text" name='instrument' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="parameters">Parameters Affected</label>
                                    <input type="text" name='parameters' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.information_table_row_header}>
                                <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Calibration</p>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="program_calibration">Program</label>
                                    <select name="program_calibration" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="internal_calibration">Internal</label>
                                    <select name="internal_calibration" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="external_calibration">External</label>
                                    <select name="external_calibration" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.information_table_row_header}>
                                <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Maintenance</p>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="program_maintenance">Program</label>
                                    <select name="program_maintenance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="internal_maintenance">Internal</label>
                                    <select name="internal_maintenance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="external_maintenance">External</label>
                                    <select name="external_maintenance" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>


                            <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input type="text" name="part" value={part} hidden readOnly />
                            <hr />
                            <div className={styles.button_container}>
                                {table1FormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {table1FormState.error}
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