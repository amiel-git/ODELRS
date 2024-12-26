"use server";

import { PrismaClient } from "@prisma/client";
import { capitalize, convertToStandardDate, convertToStandardDateTime, isEMBEmployee } from "./helper";
import uploadFile from "./file_management";
import {ApplicationStatusMapping, ApplicationStatusMappingExternal} from "@/app/mappings/application_status_mapping";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

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

        //Check if there is an existing open application
        const existing_application = await prisma.eLRApplication.findFirst({
            where:{
                laboratoryId:labId,
                AND: [
                    { status: { gte: 2 } },
                    { status: { lt: 77 } } 
                ]
            }
        })

        if(existing_application){
            return {error:"Laboratory has an ongoing application!", success:true}
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


        //Create onsite checklists
        await prisma.checklist.create({
            data:{
                type:"part1",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })

        await prisma.checklist.create({
            data:{
                type:"part2",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })


        await prisma.checklist.create({
            data:{
                type:"part3",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })


        await prisma.checklist.create({
            data:{
                type:"part4a",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })


        await prisma.checklist.create({
            data:{
                type:"part4b",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })


        await prisma.checklist.create({
            data:{
                type:"part4c",
                onsiteAssessment:{
                    connect:{
                        id:new_onsite_assessment.id
                    }
                }
            }
        })

        await prisma.checklist.create({
            data:{
                type:"part4d",
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
    const isEMB = isEMBEmployee(userRole)
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


export async function getApplicationById(applicationId, userRole){


    const isEMB = isEMBEmployee(userRole)
    const application = await prisma.eLRApplication.findFirst({
        where:{
            id:parseInt(applicationId)
        },
        include: {
            laboratory: {
                include:{
                    establishment:true
                }
            },
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
            custodian: {
                include:{
                    userDetails:true
                }
            },  
            onsite_assessment: {
              include: {
                assessmentTeam: {
                    include:{
                        liat_chair:{
                            include:{
                                userDetails:true
                            }
                        },
                        liat_member_co:{
                            include:{
                                userDetails:true
                            }
                        },
                        liat_member_ro:{
                            include:{
                                userDetails:true
                            }
                        },
                        external_assessor_mgmt:{
                            include:{
                                userDetails:true
                            }
                        },
                        external_assessor_pl:{
                            include:{
                                userDetails:true
                            }
                        }
                    }
                },
              },
            },
            scope_of_recognition:{
                include:{
                    sampleType:true,
                    sampleMethod:true,
                    parameter:true,
                    sampleReference:true,
                }
            },
            applicationFiles:{
                include:{
                    addedBy:true
                }
            }
          },
    })


    if(!application){
        notFound()
    }

    application.convertedStatus = isEMB ? ApplicationStatusMapping[application.status] : ApplicationStatusMappingExternal[application.status]

    console.log(application.scope_of_recognition)
    await prisma.$disconnect()    
    return application

}


export async function addScopeOfRecognition(prevState, formData){
    
    const sampleTypeId = parseInt(formData.get("sampleTypeId"))
    const parameterId = parseInt(formData.get("parameterId"))
    const methodId = parseInt(formData.get("methodId"))
    const referenceId = parseInt(formData.get("referenceId"))

    const applicationId = parseInt(formData.get("applicationId"))

    try {
        var new_sample = {}
        if(methodId === 0){
            new_sample = await prisma.sample.create({
                data:{
                    sampleTypeId:sampleTypeId,
                    parameterId:parameterId,
                }
            })
        } 
        else if (referenceId === 0){
            new_sample = await prisma.sample.create({
                data:{
                    sampleTypeId:sampleTypeId,
                    parameterId:parameterId,
                    sampleMethodId:methodId,
                }
            })
        }
        else {
            new_sample = await prisma.sample.create({
                data:{
                    sampleTypeId:sampleTypeId,
                    parameterId:parameterId,
                    sampleMethodId:methodId,
                    sampleReferenceId:referenceId
    
                }
            })
        }
    

        //Connect the new sample to the ELR Application
        await prisma.eLRApplication.update({
            where:{
                id:applicationId
            },
            data:{
                scope_of_recognition:{
                    connect:{
                        id:new_sample.id
                    }
                }
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}


    } catch (error) {
        console.log("Unable to add scope of recognition.")
        console.log(JSON.stringify(error))
        return {error:"Unable to add scope of recognition."}
    }    
}


export async function deleteScopeOfRecognition(prevState, formData){
    
    const recordId = parseInt(formData.get("recordId"))
    const applicationId = parseInt(formData.get("applicationId"))
    console.log()
    console.log()
    console.log()
    console.log("FORM DATA")
    console.log(formData)
    console.log()
    console.log()
    console.log()
    console.log()
    try {
        await prisma.eLRApplication.update({
            where:{
                id:applicationId
            },
            data:{
                scope_of_recognition:{
                    disconnect:{
                        id:recordId
                    }
                }
            }
        })
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}


    } catch (error) {
        console.log("Unable to delete scope of recognition.")
        console.log(JSON.stringify(error))
        return {error:"Unable to delete scope of recognition."}
    }    
}



export async function getAllScopeForTable(applicationId){
    const application = await prisma.eLRApplication.findFirst({
        where:{
            id:parseInt(applicationId)
        },
        include: {
            scope_of_recognition:{
                include:{
                    sampleType:true,
                    sampleMethod:true,
                    parameter:true,
                    sampleReference:true,
                }
            }
          },
    })

    const scope = application.scope_of_recognition

    var flatData = []

    for(var item of scope){
        flatData.push({
            id:item.id,
            sampleType:item.sampleType.name,
            parameter:item.parameter.name,
            sampleMethod:item.sampleMethod !== null ? item.sampleMethod.name : "---",
            sampleReference:item.sampleReference !== null ? item.sampleReference.name : "---",
        })
    }

    await prisma.$disconnect()
    return flatData

}


export async function submitApplicationToEMB(prevState, formData){
        // 1. Set the application status to next status 2
        // 2. Assign application to ELR secretariat
        // 3. Update the last update time to the current
        // 4. Create required forms
    try {
        const applicationId = parseInt(formData.get("applicationId"))
        const elr_secretariat = await prisma.user.findFirst({
            where:{
                isDetailsComplete:true,
                role:"elr_secretariat"
            }
        })

        await prisma.eLRApplication.update({
            where:{
                id:applicationId
            },
            data:{
                status:2,
                assignee:{
                    connect:{
                        id:elr_secretariat.id
                    }
                },
                date_updated:new Date()
            }
        })


        //Create forms
        await prisma.form.create({
            data:{
                form_type:"first_level_evaluation",
                application:{
                    connect:{
                        id:applicationId
                    }
                }
            }
        })


        await prisma.$disconnect()
        revalidatePath("application/")

        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to submit application to EMB.",success:true}
    }
}


export async function updateCustodian(prevState, formData){

    // 1. If status is equal 2 (for custodian assignment), move the status to the next stage and assign the application to the custodian
    // 2. If input is blank reject the post
    // 3. Assign the user as custodian

    const applicationId = parseInt(formData.get("applicationId"))
    const custodianId = parseInt(formData.get("custodianId"))


    try {
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:applicationId
            }
        })

        if(application.status === 2){
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    status:3,
                    custodian:{
                        connect:{
                            id:custodianId
                        }
                    },
                    assignee:{
                        connect:{
                            id:custodianId
                        }
                    },
                    date_updated:new Date()
                }
            })
        }
        else {
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    custodian:{
                        connect:{
                            id:custodianId
                        }
                    },
                    date_updated:new Date()
                }
            })
        }

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
        
    } catch (error) {
        return {error:"Unable to update application's custodian."}
    }
}

export async function getFormsForApplication(applicationId) {
    try {

      const forms = await prisma.form.findMany({
        where: {applicationId: parseInt(applicationId)},
        select: {
          form_type: true, 
          data: true, 
        },
      });
  
      // Format the result as {"form_type": form}
      const formattedResult = forms.reduce((acc, form) => {
        acc[form.form_type] = form.data
        return acc;
      }, {});
      
      await prisma.$disconnect()
      return formattedResult;

    } catch (error) {
      console.error('Error fetching forms:', error);
      await prisma.$disconnect()
      throw error;
    }
}



export async function saveForm(applicationId, form_type, payload) {
    

    try {
        const form = await prisma.form.findFirst({
            where:{
                form_type:form_type,
                applicationId:parseInt(applicationId)
            }
        })
    
    
        if(!form){
            return {error:"Error saving form: Form record not found!"}
        }
    
    
        await prisma.form.updateMany({
            where:{
                form_type:form_type,
                applicationId:parseInt(applicationId)
            },
            data:{
                data:payload
            }
        })

        await prisma.$disconnect()
        return {error:null}
    } catch (error) {
        return {error:"Error saving form: Form record not found!"}
    }

}


export async function moveApplicationToNextStage(prevState, formData){


    try {
        const applicationId = parseInt(formData.get("applicationId"))
        var assigneeId = parseInt(formData.get("assigneeId"))
    
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:parseInt(applicationId)
            }
        })
    
        if(!application){
            return {error:"Unable to find application record.", success:true}
        }
    
    
        const current_status = application.status

        if(current_status === 4){
            const elr_secretariat = await prisma.user.findFirst({
                where:{
                    role:"elr_secretariat",
                    isDetailsComplete:true
                }
            })

            assigneeId = elr_secretariat.id
        }
    
        await prisma.eLRApplication.update({
            where:{
                id:applicationId
            },
            data:{
                status:current_status + 1,
                date_updated: new Date(),
                assignee:{
                    connect:{
                        id:assigneeId
                    }
                }
            }
        })
    
    
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to update application stage.", success:true}
    }

}



