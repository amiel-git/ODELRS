"use client";


import styles from './component.module.css';
import ApplicationHeader from '../application_header/application_header';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Image from 'next/image';
import { useState,useActionState, useEffect } from 'react';


import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import Part1 from './part1';
import Part2 from './part2';
import Part3 from './part3';
import Part4 from './part4';

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


export default function OnsiteAssessment(props){
    const user = props.user
    const application = props.application
    const lab = props.lab
    const checklists = props.checklists
    
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ApplicationHeader application={application} user={user}/>

            <div className={styles.header_container}>
                <p className={styles.profile_header}>Onsite Assessment</p>
            </div>

            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label="Part 1" {...a11yProps(0)} />
          <Tab label="Part 2" {...a11yProps(1)} />
          <Tab label="Part 3" {...a11yProps(2)} />
          <Tab label="Part 4a" {...a11yProps(3)} />
          <Tab label="Part 4b" {...a11yProps(4)} />
          <Tab label="Part 4c" {...a11yProps(5)} />
          <Tab label="Part 4d" {...a11yProps(6)} />
        </Tabs>
      </Box>
        <CustomTabPanel value={value} index={0}>
            <Part1
                user={user}
                application={application}
                lab={lab}
                part="part1"
                checklists={checklists}
                personnelRecords={props.personnelRecords}
            />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <Part2
              user={user}
              application={application}
              lab={lab}
              part="part2"
              checklists={checklists}
              trackRecords={props.trackRecords}
              applicationFiles={props.applicationFiles}
              accreditationRecords={props.accreditationRecords}
            />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <Part3
              user={user}
              application={application}
              lab={lab}
              part="part3"
              checklists={checklists}
            />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Part4
              user={user}
              application={application}
              lab={lab}
              part="part4a"
              checklists={checklists}
            />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
            Part 4B
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
            Part 4C
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
            Part 4D
        </CustomTabPanel>
        </Box>


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