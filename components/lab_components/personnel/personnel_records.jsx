


import styles from './component.module.css'
import PersonnelModal from './personnel_modal'
import PersonnelTable from './personnel_table'

export default function PersonnelRecords(props){

    return (
        <div className={styles.page_style}>
            <PersonnelModal user={props.user} lab={props.lab}/>
            <PersonnelTable user={props.user} lab={props.lab} personnelRecords={props.personnelRecords}/>
        </div>
    )
}