
import Image from "next/image";
import Link from "next/link";
import styles from './nav.module.css'

export default function NavItem({label,icon,url}){
    return (
        <Link href={url}>
            <div className={styles.nav_item_body}>
                <Image src={icon} alt={label} height={20} width={20}/>
                <p>{label}</p>
            </div>
        </Link>
    )
}