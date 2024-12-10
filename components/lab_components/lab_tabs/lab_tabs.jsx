"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './component.module.css'


import ApartmentIcon from '@mui/icons-material/Apartment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SourceIcon from '@mui/icons-material/Source';


import LaboratoryDetailsForm from '../laboratory_details/laboratory_details';
import AccreditationRecords from '../accreditation_records/accreditation_records';
import PersonnelRecords from '../personnel/personnel_records';
import TrackRecords from '@/components/lab_components/track_records/track_records';
import AttachmentRecords from '@/components/lab_components/lab_attachments/attachment_records';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={styles.panel_container}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function LabTabs(props) {

  const user = props.user
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
            borderRight: 1,
            borderColor: 'divider',
            flex: 1,
            minWidth: '200px',
            position: 'sticky',  
            top: 0, 
            height: '100vh',
            overflowY: 'auto', 
            zIndex: 1,
          }}
      >
        <Tab 
            label={
                    <div className={styles.tab_item}>
                        <ApartmentIcon className={styles.tab_item_icon}/>
                        Laboratory Details
                    </div>
                    }
                    {...a11yProps(0)} 
            sx={{
                alignItems:"start"
            }}
        />
        <Tab 
            label={
                    <div className={styles.tab_item}>
                        <ReceiptLongIcon className={styles.tab_item_icon}/>
                        Accreditation Records
                    </div>
                    }
                    {...a11yProps(1)}
            sx={{
                alignItems:"start"
            }}
        />
        <Tab 
            label={
                    <div className={styles.tab_item}>
                        <PeopleIcon className={styles.tab_item_icon}/>
                        Personnel
                    </div>
                    }
                    {...a11yProps(2)}
            sx={{
                alignItems:"start"
            }} 
        />
        <Tab 
            label={
                    <div className={styles.tab_item}>
                        <AssessmentIcon className={styles.tab_item_icon}/>
                        Track Record
                    </div>
                    }
                    {...a11yProps(3)}
            sx={{
                alignItems:"start"
            }} 
        />
        <Tab 
            label={
                    <div className={styles.tab_item}>
                        <SourceIcon className={styles.tab_item_icon}/>
                        Files
                    </div>
                    }
                    {...a11yProps(4)}
            sx={{
                alignItems:"start"
            }} 
        />
      </Tabs>


      <TabPanel value={value} index={0}>
        <LaboratoryDetailsForm user={props.user} lab={props.lab}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccreditationRecords user={props.user} lab={props.lab} accreditationRecords={props.accreditationRecords}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PersonnelRecords user={props.user} lab={props.lab} personnelRecords={props.personnelRecords}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TrackRecords 
            user={props.user} 
            lab={props.lab} 
            trackRecords={props.trackRecords} 
            sampleTypes={props.sampleTypes}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AttachmentRecords
          user={props.user} 
          lab={props.lab} 
          labAttachments={props.labAttachments}
        />
      </TabPanel>
    </Box>
  );
}
