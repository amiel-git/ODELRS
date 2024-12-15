"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './component.module.css'


import FeedIcon from '@mui/icons-material/Feed';
import FolderIcon from '@mui/icons-material/Folder';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MessageIcon from '@mui/icons-material/Message';


import ApplicationDetails from '@/components/application_components/application_details/application_details';


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

export default function ApplicationTabs(props) {

  const user = props.user
  const lab = props.lab


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
                        <FeedIcon className={styles.tab_item_icon}/>
                        Application Details
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
                        <Diversity3Icon className={styles.tab_item_icon}/>
                        Assessment Team
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
                        <MessageIcon className={styles.tab_item_icon}/>
                        Remarks
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
                        <FolderIcon className={styles.tab_item_icon}/>
                        Applicaton Files
                    </div>
                    }
                    {...a11yProps(2)}
            sx={{
                alignItems:"start"
            }}
        />
        
      </Tabs>


      <TabPanel value={value} index={0}>
        <ApplicationDetails
          user={props.user}
          application={props.application}
          sampleTypes={props.sampleTypes}
          scope={props.scope}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
         Panel two
      </TabPanel>
      <TabPanel value={value} index={2}>
         Panel three
      </TabPanel>
      <TabPanel value={value} index={3}>
         Panel four
      </TabPanel>
    </Box>
  );
}