export async function getAllTeamMemberChoices(applicationId){

    try {
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:parseInt(applicationId)
            },
            include:{
                laboratory:{
                    include:{
                        establishment:true
                    }
                }
            }
        })
    
        const lab_region = application.laboratory.establishment.region
    
    
        const liat_chairs = await prisma.user.findMany({
            where:{
                OR:[
                    {role:"elr_coordinator"},
                    {role:"elr_secretariat"},
                    {role:"custodian"},
                    {role:"admin"},
                ],
                isDetailsComplete:true
            },
            include:{
                userDetails:true
            },
            orderBy:{
                userDetails:{
                    firstName:"asc"
                }
            }
        })
    
    
        const liat_members_co = await prisma.user.findMany({
            where:{
                OR:[
                    {role:"elr_coordinator"},
                    {role:"elr_secretariat"},
                    {role:"custodian"},
                    {role:"liat_member_co"},
                    {role:"admin"},
                ],
                region:"central_office",
                isDetailsComplete:true
            },
            include:{
                userDetails:true
            },
            orderBy:{
                userDetails:{
                    firstName:"asc"
                }
            }
        })
    
    
        const liat_members_ro = await prisma.user.findMany({
            where:{
                OR:[
                    {role:"elr_coordinator"},
                    {role:"elr_secretariat"},
                    {role:"liat_member_ro"},
                    {role:"custodian"},
                    {role:"admin"},
                ],
                region:lab_region,
                isDetailsComplete:true
            },
            include:{
                userDetails:true
            },
            orderBy:{
                userDetails:{
                    firstName:"asc"
                }
            }
        })
    
    
        const external_assessors = await prisma.user.findMany({
            where:{
                OR:[
                    {role:"external_assessor"},
                ],
                isDetailsComplete:true
            },
            include:{
                userDetails:true
            },
            orderBy:{
                userDetails:{
                    firstName:"asc"
                }
            }
        })
    
        const user_object = {
            "liat_chair":liat_chairs ? liat_chairs : [],
            "liat_member_co":liat_members_co ? liat_members_co : [],
            "liat_member_ro":liat_members_ro ? liat_members_ro : [],
            "external_assessor_mgmt":external_assessors ? external_assessors : [],
            "external_assessor_pl":external_assessors ? external_assessors : [],
        }
    
        await prisma.$disconnect()
        return user_object
    } catch (error) {
        return {error:"Unable to fetch users for team creation."}
    }
}

