import React from 'react';
import AdminDashboard from './ui/AdminDashboard';
import { RoleGate } from '@/components/auth/role-gate';
import { UserRole } from '@prisma/client';

const DashboardPage = () => {
  return (
  <>
  <RoleGate allowRole={UserRole.ADMIN}>
    <AdminDashboard />
    </RoleGate>
  </>
);
};

export default DashboardPage;