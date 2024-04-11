'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const navItems = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'Courses', path: '/courses' },
  { id: 3, text: 'Testimonials', path: '/testimonials' },
  { id: 4, text: 'Contact', path: '/contact' },
  
 
];
import {logout} from "@/actions/logout";

const HomeHeader = () => {
const {data:session} = useSession();
const router = useRouter();
  return (
    <header className="py-4 border-b sticky top-0 left-0 bg-primary-foreground w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold"><h1 className='text-orange-600'>stackhub coaching</h1></div>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map(item => (
              <li key={item.id}>
                <Link href={item.path} className="hover:text-gray-900 hover:shadow-md">
                {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          {!session && (
         <div className='flex gap-4 items-center'>
          <Link href={`/auth/login`}>Login</Link>
          <Link href={`/auth/register`}>Register</Link>
          </div>
        
          ) }
          {session && <Button variant="destructive" onClick={()=>logout()}>Logout</Button>}
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;