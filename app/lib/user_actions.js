"use server";

import { PrismaClient } from "@prisma/client";
import { generateRandomPassword, hashUserPassword } from "./hash";
import { revalidatePath } from "next/cache";
import fs from 'node:fs';
import { capitalize, convertRegionToReadable, convertRoleToReadable } from "./helper";

const prisma = new PrismaClient()


export default async function addUser(prevState, formData){

    const firstName = formData.get("first_name")
    const lastName = formData.get("last_name")
    const email = formData.get("email")
    const role = formData.get("role")
    const region = formData.get("region")
    const password = "12345" //generateRandomPassword()
    const hashedPassword = hashUserPassword(password)


    try {
        const user = await prisma.user.create({
            data:{
                email:email,
                password:hashedPassword,
                region:region,
                role:role
            }
        })
    
        const userId = user.id
    
        const userDetails = await prisma.userDetails.create({
            data:{
                userId:userId,
                firstName:firstName,
                lastName:lastName
            }
        })
    
    
        revalidatePath("users/")
        await prisma.$disconnect()
        
        return {error:null}

    } catch (error) {
        console.log("Error creating user: ",error)
        return {error:"Error creating user!"}
    }



}

export async function userSignup(prevState, formData){

    const firstName = formData.get("first_name")
    const lastName = formData.get("last_name")
    const email = formData.get("email")
    const role = "applicant"
    const region = formData.get("region")
    const address = formData.get("address")
    const password = "12345" //formData.get("password")
    const hashedPassword = hashUserPassword(password)

    try {
        const user = await prisma.user.create({
            data:{
                email:email,
                password:hashedPassword,
                region:region,
                role:role
            }
        })
    
        const userId = user.id
    
        const userDetails = await prisma.userDetails.create({
            data:{
                userId:userId,
                firstName:firstName,
                lastName:lastName,
                address:address
            }
        })
    
    
        revalidatePath("users/")
        await prisma.$disconnect()
        return {error:null, success:true}


    } catch (error) {
        console.log("Error creating user: ",error)
        return {error:"Error creating user!"}
    }

}


export async function getUserById(userId){

    const id = parseInt(userId)

    const user = await prisma.user.findFirst({
        where:{
            id:userId
        },
        include:{
            userDetails:true
        }
    })

    if(!user){
        return {error:"User not found"}
    }


    await prisma.$disconnect()

    return user
}


export async function updateProfilePicture(prevState, formData){

    const profile_picture = formData.get("profile_picture")
    const userId = parseInt(formData.get("userId"))

    if(profile_picture.size > 0){
        //Image processing
        const extension = profile_picture.name.split(".").pop()
        const fileName = crypto.randomUUID() + "." + extension

        //Save image
        const stream = fs.createWriteStream(`uploads/users/profile_pictures/${fileName}`)
        const bufferedImage = await profile_picture.arrayBuffer()

        stream.write(Buffer.from(bufferedImage), (error) => {
            if(error){
                throw new Error("Saving image failed")
            }
        })
        
        stream.close()

        //Check if file does exist and delete it to save up space
        const check_user = await prisma.user.findFirst({
            where:{
                id:userId
            },
            include:{
                userDetails:true
            }
        })

        if(check_user){
            const curr_pic = check_user.userDetails.profilePicture
            if(curr_pic !== "" && curr_pic !== null){
                const f_name = curr_pic.split("/").pop()
                const f_path = `uploads/users/profile_pictures/${f_name}`
                const sig_stream = fs.unlink(f_path, (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            console.log('File not found, nothing to delete.');
                        } else {
                            console.error('Error deleting the file:', err);
                        }
                    } else {
                        console.log('File deleted successfully!');
                    }
                });

            }
        }


        var isDetailsComplete = false
        //Check if all details are complete
        if(check_user.email !== null && check_user.region !== null && check_user.role !== null &&
            check_user.userDetails.firstName !== null && check_user.userDetails.lastName !== null &&
            check_user.userDetails.address !== null && check_user.userDetails.companyAddress !== null &&
            check_user.userDetails.companyContact !== null && check_user.userDetails.companyJobTitle !== null &&
            check_user.userDetails.companyName !== null && check_user.userDetails.contactNumber !== null &&
            check_user.userDetails.signature !== null){
                isDetailsComplete = true
            }


        const curr_user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                isDetailsComplete:isDetailsComplete,
                userDetails:{
                    update:{
                        profilePicture: `/api/files/users/images/${fileName}`,
                    }
                }
            }
        })

        await prisma.$disconnect()
        revalidatePath("users/")
    }
}

