"use server";
import Image from "next/image";
import styles from "./page.module.css";
import PageHeader from "@/components/page_header/page-header";
import { redirect } from "next/navigation";
import { verifyAuth } from "./lib/auth";


export default async function Home() {

  const result = await verifyAuth()

  if(!result.user){
    redirect("login/")
  } else {
    redirect("/users")
  }


  return (
    <div className={styles.page}>
    </div>
  );
}