export async function addAssessmentTeamMember(prevState, formData){
    try {
        
        const role = formData.get("role")
        const memberId = parseInt(formData.get("memberId"))
        const applicationId = parseInt(formData.get("applicationId"))

        const parts = String(formData.get("parts")).split(",") 

        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:applicationId
            },
            include:{
                onsite_assessment:true
            }
        })
        const onsiteAssessmentId = application.onsite_assessment.id

        const member = await prisma.user.findFirst({
            where:{
                id:memberId
            },
            include:{
                checklists:true
            }
        })
        if(member.checklists !== null){
            if(member.checklists.length > 0){
                const current_user_checklists = member.checklists.map((item) => {
                    return {id:item.id}
                })
                await prisma.user.update({
                    where:{
                        id:memberId
                    },
                    data:{
                        checklists:{
                            disconnect:current_user_checklists
                        }
                    }
                })
            }
        }
        
  
        //Add user to the intended part
        for(var part of parts){
            const curr_checklist = await prisma.checklist.findFirst({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId,
                    type:part
                }
            })

            if(!curr_checklist){
                return {error:`Unable to find ${part} checklist to update.`}
            }
            
            await prisma.checklist.update({
                where:{
                    id:curr_checklist.id
                },
                data:{
                    assignees:{
                        connect:{
                            id:memberId
                        }
                    }
                }
            })
        }



        if(role === "liat_chair"){
            await prisma.assessmentTeam.update({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId
                },
                data:{
                    liat_chairId:memberId
                }
            })
        }
        else if(role === "liat_member_co"){
            await prisma.assessmentTeam.update({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId
                },
                data:{
                    liat_member_co:{
                        connect:{
                            id:memberId
                        }
                    }
                }
            })
        }
        else if(role === "liat_member_ro"){
            await prisma.assessmentTeam.update({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId
                },
                data:{
                    liat_member_ro:{
                        connect:{
                            id:memberId
                        }
                    }
                }
            })
        }
        else if(role === "external_assessor_mgmt"){
            await prisma.assessmentTeam.update({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId
                },
                data:{
                    external_assessor_mgmt:{
                        connect:{
                            id:memberId
                        }
                    }
                }
            })
        }

        else if(role === "external_assessor_pl"){
            await prisma.assessmentTeam.update({
                where:{
                    onsiteAssessmentId:onsiteAssessmentId
                },
                data:{
                    external_assessor_pl:{
                        connect:{
                            id:memberId
                        }
                    }
                }
            })
        }
        else {
            return {error:`Unsupported role selected.`}
        }
            

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:`Unable to add assessment team member.`}
    }
}


