import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Online Coaching</h1>
        <p className="text-lg mb-8">Master MERN stack, Devops</p>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"><Link href="/auth/register">Get Started</Link></button>
        <div className='max-w-2xl mx-auto bg-purple-600 p-4 my-4 flex flex-col gap-2 items-center justify-center'>
        <h2 className= 'text-center  text-2xl'>New session starting form May 28, 2024</h2>
        <p>Visit Faq Page for more inforamtion before joining e5code</p>
        <p>Register</p>
        <Button variant='destructive'>  <a href="https://join.slack.com/t/stackhubworkspace/shared_invite/zt-2g9xcrczk-1W_kr_1k1gdx6~urzLmNZQ" target='_blank'>Join Slack</a></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
