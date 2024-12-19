"use client";
import styles from './component.module.css';
import {useState, useEffect, useActionState } from 'react';
import ApplicationHeader from '@/components/application_components/application_header/application_header';


import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { addAssessmentTeamMember,deleteTeamMember, setOnsiteAssessmentSchedule } from '@/app/lib/application_actions';
import Image from 'next/image';
import { parts_mapping,parts_mapping_obj } from '@/app/mappings/team_creation_mapping';
import ClearIcon from '@mui/icons-material/Clear';
import { generic_setter } from '@/app/lib/helper';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function AssessmentTeamPage(props){

    const user = props.user
    const application = props.application
    const teamMemberChoices = props.teamMemberChoices
    const teamMemberForTable = props.teamMemberForTable

    const isAssignedCustodian = user.id === application.custodianId ? true : false
    const isELRSecretariat = user.role === "elr_secretariat" ? true : false

    const [showAddModal, setShowAddModal] = useState(false)
    const [submitFormState, submitFormAction] = useActionState(addAssessmentTeamMember, {error:null}) 

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")


    //Input variables
    const [selectedRole, setSelectedRole] = useState("liat_chair")
    const [selectedParts, setSelectedParts] = useState([])


    const convertDateInputToCompatibleFormat = (item) => {
        if(item === null || item === ""){
            return ""
        } else {
            return new Date(item).toISOString().slice(0,10)
        }
    }


    const [onsiteScheduleStart, setOnsiteScheduleStart] = useState(application.onsite_assessment.scheduleStart !== null ? convertDateInputToCompatibleFormat(application.onsite_assessment.scheduleStart) : "")
    const [onsiteScheduleEnd, setOnsiteScheduleEnd] = useState(application.onsite_assessment.scheduleEnd !== null ? convertDateInputToCompatibleFormat(application.onsite_assessment.scheduleEnd) : "")

    const [selectedRecordId, setSelectedRecordId] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [deleteFormState, deleteFormAction] = useActionState(deleteTeamMember, {error:null})


    const [scheduleFormState, scheduleFormAction] = useActionState(setOnsiteAssessmentSchedule, {error:null})



    
    const theme = useTheme();

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    const toggle_add_modal = () => {
        setShowAddModal(!showAddModal)

        if(!showAddModal === false){
            setSelectedParts([])
            setSelectedRole("liat_chair")
        }
    }


    useEffect(() => {
        if(Object.keys(submitFormState).includes("success")){
            toggle_add_modal()
            if(submitFormState.error === null){
                setSnackBarMessage(`Successfully added assessment team member.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to add assessment team member.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[submitFormState])


    useEffect(() => {
        if(Object.keys(scheduleFormState).includes("success")){
            if(scheduleFormState.error === null){
                setSnackBarMessage(`Successfully saved onsite assessment schedule.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to save onsite assessment schedule.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[scheduleFormState])


      const handleChangeParts = (event) => {
        const {
        target: { value },
        } = event;
        setSelectedParts(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    function getStyles(name, itemName, theme) {
        return {
            fontWeight: itemName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
        };
    }


    function toggle_delete_modal() {
        setShowModalDelete(!showModalDelete)
  
        if(!showModalDelete === false){
          setSelectedRecordId("")
          setSelectedType("")
        }
      }


      useEffect(() => {
        if(Object.keys(deleteFormState).includes("success")){
            toggle_delete_modal()
            if(deleteFormState.error === null){
                setSnackBarMessage(`Team member successfully removed.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to remove team member")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[deleteFormState])


    const onChangeRole = (event) => {

        setSelectedRole(event.target.value)
        setSelectedParts([])

    }

    return (
        <>
            <ApplicationHeader application={application} user={user}/>

            <div className={styles.header_container}>
                <p className={styles.profile_header}>Onsite Assessment Schedule</p>
            </div>
            <div className={styles.main_container_row}>

                <form action={scheduleFormAction} className={styles.form_style_row}>

                    <div className={styles.form_item_row}>
                        <label className={styles.label} htmlFor="schedule_start">Onsite Assessment Schedule Start</label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            name="schedule_start" 
                            value={onsiteScheduleStart} 
                            onChange={generic_setter(setOnsiteScheduleStart)} 
                            required
                            disabled={application.custodianId === user.id ? false : true}
                        />
                    </div>

                    <div className={styles.form_item_row}>
                        <label className={styles.label} htmlFor="schedule_end">Onsite Assessment Schedule End</label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            name="schedule_end" 
                            value={onsiteScheduleEnd} 
                            onChange={generic_setter(setOnsiteScheduleEnd)} 
                            required
                            disabled={application.custodianId === user.id ? false : true}
                        />
                    </div>

                    <input type="text" name='applicationId' hidden readOnly value={application.id}/>

                    {application.custodianId === user.id && <button className={styles.save_button}>
                        Save
                    </button>}

                </form>
           
            </div>


            <hr />


            <div className={styles.header_container}>
                <p className={styles.profile_header}>Assessment Team</p>
            </div>
            <div className={styles.main_container}>
                {application.custodianId === user.id && 
                    <div style={{display:"flex", justifyContent:"end", margin:"0px"}}>
                        <button 
                            className={styles.save_button}
                            onClick={toggle_add_modal}>
                            Add team member
                        </button>
                    </div>
                }
                <div className={styles.details_container_column}>
                    <div>
                        <p className={styles.sub_header}>LIAT Chairperson:</p>
                        <table className={styles.table_style}>
                            <thead className={styles.header_row}>
                                <tr>
                                    <td className={styles.left_cell_header_first}>Name</td>
                                    <td className={styles.left_cell_header}>Parts</td>
                                    {application.custodianId === user.id &&  <td className={styles.left_cell_header_last}>Action</td>}
                                </tr>
                            </thead>
                            <tbody className={styles.table_row}>
                                {teamMemberForTable.liat_chair.length > 0 && teamMemberForTable.liat_chair.map((item,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.left_cell_header_first}>{item.name}</td>
                                            <td className={styles.left_cell_header}>
                                                {item.checklists.map((item_x, idx_x) => {
                                                    return <Chip key={idx_x} label={parts_mapping_obj[item_x]} style={{background:"darkslategray", color:"white", fontWeight:"600", marginRight:"5px"}}/>
                                                })}
                                            </td>
                                            {application.custodianId === user.id && 
                                                <td className={styles.left_cell_header_last}>
                                                    <ClearIcon 
                                                        style={{fill:"darkslategray", cursor:"pointer", scale:"0.8"}}
                                                        onClick={() => {
                                                            setSelectedRecordId(item.userId)
                                                            setSelectedType("liat_chair")
                                                            toggle_delete_modal()
                                                        }}
                                                    /> 
                                                </td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <hr />
                        <p className={styles.sub_header}>LIAT Member Central Office:</p>
                        <table className={styles.table_style}>
                            <thead className={styles.header_row}>
                                <tr>
                                <td className={styles.left_cell_header_first}>Name</td>
                                    <td className={styles.left_cell_header}>Parts</td>
                                    {application.custodianId === user.id &&  <td className={styles.left_cell_header_last}>Action</td>}
                                </tr>
                            </thead>
                            <tbody className={styles.table_row}>
                                {teamMemberForTable.liat_member_co.length > 0 && teamMemberForTable.liat_member_co.map((item,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.left_cell_header_first}>{item.name}</td>
                                            <td className={styles.left_cell_header}>
                                                {item.checklists.map((item_x, idx_x) => {
                                                    return <Chip key={idx_x} label={parts_mapping_obj[item_x]} style={{background:"darkslategray", color:"white", fontWeight:"600", marginRight:"5px"}}/>
                                                })}
                                            </td>
                                            {application.custodianId === user.id && 
                                                <td className={styles.left_cell_header_last}>
                                                    <ClearIcon 
                                                        style={{fill:"darkslategray", cursor:"pointer", scale:"0.8"}}
                                                        onClick={() => {
                                                            setSelectedRecordId(item.userId)
                                                            setSelectedType("liat_member_co")
                                                            toggle_delete_modal()
                                                        }}
                                                    /> 
                                                </td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <hr />
                        <p className={styles.sub_header}>LIAT Member Regional:</p>
                        <table className={styles.table_style}>
                            <thead className={styles.header_row}>
                                <tr>
                                    <td className={styles.left_cell_header_first}>Name</td>
                                    <td className={styles.left_cell_header}>Parts</td>
                                    {application.custodianId === user.id &&  <td className={styles.left_cell_header_last}>Action</td>}
                                </tr>
                            </thead>
                            <tbody className={styles.table_row}>
                                {teamMemberForTable.liat_member_ro.length > 0 && teamMemberForTable.liat_member_ro.map((item,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.left_cell_header_first}>{item.name}</td>
                                            <td className={styles.left_cell_header}>
                                                {item.checklists.map((item_x, idx_x) => {
                                                    return <Chip key={idx_x} label={parts_mapping_obj[item_x]} style={{background:"darkslategray", color:"white", fontWeight:"600", marginRight:"5px"}}/>
                                                })}
                                            </td>
                                            {application.custodianId === user.id && 
                                                <td className={styles.left_cell_header_last}>
                                                    <ClearIcon 
                                                        style={{fill:"darkslategray", cursor:"pointer", scale:"0.8"}}
                                                        onClick={() => {
                                                            setSelectedRecordId(item.userId)
                                                            setSelectedType("liat_member_ro")
                                                            toggle_delete_modal()
                                                        }}
                                                    /> 
                                                </td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <hr />
                        <p className={styles.sub_header}>External Assessor - Management:</p>
                        <table className={styles.table_style}>
                            <thead className={styles.header_row}>
                                <tr>
                                <td className={styles.left_cell_header_first}>Name</td>
                                    <td className={styles.left_cell_header}>Parts</td>
                                    {application.custodianId === user.id &&  <td className={styles.left_cell_header_last}>Action</td>}
                                </tr>
                            </thead>
                            <tbody className={styles.table_row}>
                                {teamMemberForTable.external_assessor_mgmt.map((item,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.left_cell_header_first}>{item.name}</td>
                                            <td className={styles.left_cell_header}>
                                                {item.checklists.map((item_x, idx_x) => {
                                                    return <Chip key={idx_x} label={parts_mapping_obj[item_x]} style={{background:"darkslategray", color:"white", fontWeight:"600", marginRight:"5px"}}/>
                                                })}
                                            </td>
                                            {application.custodianId === user.id && 
                                                <td className={styles.left_cell_header_last}>
                                                    <ClearIcon 
                                                        style={{fill:"darkslategray", cursor:"pointer", scale:"0.8"}}
                                                        onClick={() => {
                                                            setSelectedRecordId(item.userId)
                                                            setSelectedType("external_assessor_mgmt")
                                                            toggle_delete_modal()
                                                        }}
                                                    /> 
                                                </td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <hr />
                        <p className={styles.sub_header}>External Assessor - Physical Layout:</p>
                        <table className={styles.table_style}>
                            <thead className={styles.header_row}>
                                <tr>
                                    <td className={styles.left_cell_header_first}>Name</td>
                                    <td className={styles.left_cell_header}>Parts</td>
                                    {application.custodianId === user.id &&  <td className={styles.left_cell_header_last}>Action</td>}
                                </tr>
                            </thead>
                            <tbody className={styles.table_row}>
                                {teamMemberForTable.external_assessor_pl.map((item,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.left_cell_header_first}>{item.name}</td>
                                            <td className={styles.left_cell_header}>
                                                {item.checklists.map((item_x, idx_x) => {
                                                    return <Chip key={idx_x} label={parts_mapping_obj[item_x]} style={{background:"darkslategray", color:"white", fontWeight:"600", marginRight:"5px"}}/>
                                                })}
                                            </td>
                                            {application.custodianId === user.id && 
                                                <td className={styles.left_cell_header_last}>
                                                    <ClearIcon 
                                                        style={{fill:"darkslategray", cursor:"pointer", scale:"0.8"}}
                                                        onClick={() => {
                                                            setSelectedRecordId(item.userId)
                                                            setSelectedType("external_assessor_pl")
                                                            toggle_delete_modal()
                                                        }}
                                                    /> 
                                                </td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            {showAddModal && <div className={styles.overlay}></div>}

            {showAddModal &&     
                <div className={styles.modal_container}>
                    <div className={styles.close_button_container}>
                        <Image src="/icons/close-icon.png" 
                                alt="close-icon" 
                                height={15} 
                                width={15}
                                onClick={toggle_add_modal}
                                className={styles.close_button}
                                />
                    </div>

                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2 className={styles.modal_header}>Add assessment team member.</h2>
                            <p className={styles.modal_sub_header}>Fill out the form below to add an assessment team member.</p>
                            <hr />
                        </div>
                        <form action={submitFormAction} className={styles.form_style}>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="role">Role</label>
                                <select name='role' className={styles.input} required value={selectedRole} onChange={onChangeRole}>
                                    <option value="liat_chair">LIAT Chairperson</option>
                                    <option value="liat_member_co">LIAT Member Central Office</option>
                                    <option value="liat_member_ro">LIAT Member Regional Office</option>
                                    <option value="external_assessor_mgmt">External Assessor - Management</option>
                                    <option value="external_assessor_pl">External Assessor - Physical Layout</option>
                                </select>
                            </div>
                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="memberId">Team Member</label>
                                <select name='memberId' className={styles.input} required>
                                    {teamMemberChoices[selectedRole].map((item,idx) => {
                                        return <option key={idx} value={item.id}>{`${item.userDetails.firstName} ${item.userDetails.lastName}`}</option>
                                    })}
                                </select>
                            </div>

                            <div className={styles.form_item}>
                                <label className={styles.label} htmlFor="parts">Parts</label>
                                <FormControl sx={{width:"100%"}}>
                                    <Select
                                    name={"parts"}
                                    multiple
                                    required
                                    value={selectedParts}
                                    onChange={handleChangeParts}
                                    input={<OutlinedInput id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={parts_mapping_obj[value]} />
                                        ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                    >
                                        {parts_mapping.map((item,idx) => {
                                            if(selectedRole === "liat_member_co" || selectedRole === "liat_member_ro"){
                                                if(item.value.startsWith("part4")){
                                                    return(
                                                        <MenuItem
                                                            key={idx}
                                                            value={item.value}
                                                            style={getStyles(item, selectedParts, theme)}
                                                        >
                                                        {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            }
                                            else if(selectedRole === "external_assessor_mgmt"){
                                                if(item.value.startsWith("part1")){
                                                    return(
                                                        <MenuItem
                                                            key={idx}
                                                            value={item.value}
                                                            style={getStyles(item, selectedParts, theme)}
                                                        >
                                                        {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            }
                                            else if(selectedRole === "external_assessor_pl"){
                                                if(item.value.startsWith("part3")){
                                                    return(
                                                        <MenuItem
                                                            key={idx}
                                                            value={item.value}
                                                            style={getStyles(item, selectedParts, theme)}
                                                        >
                                                        {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            }
                                            else {
                                                return(
                                                    <MenuItem
                                                        key={idx}
                                                        value={item.value}
                                                        style={getStyles(item, selectedParts, theme)}
                                                    >
                                                    {item.label}
                                                    </MenuItem>
                                                )
                                            }

                                        })}
                                
                                        
                               
                                    </Select>
                                </FormControl>
                            </div>

                            <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                            <input type="text" name='userId' hidden readOnly value={user.id}/>
                            <div className={styles.row_button_container}>
                                    <button className={styles.add_buton_cancel} onClick={toggle_add_modal}>
                                    Cancel
                                </button>
                                <button className={styles.add_buton}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            }


            {showModalDelete && <div className={styles.overlay}></div>}

            {showModalDelete &&     
                <div className={styles.sub_modal_container}>
                    <div className={styles.close_button_container}>
                        <Image 
                            src="/icons/close-icon.png" 
                            alt="close-icon" 
                            height={15} 
                            width={15}
                            onClick={toggle_delete_modal}
                            className={styles.close_button}
                        />
                    </div>


                    <div className={styles.form_container}>
                    <div className={styles.form_header}>
                        <h2 className={styles.modal_header}>Delete team member</h2>
                        <p className={styles.modal_sub_header}>Are you sure you want to delete this team member?</p>
                        <hr />
                    </div>
                    <form action={deleteFormAction}>
                        <input type="text" name='recordId' hidden readOnly value={selectedRecordId}/>
                        <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                        <input type="text" name='selectedType' hidden readOnly value={selectedType}/>
                        <div className={styles.row_button_container}>
                            <button className={styles.remove_button_cancel} onClick={toggle_delete_modal}>
                                Cancel
                            </button>
                            <button className={styles.remove_button}>
                                Delete
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
        </>
    )

}