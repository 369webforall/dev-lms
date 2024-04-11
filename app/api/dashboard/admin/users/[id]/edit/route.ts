import { NextRequest, NextResponse } from "next/server";
import { UpdateRoleSchema } from "@/lib/LoginFormValidation";
import prisma from "@/prisma/client";

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
const body = await request.json();
const validation = UpdateRoleSchema.safeParse(body);
if(!validation.success){
    return NextResponse.json(validation.error.format(), {status:400})
}

const user = await prisma.user.findUnique({
    where:{
        id:params.id
    }
})
console.log('api user:', user)
if(!user){
    return NextResponse.json({error:"Invalid user"}, {status:401})
}

const updatedUser = await prisma.user.update({
    where:{id:user.id},
    data:{name:body.name, role:body.role}
})

return NextResponse.json(updatedUser, {status:200})

}