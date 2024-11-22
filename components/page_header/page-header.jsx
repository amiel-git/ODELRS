"use server"
import styles from './page-header.module.css';

export default async function PageHeader({title}){

    return (
        <div className={styles.header_container}>
            <h1 className={styles.header_text}>{title}</h1>
        </div>
    )
}