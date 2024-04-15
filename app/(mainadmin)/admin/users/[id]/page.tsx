import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import UserUpdateForm from '../../ui/editForm'
interface Props {
    params:{id:string}
}
const EditUser = async({params}:Props) => {
    const user = await prisma.user.findUnique({where:{
        id:params.id
    }})
    if(!user) notFound();
  return (
    <UserUpdateForm user={user} />
  )
}

export default EditUser