import React from 'react'
import UsersList from '../ui/UsersList';
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';

const UsersPage = async () => {
  const users = await prisma.user.findMany();
  if(!users) notFound();
  return (
    <div className='container mx-auto'>
      <UsersList admission={users}/>
    </div>
  )
}

export default UsersPage