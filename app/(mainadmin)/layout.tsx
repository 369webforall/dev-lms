import type { Metadata } from 'next'
import "../globals.css";
import AdminHeader from "./admin/ui/AdminHeader";

export const metadata:Metadata = {
  title: 'Admin',
  description: 'admin page to manage students',
}

import MenuBar from './admin/ui/MenuBar';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { RoleGate } from '@/components/auth/role-gate';
import { UserRole } from '@prisma/client';
export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 const session = await auth();
 return (
  <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
      <RoleGate allowRole={UserRole.ADMIN}>
      <AdminHeader/>
        <MenuBar />
        {children}
    </RoleGate>
        
        </body>
    </html>
    </SessionProvider>
  )
}
