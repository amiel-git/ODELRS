
import styles from './component.module.css'
import AttachmentContainer from './attachment_container';

export default function AttachmentRecords(props){

    const records = props.labAttachments
    return (
        <div className={styles.page_style}>
            <p className={styles.profile_header_2}>Laboratory Attachments</p>
            <div>
                <AttachmentContainer
                    title={"Laboratory Test Report Forms"}
                    file_type={"lab_test_form"}
                    records={records["lab_test_form"]}
                    user = {props.user}
                    lab = {props.lab}
                />
            </div>
        </div>
    )
}