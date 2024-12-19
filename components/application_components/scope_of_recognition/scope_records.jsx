


import styles from './component.module.css'
import ScopeModal from './scope_modal';
import ScopeTable from './scope_table'


export default function ScopeRecords(props){
    return (
        <div className={styles.page_style}>
            <ScopeModal user={props.user} sampleTypes={props.sampleTypes} applicationId={props.applicationId} applicationStatus={props.applicationStatus}/>
            <ScopeTable user={props.user} records={props.scope} applicationStatus={props.applicationStatus} applicationId={props.applicationId}/>
        </div>
    )
}