function formatTeamMember(user, onsiteAssessmentId){
    var output = {
        userId:user.id,
        name: `${capitalize(user.userDetails.firstName)} ${capitalize(user.userDetails.lastName)}`,
        onsiteAssessmentId:onsiteAssessmentId
    }
    var checklists = []

    if(user.checklists !== null){
        if(user.checklists.length > 0){
            for(var checklist of user.checklists){
                checklists.push(checklist.type)
            }
        }
    }

    output["checklists"] = checklists

    return output
}

export async function getTeamMembersForTable(applicationId) {
    const application = await prisma.eLRApplication.findFirst({
        where:{
            id:parseInt(applicationId)
        },
        include:{
            onsite_assessment:{
                include:{
                    assessmentTeam:{
                        include:{
                            liat_chair:{
                                include:{
                                    userDetails:true,
                                    checklists:true
                                }
                            },
                            liat_member_co:{
                                include:{
                                    userDetails:true,
                                    checklists:true
                                }
                            },
                            liat_member_ro:{
                                include:{
                                    userDetails:true,
                                    checklists:true
                                }
                            },
                            external_assessor_mgmt:{
                                include:{
                                    userDetails:true,
                                    checklists:true
                                }
                            },
                            external_assessor_pl:{
                                include:{
                                    userDetails:true,
                                    checklists:true
                                }
                            }
                        }
                    },
                }
            }
        }
    })

    const team = application.onsite_assessment.assessmentTeam

    const liat_chair_out = team.liat_chair !== null ? [formatTeamMember(team.liat_chair, application.onsite_assessment.id)] : []

    const liat_member_co_out = team.liat_member_co !== null ? team.liat_member_co.map((item) => {
        return formatTeamMember(item, application.onsite_assessment.id)
    }) : []

    const liat_member_ro_out = team.liat_member_ro !== null ? team.liat_member_ro.map((item) => {
        return formatTeamMember(item, application.onsite_assessment.id)
    }) : []

    const external_assessor_mgmt_out = team.external_assessor_mgmt !== null ? [formatTeamMember(team.external_assessor_mgmt, application.onsite_assessment.id)] : []
    
    const external_assessor_pl_out = team.external_assessor_pl !== null ? [formatTeamMember(team.external_assessor_pl, application.onsite_assessment.id)] : []



    const team_obj = {
        liat_chair:liat_chair_out,
        liat_member_co:liat_member_co_out,
        liat_member_ro:liat_member_ro_out,
        external_assessor_mgmt:external_assessor_mgmt_out,
        external_assessor_pl:external_assessor_pl_out
    }

    await prisma.$disconnect()
    return team_obj
}


