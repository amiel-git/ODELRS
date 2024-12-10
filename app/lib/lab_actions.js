"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { capitalize, convertToStandardDate, isEMBEmployee } from "./helper";
import { convertRegionToReadable } from "./helper";
import { laboratoryStatusMapping } from "../mappings/laboratory_status_mappings";
import { notFound } from "next/navigation";
import uploadFile from "./file_upload";

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
        console.log(JSON.stringify(error__))
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




export async function updateLaboratoryDetails(prevState, formData){
    

    try {
        const labName = formData.get("lab_name")
        const region = formData.get("region")
        const province = formData.get("province")
        const address = formData.get("address")
        const lat = parseFloat(formData.get("lat"))
        const lon = parseFloat(formData.get("lon"))
        const date_established = new Date(formData.get("date_established"))
        const mission_statement = formData.get("mission_statement")
        const contact_number = formData.get("contact_number")
        const fax_number = formData.get("fax_number")
        const tin = formData.get("tin")
        const b_permit_number = formData.get("b_permit_number")
        const b_permit_issue_date = new Date(formData.get("b_permit_issue_date"))
        const b_permit_expiry_date = new Date(formData.get("b_permit_expiry_date"))
        const b_permit_place = formData.get("b_permit_place")
        const l_head_name = formData.get("l_head_name")
        const l_head_email = formData.get("l_head_email")
        const l_head_contact = formData.get("l_head_contact")
        const scope = formData.get("scope")
        const geographical_area = formData.get("geographical_area")
    
        const categories = String(formData.get("categories")).split(",") 
        const services = String(formData.get("services")).split(",")
    
        const userId = parseInt(formData.get("userId"))
        const labId = parseInt(formData.get("labId"))
        
    
        const curr_lab = await prisma.laboratory.update({
            where:{
                id:labId
            },
            data:{
                laboratoryName:labName,
                labHeadName:l_head_name,
                labHeadEmail:l_head_email,
                labHeadContact:l_head_contact,
                contactNumber:contact_number,
                faxNumber:fax_number,
                tin:tin,
                missionStatement:mission_statement,
                dateEstablished:date_established,
                businessPermitNumber:b_permit_number,
                businessPermitIssueDate:b_permit_issue_date,
                businessPermitExpiration:b_permit_expiry_date,
                businessPermitPlaceOfIssuance:b_permit_place,
                categoryOfClient:categories,
                ServicesOffered:services,
                scopeOfWork:scope,
                areaServed:geographical_area,
                updatedBy:{
                    disconnect:true,
                    connect:{
                        id:userId
                    }
                },
                updated:new Date(),
            }
        })
        
        const establishment_rec = await prisma.establishment.findFirst({
            where:{
                id:curr_lab.establishmentId
            }
        })

        const establishment = await prisma.establishment.update({
            where:{
                id:curr_lab.establishmentId
            },
            data: {
                region:region,
                province:province,
                lat:parseFloat(lat),
                lon:parseFloat(lon),
                address:address,
                updatedBy:{
                    disconnect:true,
                    connect:{
                        id:userId,
                    }
                },
                updated:new Date(),
            }
        })

    
    
        revalidatePath("laboratory/")
        await prisma.$disconnect()
    
    
        return {error:null, success:true}


    } catch (error__) {
        console.log()
        console.log()
        console.log()
        console.log("LAB UPDATE ERROR: ", JSON.stringify(error__))
        console.log()
        console.log()
        console.log()
        return {error:"Error updating the laboratory."}
    }
}


export async function addAttachmentRecord(prevState, formData){
    
    const body = formData.get("body")
    const scope = formData.get("scope")
    const expiration = new Date(formData.get("expiration"))
    const labId = parseInt(formData.get("labId"))

    const certificate = formData.get("certificate")

    if(certificate.size <= 0){
        return {error:"Invalid file size uploaded."}
    }

    else if(certificate.size > 0){
        //Upload certificate
        

        try {

            const certificate_attachment = await uploadFile(certificate,"uploads/laboratory/attachment_records/","other")    
            const accreditation_record = await prisma.accreditationRecord.create({
                data:{
                    scope:scope,
                    accreditation_body:body,
                    expiration:expiration,
                    certificateId:certificate_attachment.id,
                    laboratoryId:labId
                }
            })
            
            await prisma.$disconnect()
            revalidatePath("laboratory/")
            return {error:null, success:true}

        } catch (error__) {
            console.log("Unable to upload accreditation record")
            console.log(JSON.stringify(error__))
            await prisma.$disconnect()
            return {error:"Unable to upload accreditation record."}
        }



    }

    await prisma.$disconnect()

    return {error:null}
}


export async function getLaboratoryAccreditationRecords(labId){

    const records = await prisma.accreditationRecord.findMany({
        where:{
            laboratoryId:parseInt(labId)
        },
        include:{
            certificate:true
        }
    })

    var flatData = []

    for(var record of records){

        flatData.push({
            accreditation_body:capitalize(record.accreditation_body),
            scope:capitalize(record.scope),
            expiration:convertToStandardDate(record.expiration),
            certificate:record.certificate.url_path,
        })
    }

    await prisma.$disconnect()

    return flatData
}



