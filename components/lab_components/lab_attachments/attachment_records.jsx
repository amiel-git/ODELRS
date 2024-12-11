
import styles from './component.module.css'
import AttachmentContainer from './attachment_container';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function AttachmentRecords(props){

    const records = props.labAttachments
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={styles.page_style}>
            <p className={styles.profile_header_2}>Laboratory Attachments</p>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab label="Required Files" {...a11yProps(0)} />
                    <Tab label="Optional Files" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className={styles.attachment_containers}>
                        <AttachmentContainer
                            title={"Laboratory Test Report Form"}
                            file_type={"lab_test_form"}
                            records={records["lab_test_form"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />

                        <AttachmentContainer
                            title={"Equipment calibration and maintenance program of the laboratory"}
                            file_type={"equipment_calibration"}
                            records={records["equipment_calibration"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />

                        <AttachmentContainer
                            title={"Pollution control and waste management practices adopted by the laboratory"}
                            file_type={"pollution_control"}
                            records={records["pollution_control"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />

                        <AttachmentContainer
                            title={"Reference literature available in the laboratory"}
                            file_type={"ref_literature"}
                            records={records["ref_literature"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />

                        <AttachmentContainer
                            title={"Quality assurance/ quality control program of the laboratory"}
                            file_type={"qaqc_program"}
                            records={records["qaqc_program"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />

                        <AttachmentContainer
                            title={"Floor plan of the laboratory and related facilities"}
                            file_type={"floor_plan"}
                            records={records["floor_plan"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {true}
                        />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className={styles.attachment_containers}>
                        <AttachmentContainer
                            title={"PCO Accreditation Certificate"}
                            file_type={"pco_certificate"}
                            records={records["pco_certificate"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Environmental compliance certificate or certificate of non-coverage"}
                            file_type={"environmental_compliance"}
                            records={records["environmental_compliance"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Hazardous waste generator"}
                            file_type={"waste_generator"}
                            records={records["waste_generator"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Chemical control order registration certificates"}
                            file_type={"cco_certificate"}
                            records={records["cco_certificate"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />
                        
                        <AttachmentContainer
                            title={"Chemical control order for cyanide and cyanide Compounds"}
                            file_type={"cco_cyanide"}
                            records={records["cco_cyanide"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Chemical control order for PB"}
                            file_type={"cco_pb"}
                            records={records["cco_pb"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Permit to operate air pollution source and control installations"}
                            file_type={"permit_to_operate"}
                            records={records["permit_to_operate"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Discharge permits"}
                            file_type={"discharge_permits"}
                            records={records["discharge_permits"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"PNP purchaser's license"}
                            file_type={"pnp_license"}
                            records={records["pnp_license"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"PDEA - License to handle controlled precursors and essential chemicals"}
                            file_type={"pdea_license"}
                            records={records["pdea_license"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"PNRI - License for radioactive materials"}
                            file_type={"pnri_license"}
                            records={records["pnri_license"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />

                        <AttachmentContainer
                            title={"Certificate of authority to operate a chemical laboratory"}
                            file_type={"cert_of_authority"}
                            records={records["cert_of_authority"]}
                            user = {props.user}
                            lab = {props.lab}
                            isRequired = {false}
                        />
                    </div>
                </CustomTabPanel>
            </Box>

        </div>
    )
}