
import { capitalize, convertRegionToReadable, convertRoleToReadable, convertToStandardDate, convertToStandardDateTime, isEMBEmployee } from '@/app/lib/helper'
import styles from './component.module.css'
import Image from 'next/image';
import ScopeRecords from '@/components/application_components/scope_of_recognition/scope_records';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {    useState,
            useActionState,
            useEffect
 } from 'react';

 import { submitApplicationToEMB } from '@/app/lib/application_actions';

export default function ApplicationDetails(props){

    const application = props.application
    const sampleTypes = props.sampleTypes
    const user = props.user
    const isEMB = isEMBEmployee(user.role)


    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const [showSubmitModal, setShowSubmitModal] = useState(false)
    const [submitFormState, submitFormAction] = useActionState(submitApplicationToEMB, {error:null})

    const toggle_submit_modal = () => {
        setShowSubmitModal(!showSubmitModal)
    }

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


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    return (
        <div className={styles.main_container}>

            {/*********************************** Main application header row **************************/}
            <div className={styles.details_container_row}>
                <div className={styles.item_container}>
                    <p className={styles.sub_header}>
                        Status:
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
                    {user.role === "applicant" && application.status === 1 &&
                        <button className={styles.action_button} onClick={handleSubmitApplicationToEMB}>
                            Submit to EMB
                        </button>
                    }
                </div>
            </div>
            {/* ------------------------------------------------------------------------- */}

            <div className={styles.details_container_row_borderless}>
                <div className={styles.details_container_column}>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Laboratory Name:
                        </p>
                        <p className={styles.sub_header_value}>
                            {capitalize(application.laboratory.laboratoryName)}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Region:
                        </p>
                        <p className={styles.sub_header_value}>
                            {convertRegionToReadable(application.laboratory.establishment.region)}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Contact Number:
                        </p>
                        <p className={styles.sub_header_value}>
                            {application.laboratory.contactNumber}
                        </p>
                    </div>
                </div>
                <div className={styles.details_container_column}>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Custodian:
                        </p>
                        <p className={styles.sub_header_value}>
                            {application.custodian ? application.custodian.email : "---"}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Date Created:
                        </p>
                        <p className={styles.sub_header_value}>
                            {convertToStandardDate(application.date_created)}
                        </p>
                    </div>
                    <div className={styles.item_container}>
                        <p className={styles.sub_header}>
                            Date Updated:
                        </p>
                        <p className={styles.sub_header_value}>
                            {convertToStandardDateTime(application.date_updated)}
                        </p>
                    </div>
                </div>
            </div>

            <hr />
            <ScopeRecords
                user={props.user}
                sampleTypes={sampleTypes}
                records={application.scope_of_recognition.length > 0 ? application.scope_of_recognition : []}
                applicationId={application.id}
                applicationStatus={application.status}
                scope={props.scope}
            />


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


            {/* ================================================================================== */}
            {/* ================================================================================== */}
            {/* ================================================================================== */}
        </div>
        
    )
}