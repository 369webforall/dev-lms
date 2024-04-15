import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import HomeHeader from './ui/HomeHeader';
import Footer from './ui/footer';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e5code | online coaching',
  description: 'Welcome to online e5code FullStack coaching center.Explore comprehensive online coaching covering Frontend, Backend, MERN Stack.Dive into Data Structures and Algorithms,and DevOps.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  
  return (
    <SessionProvider session={session} >
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
