import React from 'react'
import AdmissionList from '../ui/AdmissionList'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
const AdmissionPage = async () => {
  const users = await prisma.user.findMany();
  if(!users) notFound();
  return (
    <div className='container mx-auto'>
        <AdmissionList admission={users}/>
    </div>
  )
}

export default AdmissionPage;