export async function deleteTeamMember(prevState, formData){

    const applicationId = parseInt(formData.get("applicationId"))
    const userId = parseInt(formData.get("recordId"))
    const selectedType = formData.get("selectedType")

    const application = await prisma.eLRApplication.findFirst({
        where:{
            id:applicationId
        },
        include:{
            onsite_assessment:{
                include:{
                    assessmentTeam:true
                }
            },
            
        }
    })

    const onsiteAssessmentId = application.onsite_assessment.id
    const assessmentTeamId = application.onsite_assessment.assessmentTeam.id

    if(selectedType === "liat_chair"){
        await prisma.assessmentTeam.update({
            where:{
                id:assessmentTeamId
            },
            data:{
                liat_chair:{
                    disconnect:true
                }
            }
        })
    }
    else if(selectedType === "liat_member_co"){
        await prisma.assessmentTeam.update({
            where:{
                id:assessmentTeamId
            },
            data:{
                liat_member_co:{
                    disconnect:[
                        {id:userId}
                    ]
                }
            }
        })
    }
    else if(selectedType === "liat_member_ro"){
        await prisma.assessmentTeam.update({
            where:{
                id:assessmentTeamId
            },
            data:{
                liat_member_ro:{
                    disconnect:[
                        {id:userId}
                    ]
                }
            }
        })
    }
    else if(selectedType === "external_assessor_mgmt"){
        await prisma.assessmentTeam.update({
            where:{
                id:assessmentTeamId
            },
            data:{
                external_assessor_mgmt:{
                    disconnect:true
                }
            }
        })
    }
    else if(selectedType === "external_assessor_pl"){
        await prisma.assessmentTeam.update({
            where:{
                id:assessmentTeamId
            },
            data:{
                external_assessor_pl:{
                    disconnect:true
                }
            }
        })
    }
    else{
        return {error:`Unsupported role selected.`}
    }

    await prisma.$disconnect()
    revalidatePath("application/")
    return {error:null, success:true}
}



export async function setOnsiteAssessmentSchedule(prevState, formData){
    

    try {
        const start = formData.get("schedule_start")
        const end = formData.get("schedule_end")
        const applicationId = parseInt(formData.get("applicationId"))
    
    
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:applicationId
            },
            include:{
                onsite_assessment:true
            }
        })
    
        await prisma.onSiteAssessment.update({
            where:{
                id:application.onsite_assessment.id
            },
            data:{
                scheduleStart:new Date(start),
                scheduleEnd:new Date(end)
            }
        })
        
    
        await prisma.$disconnect()
        revalidatePath("application/")
    
        return {error:null, success:true}

    } catch (error) {
        return {error:"Unable to update the onsite assessment schedule.", success:true}
    }

}


export async function teamReviewDecision(prevState, formData){
    

    try {
        const applicationId = parseInt(formData.get("applicationId"))
        const decision = formData.get("decision")
    
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:applicationId
            }
        })
        if(decision === "denied"){
            const reason = formData.get("reason")
            // TODO: Add a log for the reason
    
            //Move the application back to team creation and reassign to custodian
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    assignee:{
                        connect:{
                            id:application.custodianId
                        }
                    },
                    status:4
                }
            })
        } 
        else if(decision === "approved") {
            //Move the application to the next state and assign it to the ELR coordinator
            const elr_coordinator = await prisma.user.findFirst({
                where:{
                    role:"elr_coordinator"
                }
            })
    
            if(!elr_coordinator){
                return {error:"Unable to move the application: ELR Coordinator not found."}
            }
    
    
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    assignee:{
                        connect:{
                            id:elr_coordinator.id
                        }
                    },
                    status:6
                }
            })
        }

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to move the application to the communication stage."}
    }
}



export async function level2UploadAction(prevState, formData){
    

    try {
        const applicationId = parseInt(formData.get("applicationId"))
        const input_file = formData.get("input_file")
        const fileType = formData.get("fileType")
        const userId = parseInt(formData.get("userId"))


        if(input_file.size > 0){

            const application = await prisma.eLRApplication.findFirst({
                where:{
                    id:applicationId
                }
            })
            const attachment = await uploadFile(input_file,"uploads/application/level2approval/",fileType, userId)
            
            //Connect it to the application
            await prisma.attachment.update({
                where:{
                    id:attachment.id
                },
                data:{
                    application:{
                        connect:{
                            id:applicationId
                        }
                    }
                }
            })

            //Move the application to the notarization stage and assign it back to the applicant
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    assignee:{
                        connect:{
                            id:application.addedById
                        }
                    },
                    status:application.status + 1
                }
            })
        }
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) { 
        return {error:"Unable to upload the level 2 approval file.", success:true}  
    }
    
}


