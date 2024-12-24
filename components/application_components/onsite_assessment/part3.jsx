"use client";


import { capitalize, convertArrayToString, generic_setter } from '@/app/lib/helper';
import styles from './component.module.css';
import { useState,useActionState, useEffect, useRef } from 'react';
import { assignPersonnelInterviewed, realTimeFormFunction, addOnsiteTrackRecord,deleteOnsiteTrackRecord } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

export default function Part3(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const team = application.onsite_assessment.assessmentTeam
    const part = props.part
    const checklists = props.checklists


    const [showModal, setShowModal] = useState(false)
    
    
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

    const [trackRecordFormState, trackRecordFormAction] = useActionState(addOnsiteTrackRecord, {error:null})
    const [track_record_personnel, set_track_record_personnel] = useState("")
    const [selected_sample, set_selected_sample] = useState("")
    const [selected_sample_json, set_selected_sample_json] = useState({}) 


    const [deleteTrackFormState, deleteTrackFormAction] = useActionState(deleteOnsiteTrackRecord, {error:null})


    const realtimeForm1 = useRef()
    const realtimeForm2 = useRef()
    const realtimeForm3 = useRef()
    const realtimeForm4 = useRef()
    const realtimeForm5 = useRef()
    const realtimeForm6 = useRef()
    const realtimeForm7 = useRef()
    const realtimeForm8 = useRef()
    const realtimeForm9 = useRef()
    const realtimeForm10 = useRef()
    const realtimeForm11 = useRef()
    const realtimeForm12 = useRef()
    const realtimeForm13 = useRef()
    const realtimeForm14 = useRef()
    const realtimeForm15 = useRef()
    const realtimeForm16 = useRef()
    const realtimeForm17 = useRef()
    const realtimeForm18 = useRef()
    const realtimeForm19 = useRef()
    const realtimeForm20 = useRef()
    const realtimeForm21 = useRef()
    const realtimeForm22 = useRef()
    const realtimeForm23 = useRef()
    const realtimeForm24 = useRef()
    const realtimeForm25 = useRef()
    const realtimeForm26 = useRef()
    const realtimeForm27 = useRef()
    const realtimeForm28 = useRef();
    const realtimeForm29 = useRef();
    const realtimeForm30 = useRef();

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
    const [item29, set_item29] = useState(checklist_data?.item29 ?? "")
    const [item30, set_item30] = useState(checklist_data?.item30 ?? "");

    const [complete_documents, set_complete_documents] = useState(checklist_data?.complete_documents ?? "")
    const [complete_accreditation, set_complete_accreditation] = useState(checklist_data?.complete_accreditation ?? "")
    const [geographical_area, set_geographical_area] = useState(checklist_data?.geographical_area ?? "")
    const [client_category, set_client_category] = useState(checklist_data?.client_category ?? "")
    const [services, set_services] = useState(checklist_data?.services ?? "")



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
                setSnackBarMessage("Successfully added a track record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add a track record.!")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
    }


    useEffect(() => {
        if(Object.keys(deleteTrackFormState).includes("success")){
            if(deleteTrackFormState.error === null){
                setSnackBarMessage(`Successfully deleted track record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(deleteTrackFormState.data)
            } else {
                setSnackBarMessage("Unable to delete new track record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deleteTrackFormState])


    useEffect(() => {
        
        if(Object.keys(trackRecordFormState).includes("success")){
            toggle_modal()
            if(trackRecordFormState.error === null){
                setSnackBarMessage(`Successfully added track record.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
                set_checklist_data(trackRecordFormState.data)
            } else {
                setSnackBarMessage("Unable to add new track record.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[trackRecordFormState])

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
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Quality control</p>
                </div>
            </div>

            <table className={styles.information_table}>
                <tbody>
                    <tr className={styles.fillout_table_header}>
                        <td className={styles.fillout_table_cell_header}>Item</td>
                        <td className={styles.fillout_table_cell_header_yesno}>Yes/No</td>
                        <td className={styles.fillout_table_cell_header}>Comment</td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`The laboratory shall prepare and adopt a quality assurance program to enhance the quality of data generated by the laboratory.`}</p>
                            <p></p>
                            <p>{`Note: Secure a copy of laboratory quality manual and/ or procedures to verify compliance to their documented QA program. Any non-compliance to the Lab’s QA program is considered as non-compliance.`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm2} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item1} onChange={(event) => {
                                        set_item1(event.target.value)
                                        handleRealTimeSubmit(realtimeForm2)
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
                            <form action={realtimeFormAction} ref={realtimeForm3} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text"  name="form_value" className={styles.textarea} value={item2} onChange={generic_setter(set_item2)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm3)
                                    }}/>
                                    <input type="text" name="identifier" value={"item2"} hidden readOnly />
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form> 
                        </td>
                    </tr>

                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`Documented Quality Assurance programme i.e.`}</p>
                            <p></p>
                            <p>{`Data verification practices including interlaboratory comparison and proficiency testing programs`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm4} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item3} onChange={(event) => {
                                        set_item3(event.target.value)
                                        handleRealTimeSubmit(realtimeForm4)
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
                            <form action={realtimeFormAction} ref={realtimeForm5} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text"  name="form_value" className={styles.textarea} value={item4} onChange={generic_setter(set_item2)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm5)
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
                            <p>{`data verification, validation and reporting`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm6} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item5} onChange={(event) => {
                                        set_item5(event.target.value)
                                        handleRealTimeSubmit(realtimeForm6)
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
                            <form action={realtimeFormAction} ref={realtimeForm7} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item6} onChange={generic_setter(set_item6)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm7)
                                    }}/>
                                    <input type="text" name="identifier" value={"item6"} hidden readOnly />
                                    <input type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                    <input type="text" name="part" value={part} hidden readOnly />
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.information_table_row_header}>
                            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>Test Report Information</p>
                        </td>
                    </tr>
                    <tr className={styles.fillout_table_row}>
                        <td className={styles.fillout_table_cell}>
                            <p>{`unique test report ID`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm8} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item7} onChange={(event) => {
                                        set_item7(event.target.value)
                                        handleRealTimeSubmit(realtimeForm8)
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
                            <form action={realtimeFormAction} ref={realtimeForm9} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item8} onChange={generic_setter(set_item8)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm9)
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
                            <p>{`Name/ address of laboratory`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm10} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item9} onChange={(event) => {
                                        set_item9(event.target.value)
                                        handleRealTimeSubmit(realtimeForm10)
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
                            <form action={realtimeFormAction} ref={realtimeForm11} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item10} onChange={generic_setter(set_item10)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm11)
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
                            <p>{`Name/ address of client`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm12} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item11} onChange={(event) => {
                                        set_item11(event.target.value)
                                        handleRealTimeSubmit(realtimeForm12)
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
                            <form action={realtimeFormAction} ref={realtimeForm13} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item12} onChange={generic_setter(set_item12)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm13)
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
                            <p>{`Unique sample ID`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm14} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item13} onChange={(event) => {
                                        set_item13(event.target.value)
                                        handleRealTimeSubmit(realtimeForm14)
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
                            <form action={realtimeFormAction} ref={realtimeForm15} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item14} onChange={generic_setter(set_item14)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm15)
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
                            <p>{`Type of sample`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm16} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item15} onChange={(event) => {
                                        set_item15(event.target.value)
                                        handleRealTimeSubmit(realtimeForm16)
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
                            <form action={realtimeFormAction} ref={realtimeForm17} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item16} onChange={generic_setter(set_item16)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm17)
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
                            <p>{`Station ID/ sample source`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item17} onChange={(event) => {
                                        set_item17(event.target.value)
                                        handleRealTimeSubmit(realtimeForm18)
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
                            <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm19)
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
                            <p>{`Date of sampling`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item19} onChange={(event) => {
                                        set_item19(event.target.value)
                                        handleRealTimeSubmit(realtimeForm20)
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
                            <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm21)
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
                            <p>{`Date of analysis`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item21} onChange={(event) => {
                                        set_item21(event.target.value)
                                        handleRealTimeSubmit(realtimeForm22)
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
                            <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm23)
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
                            <p>{`Date sample received`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item17} onChange={(event) => {
                                        set_item17(event.target.value)
                                        handleRealTimeSubmit(realtimeForm18)
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
                            <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm19)
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
                            <p>{`Date test report issued`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item19} onChange={(event) => {
                                        set_item19(event.target.value)
                                        handleRealTimeSubmit(realtimeForm20)
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
                            <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm21)
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
                            <p>{`Test result name/ signature of person authorizing report`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item21} onChange={(event) => {
                                        set_item21(event.target.value)
                                        handleRealTimeSubmit(realtimeForm22)
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
                            <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm23)
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
                            <p>{`Name/ signature of analyst`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm24} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item23} onChange={(event) => {
                                        set_item23(event.target.value)
                                        handleRealTimeSubmit(realtimeForm24)
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
                            <form action={realtimeFormAction} ref={realtimeForm25} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item24} onChange={generic_setter(set_item24)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm25)
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
                            <p>{`Method of analysis (cited analytical method and reference)`}</p>
                        </td>
                        <td className={styles.fillout_table_yesno_cell}>
                            <form action={realtimeFormAction} ref={realtimeForm26} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <select name="form_value" className={styles.input_max} value={item25} onChange={(event) => {
                                        set_item23(event.target.value)
                                        handleRealTimeSubmit(realtimeForm26)
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
                            <form action={realtimeFormAction} ref={realtimeForm27} className={styles.form}>
                                <div className={styles.item_container_row}>
                                    <textarea rows={4} type="text" name="form_value" className={styles.textarea} value={item26} onChange={generic_setter(set_item24)} onBlur={(event) => {
                                        handleRealTimeSubmit(realtimeForm27)
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


            <div className={styles.form_section}>
                <div className={styles.warning_container}>
                    <b>Note: </b>
                    <p>Check qualifications based on DAO 98-63, 03b Personnel. DENR criteria includes education, licentiate, relevant training and experience in environmental analysis and/ or management.</p>
                </div>
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
                            <h2>Add track record</h2>
                            <p>Fill out the form to add a new track record.</p>
                            <hr />
                        </div>
                        <form action={trackRecordFormAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="sample">Sample</label>
                                    <select name='sample' className={styles.input_max} value={selected_sample} onChange={generic_setter(set_selected_sample)} required>
                                        <option value={""}>---</option>
                                        {track_records.map((item, idx) => {
                                            return (
                                                <option key={idx} value={JSON.stringify(item)}>
                                                    {item.sampleType}-----    -----
                                                    {item.parameter}-----    -----
                                                    {item.sampleMethod}-----   -----
                                                    {item.sampleReference}
                                                </option>
                                            )
                                        })}
                                        
                                    </select>
                                </div>
                            </div>


                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >Sample Type</label>
                                    <input type="text" disabled className={styles.input_max} value={selected_sample_json.sampleType} readOnly required/>
                                </div>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >Parameter</label>
                                    <input type="text" disabled className={styles.input_max} value={selected_sample_json.parameter} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >Analytical Method</label>
                                    <textarea rows={2} type="text" disabled className={styles.input_textarea} value={selected_sample_json.sampleMethod} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >References</label>
                                    <input type="text" disabled className={styles.input_max} value={selected_sample_json.sampleReference} required/>
                                </div>
                            </div>
                            
                            <hr />
                                        
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="personnel">Name of Analyst</label>
                                    <select name="personnel" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        {personnels.map((item, idx) => {
                                            return(
                                                <option key={idx} value={item.name}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="no_samples"># of samples analyzed</label>
                                    <input type="number" name='no_samples' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="remarks">Remarks</label>
                                    <textarea rows={5} type="number" name='remarks' className={styles.input_textarea} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="denr_approved">Is DENR Approved?</label>
                                    <select name="denr_approved" className={styles.input_max}>
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
                                {trackRecordFormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {trackRecordFormState.error}
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