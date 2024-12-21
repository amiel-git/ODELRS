
import { capitalize, convertRegionToReadable, convertRoleToReadable, convertToStandardDate, convertToStandardDateTime, isEMBEmployee } from '@/app/lib/helper'
import styles from './component.module.css'
import Image from 'next/image';
import ScopeRecords from '@/components/application_components/scope_of_recognition/scope_records';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {    useState,
            useActionState,
            useEffect,
            useRef
 } from 'react';
 import DownloadIcon from '@mui/icons-material/Download';


 import { updateCustodian } from '@/app/lib/application_actions';
 import ApplicationHeader from '@/components/application_components/application_header/application_header';


import ApplicationFormPDF from '../../pdf_components/application_form';
import { pdf } from '@react-pdf/renderer';

export default function ApplicationDetails(props){

    const application = props.application
    const sampleTypes = props.sampleTypes
    const user = props.user
    const isEMB = isEMBEmployee(user.role)
    const userRole = user.role
    const custodians = props.custodians
    const lab = props.lab


    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    

    const [custodianFormState, custodianFormAction] = useActionState(updateCustodian, {error:null})

    //Input variables
    const [selectedCustodian, setSelectedCustodian] = useState(application.custodian === null ? "" : application.custodian.id)


    const custodianFormRef = useRef()
    const onChangeCustodian = (event) => {
        setSelectedCustodian(event.target.value)
        setTimeout(() => {
            custodianFormRef.current.requestSubmit()
        }, 200);
        
    }
    

    const generatePDF = async () => {
        const blob = await pdf(<ApplicationFormPDF lab={lab} application={application} />).toBlob();
      
        // Create a download link for the PDF
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'application_form.pdf';
        a.click();
        URL.revokeObjectURL(url);
      };
      

      useEffect(() => {
        if(Object.keys(custodianFormState).includes("success")){
            if(custodianFormState.error === null){
                setSnackBarMessage(`Successfully updated the application's custodian.`)
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            } else {
                setSnackBarMessage("Unable to update the application's custodian.")
                setOpenSnackBar(true)
                setSnackBarSeverity("error")
            }
        }
      },[custodianFormState])


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    return (
        <div className={styles.main_container}>

            {/*********************************** Main application header row **************************/}
                <ApplicationHeader application={application} user={user}/>
            {/* ------------------------------------------------------------------------- */}
            <div className={styles.button_container_right}>
                <button onClick={generatePDF} className={styles.download_button}><DownloadIcon style={{scale:0.7}}/> Download Application Form</button>
            </div>
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
                        <p 
                            className={application.status === 2 && selectedCustodian === "" && userRole === "elr_secretariat" ? styles.sub_header_red : styles.sub_header}
                        >
                            Custodian:
                        </p>
                        { userRole !== "elr_secretariat" && 
                            <p className={styles.sub_header_value}>
                                {application.custodian ? application.custodian.email : "---"}
                            </p>
                        }

                        { userRole === "elr_secretariat" &&
                            <form action={custodianFormAction} ref={custodianFormRef}>
                                <input type="text" name={"applicationId"} value={application.id} hidden readOnly/>
                                <select 
                                    className={application.status === 2 && selectedCustodian === "" ? styles.input_red : styles.input} 
                                    name="custodianId" 
                                    value={selectedCustodian} 
                                    onChange={onChangeCustodian}
                                >
                                    
                                    <option value={""}>---</option>
                                    {custodians.map((item,idx) => {
                                        return <option key={idx} value={item.id}>{item.email}</option>
                                    })}

                                </select>
                            </form>
                        }
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

            <hr style={{margin:"20px 0px"}}/>
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
        </div>
        
    )
}