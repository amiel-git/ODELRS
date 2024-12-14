"use server";

import { PrismaClient } from "@prisma/client";
import { convertToStandardDate, convertToStandardDateTime, isEMBEmployee } from "./helper";
import {ApplicationStatusMapping, ApplicationStatusMappingExternal} from "@/app/mappings/application_status_mapping";
import { notFound } from "next/navigation";

const prisma = new PrismaClient()


export default async function addApplication(prevState, formData){
    
    try {
        const labId = parseInt(formData.get("labId"))
        const userId = parseInt(formData.get("userId"))
        
        //Get ELR Secretariat's account --- Fatima Molina currently
        const elr_secretariat = await prisma.user.findFirst({
            where:{
                isDetailsComplete:true,
                role:"elr_secretariat"
            },
            include:{
                userDetails:true
            }
        })

        if(!elr_secretariat){
            return {error:"ELR Secretariat not found.", success:true}
        }

        const elr_coordinator = await prisma.user.findFirst({
            where:{
                isDetailsComplete:true,
                role:"elr_coordinator"
            },
            include:{
                userDetails:true
            }
        })

        if(!elr_coordinator){
            return {error:"ELR Coordinator not found.", success:true}
        }

        //Create ELR Application
        const new_application = await prisma.eLRApplication.create({
            data:{
                laboratory:{
                    connect:{
                        id:labId
                    }
                },
                status:1,
                addedBy:{
                    connect:{
                        id:userId
                    }
                }
            }
        })


        //Create onsite assessment
        const new_onsite_assessment = await prisma.onSiteAssessment.create({
            data:{
                application:{
                    connect:{
                        id:new_application.id
                    }
                }
            }
        })


        //Create assessment team
        const new_assessment_team = await prisma.assessmentTeam.create({
            data:{
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })


        await prisma.$disconnect()

        return {error:null, success:true, applicationId:new_application.id}
    } catch (error) {
        console.log(JSON.stringify(error))
        return {error:"Unable to create application."}
    }
}


export async function getAllApplications(userRole, userId){

    var applications = []
    const isEMB = await isEMBEmployee(userRole)
    if(isEMB){
        applications = await prisma.eLRApplication.findMany({
            where:{
                status:{
                    gt:1
                }
            },
            include: {
                laboratory: true,
                assignee: {
                    include:{
                        userDetails:true
                    }
                },
                addedBy:{
                    include:{
                        userDetails:true
                    }
                },
                custodian: true,  
                onsite_assessment: {
                  include: {
                    assessmentTeam: true,
                  },
                },
              },
            orderBy:{
                date_updated:"desc"
            }
        })
    }
    else if(userRole === "external_assessor"){
        applications = await prisma.eLRApplication.findMany({
            where: {
              OR: [
                {
                  onsite_assessment: {
                    assessmentTeam: {
                      external_assessor_plId: userId,
                    },
                  },
                },
                {
                  onsite_assessment: {
                    assessmentTeam: {
                      external_assessor_mgmtId: userId,
                    },
                  },
                },
              ],
              status:{
                gt:1
            }
            },
            include: {
              laboratory: true,
              assignee: {
                include:{
                    userDetails:true
                }
              }, 
              addedBy:{
                include:{
                    userDetails:true
                }
              },
              custodian: true,  
              onsite_assessment: {
                include: {
                  assessmentTeam: true,
                },
              },
            },
            orderBy:{
                date_updated:"desc"
            }
        })
    }

    else {
        //For applicants, we will only show applicaitons createdb ythem
        applications = await prisma.eLRApplication.findMany({
            where:{
                addedById:userId
            },
            include: {
                laboratory: true,
                assignee: {
                    include:{
                        userDetails:true
                    }
                },
                addedBy:{
                    include:{
                        userDetails:true
                    }
                },
                custodian: true,  
                onsite_assessment: {
                  include: {
                    assessmentTeam: true,
                  },
                },
              },
            orderBy:{
                date_updated:"desc"
            }
        })
    }


    if(applications.length === 0){
        return []
    }



    var flatData = []


    for(var app of applications){
        flatData.push({
            id:app.id,
            laboratoryId:app.laboratory.id,
            laboratoryName:app.laboratory.laboratoryName,
            assignee:app.assignee !== null ? app.assignee.email : "---",
            status:isEMB ? ApplicationStatusMapping[app.status] : ApplicationStatusMappingExternal[app.status],
            createdBy:app.addedBy.email,
            created:convertToStandardDate(app.date_created),
            updated:convertToStandardDateTime(app.date_updated)
        })
    }

    console.log()
    console.log()
    console.log()
    console.log(flatData)
    console.log()
    console.log()
    console.log()


    await prisma.$disconnect()
    return flatData
}


export async function getApplicationById(applicationId){

    const application = await prisma.eLRApplication.findFirst({
        where:{
            id:parseInt(applicationId)
        },
        include: {
            laboratory: true,
            assignee: {
              include:{
                  userDetails:true
              }
            }, 
            addedBy:{
              include:{
                  userDetails:true
              }
            },
            custodian: true,  
            onsite_assessment: {
              include: {
                assessmentTeam: true,
              },
            },
          },
    })


    if(!application){
        notFound()
    }


    return application

}