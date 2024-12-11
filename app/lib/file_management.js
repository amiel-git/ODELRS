"use server";

import fs from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { getAllLabAttachments } from './lab_actions';


const prisma = new PrismaClient()

export default async function uploadFile(file, path, file_type){
    const extension = file.name.split(".").pop()
    const fileName = crypto.randomUUID() + "." + extension
    //Save image
    const stream = fs.createWriteStream(`${path}${fileName}`)
    const bufferedImage = await file.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error){
            throw new Error("Saving file failed")
        }
    })
    
    stream.close()

    //Create the attachment record
    const attachment = await prisma.attachment.create({
        data:{
            file_label:file.name,
            file_path:`${path}${fileName}`,
            url_path:`${path.replace(/^uploads\/laboratory/, 'api/files/laboratory')}${fileName}`,
            file_type: file_type
        }
    })

    await prisma.$disconnect()
    
    return attachment
}





export async function UploadLabAttachment(prevState, formData){
    const title = formData.get("title")
    const file_label = formData.get("fileType")
    const fileType = "lab_attachment"
    const file = formData.get("input_file")
    const userId = parseInt(formData.get("userId"))
    const labId = parseInt(formData.get("labId"))

    const file_path = "uploads/laboratory/attachments/"

    const required_files_keys = [
        "lab_test_form",
        "equipment_calibration",
        "pollution_control",
        "ref_literature",
        "qaqc_program",
        "floor_plan"
    ]

    try {
        const uploaded_file = await uploadFile(file,file_path,fileType)
        
        const new_attachment_record = await prisma.laboratoryAttachments.create({
            data:{
                laboratory:{
                    connect:{
                        id:labId
                    }
                },
                attachment:{
                    connect:{
                        id:uploaded_file.id
                    }
                },
                addedBy:{
                    connect:{
                        id:userId
                    }
                },
                dateAdded:new Date(),
                file_type:file_label

            }
        })



        //Check if files are present
        const attachments_list = await getAllLabAttachments(labId)

        if(attachments_list !== undefined && attachments_list !== null && attachments_list !== ""){
            const attachment_keys = Object.keys(attachments_list)
            
            const allKeysPresent = required_files_keys.every(key => attachment_keys.includes(key));
            
            if (allKeysPresent) {
                await prisma.laboratory.update({
                    where:{
                        id:labId
                    },
                    data:{
                        required_files_complete:true
                    }
                }) 
            }
        }
        

        await prisma.$disconnect()
        revalidatePath("laboratory/")

        return {error:null, file_type: title, success:true}
    } catch (error__) {
        const string_error = JSON.stringify(error__)
        console.log(string_error)
        return {error:string_error}
    }

}



export async function deleteFile(file_path){
    
    try {
        const sig_stream = fs.unlink(file_path, (err) => {
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

        return true
    } catch (error) {
        return false
    }

}