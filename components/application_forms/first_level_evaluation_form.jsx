"use client";
import styles from './component.module.css';
import { useEffect, useState } from 'react';
import ApplicationHeader from '../application_components/application_header/application_header';
import { saveForm } from '@/app/lib/application_actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';

export default function FirstLevelEvaluationForm(props){


    const forms = props.forms
    const user = props.user
    const application = props.application


    const isAssignedCustodian = user.id === application.custodianId ? true : false
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const [dataRows, setDataRows] = useState([
        { number: 1, component: "Name of Laboratory", remarks: "", is_field:true},
        { number: 2, component: "Address of Laboratory", remarks: "", is_field:true },
        { number: 3, component: "Name, citizenship and domicile of the head of the laboratory", remarks: "", is_field:true },
        { number: 4, component: "Business permit no., date of issue, place of issue and expiration date", remarks: "", is_field:true },
        { number: 5, component: "Tax Acct. No. of the laboratory/establishment", remarks: "", is_field:true },
        { number: 6, component: "Scope of the desired recognition (specify parameters and type of samples)", remarks: "", is_field:true },
        { number: 7, component: "Statement, overview of mandate/mission of the establishment/laboratory", remarks: "", is_field:true },
        { number: 8, component: "Accreditation record of the laboratory", remarks: "", is_field:true },
        { number: 9, component: "Technical and support personnel of the laboratory", remarks: "", is_field:true },
        { number: 10, component: "Scope and nature of work of the laboratory", remarks: "", is_field:true },
        { number: 11, component: "Laboratory test report forms", remarks: "", is_field:true },
        { number: 12, component: "Reference literature available in the laboratory", remarks: "", is_field:true },
        { number: 13, component: "Equipment calibration and maintenance program of the laboratory", remarks: "", is_field:true },
        { number: 14, component: "Quality assurance/quality control program of the laboratory", remarks: "", is_field:true },
        { number: 15, component: "Track record of the laboratory", remarks: "", is_field:true },
        { number: 16, component: "Pollution control and waste management practices adopted by the laboratory", remarks: "", is_field:true },
        { number: 17, component: "Floor plan of the laboratory and related facilities", remarks: "", is_field:true },
        { number: "", component: "Compliance to DENR Permits, Licenses/Clearances and Other Laws", remarks: "", is_field:false },
        { number: 18, component: "Pollution Control Officer", remarks: "", is_field:true  },
        { number: 19, component: "Environmental Compliance Certificates", remarks: "", is_field:true  },
        { number: 20, component: "Hazardous Waste Generator ID", remarks: "", is_field:true  },
        { number: 21, component: "Chemical Control Order for Hg", remarks: "", is_field:true  },
        { number: 22, component: "Chemical Control Order for Cyanide and Cyanide Compounds", remarks: "", is_field:true  },
        { number: 23, component: "Chemical Control Order for Pb", remarks: "", is_field:true  },
        { number: 24, component: "Chemical Control Order for Polychlorinated Biphenyls", remarks: "", is_field:true  },
        { number: 25, component: "Permit to Operate Air Pollution Source and Control Installations", remarks: "", is_field:true  },
        { number: 26, component: "Discharge Permits", remarks: "", is_field:true  },
        { number: 27, component: "PNP-License to Possess and Permit to Purchase", remarks: "", is_field:true  },
        { number: 28, component: "PDEA - License to Handle Controlled Precursors and Essential Chemicals", remarks: "", is_field:true  },
        { number: 29, component: "PNRI - License for Radioactive Materials", remarks: "", is_field:true  },
        { number: 30, component: "PTO - License to Operate a Chemical Laboratory", remarks: "", is_field:true  },
      ]);


      const handleInputChange = (index, field, value) => {
        setDataRows((prevRows) => 
            prevRows.map((row, rowIndex) => 
                rowIndex === index ? { ...row, [field]: value } : row
            )
        );

    };


    useEffect(() => {
        setDataRows(Object.keys(forms).includes("first_level_evaluation") ? forms.first_level_evaluation !== null ?  forms.first_level_evaluation : dataRows : dataRows)
    },[])


    const handleSave = async () => {
        const result = await saveForm(application.id, "first_level_evaluation", dataRows)

        if(result.error === null){
            setSnackBarMessage("First level evaluation form saved")
            setSnackBarSeverity("success")
            setOpenSnackBar(true)
        } else {
            setSnackBarMessage("Failed to save first level evaluation form!")
            setSnackBarSeverity("error")
            setOpenSnackBar(true)
        }
    }


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };



    return (
    <>
        <ApplicationHeader application={application} user={user}/>


        <div className={styles.header_container}>
            <p className={styles.profile_header}>First Level Evaluation Form</p>
        </div>
        <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
            <Tooltip title="Open lab details in new tab">
                <Link href={`/laboratory/${props.labId}`} target='_blank'>
                    <OpenInNewIcon style={{scale:"0.8", cursor:"pointer"}}/>
                </Link>
            </Tooltip>
        </div>
        
        <table className={styles.table_style2}>
                <thead>
                    <tr>
                        <th align='center'>Number</th>
                        <th align='left'>Component</th>
                        <th align='center'>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                {dataRows.map((row, index) => {
                        if(row.is_field === true){
                            return (
                                <tr key={index}>
                                    <td className={styles.centered_cell_first}>
                                        <p className={styles.centered_value}>{row.number}</p>
                                    </td>
                                    <td className={styles.centered_cell}>
                                        <p className={styles.left_value}>{row.component}</p>
                                    </td>
                                    <td className={styles.centered_cell}>
                                        <select 
                                            className={styles.select_field}
                                            value={row.remarks}
                                            onChange={(e) => handleInputChange(index, 'remarks', e.target.value)}
                                            disabled={!isAssignedCustodian}
                                        >   
                                            <option value={""}>---</option>
                                            <option value={"ok"}>Ok</option>
                                            <option value={"on_process"}>On-Process</option>
                                            <option value={"failed"}>Failed</option>
                                            <option value={"na"}>N/A</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        }
                        else {
                            return(
                                <tr key={index}>
                                    <td className={styles.title_cell} colSpan={3}>
                                        <p>{row.component}</p>
                                    </td>
                                </tr>
                            )
                        }

                    })}
                </tbody>
        </table>
        {isAssignedCustodian && <div className={styles.action_container}>
            <button className={styles.submit_button} onClick={handleSave}>Save</button>
        </div>}
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