export async function getApplicationFilesForTable(applicationId){

    try {
        const application = await prisma.eLRApplication.findFirst({
            where:{
                id:parseInt(applicationId)
            },
            include:{
                applicationFiles:{
                    include:{
                        addedBy:true
                    }
                }
            }
        })
    
    
        const files = application.applicationFiles
        const flatData = []
    
        
        if(files !== null){
            if(files.length > 0){
                for(var file of files){
                    flatData.push({
                        id:file.id,
                        file_path:file.file_path,
                        file_label:file.file_label,
                        url_path:file.url_path,
                        date_added:convertToStandardDate(file.dateAdded),
                        addedByEmail:file.addedBy.email,
                        isEMB:isEMBEmployee(file.addedBy.role)
                    })
                }
            }
        }
    
        await prisma.$disconnect()
        return flatData
    } catch (error) {
        return {error:"Unable to fetch application files."}  
    }

}


export async function notarizedFormUploadAction(prevState, formData){
    

    try {
        const applicationId = parseInt(formData.get("applicationId"))
        const input_file = formData.get("input_file")
        const fileType = formData.get("fileType")
        const userId = parseInt(formData.get("userId"))


        if(input_file.size > 0){

            const application = await prisma.eLRApplication.findFirst({
                where:{
                    id:applicationId
                },
                include:{
                    custodian:true
                }
            })
            const attachment = await uploadFile(input_file,"uploads/application/notarized_application/",fileType, userId)
            
            //Connect it to the application
            await prisma.attachment.update({
                where:{
                    id:attachment.id
                },
                data:{
                    application:{
                        connect:{
                            id:applicationId
                        }
                    }
                }
            })

            //Move the application to the for onsite assessment stage and move the application back to the custodian
            await prisma.eLRApplication.update({
                where:{
                    id:applicationId
                },
                data:{
                    assignee:{
                        connect:{
                            id:application.custodian.id
                        }
                    },
                    status:application.status + 1
                }
            })
        }
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) { 
        return {error:"Unable to upload the notarized applicaiton form.", success:true}  
    }
    
}


export async function addRemark(prevState, formData) {

    try {
        const applicationId = parseInt(formData.get("applicationId"))
        const userId = parseInt(formData.get("userId"))
        const content = formData.get("comment")
        const remarkType = formData.get("remarkType")
    
        const remark = await prisma.remark.create({
            data:{
                content:content,
                addedBy:{
                    connect:{
                        id:userId
                    }
                },
                elrApplication:{
                    connect:{
                        id:applicationId
                    }
                },
                remarkType:remarkType
            }
        })
        
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to add remark", success:true}
    }
}


export async function getAllApplicationRemark(applicationId){

    try {
        const remarks = await prisma.remark.findMany({
            where:{
                elrApplicationId:parseInt(applicationId)
            },
            include:{
                addedBy:{
                    include:{
                        userDetails:true
                    }
                },
                elrApplication:true
            },
            orderBy:{
                created:"desc"
            }
        })
    
        const output = {
            internal:[],
            external:[]
        }
    
        for(var remark of remarks){
            const remarkType = remark.remarkType
            const content = remark.content
            const addedByName = `${capitalize(remark.addedBy.userDetails.firstName)} ${capitalize(remark.addedBy.userDetails.lastName)}` 
            const addedByProfilePicture = remark.addedBy.userDetails.profilePicture
            const created = convertToStandardDateTime(remark.created)
    
            if(remarkType === "internal"){
                output.internal.push({
                    content:content,
                    addedByName:addedByName,
                    addedByProfilePicture:addedByProfilePicture,
                    created:created
                })
            }
            else if(remarkType === "external"){
                output.external.push({
                    content:content,
                    addedByName:addedByName,
                    addedByProfilePicture:addedByProfilePicture,
                    created:created
                })
            }
        }
    
    
        await prisma.$disconnect()
        
        return output
    } catch (error) {
        return []
    }
}

export async function getApplicationChecklists(applicationId){

    try {
        const onsiteAssessment = await prisma.onSiteAssessment.findFirst({
            where:{
                applicationId:parseInt(applicationId)
            }
        })
    
        const checklists = await prisma.checklist.findMany({
            where:{
                onsiteAssessmentId:onsiteAssessment.id
            },
            include:{
                personnelInterviewed:true
            }
        })
    
        const output = {}
    
        for(var item of checklists){
            output[item.type] = item
        }
        
        await prisma.$disconnect()
        return output
    } catch (error) {
        return {}   
    }

}

export async function assignPersonnelInterviewed(prevState, formData){

    try {
        const personnelId = parseInt(formData.get("personnel"))
        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
    
        const checklist = await prisma.checklist.findFirst({
            where:{
                type:part,
                onsiteAssessmentId:onsiteId
            }
        })
    
    
        await prisma.checklist.update({
            where:{
                id:checklist.id
            },
            data:{
                personnelInterviewed:{
                    connect:{
                        id:personnelId
                    }
                }
            }
        })
        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to set personnel interviewed",success:true}
    }

}



