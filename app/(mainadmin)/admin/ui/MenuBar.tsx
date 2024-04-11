// components/AdminHeader.js
import React from 'react';
import Link from 'next/link';
const MenuBar = () => {
  return (
    <header className="bg-gray-600 py-1 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <nav className='flex items-center gap-4'>
            <Link href="/admin/dashboard" className='text-gray-300 hover:text-white px-3 py-2'>Dashboard</Link>
            <Link href="/admin/admission" className='text-gray-300 hover:text-white px-3 py-2'>Admissions</Link>
            <Link href="/admin/users" className='text-gray-300 hover:text-white px-3 py-2'>Users</Link>
            <Link href="admin/courses" className='text-gray-300 hover:text-white px-3 py-2'>Courses</Link>
            <Link href="admin/payments" className='text-gray-300 hover:text-white px-3 py-2'>Payments</Link>
        </nav>
      </div>
    </header>
  );
};

export default MenuBar;