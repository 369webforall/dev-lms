// components/AdminDashboard.js
import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
const AdminDashboard = async () => {
const users = await prisma.user.findMany()
if(!users) notFound();

  const totalUser = users.filter((user)=>user.role === "USER")
  const totalStudent = users.filter((user)=>user.role === "STUDENT")

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className='text-2xl font-semibold mb-3'>Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard title="Total Users" count={totalUser.length} />
          <DashboardCard title="Total Students" count={totalStudent.length} />
         </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, count }:{title:string; count:number}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-xl mt-2">{count}</p>
    </div>
  );
};

export default AdminDashboard;
