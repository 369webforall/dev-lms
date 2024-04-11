import React from 'react';

const AboutVision = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex gap-6 flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-8">
            At stackhub coaching center, we&apos;re committed to empowering individuals with the skills and knowledge needed to succeed in the ever-evolving world of web development. Whether you&apos;re a beginner looking to kickstart your journey or an experienced developer aiming to level up your skills, our comprehensive 9-month course is designed to cater to learners of all levels.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-8">
            Our mission is to bridge the gap between ambition and expertise by providing industry-leading education in full-stack web development. We strive to cultivate a supportive learning environment where students are encouraged to explore, innovate, and grow into proficient developers capable of tackling real-world challenges
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <p><strong>Comprehensive Curriculum:</strong> Our curriculum covers a wide range of topics including HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Radix UI, Shadow CSS, both backend, frontend development and devops.</p>
        <p><strong>Hands-on Experience: </strong>We believe in learning by doing. Throughout the course, students will engage in practical, project-based learning to reinforce their understanding of concepts and build a strong portfolio of work.</p>
        <p><strong>Expert Instructors:</strong>Our instructors are industry professionals with extensive experience in full-stack development. They&apos;re passionate about teaching and dedicated to providing personalized guidance to each student.</p>
        <p><strong>MERN Stack Mastery:</strong>  Our course delves deep into the MERN (MongoDB, Express.js, React.js, Node.js) stack, equipping students with the skills needed to develop robust, scalable web applications from end to end.</p>
        <p><strong>Career Support:</strong>  We&apos;re committed to supporting our students beyond graduation. From resume building to job interview preparation, we provides invaluable assistance to help students launch successful careers in web development.</p>
        <h2 className="text-3xl font-bold my-4">Join Us Today</h2>
        <p>Embark on your journey to becoming a proficient full-stack developer with [Coaching Center Name]. Whether you're looking to advance your career or pursue your passion for coding, we&apos;re here to guide you every step of the way. Take the first step towards a brighter future and enroll in our transformative 9-month course today!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
