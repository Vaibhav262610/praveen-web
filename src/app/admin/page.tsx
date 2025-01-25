// pages/page.tsx
import React from 'react';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12'>
      <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8'>
        <h1 className='text-4xl font-bold text-gray-800 text-center mb-6'>
          About Me
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          Hello! I’m [Your Name], a passionate developer who loves creating
          intuitive and beautiful web experiences. With a strong foundation in
          web technologies, I specialize in building scalable and efficient
          applications.
        </p>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          I believe in writing clean, maintainable code and continuously
          learning to stay ahead in this ever-evolving tech landscape. My
          journey has been fueled by curiosity, dedication, and the drive to
          solve complex problems.
        </p>
        <div className='flex flex-wrap gap-4 mt-6'>
          <div className='flex-1 bg-gray-50 p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold text-gray-700 mb-2'>
              Experience
            </h2>
            <p className='text-gray-600'>
              Over [X years] of experience in full-stack development, working
              with technologies like React, Node.js, and TypeScript.
            </p>
          </div>
          <div className='flex-1 bg-gray-50 p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Skills</h2>
            <p className='text-gray-600'>
              Proficient in JavaScript, TypeScript, React, Next.js, Tailwind
              CSS, and more.
            </p>
          </div>
          <div className='flex-1 bg-gray-50 p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold text-gray-700 mb-2'>
              Hobbies
            </h2>
            <p className='text-gray-600'>
              When I’m not coding, I enjoy reading, exploring new technologies,
              and gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
