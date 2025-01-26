'use client';
import AdminBlogs from '@/components/AdminBlogs';
import AdminImage from '@/components/AdminImage';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about-me');

  // Function to change active section
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Function to get the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'blogs':
        return <AdminBlogs />;
      case 'images':
        return <AdminImage />;
      default:
        return null;
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-900 flex-col md:flex-row'>
      {/* Sidebar */}
      <div className='w-full md:w-64 bg-gray-800 text-white shadow-lg p-6'>
        <h2 className='text-2xl mt-16 md:mt-24 font-bold mb-8 text-gray-200'>
          Admin Dashboard
        </h2>
        <nav>
          <ul>
            <li
              className={`mb-6 rounded-md p-2 ${
                activeSection === 'blogs' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <button
                className='text-lg font-semibold hover:text-yellow-400 transition'
                onClick={() => handleSectionChange('blogs')}
              >
                Blogs
              </button>
            </li>
            <li
              className={`mb-6 rounded-md p-2 ${
                activeSection === 'images' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <button
                className='text-lg font-semibold hover:text-yellow-400 transition'
                onClick={() => handleSectionChange('images')}
              >
                Images
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-6 md:p-8 mt-16 md:mt-0'>
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 mb-8'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
