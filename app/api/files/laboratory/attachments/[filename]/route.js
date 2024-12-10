import { NextResponse } from "next/server";
import fs from 'fs';
import path from "path";


export async function GET(request, { params }){
    const { filename } = await params;

    const fileDirectory = path.join(process.cwd(), 'uploads', 'laboratory', 'attachments')
    const filePath = path.join(fileDirectory, filename)


    if(fs.existsSync(filePath)){
        const fileContent = fs.readFileSync(filePath);

        const extension = path.extname(filename).toLowerCase();
        let contentType = 'application/octet-stream';
        if(extension === '.jpg' || extension === ".jpg") {
            contentType = "image/jpeg"
        } else if (extension === ".png"){
            contentType = "image/png"
        } else if (extension === ".pdf"){
            contentType = "application/pdf"
        }

        return new NextResponse(fileContent, {
            headers:{
                'Content-Type':contentType
            }
        })
    }

    return NextResponse.json({
        error:"File not found"
    }, {status:404})
}