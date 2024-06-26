// components/AdminHeader.js
import React from 'react';
import Link from 'next/link';
const AdminHeader = () => {
  return (
    <header className="bg-gray-800 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Admin Panel</h1>
        <nav>
            <Link href="/admin" className='text-gray-300 hover:text-white px-3 py-2'>Dashboard</Link>
            <Link href="/admin/users" className='text-gray-300 hover:text-white px-3 py-2'>Users</Link>
            <Link href="/admin/admission" className='text-gray-300 hover:text-white px-3 py-2'>Students</Link>
            
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
