import React from 'react'
import { User } from '@prisma/client'
interface AdmissionProps {
    admission:User[]
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import { Button } from '@/components/ui/button'
const AdmissionList = ({admission}:AdmissionProps) => {
  return (
    <Table>
  <TableCaption>List of Students</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {admission.map((user)=>(
      <TableRow key={user.id}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell className='flex gap-2'>
<Button variant="ghost">Update</Button>
<Button variant="ghost">Delete</Button>
      </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

  )
}

export default AdmissionList