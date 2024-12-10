"use server";

import fs from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';



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




    // try {
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


        await prisma.$disconnect()
        revalidatePath("laboratory/")

        return {error:null, file_type: title, success:true}
    // } catch (error__) {
    //     const string_error = JSON.stringify(error__)
    //     console.log(string_error)
    //     return {error:string_error}
    // }

}