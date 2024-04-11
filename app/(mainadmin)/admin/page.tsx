import React from 'react';
import AdminDashboard from './ui/AdminDashboard';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
import { UserRole } from '@prisma/client';
const DashboardPage = () => {
  return (
  <>
  <RoleGate allowRole={UserRole.ADMIN}>
    <FormSuccess message='Welcome to Admin Page' />
    <AdminDashboard />
    </RoleGate>
  </>
);
};

export default DashboardPage;