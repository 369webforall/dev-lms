import React from 'react';
import CourseCard from './course-card';

const courses = [
    {
      title: 'HTML & CSS',
      href:'/courses/html-css'
      
    },
   
    {
      title: 'JavaScript',
      href:'/courses/html-css'
      
    },
    {
      title: 'React/Nextjs',
      href:'/courses/html-css'
      
    },
    {
      title: 'Node.js/Express',
      href:'/courses/html-css'
      
    },
 
    {
      title: 'MongoDB',
      href:'/courses/html-css'
   
    },
    {
      title: 'SQL',
      href:'/courses/html-css'
  
    },
    {
      title: 'PostgreSQL',
      href:'/courses/html-css'
  
    },
    {
      title: 'Tailwind CSS',
      href:'/courses/html-css'
   
    },
 
  
    {
      title: 'Radix UI',
      href:'/courses/html-css'
    
    },
    {
      title: 'Data Structures and Algorithms',
      href:'/courses/html-css'

    },
    {
      title: 'Zod',
      href:'/courses/html-css'
    },
    {
      title:'Branding & Networking',
      href:'/courses/html-css'
    },
  {
    title:'The Interview Process',
    href:'/courses/html-css'
  },
  {
    title:'Maintaining Motivation',
    href:'/courses/html-css'
  }
  ];
  

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} href={course.href}/>
      ))}
    </div>
  );
}

export default CourseList;
