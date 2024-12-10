


import styles from './component.module.css'
import TrackModal from './track_modal'
import TrackTable from './track_table'


export default function TrackRecords(props){
    return (
        <div className={styles.page_style}>
            <TrackModal user={props.user} lab={props.lab} sampleTypes={props.sampleTypes}/>
            <TrackTable user={props.user} lab={props.lab} trackRecords={props.trackRecords}/>
        </div>
    )
}