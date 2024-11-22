"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { capitalize, isEMBEmployee } from "./helper";
import { convertRegionToReadable } from "./helper";
import { laboratoryStatusMapping } from "../mappings/laboratory_status_mappings";
import { notFound } from "next/navigation";

const prisma = new PrismaClient()


export default async function addLab(prevState, formData){
    
    const lab_name = formData.get("lab_name")
    const region = formData.get("region")
    const province = formData.get("province")
    const address = formData.get("address")
    const lat = parseFloat(formData.get("lat"))
    const lon = parseFloat(formData.get("lon"))
    const date_established = new Date(formData.get("date_established"))
    const userId = parseInt(formData.get("userId"))

    try {
        //Create establishment record
        const establishment = await prisma.establishment.create({
            data:{
                region:region,
                province:province,
                address:address,
                lat:lat,
                lon:lon,
                addedBy:{
                    connect:{
                        id:userId
                    }
                },
                updatedBy:{
                    connect:{
                        id:userId
                    }
                }
            }
        })

        //Create lab for initialization
        const lab = await prisma.laboratory.create({
            data:{
                establishment:{
                    connect:{
                        id:establishment.id
                    }
                },
                dateEstablished:date_established,
                laboratoryName:lab_name,
                status:1,
                addedBy:{
                    connect:{
                        id:userId
                    }
                }
            }
        })


        revalidatePath("laboratory/")
        await prisma.$disconnect()

        return {error:null, done:true}


    } catch (error__) {
        console.log()
        console.log()
        console.log()
        console.log("LABORATORY CREATION ERROR")
        console.log(error__)
        console.log()
        console.log()
        return {error:"Unable to create laboratory.", done:true}
    }

}


export async function getAllLabsForTable(userRole, userId){

    var labs = []
    if(isEMBEmployee(userRole)){
        //Return all labs for EMB employees
        labs = await prisma.laboratory.findMany({
            include:{
                establishment:true
            }
        })
    }
    else {
        //return labs created by the user
        labs = await prisma.laboratory.findMany({
            where:{
                addedById:parseInt(userId),
            },
            include:{
                establishment:true
            }
        })
    }
    
    var flatData = []
    
    if(labs.length > 0){
        for(var lab of labs){
            flatData.push({
                id:lab.id,
                labName: capitalize(lab.laboratoryName),
                region: convertRegionToReadable(lab.establishment.region),
                province: capitalize(String(lab.establishment.province).replace("_"," ")),
                status: laboratoryStatusMapping[lab.status]
            })
        }
    }

    await prisma.$disconnect()
    return flatData
}



export async function getLabById(labId){
    const lab = await prisma.laboratory.findFirst({
        where:{
            id:parseInt(labId)
        },
        include:{
            establishment:true,
            addedBy:true,
            labAttachments:true,
            businessPermit:true,
            accreditationRecords:true,
            personnels:true,
            trackRecords:true,
        }
    })

    if(!lab){
        notFound()
    }


    await prisma.$disconnect()
    return lab
}