export async function updateSignature(prevState, formData){

    const signature = formData.get("signature")
    const userId = parseInt(formData.get("userId"))

    if(signature.size > 0){
        //Image processing
        const extension = signature.name.split(".").pop()
        const fileName = crypto.randomUUID() + "." + extension

        //Save image
        const stream = fs.createWriteStream(`uploads/users/signatures/${fileName}`)
        const bufferedImage = await signature.arrayBuffer()

        stream.write(Buffer.from(bufferedImage), (error) => {
            if(error){
                throw new Error("Saving image failed")
            }
        })

        stream.close()

        //Check if file does exist and delete it to save up space
        const check_user = await prisma.user.findFirst({
            where:{
                id:userId
            },
            include:{
                userDetails:true
            }
        })

        if(check_user){
            const curr_pic = check_user.userDetails.signature
            if(curr_pic !== "" && curr_pic !== null){
                const f_name = curr_pic.split("/").pop()
                const f_path = `uploads/users/signatures/${f_name}`
                const sig_stream = fs.unlink(f_path, (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            console.log('File not found, nothing to delete.');
                        } else {
                            console.error('Error deleting the file:', err);
                        }
                    } else {
                        console.log('File deleted successfully!');
                    }
                });

            }
        }

        var isDetailsComplete = false
        //Check if all details are complete
        if(check_user.email !== null && check_user.region !== null && check_user.role !== null &&
            check_user.userDetails.firstName !== null && check_user.userDetails.lastName !== null &&
            check_user.userDetails.address !== null && check_user.userDetails.companyAddress !== null &&
            check_user.userDetails.companyContact !== null && check_user.userDetails.companyJobTitle !== null &&
            check_user.userDetails.companyName !== null && check_user.userDetails.contactNumber !== null &&
            check_user.userDetails.profilePicture !== null){
                isDetailsComplete = true
            }


        const curr_user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                isDetailsComplete:isDetailsComplete,
                userDetails:{
                    update:{
                        signature: `/api/files/users/signatures/${fileName}`,
                    }
                }
            }
        })

        

        revalidatePath("users/")
        await prisma.$disconnect()
    }
}


export async function updateUser(prevState, formData){

    try {
        const firstName = formData.get("first_name")
        const lastName = formData.get("last_name")
        const email = formData.get("email")
        const address = formData.get("address")
        const contact = formData.get("contact_number")
    
        const company_name = formData.get("company_name")
        const job_title = formData.get("job_title")
        const company_contact = formData.get("company_contact")
        const company_address = formData.get("company_address")
    
        const userId = parseInt(formData.get("userId"))
    
        var isDetailsComplete = false
    
        //Check if all attachments are added
        const check_user = await prisma.user.findFirst({
            where:{
                id:userId
            },
            include:{
                userDetails:true
            }
        })
    
    
        if(check_user.userDetails.profilePicture !== null && check_user.userDetails.signature !== null){
            isDetailsComplete = true
        }
    
        const user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                isDetailsComplete:isDetailsComplete,
                userDetails:{
                    update:{
                        firstName:firstName,
                        lastName:lastName,
                        address:address,
                        contactNumber:contact,
                        companyName:company_name,
                        companyJobTitle:job_title,
                        companyContact:company_contact,
                        companyAddress:company_address
                    }
                }
            }
        })
    
    
        if(isDetailsComplete){
            await prisma.$disconnect()
            revalidatePath("users/")
            return {error:null, success:true, detailsComplete:isDetailsComplete}
        } 
        else {
            await prisma.$disconnect()
            revalidatePath("users/")
            return {error:null, success:true, detailsComplete:isDetailsComplete}
        }

    } catch (error) {
        console.log(error)
        return {error:"Error updating user!"}
    }

}


export async function getAllUsersForTable(userRole){
    const users = await prisma.user.findMany({
        include:{
            userDetails:true
        },
        orderBy:{
            id:"desc"
        }
    })

    const flatData = []
    
    for(var user of users){
        flatData.push({
            id:user.id,
            email:user.email,
            role:convertRoleToReadable(user.role),
            region:convertRegionToReadable(user.region),
            firstName:capitalize(user.userDetails.firstName),
            lastName:capitalize(user.userDetails.lastName),
            companyName:capitalize(user.userDetails.companyName),
            status:user.isDetailsComplete === true ? "Active" : "Inactive"
        })
    }

    return flatData
}