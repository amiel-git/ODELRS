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

export default function Part2(props){
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

    const [complete_documents, set_complete_documents] = useState(checklist_data?.complete_documents ?? "")
    const [complete_accreditation, set_complete_accreditation] = useState(checklist_data?.complete_accreditation ?? "")
    const [geographical_area, set_geographical_area] = useState(checklist_data?.geographical_area ?? "")
    const [client_category, set_client_category] = useState(checklist_data?.client_category ?? "")
    const [services, set_services] = useState(checklist_data?.services ?? "")

    const [isEditor, setIsEditor] = useState(false)
    useEffect(() => {
            const assignees__ = checklists[part]?.assignees
    
            if(assignees__ !== null && assignees__ !== undefined){
                for(var assignee of assignees__){
                    if(assignee.id === user.id && application.status === 8){
                        setIsEditor(true)
                    }
                }
            }
        },[])
    
    
        useEffect(() => {
            if(isEditor){
                console.log("YOU ARE AN EDITOR")
            }
        },[isEditor])



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
                            <select disabled={!isEditor} name="personnel" value={selectedPersonnel} onChange={onChangeInterviewedPersonnel} className={styles.input}>
                                <option value={""}>---</option>
                                {personnels.map((item, idx) => {
                                    return(
                                        <option key={idx} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                        </div>
                    </form> 
                </div>
            </div>
            
            <hr className={styles.separator}/>

            <div className={styles.form_section}>
                <p className={styles.section_header}>Track Record</p>
                <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                    <button disabled={!isEditor} onClick={toggle_modal} className={styles.add_button}>
                        <AddIcon/>
                    </button>
                </div>
                
                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_header}>
                            <td className={styles.fillout_table_cell_header}>Type of sample/s</td>
                            <td className={styles.fillout_table_cell_header}>Parameter</td>
                            <td className={styles.fillout_table_cell_header}>Analytical Method</td>
                            <td className={styles.fillout_table_cell_header}>Reference</td>
                            <td className={styles.fillout_table_cell_header}>Total # of Samples Analyzed</td>
                            <td className={styles.fillout_table_cell_header}>Period covered</td>
                            <td className={styles.fillout_table_cell_header}>Name of Analyst</td>
                            <td className={styles.fillout_table_cell_header}># of Samples Analyzed</td>
                            <td className={styles.fillout_table_cell_header}>Remarks</td>
                            <td className={styles.fillout_table_cell_header_yesno}>DENR Approved?</td>
                            <td className={styles.action_col}>action</td>
                        </tr>
                        
                        {
                            checklist_data?.track_records?.map((item,idx) => {
                                return (
                                    <tr key={idx} className={styles.fillout_table_row}>
                                        <td className={styles.fillout_table_cell}>{item.sampleType}</td>
                                        <td className={styles.fillout_table_cell}>{item.parameter}</td>
                                        <td className={styles.fillout_table_cell}>{item.sampleMethod}</td>
                                        <td className={styles.fillout_table_cell}>{item.sampleReference}</td>
                                        <td className={styles.fillout_table_cell}>{item.total_samples}</td>
                                        <td className={styles.fillout_table_cell}>{item.date_coverage}</td>
                                        <td className={styles.fillout_table_cell}>{item.personnel}</td>
                                        <td className={styles.fillout_table_cell}>{item.no_samples}</td>
                                        <td className={styles.fillout_table_cell}>{item.remarks}</td>
                                        <td className={styles.fillout_table_yesno_cell}>{item.denr_approved}</td>
                                        <td className={styles.action_col}>
                                            <form action={deleteTrackFormAction}>
                                                <input disabled={!isEditor} type="text" name="recordIdx" value={idx} hidden readOnly />
                                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                                <button disabled={!isEditor}>
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

            <div className={styles.form_section}>
                <div className={styles.item_container_row}>
                    <p className={styles.section_header}>Documents submitted by the laboratory for the assessment</p>
                    <form action={realtimeFormAction} ref={realtimeForm1} className={styles.form}>
                        <div className={styles.item_container_row}>
                            <p className={styles.sub_header}>Documents Complete?</p>
                            <select disabled={!isEditor} name="form_value" value={complete_documents} className={styles.input} onChange={(event) => {
                                            set_complete_documents(event.target.value)
                                            handleRealTimeSubmit(realtimeForm1)
                                        }}>
                                <option value={""}>---</option>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                            </select>
                            <input disabled={!isEditor} type="text" name="identifier" value={"complete_documents"} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                        </div>
                    </form> 
                </div>

                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_header}>
                            <td className={styles.fillout_table_cell_header}>Title</td>
                            <td className={styles.fillout_table_cell_header}>Date Added</td>
                            <td className={styles.fillout_table_cell_header}>Added By</td>
                            <td className={styles.fillout_table_cell_header}>View</td>
                        </tr>

                        {
                            applicationFiles?.map((item, idx) => {
                                if(item.isEMB === false){
                                    return (
                                        <tr key={idx} className={styles.fillout_table_row}>
                                            <td className={styles.fillout_table_cell}>{item.file_label}</td>
                                            <td className={styles.fillout_table_cell}>{item.date_added}</td>
                                            <td className={styles.fillout_table_cell}>{item.addedByEmail}</td>
                                            <td className={styles.fillout_table_cell_centered}>
                                                <Link href={`/${item.url_path}`} target={"_blank"}>                                  
                                                    <VisibilityIcon 
                                                        sx={{fill:"darkslategray", cursor:"pointer"}}
                                                    /> 
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                                
                            })
                        }
                    </tbody>
                </table>
            </div>


            <hr className={styles.separator}/>

            <div className={styles.form_section}>
                <div className={styles.item_container_row}>
                    <p className={styles.section_header}>Accreditation Records</p>
                    <form action={realtimeFormAction} ref={realtimeForm2} className={styles.form}>
                            <div className={styles.item_container_row}>
                                <p className={styles.sub_header}>Accreditation Records Complete?</p>
                                <select disabled={!isEditor} name="form_value" value={complete_accreditation} className={styles.input} onChange={(event) => {
                                                set_complete_accreditation(event.target.value)
                                                handleRealTimeSubmit(realtimeForm2)
                                            }}>
                                    <option value={""}>---</option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                </select>
                                <input disabled={!isEditor} type="text" name="identifier" value={"complete_accreditation"} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                </div>

                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_header}>
                            <td className={styles.fillout_table_cell_header}>Accrediting Body / Address</td>
                            <td className={styles.fillout_table_cell_header}>Nature / Scope of Accreditation</td>
                            <td className={styles.fillout_table_cell_header}>Expiration Date</td>
                            <td className={styles.fillout_table_cell_header}>Certificate</td>
                        </tr>

                        {
                            accreditationRecords?.map((item, idx) => {
                                return (
                                    <tr key={idx} className={styles.fillout_table_row}>
                                        <td className={styles.fillout_table_cell}>{item.accreditation_body}</td>
                                        <td className={styles.fillout_table_cell}>{item.scope}</td>
                                        <td className={styles.fillout_table_cell}>{item.expiration}</td>
                                        <td className={styles.fillout_table_cell_centered}>
                                            <Link href={`/${item.certificate}`} target={"_blank"}>                                  
                                                <VisibilityIcon 
                                                    sx={{fill:"darkslategray", cursor:"pointer"}}
                                                /> 
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


            <hr className={styles.separator} />
                

            <div className={styles.form_section}>
                <div className={styles.details_container_row_borderless}>
                    <div className={styles.item_container_row}>
                        <p className={styles.section_header}>Geographical area currently served by the laboratory</p>
                        <form action={realtimeFormAction} ref={realtimeForm3} className={styles.form}>
                            <div className={styles.item_container_row}>
                                <p className={styles.sub_header}>Are details correct?</p>
                                <select disabled={!isEditor} name="form_value" value={geographical_area} className={styles.input} onChange={(event) => {
                                                set_geographical_area(event.target.value)
                                                handleRealTimeSubmit(realtimeForm3)
                                            }}>
                                    <option value={""}>---</option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                </select>
                                <input disabled={!isEditor} type="text" name="identifier" value={"geographical_area"} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                    </div>
                </div>
                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>{capitalize(lab.areaServed)}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className={styles.form_section}>
                <div className={styles.details_container_row_borderless}>
                    <div className={styles.item_container_row}>
                        <p className={styles.section_header}>Categories of clients which use its services/ or whether the laboratory will accept testing work from</p>
                        <form action={realtimeFormAction} ref={realtimeForm4} className={styles.form}>
                            <div className={styles.item_container_row}>
                                <p className={styles.sub_header}>Are details correct?</p>
                                <select disabled={!isEditor} name="form_value" value={client_category} className={styles.input} onChange={(event) => {
                                                set_client_category(event.target.value)
                                                handleRealTimeSubmit(realtimeForm4)
                                            }}>
                                    <option value={""}>---</option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                </select>
                                <input disabled={!isEditor} type="text" name="identifier" value={"client_category"} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                    </div>
                </div>

                <p className={styles.fillout_table_cell}>{convertArrayToString(lab.categoryOfClient)}</p>
    
            </div>

            <div className={styles.form_section}>
                <div className={styles.details_container_row_borderless}>
                    <div className={styles.item_container_row}>
                        <p className={styles.section_header}>Other technical role / services offered by the laboratory</p>
                        <form action={realtimeFormAction} ref={realtimeForm5} className={styles.form}>
                            <div className={styles.item_container_row}>
                                <p className={styles.sub_header}>Are details correct?</p>
                                <select disabled={!isEditor} name="form_value" value={services} className={styles.input} onChange={(event) => {
                                                set_services(event.target.value)
                                                handleRealTimeSubmit(realtimeForm5)
                                            }}>
                                    <option value={""}>---</option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                </select>
                                <input disabled={!isEditor} type="text" name="identifier" value={"services"} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                    </div>
                </div>
                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>{convertArrayToString(lab.ServicesOffered)}</td>
                        </tr>
                        
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
                            <h2>Add track record</h2>
                            <p>Fill out the form to add a new track record.</p>
                            <hr />
                        </div>
                        <form action={trackRecordFormAction} className={styles.form_style}>
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="sample">Sample</label>
                                    <select disabled={!isEditor} name='sample' className={styles.input_max} value={selected_sample} onChange={generic_setter(set_selected_sample)} required>
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
                                    <input disabled={!isEditor} type="text" className={styles.input_max} value={selected_sample_json.sampleType} readOnly required/>
                                </div>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >Parameter</label>
                                    <input disabled={!isEditor} type="text" className={styles.input_max} value={selected_sample_json.parameter} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >Analytical Method</label>
                                    <textarea disabled={!isEditor} rows={2} type="text" className={styles.input_textarea} value={selected_sample_json.sampleMethod} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} >References</label>
                                    <input disabled={!isEditor} type="text" className={styles.input_max} value={selected_sample_json.sampleReference} required/>
                                </div>
                            </div>
                            
                            <hr />
                                        
                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="personnel">Name of Analyst</label>
                                    <select disabled={!isEditor} name="personnel" className={styles.input_max}>
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
                                    <input disabled={!isEditor} type="number" name='no_samples' className={styles.input_max} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="remarks">Remarks</label>
                                    <textarea disabled={!isEditor} rows={5} type="number" name='remarks' className={styles.input_textarea} required/>
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_item}>
                                    <label className={styles.sub_header} htmlFor="denr_approved">Is DENR Approved?</label>
                                    <select disabled={!isEditor} name="denr_approved" className={styles.input_max}>
                                        <option value={""}>---</option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </div>
                            </div>
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            <hr />
                            <div className={styles.button_container}>
                                {trackRecordFormState.error && <small 
                                                                    style={{textAlign:"left", width:"100%", color:"red"}}>
                                                                        {trackRecordFormState.error}
                                                                </small>}
                                <button disabled={!isEditor} className={styles.add_button}>
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