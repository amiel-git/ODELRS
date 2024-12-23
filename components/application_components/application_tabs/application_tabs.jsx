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
import TextsmsIcon from '@mui/icons-material/Textsms';
import ArticleIcon from '@mui/icons-material/Article';
import DomainIcon from '@mui/icons-material/Domain';


import ApplicationDetails from '@/components/application_components/application_details/application_details';
import AssessmentTeamPage from '@/components/application_components/assessment_team/assessment_team';
import ApplicationFiles from '@/components/application_components/application_files/application_files';
import Remarks from '@/components/application_components/remarks/remarks';
import OnsiteAssessment from '@/components/application_components/onsite_assessment/onsite_assessment';

//FORMS
import FirstLevelEvaluationForm from '../../application_forms/first_level_evaluation_form';

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
  const application = props.application
  const teamMemberChoices = props.teamMemberChoices
  const teamMemberForTable = props.teamMemberForTable
  const applicationFiles = props.applicationFiles
  const lab = props.lab
  const remarks = props.remarks
  const checklists = props.checklists

  const [value, setValue] = React.useState(1);

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
      <Tab style={{pointerEvents:"none"}}
        label={
          <p className={styles.sub_nav_header}>
              Application
          </p>
          }
      >
        
      </Tab>
        
        
        <Tab 
            label={
                    <div className={(props.application.status === 2 && user.id === application.assigneeId) || 
                                    (props.application.status === 7 && user.id === application.assigneeId)
                                    ? styles.breathing_text : styles.tab_item}
                    >
                        <FeedIcon className={styles.tab_item_icon}/>
                        Application Details
                    </div>
                    }
                    {...a11yProps(1)} 
            sx={{
                alignItems:"start"
            }}
        />
        <Tab 
            label={
                      <div  className={(props.application.status === 4 || props.application.status === 5) && user.id === application.assigneeId ? styles.breathing_text : styles.tab_item}>
                        <Diversity3Icon className={styles.tab_item_icon}/>
                        Assessment Team
                    </div>
                    }
                    {...a11yProps(2)}
            sx={{
                alignItems:"start"
            }}
        />
        <Tab 
            label={
                      <div  className={(props.application.status === 8) ? styles.breathing_text : styles.tab_item}>
                        <DomainIcon className={styles.tab_item_icon}/>
                        Onsite Assessment
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
                        <TextsmsIcon className={styles.tab_item_icon}/>
                        Remarks
                    </div>
                    }
                    {...a11yProps(4)}
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
                    {...a11yProps(5)}
            sx={{
                alignItems:"start"
            }}
        />

      <Tab style={{pointerEvents:"none", width:"100%"}}
        label={
          <div style={{width:"100%"}}>
            <hr className={styles.nav_separator}/>
            <p className={styles.sub_nav_header}>Forms</p>
          </div>

          }
      >
        
      </Tab>
        
      <Tab 
            label={
                      <div className={props.application.status === 3 && user.id === application.assigneeId ? styles.breathing_text : styles.tab_item}>
                        <ArticleIcon className={styles.tab_item_icon}/>
                        First Level Evaluation
                    </div>
                    }
                    {...a11yProps(7)}
            sx={{
                alignItems:"start"
            }}
        />
        
      </Tabs>


      <TabPanel value={value} index={1}>
        <ApplicationDetails
          user={user}
          application={application}
          sampleTypes={props.sampleTypes}
          scope={props.scope}
          custodians={props.custodians}
          lab={lab}
        />
      </TabPanel>

      <TabPanel value={value} index={2}>
         <AssessmentTeamPage
          application={application} 
          user={user}
          teamMemberChoices={teamMemberChoices}
          teamMemberForTable={teamMemberForTable}
         />
      </TabPanel>

      <TabPanel value={value} index={3}>
         <OnsiteAssessment
          application={application} 
          user={user}
          lab={lab}
          checklists={checklists}
          personnelRecords={props.personnelRecords}
         />
      </TabPanel>

      <TabPanel value={value} index={4}>
          <Remarks
            application={application} 
            user={user}
            remarks={remarks}
          />
      </TabPanel>

      <TabPanel value={value} index={5}>
         <ApplicationFiles
          application={application} 
          user={user}
          applicationFiles={applicationFiles}
         />
      </TabPanel>

      <TabPanel value={value} index={7}>
         <FirstLevelEvaluationForm 
            application={application} 
            user={user} 
            forms={props.forms}
            labId={props.labId}
          />
      </TabPanel>

    </Box>
  );
}
