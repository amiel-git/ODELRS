"use server";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


export default async function getAllSampleTypes(){
    
    try {
        const sampleTypes = await prisma.sampleType.findMany({
            include:{
                parameters:{
                    include:{
                        sampleMethods:{
                            include:{
                                sampleReferences:true
                            }
                        }
                    },
                    orderBy:{
                        name:"asc"
                    }
                }
            },
            orderBy:{
                name:"asc"
            }
        })

        if(!sampleTypes){
            return []
        }

        await prisma.$disconnect()
        return sampleTypes
        
        
    } catch (error) {
        console.log("Error fetching sample types")
        console.log(error)
        await prisma.$disconnect()
        return []
    }

}