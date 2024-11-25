"use client";
import styles from './component.module.css';
import { generic_setter } from '@/app/lib/helper';
import { useState, useEffect } from 'react';
import { convertToStandardDate } from '@/app/lib/helper';
import SaveIcon from '@mui/icons-material/Save';
import { useActionState } from 'react';
import { updateUser } from '@/app/lib/user_actions';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { provincesByRegion } from '@/app/mappings/provinceByRegion';
import MultipleSelectChip from '@/components/form_components/multi_select_field';
import { 
        category_of_client, 
        services_offered,
        category_of_client_reference,
        services_offered_reference,
         } from '@/app/mappings/lab_creation_items';



//Multi select field imports
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


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

function getStyles(name, itemName, theme) {
  return {
    fontWeight: itemName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}


// ======================================================


export default function LaboratoryDetailsForm(props){
    
    const user = props.user
    const lab = props.lab
    const establishment = lab.establishment

    console.log()
    console.log()
    console.log()
    console.log(lab)
    console.log()
    console.log()
    console.log()


    const nullChecker = (variable) => {
        if(variable === null){
            return ""
        } else {
            return variable
        }
    }

    const convertDateInputToCompatibleFormat = (item) => {
        if(item === null || item === ""){
            return ""
        } else {
            return new Date(lab.dateEstablished).toISOString().slice(0,10)
        }
    }

    const theme = useTheme();
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);

    const handleChangeCategories = (event) => {
        const {
        target: { value },
        } = event;
        setCategories(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeServices = (event) => {
        const {
        target: { value },
        } = event;
        setServices(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [formState, formAction] = useActionState(updateUser, {error:null})

    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")


    const [selectedRegion, setSelectedRegion] = useState(nullChecker(establishment.region))
    const [selectedProvince, setSelectedProvince] = useState(nullChecker(establishment.province))
    const [input_lab_name, set_input_lab_name] = useState(nullChecker(lab.laboratoryName))
    const [input_lab_address, set_input_lab_address] = useState(nullChecker(establishment.address))
    const [input_lat, set_input_lat] = useState(nullChecker(establishment.lat))
    const [input_lon, set_input_lon] = useState(nullChecker(establishment.lon))
    const [input_date_established, set_input_date_established] = useState(convertDateInputToCompatibleFormat(nullChecker(lab.dateEstablished)))
    const [input_contact, set_input_contact] = useState(nullChecker(lab.contactNumber))
    const [input_fax, set_input_fax] = useState(nullChecker(lab.faxNumber))

    const [input_mission_statement, set_input_mission_statement] = useState(nullChecker(lab.missionStatement))
    const [input_tin, set_input_tin] = useState(nullChecker(lab.tin))
    const [input_b_permit_number, set_input_b_permit_number] = useState(nullChecker(lab.businessPermitNumber))
    const [input_b_permit_issue_date, set_input_b_permit_issue_date] = useState(convertDateInputToCompatibleFormat(nullChecker(lab.businessPermitIssueDate)))
    const [input_b_permit_expiry_date, set_input_b_permit_expiry_date] = useState(convertDateInputToCompatibleFormat(nullChecker(lab.businessPermitExpiration)))
    const [input_b_permit_place, set_input_b_permit_place] = useState(nullChecker(lab.businessPermitPlaceOfIssuance))

    const [input_l_head_name, set_input_l_head_name] = useState(nullChecker(lab.labHeadName))
    const [input_l_head_email, set_input_l_head_email] = useState(nullChecker(lab.labHeadEmail))
    const [input_l_head_contact, set_input_l_head_contact] = useState(nullChecker(lab.labHeadContact))

    const [input_scope, set_input_scope] = useState(nullChecker(lab.scopeOfWork))
    const [input_geographical_area, set_input_geographical_area] = useState(nullChecker(lab.areaServed))


    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };


    useEffect(() => {
        if(formState.error === null && Object.keys(formState).includes("success") && Object.keys(formState).includes("detailsComplete")){
            if(formState.detailsComplete === true){
                setSnackBarMessage("User successfully updated!")
                setOpenSnackBar(true)
                setSnackBarSeverity("success")
            }
            else {
                setSnackBarMessage("Please make sure to add a signature and profile picture to activate your account.")
                setOpenSnackBar(true)
                setSnackBarSeverity("warning")
            }
        }
        else if(formState.error !== null){
            setSnackBarMessage(`User update error! ${formState.error}`)
            setOpenSnackBar(true)
            setSnackBarSeverity("error")
        }
    },[formState])

    const handlePhoneChange = (setter) => (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
        
        if (input.length > 3 && input.length <= 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 6) {
          input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        } else if (input.length > 3) {
          input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        }
        
        setter(input); // Update the state with the formatted phone number
      };

    return (
        <div>
            <form action={formAction} className={styles.form_style}>
                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>General Laboratory Information</p>
                </div>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lab_name">Laboratory name:</label>
                        <input className={styles.input} type="text" name="lab_name" value={input_lab_name} onChange={generic_setter(set_input_lab_name)} required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="region">Region:</label>
                        <select name='region' className={styles.input} value={selectedRegion} onChange={generic_setter(setSelectedRegion)} required>
                            <option value="car">CAR</option>
                            <option value="ncr">NCR</option>
                            <option value="r1">Region 1</option>
                            <option value="r2">Region 2</option>
                            <option value="r3">Region 3</option>
                            <option value="r4a">Region 4a</option>
                            <option value="r4b">Region 4b</option>
                            <option value="r5">Region 5</option>
                            <option value="r6">Region 6</option>
                            <option value="r7">Region 7</option>
                            <option value="r8">Region 8</option>
                            <option value="r9">Region 9</option>
                            <option value="r10">Region 10</option>
                            <option value="r11">Region 11</option>
                            <option value="r12">Region 12</option>
                            <option value="r13">Region 13</option>
                        </select>
                    </div>

                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="province">Province:</label>
                        <select name='province' className={styles.input} value={selectedProvince} onChange={generic_setter(setSelectedProvince)} required>
                            {provincesByRegion[selectedRegion].map((province, idx) => {
                                return (
                                    <option value={province.value} key={idx}>{province.label}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="address">Address:</label>
                        <textarea 
                            rows={3} 
                            className={styles.input_textarea} 
                            type="text" 
                            name="address" 
                            value={input_lab_address} 
                            onChange={generic_setter(set_input_lab_address)} 
                            required
                        />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lat">Latitude:</label>
                        <input className={styles.input} type="number" name="lat" step={0.0000000000000000000001} value={input_lat} onChange={generic_setter(set_input_lat)} required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="lon">Longitude:</label>
                        <input className={styles.input} type="number" name="lon" step={0.0000000000000000000001} value={input_lon} onChange={generic_setter(set_input_lon)} required/>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="date_established">Date established</label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            name="date_established" 
                            value={input_date_established} 
                            onChange={generic_setter(set_input_date_established)}
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        {/* blank item */}
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="mission_statement">Mission Statement:</label>
                        <textarea 
                            rows={3} 
                            className={styles.input_textarea} 
                            type="text" 
                            name="mission_statement" 
                            value={input_mission_statement} 
                            onChange={generic_setter(set_input_mission_statement)} 
                            required
                        />
                    </div>
                </div>


                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>Contact Information</p>
                </div>
                
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="contact_number">Contact number:</label>
                        <input type="text" className={styles.input} name='contact_number' value={input_contact} onChange={handlePhoneChange(set_input_contact)} placeholder="(xxx) xxx-xxxx" required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="contact_number">Fax number:</label>
                        <input type="text" className={styles.input} name='fax_number' value={input_fax} onChange={handlePhoneChange(set_input_fax)} placeholder="(xxx) xxx-xxxx" required/>
                    </div>
                </div>
                    
                
                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>Business Information</p>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="tin">Tax Identification Number (TIN):</label>
                        <input className={styles.input} type="text" name="tin" value={input_tin} onChange={generic_setter(set_input_tin)} required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="b_permit_number">Business Permit Number:</label>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="b_permit_number" 
                            value={input_b_permit_number} 
                            onChange={generic_setter(set_input_b_permit_number)} 
                            required
                        />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="b_permit_issue_date">Business Permit Issue Date:</label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            name="b_permit_issue_date"
                            value={input_b_permit_issue_date} 
                            onChange={generic_setter(set_input_b_permit_issue_date)}
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="b_permit_expiry_date">Business Permit Expiration Date:</label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            name="b_permit_expiry_date" 
                            value={input_b_permit_expiry_date} 
                            onChange={generic_setter(set_input_b_permit_expiry_date)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="b_permit_place">Business Permit Place of Issuance:</label>
                        <textarea 
                            rows={3} 
                            className={styles.input_textarea} 
                            type="text" 
                            name="b_permit_place" 
                            value={input_b_permit_place} 
                            onChange={set_input_b_permit_place} 
                            required
                        />
                    </div>
                </div>

                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>Laboratory Head Information</p>
                </div>

                
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="l_head_name">Laboratory Head Name:</label>
                        <input className={styles.input} type="text" name="l_head_name" value={input_l_head_name} onChange={generic_setter(set_input_l_head_name)} required/>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="l_head_email">Laboratory Head Email Address:</label>
                        <input className={styles.input} type="text" name="l_head_email" value={input_l_head_email} onChange={generic_setter(set_input_l_head_email)} required/>
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="l_head_contact">Laboratory Head Contact:</label>
                        <input 
                            type="text" 
                            className={styles.input} 
                            name='l_head_contact' 
                            value={input_l_head_contact} 
                            onChange={handlePhoneChange(set_input_l_head_contact)}
                            placeholder="(xxx) xxx-xxxx" 
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        {/* blank */}
                    </div>
                </div>


                <div className={styles.header_container}>
                    <p className={styles.profile_header_2}>Client and Service Information</p>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="client_category">Clients' Categories:</label>
                        <FormControl sx={{width:"100%"}}>
                            <Select
                            name={"categories"}
                            multiple
                            value={categories}
                            onChange={handleChangeCategories}
                            input={<OutlinedInput id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={category_of_client_reference[value]} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {category_of_client.map((item,idx) => (
                                <MenuItem
                                key={idx}
                                value={item.value}
                                style={getStyles(item, services, theme)}
                                >
                                {item.label}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="client_category">Services Offered:</label>
                        <FormControl sx={{width:"100%"}}>
                            <Select
                            name={"services"}
                            multiple
                            value={services}
                            onChange={handleChangeServices}
                            input={<OutlinedInput id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={services_offered_reference[value]} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {services_offered.map((item,idx) => (
                                <MenuItem
                                key={idx}
                                value={item.value}
                                style={getStyles(item, services, theme)}
                                >
                                {item.label}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="address">Scope and nature of work of the laboratory:</label>
                        <textarea 
                            rows={3} 
                            className={styles.input_textarea} 
                            type="text" 
                            name="scope" 
                            value={input_scope} 
                            onChange={generic_setter(set_input_scope)} 
                            required
                        />
                    </div>
                </div>


                <div className={styles.form_row}>
                    <div className={styles.form_item}>
                        <label className={styles.label} htmlFor="address">
                            Geographical area currently served by the laboratory regarding acceptance of testing work (restrictions):
                        </label>
                        <textarea 
                            rows={3} 
                            className={styles.input_textarea} 
                            type="text" 
                            name="geographical_area" 
                            value={input_geographical_area} 
                            onChange={generic_setter(set_input_geographical_area)} 
                            required
                        />
                    </div>
                </div>

                <input type="text" value={user.id} name='userId' readOnly hidden required/>

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
            <Snackbar open={openSnackBar} autoHideDuration={5000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}>
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