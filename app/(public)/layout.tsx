import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import HomeHeader from './ui/HomeHeader';
import Footer from './ui/footer';

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'stackhub coaching',
  description: 'welcome to stackhub coaching center',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='h-full w-full grid grid-rows-layout'>
        <HomeHeader />
        <main>{children}</main>
        <Footer />
        </div>
        </body>
    </html>
    </SessionProvider>
  )
}
