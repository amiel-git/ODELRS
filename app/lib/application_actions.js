"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default async function addApplication(prevState, formData){
    
    try {
        console.log()
        console.log()
        console.log(formData)
        console.log()
        console.log()
        console.log()
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to create application."}
    }
}