import type { Metadata } from 'next'
import "../globals.css";
import AdminHeader from "./admin/ui/AdminHeader";

export const metadata:Metadata = {
  title: 'Admin',
  description: 'admin page to manage students',
}
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import MenuBar from './admin/ui/MenuBar';

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
 return (
  <SessionProvider session={session}>
      <html lang="en">
      <body>
        <AdminHeader/>
        <MenuBar />
        {children}
        </body>
    </html>
    </SessionProvider>
  )
}
