// components/page.tsx
'use client';
import AdminBlogs from '@/components/AdminBlogs';
import React, { useState } from 'react';

// Individual Section Components
const AboutMe: React.FC = () => (
  <section id='about-me' className='mb-12'>
    <h3 className='text-3xl font-bold text-yellow-400 mb-4'>About Me</h3>
    <p className='text-lg text-gray-300'>
      This section can be used to provide personal details about the admin. You
      can add a short bio, contact information, or anything else you'd like to
      showcase!
    </p>
  </section>
);

const Images: React.FC = () => (
  <section id='images'>
    <h3 className='text-3xl font-bold text-yellow-400 mb-4'>Images</h3>
    <p className='text-lg text-gray-300'>
      Here you can upload and view images, perhaps for your blog posts, profile
      pictures, or other media.
    </p>
  </section>
);

const page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about-me');

  // Function to change active section
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Function to get the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'about-me':
        return <AboutMe />;
      case 'blogs':
        return <AdminBlogs />;
      case 'images':
        return <Images />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-900'>
      {/* Sidebar */}
      <div className='w-64 bg-gray-800 text-white shadow-lg p-6'>
        <h2 className='text-2xl mt-24 font-bold mb-8 text-gray-200'>
          Admin Dashboard
        </h2>
        <nav>
          <ul>
            <li
              className={`mb-6 rounded-md p-2 ${
                activeSection === 'about-me'
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
              <a
                href='#about-me'
                className='text-lg font-semibold hover:text-yellow-400 transition'
                onClick={() => handleSectionChange('about-me')}
              >
                About Me
              </a>
            </li>
            <li
              className={`mb-6 rounded-md p-2 ${
                activeSection === 'blogs' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <a
                href='#blogs'
                className='text-lg font-semibold hover:text-yellow-400 transition'
                onClick={() => handleSectionChange('blogs')}
              >
                Blogs
              </a>
            </li>
            <li
              className={`mb-6 rounded-md p-2 ${
                activeSection === 'images' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <a
                href='#images'
                className='text-lg font-semibold hover:text-yellow-400 transition'
                onClick={() => handleSectionChange('images')}
              >
                Images
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8 mt-16'>
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 mb-8'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default page;
