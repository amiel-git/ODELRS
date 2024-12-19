"use client";


import { capitalize, convertRoleToReadable, generic_setter, isEMBEmployee } from '@/app/lib/helper'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import styles from './component.module.css';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Image from 'next/image';
import { 
            submitApplicationToEMB, 
            moveApplicationToNextStage, 
            teamReviewDecision,
            level2UploadAction,
            notarizedFormUploadAction,
        } from '@/app/lib/application_actions';

import { useState, useEffect, useActionState } from 'react';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    });


export default function ApplicationHeader(props){
    const application = props.application
    const user = props.user
    const isEMB = isEMBEmployee(user.role)


    const [showSubmitModal, setShowSubmitModal] = useState(false)
    const [submitFormState, submitFormAction] = useActionState(submitApplicationToEMB, {error:null})

    const [showMoveToTeamCreation, setShowMoveToTeamCreation] = useState(false)
    const [teamCreationFormState, teamCreationFormAction] = useActionState(moveApplicationToNextStage, {error:null})


    const [showMoveToTeamReview, setShowMoveToTeamReview] = useState(false)
    const [teamReviewFormState, teamReviewFormAction] = useActionState(moveApplicationToNextStage, {error:null})

    const [showTeamApprovalModal, setShowTeamApprovalModal] = useState(false)
    const [selectedTeamReviewDecision, setSelectedTeamReviewDecision] = useState("")
    const [teamApprovalFormState, teamApprovalFormAction] = useActionState(teamReviewDecision, {error:null})

    const [showUploadLevel2ApprovalModal, setShowUploadLevel2ApprovalModal] = useState(false)
    const [level2LetterFormState, level2LetterFormAction] = useActionState(level2UploadAction, {error:null})
    const [level2FileName, setLevel2FileName] = useState("")
    const [level2File, setLevel2File] = useState("")


    const [showUploadNotarizedFormModal, setShowUploadNotarizedFormModal] = useState(false)
    const [notarizedFormState, notarizedFormAction] = useActionState(notarizedFormUploadAction, {error:null})
    const [notarizedFileName, setnotarizedFileName] = useState("")
    const [notarizedFile, setnotarizedFile] = useState("")


    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")


    const handleSubmitApplicationToEMB = () => {
        if(application.scope_of_recognition.length === 0){
            setSnackBarMessage("Application cannot be submitted without a scope of recogntion")
            setSnackBarSeverity("error")
            setOpenSnackBar(true)
        } 
        else {
            toggle_submit_modal()
        }
    }

    const toggleLevel2LetterModal = () => {
        setShowUploadLevel2ApprovalModal(!showUploadLevel2ApprovalModal)
        if(!showUploadLevel2ApprovalModal === false){
            setLevel2File("")
            setLevel2FileName("")
        }
    }

    const toggleNotarizedFormModal = () => {
        setShowUploadNotarizedFormModal(!showUploadNotarizedFormModal)
        if(!showUploadNotarizedFormModal === false){
            setnotarizedFile("")
            setnotarizedFileName("")
        }
    }

    const toggleMoveToTeamCreationModal = () => {
        setShowMoveToTeamCreation(!showMoveToTeamCreation)
    }


    const toggleMoveToTeamReviewModal = () => {
        setShowMoveToTeamReview(!showMoveToTeamReview)
    }

    const toggleTeamApprovalModal = () => {
        setSelectedTeamReviewDecision("")
        setShowTeamApprovalModal(!showTeamApprovalModal)
    }


    useEffect(() => {
        if(Object.keys(level2LetterFormState).includes("success")){
            toggleLevel2LetterModal()
            if(level2LetterFormState.error === null){
                setSnackBarMessage(`Successfully moved the ELR application to notarization stage.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update ELR application stage.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[level2LetterFormState])

    useEffect(() => {
        if(Object.keys(notarizedFormState).includes("success")){
            toggleNotarizedFormModal()
            if(notarizedFormState.error === null){
                setSnackBarMessage(`Successfully uploaded the notarized application form.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update ELR application.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[notarizedFormState])


    useEffect(() => {
        if(Object.keys(teamCreationFormState).includes("success")){
            toggleMoveToTeamCreationModal()
            if(teamCreationFormState.error === null){
                setSnackBarMessage(`Successfully moved the ELR application to team creation stage.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update ELR application stage.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[teamCreationFormState])
      
    useEffect(() => {
        if(Object.keys(teamApprovalFormState).includes("success")){
            toggleTeamApprovalModal()
            if(teamApprovalFormState.error === null){
                setSnackBarMessage(`Successfully provided team review decision.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to provided team review decision.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[teamApprovalFormState])

    
    useEffect(() => {
        if(Object.keys(teamReviewFormState).includes("success")){
            toggleMoveToTeamReviewModal()
            if(teamReviewFormState.error === null){
                setSnackBarMessage(`Successfully moved the ELR application to team review stage.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update ELR application stage.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[teamReviewFormState])


    const toggle_submit_modal = () => {
        setShowSubmitModal(!showSubmitModal)
    }


    const fileUpload = (file_setter,filename_setter) => (event) => {
        const file__ = event.target.files[0]
        file_setter(file__)
        filename_setter(file__.name)
    }


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };
    

    useEffect(() => {
        if(Object.keys(submitFormState).includes("success")){
            toggle_submit_modal()
            if(submitFormState.error === null){
                setSnackBarMessage(`Successfully submitted ELR application to EMB.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to submit ELR application.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[submitFormState])




    return (<>
                <div className={styles.details_container_row}>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Application Status:
                        </p>
                        <p className={styles.sub_header_value}>
                            {application.convertedStatus}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Assignee:
                        </p>
                        <p className={styles.sub_header_value}>
                            {
                                application.assignee ? 
                                isEMB ? `${capitalize(application.assignee.userDetails.firstName)} ${capitalize(application.assignee.userDetails.lastName)}` : 
                                        convertRoleToReadable(application.assignee.role)
                                : "---"
                            }
                        </p>
                    </div>
                    <div className={styles.item_container_last}>
                        {/* QUICK ACTION Container */}

                        {/* Submit application to EMB */}
                        {user.id === application.addedById && application.status === 1 &&
                            <button className={styles.action_button} onClick={handleSubmitApplicationToEMB}>
                                {"Submit to EMB >"}
                            </button>
                        }

                        {/*ELR Secretariat: Move application to Team Creation */}
                        {user.id === application.assigneeId && application.status === 3 &&
                            <button className={styles.action_button} onClick={toggleMoveToTeamCreationModal}>
                                {"Move to team creation >"}
                            </button>
                        }

                        {/*Custodian: Move application to Team Review */}
                        {user.id === application.assigneeId && application.status === 4 &&
                            <button className={styles.action_button} onClick={toggleMoveToTeamReviewModal}>
                                {"Move to team review >"}
                            </button>
                        }

                        {/*ELR Secretariat: Team Approval */}
                        {user.id === application.assigneeId && application.status === 5 &&
                            <button className={styles.action_button} onClick={toggleTeamApprovalModal}>
                                {"Team review decision >"}
                            </button>
                        }

                        {/* ELR Coordinator: Level 2 approval document upload*/}
                        {user.id === application.assigneeId && application.status === 6 &&
                            <button className={styles.action_button} onClick={toggleLevel2LetterModal}>
                                {"Upload level 2 approval document >"}
                            </button>
                        }

                        {/* Applicant: Notarized application form upload*/}
                        {user.id === application.assigneeId && application.status === 7 &&
                            <button className={styles.action_button} onClick={toggleNotarizedFormModal}>
                                {"Upload notarized application form >"}
                            </button>
                        }
                    </div>
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

                {/* ================================================================================== */}
                {/* =================================== MODALS ======================================= */}
                {/* ================================================================================== */}


                {showSubmitModal && <div className={styles.overlay}></div>}

                {showSubmitModal &&     
                    <div className={styles.confirmation_modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggle_submit_modal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Submit ELR Application to EMB?</h2>
                                <p className={styles.modal_sub_header}>Please confirm if you want to submit the application to EMB.</p>
                                <hr />
                            </div>
                            <form action={submitFormAction}>
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggle_submit_modal}>
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


                {showMoveToTeamCreation && <div className={styles.overlay}></div>}

                {showMoveToTeamCreation &&     
                    <div className={styles.confirmation_modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggleMoveToTeamCreationModal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Move ELR application to onsite team creation stage?</h2>
                                <p className={styles.modal_sub_header}>Please confirm if you want to application to the team creation stage.</p>
                                <hr />
                            </div>
                            <form action={teamCreationFormAction}>
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" name='assigneeId' hidden readOnly value={user.id}/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggleMoveToTeamCreationModal}>
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


                {showMoveToTeamReview && <div className={styles.overlay}></div>}

                {showMoveToTeamReview &&     
                    <div className={styles.confirmation_modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggleMoveToTeamReviewModal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Move ELR application for team review?</h2>
                                <p className={styles.modal_sub_header}>Please confirm if you want to move the application to the team review stage.</p>
                                <hr />
                            </div>
                            <form action={teamReviewFormAction}>
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" name='assigneeId' hidden readOnly value={user.id}/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggleMoveToTeamReviewModal}>
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


                {showTeamApprovalModal && <div className={styles.overlay}></div>}

                {showTeamApprovalModal &&     
                    <div className={styles.modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggleTeamApprovalModal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Provide team review decision</h2>
                                <p className={styles.modal_sub_header}>Please confirm if you want to approve or disapprove the proposed assessment team.</p>
                                <hr />
                            </div>
                            <form action={teamApprovalFormAction} className={styles.form_style}>
                                <div className={styles.form_item}>
                                    <label className={styles.label} htmlFor="decision">Decision</label>
                                    <select name='decision' className={styles.input} required value={selectedTeamReviewDecision} onChange={generic_setter(setSelectedTeamReviewDecision)}>
                                    <option value="">---</option>
                                        <option value="approved">Approve</option>
                                        <option value="denied">Disapprove</option>
                                    </select>
                                </div>
                                {selectedTeamReviewDecision === "denied" && 
                                    <div className={styles.form_item}>
                                        <label className={styles.label} htmlFor="reason">Reason for disapproval</label>
                                        <textarea 
                                            className={styles.input_textarea} 
                                            rows={3}
                                            type="text" 
                                            name="reason" 
                                            required
                                            hidden={selectedTeamReviewDecision !== "denied"}
                                            disabled={selectedTeamReviewDecision !== "denied"}
                                        />
                                    </div>
                                }
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" name='assigneeId' hidden readOnly value={user.id}/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggleTeamApprovalModal}>
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



                
                {showUploadLevel2ApprovalModal && <div className={styles.overlay}></div>}

                {showUploadLevel2ApprovalModal &&     
                    <div className={styles.modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggleLevel2LetterModal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Upload level 2 approval document</h2>
                                <p className={styles.modal_sub_header}>Please upload the level 2 approval document to move the application to the notarization stage.</p>
                                <hr />
                            </div>
                            <form action={level2LetterFormAction} className={styles.form_style}>
                                <div className={styles.form_item}>
                                    <label className={styles.label} htmlFor="input_file">File:</label>
                                    <div className={styles.upload_button_container}>
                                            <Button
                                            component="label"
                                            variant="contained"
                                            tabIndex={-1}
                                            sx={{width:"20px",
                                                "& .MuiButton-icon":{
                                                    margin:"0px"
                                                }
                                            }}
                                            startIcon={<CloudUploadIcon />}
                                            >
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    accept=".pdf"
                                                    required
                                                    name='input_file'
                                                    onChange={fileUpload(setLevel2File, setLevel2FileName)}
                                                />
                                            </Button>
                                            {level2FileName === "" && 
                                                <p className={styles.file_name}>
                                                    {"upload file ..."}
                                                </p>
                                            }
                                            {level2FileName !== "" && 
                                                <p className={styles.file_name}>
                                                    {level2FileName}
                                                </p>
                                            }
                                    </div>
                                </div>
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" value={"application_file"} name='fileType' readOnly hidden required/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggleLevel2LetterModal}>
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

                
                {showUploadNotarizedFormModal && <div className={styles.overlay}></div>}

                {showUploadNotarizedFormModal &&     
                    <div className={styles.modal_container}>
                        <div className={styles.close_button_container}>
                            <Image src="/icons/close-icon.png" 
                                    alt="close-icon" 
                                    height={15} 
                                    width={15}
                                    onClick={toggleNotarizedFormModal}
                                    className={styles.close_button}
                                    />
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form_header}>
                                <h2 className={styles.modal_header}>Upload notarized application form</h2>
                                <p className={styles.modal_sub_header}>Please upload the notarized application form to move the application to the onsite assessment stage.</p>
                                <hr />
                            </div>
                            <form action={notarizedFormAction} className={styles.form_style}>
                                <div className={styles.form_item}>
                                    <label className={styles.label} htmlFor="input_file">File:</label>
                                    <div className={styles.upload_button_container}>
                                            <Button
                                            component="label"
                                            variant="contained"
                                            tabIndex={-1}
                                            sx={{width:"20px",
                                                "& .MuiButton-icon":{
                                                    margin:"0px"
                                                }
                                            }}
                                            startIcon={<CloudUploadIcon />}
                                            >
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    accept=".pdf"
                                                    required
                                                    name='input_file'
                                                    onChange={fileUpload(setnotarizedFile, setnotarizedFileName)}
                                                />
                                            </Button>
                                            {notarizedFileName === "" && 
                                                <p className={styles.file_name}>
                                                    {"upload file ..."}
                                                </p>
                                            }
                                            {notarizedFileName !== "" && 
                                                <p className={styles.file_name}>
                                                    {notarizedFileName}
                                                </p>
                                            }
                                    </div>
                                </div>
                                <input type="text" name='applicationId' hidden readOnly value={application.id}/>
                                <input type="text" value={"application_file"} name='fileType' readOnly hidden required/>
                                <input type="text" name='userId' hidden readOnly value={user.id}/>
                                <div className={styles.row_button_container}>
                                        <button className={styles.add_buton_cancel} onClick={toggleNotarizedFormModal}>
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


                {/* ================================================================================== */}
                {/* ================================================================================== */}
                {/* ================================================================================== */}
            </>

    )
}