export async function realTimeFormFunction(prevState, formData){


    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const identifier = formData.get("identifier") 
        const form_value = formData.get("form_value") 
    
        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        const curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data
    
    
        curr_checklist_data[identifier] = form_value
    
        const updated = await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })
    
        await prisma.$disconnect()
        return {error:null, success:true, data:updated.data}
    } catch (error) {
        console.log("unable to update checklist data")
        return {error:"Unable to update checklist data",success:true}
    }

}


export async function addOnsiteTrackRecord(prevState, formData){

    try {
        
        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")

        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const track_records = curr_checklist_data?.track_records ?? []

        const sample_data = JSON.parse(formData.get("sample"))

        track_records.push({
            sampleType:capitalize(sample_data.sampleType),
            parameter:capitalize(sample_data.parameter),
            sampleMethod:capitalize(sample_data?.sampleMethod ?? ""),
            sampleReference:capitalize(sample_data?.sampleReference ?? ""),
            total_samples:sample_data?.num_of_samples ?? "",
            date_coverage:sample_data?.date_coverage ?? "",
            personnel: capitalize(formData.get("personnel")),
            no_samples: formData.get("no_samples"),
            remarks: capitalize(formData.get("remarks")),
            denr_approved: formData.get("denr_approved")
        })


        curr_checklist_data.track_records = track_records


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })


        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to add track record.",success:true}
    }
}


export async function deleteOnsiteTrackRecord(prevState, formData){

    try {

        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const indexToRemove = parseInt(formData.get("recordIdx"))


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        var track_records = curr_checklist_data?.track_records ?? []
        track_records = track_records.filter((_, index) => index !== indexToRemove);

        curr_checklist_data.track_records = track_records

        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to delete track record.",success:true}
    }
}



export async function addPersonResposible(prevState, formData){
    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const userId = parseInt(formData.get("userId"))
        const part = formData.get("part")
        const name = formData.get("name")
        const type_of_report = formData.get("type_of_report")
        const signed = formData.get("signed")
        const denr_approved = formData.get("denr_approved")
        const input_file = formData.get("input_file")

        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const persons_responsible = curr_checklist_data?.persons_responsible ?? []


        if(input_file.size > 0){
            const attachment = await uploadFile(input_file,"uploads/checklists/attachments/","checklist_person", userId)
            persons_responsible.push({
                name:name,
                type_of_report:type_of_report,
                signed:signed,
                denr_approved:denr_approved,
                attachment:attachment.url_path
            })
        }

        else {
            persons_responsible.push({
                name:name,
                type_of_report:type_of_report,
                signed:signed,
                denr_approved:denr_approved,
            })
        }
        
        curr_checklist_data.persons_responsible = persons_responsible


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to add record.",success:true}
    }
}


export async function deletePersonResponsible(prevState, formData){

    try {

        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const indexToRemove = parseInt(formData.get("recordIdx"))


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        var persons_responsible = curr_checklist_data?.persons_responsible ?? []
        persons_responsible = persons_responsible.filter((_, index) => index !== indexToRemove);

        curr_checklist_data.persons_responsible = persons_responsible

        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to delete track record.",success:true}
    }
}



export async function addPersonRecognized(prevState, formData){
    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const userId = parseInt(formData.get("userId"))
        const part = formData.get("part")
        const name = formData.get("name")
        const education = formData.get("education")
        const profession = formData.get("profession")
        const license = formData.get("license")
        const responsibility = formData.get("responsibility")

        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const persons_recognized = curr_checklist_data?.persons_recognized ?? []



        persons_recognized.push({
            name:name,
            education:education,
            profession:profession,
            license:license,
            responsibility:responsibility,
        })

        
        curr_checklist_data.persons_recognized = persons_recognized


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to add record.",success:true}
    }
}


export async function deletePersonRecognized(prevState, formData){

    try {

        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const indexToRemove = parseInt(formData.get("recordIdx"))


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        var persons_recognized = curr_checklist_data?.persons_recognized ?? []
        persons_recognized = persons_recognized.filter((_, index) => index !== indexToRemove);

        curr_checklist_data.persons_recognized = persons_recognized

        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to delete track record.",success:true}
    }
}


