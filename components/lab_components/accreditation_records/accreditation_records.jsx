


import styles from './component.module.css'
import AccreditationModal from './accreditation_modal'
import AccreditationRecordsTable from './accreditation_table'
export default function AccreditationRecords(props){

    return (
        <div className={styles.page_style}>
            {/* <div className={styles.header_container}>
                <p className={styles.profile_header_2}>Accreditation Records</p>
            </div> */}
            <AccreditationModal user={props.user} lab={props.lab}/>
            <AccreditationRecordsTable user={props.user} lab={props.lab} accreditationRecords={props.accreditationRecords}/>
        </div>
    )
}