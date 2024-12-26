"use client";


import { capitalize, convertToStandardDate, generic_setter } from '@/app/lib/helper';
import styles from './component.module.css';
import { useState,useActionState, useEffect, useRef } from 'react';
import { assignPersonnelInterviewed, realTimeFormFunction } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PersonnelTable from '@/components/lab_components/personnel/personnel_table';


export default function Part1(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const team = application.onsite_assessment.assessmentTeam
    const part = props.part
    const checklists = props.checklists


    //Form ref
    const personnelFormRef = useRef()
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
    const realtimeForm31 = useRef();
    const realtimeForm32 = useRef();
    const realtimeForm33 = useRef();
    const realtimeForm34 = useRef();
    const realtimeForm35 = useRef();
    const realtimeForm36 = useRef();
    const realtimeForm37 = useRef();
    const realtimeForm38 = useRef();
    const realtimeForm39 = useRef();
    const realtimeForm40 = useRef();
    const realtimeForm41 = useRef();
    const realtimeForm42 = useRef();
    const realtimeForm43 = useRef();
    const realtimeForm44 = useRef();
    const realtimeForm45 = useRef();
    const realtimeForm46 = useRef();
    const realtimeForm47 = useRef();
    const realtimeForm48 = useRef();
    const realtimeForm49 = useRef();
    const realtimeForm50 = useRef();
    const realtimeForm51 = useRef();
    const realtimeForm52 = useRef();
    const realtimeForm53 = useRef();
    const realtimeForm54 = useRef();
    const realtimeForm55 = useRef();
    const realtimeForm56 = useRef();
    const realtimeForm57 = useRef();
    const realtimeForm58 = useRef();
    const realtimeForm59 = useRef();
    const realtimeForm60 = useRef();
    const realtimeForm61 = useRef();
    const realtimeForm62 = useRef();
    const realtimeForm63 = useRef();
    const realtimeForm64 = useRef();
    const realtimeForm65 = useRef();
    const realtimeForm66 = useRef();
    const realtimeForm67 = useRef();
    const realtimeForm68 = useRef();
    const realtimeForm69 = useRef();
    const realtimeForm70 = useRef();
    const realtimeForm71 = useRef();
    const realtimeForm72 = useRef();
    const realtimeForm73 = useRef();
    



    const personnels = lab?.personnels ?? []
    const [checklist_data, set_checklist_data] = useState(checklists[part]?.data ?? {})
    const [selectedPersonnel, setSelectedPersonnel] = useState(checklists[part]?.personnelInterviewedId ?? "")
    const [personnelFormState, personnelFormAction] = useActionState(assignPersonnelInterviewed, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const [realtimeFormState, realtimeFormAction] = useActionState(realTimeFormFunction, {error:null})

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
        if(Object.keys(realtimeFormState).includes("data")){
            set_checklist_data(realtimeFormState.data)
        }
        
    },[realtimeFormState])



    // INPUT VARIABLES

    const [laboratory_details_accurate, set_laboratory_details_accurate] = useState(checklist_data?.laboratory_details_accurate ?? "")
    const [tax_clearance_uploaded, set_tax_clearance_uploaded] = useState(checklist_data?.tax_clearance_uploaded  ?? "")
    const [authorized_by_management, set_authorized_by_management] = useState(checklist_data?.authorized_by_management  ?? "")
    const [understood_by_management, set_understood_by_management] = useState(checklist_data?.understood_by_management  ?? "")
    const [understood_by_aides, set_understood_by_aides] = useState(checklist_data?.understood_by_aides  ?? "")
    const [understood_by_analysts, set_understood_by_analysts] = useState(checklist_data?.understood_by_analysts  ?? "")
    const [understood_by_personnel, set_understood_by_personnel] = useState(checklist_data?.understood_by_personnel  ?? "")
    const [personnel_verified, set_personnel_verified] = useState(checklist_data?.personnel_verified ?? "")
    const [organizational_chart, set_organizational_chart] = useState(checklist_data?.organizational_chart ?? "")
    const [deputies_absence, set_deputies_absence] = useState(checklist_data?.deputies_absence ?? "")
    const [application_form, set_application_form] = useState(checklist_data?.application_form ?? "")

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
    const [item31, set_item31] = useState(checklist_data?.item31 ?? "");
    const [item32, set_item32] = useState(checklist_data?.item32 ?? "");

    const [item41, set_item41] = useState(checklist_data?.item41 ?? "");
    const [item42, set_item42] = useState(checklist_data?.item42 ?? "");
    const [item43, set_item43] = useState(checklist_data?.item43 ?? "");
    const [item44, set_item44] = useState(checklist_data?.item44 ?? "");
    const [item45, set_item45] = useState(checklist_data?.item45 ?? "");
    const [item46, set_item46] = useState(checklist_data?.item46 ?? "");
    const [item47, set_item47] = useState(checklist_data?.item47 ?? "");
    const [item48, set_item48] = useState(checklist_data?.item48 ?? "");
    const [item49, set_item49] = useState(checklist_data?.item49 ?? "");
    const [item50, set_item50] = useState(checklist_data?.item50 ?? "");
    const [item51, set_item51] = useState(checklist_data?.item51 ?? "");
    const [item52, set_item52] = useState(checklist_data?.item52 ?? "");
    const [item53, set_item53] = useState(checklist_data?.item53 ?? "");
    const [item54, set_item54] = useState(checklist_data?.item54 ?? "");
    const [item55, set_item55] = useState(checklist_data?.item55 ?? "");
    const [item56, set_item56] = useState(checklist_data?.item56 ?? "");
    const [item57, set_item57] = useState(checklist_data?.item57 ?? "");
    const [item58, set_item58] = useState(checklist_data?.item58 ?? "");
    const [item59, set_item59] = useState(checklist_data?.item59 ?? "");
    const [item60, set_item60] = useState(checklist_data?.item60 ?? "");
    const [item61, set_item61] = useState(checklist_data?.item61 ?? "");
    const [item62, set_item62] = useState(checklist_data?.item62 ?? "");
    const [item63, set_item63] = useState(checklist_data?.item63 ?? "");
    const [item64, set_item64] = useState(checklist_data?.item64 ?? "");
    const [item65, set_item65] = useState(checklist_data?.item65 ?? "");
    const [item66, set_item66] = useState(checklist_data?.item66 ?? "");
    const [item67, set_item67] = useState(checklist_data?.item67 ?? "");
    const [item68, set_item68] = useState(checklist_data?.item68 ?? "");
    const [item69, set_item69] = useState(checklist_data?.item69 ?? "");
    const [item70, set_item70] = useState(checklist_data?.item70 ?? "");






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
                            {`${capitalize(team.external_assessor_mgmt?.userDetails?.firstName ?? "")} ${capitalize(team.external_assessor_mgmt?.userDetails?.lastName ?? "")}`}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>Email:</p>
                        <p className={styles.sub_header_value}>{team?.external_assessor_mgmt?.email}</p>
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
            
            <hr />
            <div className={styles.form_section}>
                <div className={styles.details_container_row_borderless}>
                    <p className={styles.section_header}>Laboratory Details</p>
                    <form action={realtimeFormAction} ref={realtimeForm1} className={styles.form}>
                        <div className={styles.item_container_row}>
                            <p className={styles.sub_header}>All laboratory details accurate?</p>
                            <select disabled={!isEditor} name="form_value" value={laboratory_details_accurate} className={styles.input} onChange={(event) => {
                                            set_laboratory_details_accurate(event.target.value)
                                            handleRealTimeSubmit(realtimeForm1)
                                        }}>
                                <option value={""}>---</option>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                            </select>
                            <input disabled={!isEditor} type="text" name="identifier" value={"laboratory_details_accurate"} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                            <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                        </div>
                    </form> 
                </div>
                <table className={styles.information_table}>
                    <tbody>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_divider} colSpan={2}>Laboratory Details</td>
                        </tr>
                        <tr className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Name</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.laboratoryName)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Address</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.establishment.address)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Contact Number</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.contactNumber)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Fax Number</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.faxNumber)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Date Established</td>
                            <td className={styles.information_table_cell}>{convertToStandardDate(application.laboratory.dateEstablished)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Sector</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.sector)}</td>
                        </tr>

                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_divider} colSpan={2}>Laboratory Head Details</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Head Name</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.labHeadName)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Head Email</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.labHeadEmail)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Head Contact</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.labHeadContact)}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Laboratory Head Citizenship</td>
                            <td className={styles.information_table_cell}>{capitalize(application.laboratory.labHeadCitizenShip)}</td>
                        </tr>
                    </tbody>
                </table>

                <table className={styles.information_table}>
                    <tbody>
                        <tr className={styles.information_table_row}>
                            <td className={styles.information_table_cell_divider} colSpan={2}>Regulatory Compliance Information</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>SEC Registration #</td>
                            <td className={styles.information_table_cell}>{application.laboratory.sec_registration}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>DTI Registration #</td>
                            <td className={styles.information_table_cell}>{application.laboratory.dti_registration}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Tax Identification Number (TIN)</td>
                            <td className={styles.information_table_cell}>{application.laboratory.tin}</td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Tax clearance for preceeding year uploaded?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm2} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={tax_clearance_uploaded}  onChange={(event) => {
                                            set_tax_clearance_uploaded(event.target.value)
                                            handleRealTimeSubmit(realtimeForm2)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"tax_clearance_uploaded"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={styles.information_table}>
                    <tbody>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Statement/ objectives authorised and implemented by senior management?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm3} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={authorized_by_management} onChange={(event) => {
                                            set_authorized_by_management(event.target.value)
                                            handleRealTimeSubmit(realtimeForm3)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"authorized_by_management"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Statement/Objectives communicated and understood by management?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm4} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={understood_by_management} onChange={(event) => {
                                            set_understood_by_management(event.target.value)
                                            handleRealTimeSubmit(realtimeForm4)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"understood_by_management"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Statement/Objectives communicated and understood by analysts?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm5} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={understood_by_analysts} onChange={(event) => {
                                            set_understood_by_analysts(event.target.value)
                                            handleRealTimeSubmit(realtimeForm5)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"understood_by_analysts"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Statement/Objectives communicated and understood by lab aides?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm6} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={understood_by_aides} onChange={(event) => {
                                            set_understood_by_aides(event.target.value)
                                            handleRealTimeSubmit(realtimeForm6)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"understood_by_aides"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Statement/Objectives communicated and understood by administrative personnels?</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm7} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={understood_by_personnel} onChange={(event) => {
                                            set_understood_by_personnel(event.target.value)
                                            handleRealTimeSubmit(realtimeForm7)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"understood_by_personnel"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <hr className={styles.separator} />
                <div className={styles.form_section}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Laboratory Technical and Support Personnel</p>
                        <form action={realtimeFormAction} ref={realtimeForm8} className={styles.form}>
                            <div className={styles.item_container_row}>
                                <p className={styles.sub_header}>All personnel details verified?</p>
                                <select disabled={!isEditor} name="form_value" value={personnel_verified} className={styles.input} onChange={(event) => {
                                                set_personnel_verified(event.target.value)
                                                handleRealTimeSubmit(realtimeForm8)
                                            }}>
                                    <option value={""}>---</option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                </select>
                                <input disabled={!isEditor} type="text" name="identifier" value={"personnel_verified"} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                            </div>
                        </form> 
                    </div>
                </div>

                <PersonnelTable user={user} lab={lab} personnelRecords={props.personnelRecords}/>

                <table className={styles.information_table}>
                    <tbody>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Organizational Chart</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm9} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={organizational_chart} onChange={(event) => {
                                            set_organizational_chart(event.target.value)
                                            handleRealTimeSubmit(realtimeForm9)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"organizational_chart"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Deputies in case of absence of key personnel:</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm10} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={deputies_absence} onChange={(event) => {
                                            set_deputies_absence(event.target.value)
                                            handleRealTimeSubmit(realtimeForm10)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"deputies_absence"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr className={styles.separator} />

                <table className={styles.information_table}>
                    <tbody>
                        <tr  className={styles.information_table_row}>
                            <td className={styles.information_table_cell_header}>Duly accomplished and notarized application form.</td>
                                <td className={styles.information_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm11} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input} value={application_form} onChange={(event) => {
                                            set_application_form(event.target.value)
                                            handleRealTimeSubmit(realtimeForm11)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"application_form"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr className={styles.separator} />
                

                <div className={styles.form_section}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Personnel</p>
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
                            <td className={styles.fillout_table_cell}>The operation of environmental laboratories shall be under the direction and supervision of a licensed chemist, chemical engineer or professional in allied fields</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm12} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item1} onChange={(event) => {
                                            set_item1(event.target.value)
                                            handleRealTimeSubmit(realtimeForm12)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item1"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm13} className={styles.form}>
                                    <div className={styles.item_container_row} value={item2}>
                                        <textarea disabled={!isEditor} rows={4} type="text"  name="form_value" className={styles.textarea} value={item2} onChange={generic_setter(set_item2)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm13)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item2"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>at least 5 years experience in laboratory analysis and management.</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm14} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item3} onChange={(event) => {
                                            set_item3(event.target.value)
                                            handleRealTimeSubmit(realtimeForm14)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item3"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm15} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item4} onChange={generic_setter(set_item4)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm15)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item4"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form> 
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>The minimum staff of the environmental laboratory shall be composed of one licensed professional</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm16} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item5} onChange={(event) => {
                                            set_item5(event.target.value)
                                            handleRealTimeSubmit(realtimeForm16)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item5"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm17} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item6} onChange={generic_setter(set_item6)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm17)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item6"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>One laboratory assistant; and</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm18} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item7} onChange={(event) => {
                                            set_item7(event.target.value)
                                            handleRealTimeSubmit(realtimeForm18)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item7"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm19} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item8} onChange={generic_setter(set_item8)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm19)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item8"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>One laboratory aide</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm20} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item9} onChange={(event) => {
                                            set_item9(event.target.value)
                                            handleRealTimeSubmit(realtimeForm20)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item9"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm21} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item10} onChange={generic_setter(set_item10)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm21)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item10"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>The licensed professional shall have at least 2 years experience; and</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm22} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item11} onChange={(event) => {
                                            set_item11(event.target.value)
                                            handleRealTimeSubmit(realtimeForm22)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item11"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm23} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item12} onChange={generic_setter(set_item12)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm23)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item12"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>must have analysed a minimum of 300 relevant environmental samples.</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm24} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item13} onChange={(event) => {
                                            set_item13(event.target.value)
                                            handleRealTimeSubmit(realtimeForm24)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item13"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm25} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item14} onChange={generic_setter(set_item14)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm25)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item14"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>The laboratory assistant shall have at least a baccalaureate degree in natural and applied sciences;</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm26} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item15} onChange={(event) => {
                                            set_item15(event.target.value)
                                            handleRealTimeSubmit(realtimeForm26)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item15"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm27} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item16} onChange={generic_setter(set_item16)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm27)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item16"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>undergone 120 hours of training in the analysis of environmental samples;</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm28} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item17} onChange={(event) => {
                                            set_item17(event.target.value)
                                            handleRealTimeSubmit(realtimeForm28)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item17"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm29} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item18} onChange={generic_setter(set_item18)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm29)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item18"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>analysed a minimum of 100 relevant environmental samples under the supervision of a licensed professional</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm30} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item19} onChange={(event) => {
                                            set_item19(event.target.value)
                                            handleRealTimeSubmit(realtimeForm30)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item19"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm31} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item20} onChange={generic_setter(set_item20)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm31)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item20"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>maintain documentation of training/s (e.g. certificates)</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm32} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item21} onChange={(event) => {
                                            set_item21(event.target.value)
                                            handleRealTimeSubmit(realtimeForm32)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item21"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm33} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item22} onChange={generic_setter(set_item22)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm33)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item22"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>The laboratory aide shall have obtained a high school diploma; or</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm34} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item23} onChange={(event) => {
                                            set_item23(event.target.value)
                                            handleRealTimeSubmit(realtimeForm34)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item23"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm35} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item24} onChange={generic_setter(set_item24)} onBlur={(event) => {
                                        
                                        handleRealTimeSubmit(realtimeForm35)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item24"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>completed a laboratory-oriented vocational course</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm36} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item25} onChange={(event) => {
                                            set_item25(event.target.value)
                                            handleRealTimeSubmit(realtimeForm36)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item25"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm37} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item26} onChange={generic_setter(set_item26)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm37)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item26"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>


                    </tbody>
                </table>      

                <hr className={styles.separator} />
                

                <div className={styles.form_section}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Staff Development Program</p>
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
                            <td className={styles.fillout_table_cell}>The recognised laboratory shall adopt; and</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm38} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item27} onChange={(event) => {
                                            set_item27(event.target.value)
                                            handleRealTimeSubmit(realtimeForm38)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item27"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm39} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item28} onChange={generic_setter(set_item28)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm39)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item28"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>implement a continuing technical training program for its staff.</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm40} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item29} onChange={(event) => {
                                            set_item29(event.target.value)
                                            handleRealTimeSubmit(realtimeForm40)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item29"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm41} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item30} onChange={generic_setter(set_item30)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm41)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item30"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>
                                <p>{`Secure a copy of the report of training program of the previous year and the training program of the current year checked and approved by the management.`}</p>
                                <p>{`Training program shall include training title, duration, venue, and personnel involved.`}</p>
                                <p>{`(verify technical training program of the laboratory for its staff vis-à-vis the training certificates/ records)`}</p>
                            </td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm42} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item31} onChange={(event) => {
                                            set_item31(event.target.value)
                                            handleRealTimeSubmit(realtimeForm42)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item31"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm43} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item32} onChange={generic_setter(set_item32)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm43)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item32"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                    </tbody>
                </table>



                <hr className={styles.separator} />
                

                <div className={styles.form_section}>
                    <div className={styles.details_container_row_borderless}>
                        <p className={styles.section_header}>Quality Control</p>
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
                                <p>{`The laboratory shall prepare and adopt a quality assurance program to enhance the quality of data generated by the laboratory`}</p>
                                <p>{`Note: Secure a copy of laboratory quality manual and/ or procedures to verify compliance to their documented QA program. Any non-compliance to the Lab’s QA program is considered as non-compliance.`}</p>
                            </td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm44} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item41} onChange={(event) => {
                                            set_item41(event.target.value)
                                            handleRealTimeSubmit(realtimeForm44)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item41"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm45} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item42} onChange={generic_setter(set_item42)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm45)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item42"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>Documented Quality Assurance programme</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm46} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item43} onChange={(event) => {
                                            set_item43(event.target.value)
                                            handleRealTimeSubmit(realtimeForm46)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item43"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm47} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item44} onChange={generic_setter(set_item44)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm47)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item44"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ quality policy statement</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm48} className={styles.form}>
                                <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item45} onChange={(event) => {
                                            set_item45(event.target.value)
                                            handleRealTimeSubmit(realtimeForm48)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item45"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm49} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item46} onChange={generic_setter(set_item46)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm49)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item46"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ organizational structure</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm50} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item47} onChange={(event) => {
                                            set_item47(event.target.value)
                                            handleRealTimeSubmit(realtimeForm50)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item47"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm51} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item48} onChange={generic_setter(set_item48)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm51)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item48"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>
                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ sample management / documentation/ traceability</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm52} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item49} onChange={(event) => {
                                            set_item49(event.target.value)
                                            handleRealTimeSubmit(realtimeForm52)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item49"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm53} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item50} onChange={generic_setter(set_item50)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm53)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item50"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>


                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ staff responsibilities</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm54} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item51} onChange={(event) => {
                                            set_item51(event.target.value)
                                            handleRealTimeSubmit(realtimeForm54)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item51"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm55} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item52} onChange={generic_setter(set_item52)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm55)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item52"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ relating to access, security and availability of laboratory records</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm56} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item53} onChange={(event) => {
                                            set_item53(event.target.value)
                                            handleRealTimeSubmit(realtimeForm56)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item53"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm57} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item54} onChange={generic_setter(set_item54)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm57)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item54"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>➛ dealing with complaints</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm58} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item55} onChange={(event) => {
                                            set_item55(event.target.value)
                                            handleRealTimeSubmit(realtimeForm58)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item55"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm59} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item56} onChange={generic_setter(set_item56)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm59)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item56"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>Feedback and corrective action whenever testing discrepancies are detected</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm60} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item57} onChange={(event) => {
                                            set_item57(event.target.value)
                                            handleRealTimeSubmit(realtimeForm60)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item57"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm61} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item58} onChange={generic_setter(set_item58)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm61)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item58"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>


                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>Protecting confidentiality and proprietary rights</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm62} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item59} onChange={(event) => {
                                            set_item59(event.target.value)
                                            handleRealTimeSubmit(realtimeForm62)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item59"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm63} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item60} onChange={generic_setter(set_item60)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm63)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item60"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>Regarding conflict of interests (i.e. arrangements that ensure personnel are free from commercial, financial and other pressures that might affect the quality of their work)</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm64} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item61} onChange={(event) => {
                                            set_item61(event.target.value)
                                            handleRealTimeSubmit(realtimeForm64)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item61"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm65} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item62} onChange={generic_setter(set_item62)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm65)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item62"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>procurement of reference materials, supplies and services including subcontracting</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm66} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item63} onChange={(event) => {
                                            set_item63(event.target.value)
                                            handleRealTimeSubmit(realtimeForm66)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item63"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm67} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item64} onChange={generic_setter(set_item64)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm67)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item64"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>relating to staff training</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm68} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item65} onChange={(event) => {
                                            set_item65(event.target.value)
                                            handleRealTimeSubmit(realtimeForm68)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item65"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm69} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item66} onChange={generic_setter(set_item66)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm69)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item66"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>records archiving</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm70} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item67} onChange={(event) => {
                                            set_item67(event.target.value)
                                            handleRealTimeSubmit(realtimeForm70)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item67"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm71} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item68} onChange={generic_setter(set_item68)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm71)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item68"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>

                        <tr className={styles.fillout_table_row}>
                            <td className={styles.fillout_table_cell}>control of testing environment</td>
                            <td className={styles.fillout_table_yesno_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm72} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <select disabled={!isEditor} name="form_value" className={styles.input_max} value={item69} onChange={(event) => {
                                            set_item69(event.target.value)
                                            handleRealTimeSubmit(realtimeForm72)
                                        }}>
                                            <option value={""}>---</option>
                                            <option value={"yes"}>Yes</option>
                                            <option value={"no"}>No</option>
                                        </select>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item69"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                            <td className={styles.fillout_table_cell}>
                                <form action={realtimeFormAction} ref={realtimeForm73} className={styles.form}>
                                    <div className={styles.item_container_row}>
                                        <textarea disabled={!isEditor} rows={4} type="text" name="form_value" className={styles.textarea} value={item70} onChange={generic_setter(set_item70)} onBlur={(event) => {
                                            handleRealTimeSubmit(realtimeForm73)
                                        }}/>
                                        <input disabled={!isEditor} type="text" name="identifier" value={"item70"} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="onsiteId" value={application.onsite_assessment.id} hidden readOnly />
                                        <input disabled={!isEditor} type="text" name="part" value={part} hidden readOnly />
                                    </div>
                                </form>
                            </td>
                        </tr>





                    </tbody>
                </table>
            </div>
            


                



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