export async function addProficiencyTest(prevState, formData){
    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const userId = parseInt(formData.get("userId"))
        const part = formData.get("part")
        const date_from = formData.get("date_from")
        const date_to = formData.get("date_to")
        const date_value = `${convertToStandardDate(new Date(date_from))} to ${convertToStandardDate(new Date(date_to))}`
        const title = formData.get("title")
        const organizing_body = formData.get("organizing_body")
        const matrix = formData.get("matrix")
        const parameters = formData.get("parameters")
        const performance = formData.get("performance")


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const proficiency_tests = curr_checklist_data?.proficiency_tests ?? []

        proficiency_tests.push({
            date:date_value,
            title:title,
            organizing_body:organizing_body,
            matrix:matrix,
            parameters:parameters,
            performance:performance,
        })

        
        curr_checklist_data.proficiency_tests = proficiency_tests


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to add record.",success:true}
    }
}


export async function deleteProficiencyTest(prevState, formData){

    try {

        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const indexToRemove = parseInt(formData.get("recordIdx"))


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        var proficiency_tests = curr_checklist_data?.proficiency_tests ?? []
        proficiency_tests = proficiency_tests.filter((_, index) => index !== indexToRemove);

        curr_checklist_data.proficiency_tests = proficiency_tests

        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to delete track record.",success:true}
    }
}


export async function addPart4Table1Data(prevState, formData){
    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const userId = parseInt(formData.get("userId"))
        const part = formData.get("part")
        const matrix = formData.get("matrix")
        const parameters = formData.get("parameters")
        const tr_compliance = formData.get("tr_compliance")
        const lp_compliance = formData.get("lp_compliance")
        const mdl = formData.get("mdl")
        const reagents_compliance = formData.get("reagents_compliance")
        const equipment_compliance = formData.get("equipment_compliance")
        const qc_analyzed = formData.get("qc_analyzed")
        const qc_charts = formData.get("qc_charts")
        const source = formData.get("source")
        const comments = formData.get("comments")

        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const part4Table1 = curr_checklist_data?.part4Table1 ?? []

        part4Table1.push({
            matrix:matrix,
            parameters:parameters,
            tr_compliance:tr_compliance,
            lp_compliance:lp_compliance,
            mdl:mdl,
            reagents_compliance:reagents_compliance,
            equipment_compliance:equipment_compliance,
            qc_analyzed:qc_analyzed,
            qc_charts:qc_charts,
            source:source,
            comments:comments,
        })

        
        curr_checklist_data.part4Table1 = part4Table1


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to add record.",success:true}
    }
}


export async function deletePart4Table1Data(prevState, formData){

    try {

        const onsiteId = parseInt(formData.get("onsiteId"))
        const part = formData.get("part")
        const indexToRemove = parseInt(formData.get("recordIdx"))


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        var part4Table1 = curr_checklist_data?.part4Table1 ?? []
        part4Table1 = part4Table1.filter((_, index) => index !== indexToRemove);

        curr_checklist_data.part4Table1 = part4Table1

        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true, data:curr_checklist_data}
    } catch (error) {
        return {error:"Unable to delete track record.",success:true}
    }
}


export async function addCalibrationData(prevState, formData){
    try {
        const onsiteId = parseInt(formData.get("onsiteId"))
        const userId = parseInt(formData.get("userId"))
        const part = formData.get("part")
        const instrument = formData.get("instrument")
        const parameters = formData.get("parameters")
        const program_calibration = formData.get("program_calibration")
        const internal_calibration = formData.get("internal_calibration")
        const external_calibration = formData.get("external_calibration")
        const program_maintenance = formData.get("program_maintenance")
        const internal_maintenance = formData.get("internal_maintenance")
        const external_maintenance = formData.get("external_maintenance")


        const curr_checklist = await prisma.checklist.findFirst({
            where:{
                onsiteAssessmentId:onsiteId,
                type:part
            }
        })
    
        var curr_checklist_data = curr_checklist.data === null ? {} : curr_checklist.data

        const calibration_data = curr_checklist_data?.calibration_data ?? []

        calibration_data.push({
            instrument:instrument,
            parameters:parameters,
            program_calibration:program_calibration,
            internal_calibration:internal_calibration,
            external_calibration:external_calibration,
            program_maintenance:program_maintenance,
            internal_maintenance:internal_maintenance,
            external_maintenance:external_maintenance,
        })

        
        curr_checklist_data.calibration_data = calibration_data


        await prisma.checklist.update({
            where:{
                id:curr_checklist.id
            },
            data:{
                data:curr_checklist_data
            }
        })

        await prisma.$disconnect()
        revalidatePath("application/")
        return {error:null, success:true}
    } catch (error) {
        return {error:"Unable to add record.",success:true}
    }
}