export async function addPersonnelRecord(prevState, formData){

    const name = formData.get("name")
    const education = formData.get("education")
    const job_title = formData.get("job_title")
    const experience = parseInt(formData.get("experience"))
    const cv = formData.get("cv")
    const license = formData.get("license")

    const labId = parseInt(formData.get("labId"))

    try {
        var cv_file = {}
        var license_file = {}
        if(cv.size > 0){
            //Upload CV
            cv_file = await uploadFile(cv,'uploads/laboratory/personnel_cv/',"other")
        }

        if(license.size > 0){
            //Upload license
            license_file = await uploadFile(license,'uploads/laboratory/personnel_license/',"other")
        }

        var personnel_record = {}
        if(license.size > 0){
            personnel_record = await prisma.personnel.create({
                data:{
                    name:name,
                    position:job_title,
                    education:education,
                    yearsOfExperience:experience,
                    laboratory:{
                        connect:{
                            id:labId
                        }
                    },
                    cv:{
                        connect:{
                            id:cv_file.id
                        }
                    },
                    license:{
                        connect:{
                            id:license_file.id
                        }
                    }
                }
            })
        } else {
            personnel_record = await prisma.personnel.create({
                data:{
                    name:name,
                    position:job_title,
                    education:education,
                    yearsOfExperience:experience,
                    laboratory:{
                        connect:{
                            id:labId
                        }
                    },
                    cv:{
                        connect:{
                            id:cv_file.id
                        }
                    }
                }
            })
        }
        
        await prisma.$disconnect()
        revalidatePath("laboratory/")
        return {error:null, success:true}

    } catch (error__) {
        console.log("Unable to add personnel record")
        console.log(JSON.stringify(error__))
        await prisma.$disconnect()
        return {error:"Unable to add personnel record."}
    }
}


export async function getPersonnelRecords(labId){

    const records = await prisma.personnel.findMany({
        where:{
            laboratoryId:parseInt(labId)
        },
        include:{
            cv:true,
            license:true
        }
    })

    var flatData = []

    for(var record of records){
        flatData.push({
            name:capitalize(record.name),
            position:capitalize(record.position),
            education:record.education,
            yearsOfExperience:record.yearsOfExperience,
            cv:record.cv.url_path,
            license:record.license === null ? "" : record.license.url_path,
        })
    } 

    await prisma.$disconnect()

    return flatData
}



export async function addTrackRecord(prevState, formData){
    
    const sampleTypeId = parseInt(formData.get("sampleTypeId"))
    const parameterId = parseInt(formData.get("parameterId"))
    const methodId = parseInt(formData.get("methodId"))
    const referenceId = parseInt(formData.get("referenceId"))
    const num_of_samples = parseInt(formData.get("num_of_samples"))

    const start = new Date(formData.get("start"))
    const end = new Date(formData.get("end"))

    const userId = parseInt(formData.get("userId"))
    const labId = parseInt(formData.get("labId"))


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
    

        const new_record = await prisma.trackRecord.create({
            data:{
                sampleId:new_sample.id,
                numberOfSamples:num_of_samples,
                dateCoveredStart:start,
                dateCoveredEnd:end,
                laboratoryId:labId
            }
        })


        await prisma.$disconnect()
        revalidatePath("laboratory/")
        return {error:null, success:true}


    } catch (error) {
        console.log("Unable to add track record")
        console.log(JSON.stringify(error))
        return {error:"Unable to add track record"}
    }    
}


export async function getAllTrackRecords(labId){

    const records = await prisma.trackRecord.findMany({
        where:{
            laboratoryId:parseInt(labId)
        },
        include:{
            sample:{
                include:{
                    sampleType:true,
                    parameter:true,
                    sampleMethod:true,
                    sampleReference:true
                }
            }
        }
    })

    if(!records){
        return []
    }

    const flatData = []

    for(var rec of records){
        const item = rec.sample
        flatData.push({
            sampleType:item.sampleType.name,
            parameter:item.parameter.name,
            sampleMethod:item.sampleMethod !== null ? item.sampleMethod.name : "---",
            sampleReference:item.sampleReference !== null ? item.sampleReference.name : "---",
            num_of_samples:rec.numberOfSamples,
            date_coverage: `${rec.dateCoveredStart.toLocaleDateString("en-us")} - ${rec.dateCoveredEnd.toLocaleDateString("en-us")}`
        })
    }

    await prisma.$disconnect()
    return flatData
}



export async function getAllLabAttachments(labId) {

    const attachments = await prisma.laboratoryAttachments.findMany({
        where: {
            laboratoryId: parseInt(labId),
        },
        include: {
            attachment: true,
            addedBy:true
        },
    });

    // Group the attachments by file_type
    const groupedAttachments = attachments.reduce((acc, curr) => {
        const { file_type } = curr;
        if (!acc[file_type]) {
            acc[file_type] = [];
        }
        acc[file_type].push({
            id:curr.id,
            laboratoryId:curr.laboratoryId,
            attachmentId:curr.attachmentId,
            file_type:curr.file_type,
            attachment_name:curr.attachment.file_label,
            file_path:curr.attachment.file_path,
            url_path:curr.attachment.url_path,
            date_added:convertToStandardDate(curr.dateAdded),
            addedByEmail:curr.addedBy.email

        });
        return acc;
    }, {});


    console.log(groupedAttachments)


    return groupedAttachments;
}