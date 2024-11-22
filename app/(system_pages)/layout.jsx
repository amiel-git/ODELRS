import "../globals.css";
import NavMenu from "@/components/nav/nav_container";
import styles from './system.module.css';

export const metadata = {
    title: "ODELRS",
    description: "Online DENR Environmental Laboratory Recognition System",
};

export default async function SystemLayout({ children }) {
  return (
      <div className={styles.body}>
        <NavMenu className={styles.nav}/>
        <div className={styles.content}>{children}</div>
      </div>

  );
}