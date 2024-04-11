// components/AdminDashboard.js
import React from 'react';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {
  // Mock data for counts (replace this with actual data fetching)
  const totalStudents = 150;
  const totalAdmissions = 50;
  const totalCourses = 10;
  const totalPayments = 500;

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className='text-2xl font-semibold mb-3'>Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard title="Total Students" count={totalStudents} />
          <DashboardCard title="Total Admissions" count={totalAdmissions} />
          <DashboardCard title="Total Courses" count={totalCourses} />
          <DashboardCard title="Total Payments" count={totalPayments} />
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
