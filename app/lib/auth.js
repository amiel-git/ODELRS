'use server'
import {Lucia} from 'lucia'
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers';
import { hashUserPassword, verifyPassword } from './hash';
import { redirect } from 'next/navigation';
import { convertToStandardDate } from './helper';
const prisma = new PrismaClient();
const adapter = new PrismaAdapter(prisma.session, prisma.user);

const lucia = new Lucia(adapter, {
    sessionCookie:{
        expires:false
    }
})


export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId,{})
    const sessionCookie = lucia.createSessionCookie(session.id);

    // set cookie directly
    const cookiesObj = await cookies()
    cookiesObj.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
}


export default async function loginAction(prevState, formData) {

    
    const email = formData.get('email')
    const password = formData.get('password')
    const hashedPassword = hashUserPassword(password)
    // verify if email and password is okay
    const user = await prisma.user.findFirst({
        where:{
            email:email,
        }
    })

    if(!user){
        return {
            error:"User does not exist!"
        }
    }

    // Check the password
    if(!verifyPassword(user.password, password)){
        return {
            error:"Invalid password!"
        }
    }
    await createAuthSession(user.id)
    await prisma.$disconnect();
    
    redirect(`/users`)

}

export async function verifyAuth() {

    const cookieObj = await cookies()
    const cookie = cookieObj.get(lucia.sessionCookieName)
    if(!cookie){
        return {
            user:null,
            session:null
        }
    }
    
    const sessionId = cookie.value
    if(!sessionId){
        return {
            user:null,
            session:null
        }
    }

    var result = await lucia.validateSession(sessionId)

    try{
        if(result.session && result.session.fresh){
            const sessionCookie = lucia.createSessionCookie(result.session.id)
            const cookieObj_ = await cookies()
            cookieObj_.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }

        if(!result.session){
            const sessionCookie = lucia.createBlankSessionCookie()
            const cookieObj__ = await cookies()
            cookieObj__.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }
    } catch {}

    try {
        const user = await prisma.user.findFirst({
            where:{
                id:result.user.id
            },
            include:{
                userDetails:true
            }
        })
    
        result.user.role = user.role
        result.user.region = user.region
        result.user.first_name = user.userDetails.firstName
        result.user.last_name = user.userDetails.lastName
        result.user.email = user.email
        result.user.profile_picture = user.userDetails.profilePicture
        result.user.isDetailsComplete = user.isDetailsComplete

    } catch (error) {
        console.log("User not found")
    }

    
   await prisma.$disconnect();;

    return result
}

async function destroySession(){
    const session = await verifyAuth()
    if(!session){
        return {
            error:"Unauthorized"
        }
    }
    await lucia.invalidateSession(session.id)
    try{
        const sessionCookie = lucia.createBlankSessionCookie()
        const cookieObj__ = await cookies()
        cookieObj__.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        
    }
    catch{}

}

export async function logoutAction() {
    await destroySession()
    redirect("/login")
}