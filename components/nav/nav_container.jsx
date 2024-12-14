import Image from "next/image";
import styles from '@/components/nav/nav.module.css';
import NavItem from "./nav_item";
import { verifyAuth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { logoutAction } from "@/app/lib/auth";

export default async function NavMenu(props) {

    var name = ""
    var region = ""
    var region_wo_all = ""
    const result = await verifyAuth()
    const current_year = new Date().getFullYear()
    
    if(result.user === null){
        redirect("/login")
    } else {
        name = result.user.first_name + " " + result.user.last_name
        region = result.user.region
        region_wo_all = result.user.region
        if(region === "central_office"){
            region = "all"
            region_wo_all = "r1"
        }
    }

    const profile_picture = result.user.profile_picture === null ? "/images/default_profile.png" : result.user.profile_picture //"/images/default_profile.png"
    
    return (
        <div className={styles.nav_body}>
            <div className={styles.logo_container}>
                <Image src={"/images/denr_logo.png"} alt="denr_logo" height={40} width={40} priority/>
                <p className={styles.header_text}>ODELRS</p>
            </div>
            
                <section className={styles.nav_item_container}>
                    <NavItem icon={"/icons/application-icon.png"} label={"ELR Applications"} url={`/application`}/>
                    <NavItem icon={"/icons/laboratory_icon.png"} label={"Laboratories"} url={`/laboratory`}/>
                    <NavItem icon={"/icons/user-icon.png"} label={"Users"} url={`/users`}/>
                </section>
                


            
            <section className={styles.profile_section}>
                <hr />
                <div className={styles.profile_container}>
                    <Image 
                        src={profile_picture} 
                        alt="default_profile" 
                        height={40} 
                        width={40} 
                        className={styles.circle_image}
                    />
                    <p className={styles.name}>{name}</p>
                </div>
                    <NavItem icon={"/icons/user-icon.png"} label={"Profile"} url={`/users/${result.user.id}`}/>
                    <form className={styles.logout_form} action={logoutAction}>
                        <div className={styles.nav_item_body}>
                            <button className={styles.logout_button}>
                                <Image src={"/icons/logout-icon.png"} alt={"logout"} height={20} width={20}/>
                                Logout</button>
                        </div>
                    </form>
                

            </section>
        </div>
    )
}

