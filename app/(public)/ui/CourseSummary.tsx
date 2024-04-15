import React from 'react'

const CourseSummary = () => {
    const frontendCourses = [
        'HTML',
        'CSS',
        'JavaScript',
        'JavaScript unit testing',
        'React',
        'Tailwind CSS',
        'Next.js',
        'State Management',
        'CSR, SSR, SSG',
        'TypeScript',
        'Authentication',
        'Next-Auth',
        'Radix UI',
        'Shadcn',
        'zod',
        'DataStructure and Algorithms'
      ];

      const backendCourses = [
        'Node.js',
        'Express',
        'MongoDB',
        'SQL',
        'PostgreSQL',
        'Prisma',
        'Serverless Backend',
        'Backend communication',
        'Websocket',
        'Messaging queues, Pub subs, Redis'
      ];

      const devOpsCourses = [
        'Docke Basic',
        'Turbo & Monorepo',
        'Git & Github',
        'Hosting',
        'Continuous Integration and Continuous Deployment (CI/CD)',
        'AWS hosting',
        'Github Actions, CI/CD',
        'VPS hosting',
        'Docker Advance'
      ];
                  
  return (
    <div className='container mx-auto mt-4'>
      <h2 className='text-2xl font-semibold border-b'>Course cover</h2>
      <p>Duration of class: 9 month</p>
    <div className='gap-4 md:flex my-5'>
        <CourseCard title="FrontEnd" courses={frontendCourses}/>
        <CourseCard title="BackEnd" courses={backendCourses}/>
        <CourseCard title="DevOps" courses={devOpsCourses}/>
       
    </div>
    </div>
  )
}

export default CourseSummary

interface CourseProps {
    title:string;
    courses:string[]
}


const CourseCard = ({ title, courses }:CourseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-wrap">
          {courses.map((course, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
