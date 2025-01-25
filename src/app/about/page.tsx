'use client';
import Image from 'next/image';
import { FC, useEffect } from 'react';
// import aos from 'aos';
import aos from 'aos';
import 'aos/dist/aos.css';
import Squares from '@/utils/Squares2';

const About: FC = () => {
  // Initialize AOS
  useEffect(() => {
    aos.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Run the animation only once
    });
  }, []);

  return (
    <>
      <div className='absolute z-10 border-2 border-gray-300 opacity-10 w-full overflow-hidden'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-5'>
        {/* Main Container */}
        <div className='max-w-6xl h-auto md:h-[180vh] gap-10 flex items-center justify-center flex-col w-full'>
          {/* About Me Heading */}
          <div
            className='flex justify-center md:mt-0 mt-24 items-center text-center mb-12'
            data-aos='fade-up'
          >
            <h1 className='text-7xl md:text-[10rem] font-extrabold text-white'>
              ABOUT ME
            </h1>
          </div>

          {/* Profile Section */}
          <div className='text-center mt-12 mb-12'>
            <Image
              width={100}
              height={100}
              src='https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-1/460988376_10225454211083998_8336499010673347612_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_GimCSeSeo0Q7kNvgH9fBkQ&_nc_zt=24&_nc_ht=scontent.fluh1-1.fna&_nc_gid=AdNABWDpO28K8hG3H8XEQcZ&oh=00_AYC978QDC37G0vsZQ0N4Lf1O72_pm7zcTMHUA1gh_U896Q&oe=679A5CA3'
              alt='Praveen Pasupuleti'
              className='w-40 h-40 border-2 border-yellow-400 rounded-full mx-auto mb-24 shadow-lg transform transition duration-500 hover:scale-110'
            />
            <p
              className='text-lg md:text-xl text-gray-300 mb-4'
              data-aos='fade-up'
            >
              Originated from Pulivendula, YSR Kadapa, Andhra Pradesh, India. I
              began my journey with Praveen SculptureZ in 2015 and have since
              created over 130 sculptures.
            </p>
            <p
              className='text-md md:text-lg text-gray-300 mb-6'
              data-aos='fade-up'
            >
              Recognized by prominent directors and writers from Tollywood, my
              sculptures have been published in various newspapers like V6News,
              NamasteTelangana, and on social media platforms like ChaiBisket
              and Thyview.
            </p>
          </div>

          {/* Details Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div
              className='p-6 rounded-lg shadow-md bg-gray-800 border border-gray-700'
              data-aos='fade-up'
            >
              <h2 className='text-2xl font-semibold text-white mb-4'>
                Who I Am
              </h2>
              <p className='text-gray-400'>
                I&apos;m passionate about research, especially topics that have
                a healthy impact on our everyday lives. From cinema to global
                issues, I love learning and sharing my thoughts.
              </p>
              <p className='text-gray-400 mt-4'>
                My travel experience across 12 states in India, 2 Union
                Territories, and 7 countries worldwide has shaped my perspective
                on life, art, and technology.
              </p>
            </div>

            <div
              className='p-6 rounded-lg shadow-md bg-gray-800 border border-gray-700'
              data-aos='fade-up'
            >
              <h2 className='text-2xl font-semibold text-white mb-4'>
                My Skills
              </h2>
              <ul className='list-disc list-inside text-gray-400'>
                <li>Sculpting with a deep focus on cinema and technology</li>
                <li>
                  Life Sciences Software professional with 8+ years of
                  experience
                </li>
                <li>Expertise in Salesforce &amp; Veeva (CRM &amp; Vault)</li>
                <li>Experience with AWS &amp; Azure DevOps methodologies</li>
              </ul>
            </div>
          </div>

          {/* Section for Hobbies/Interests */}
          <div
            className='mt-12 p-8 rounded-lg shadow-lg bg-gray-800 border border-gray-700'
            data-aos='fade-up'
          >
            <h2 className='text-2xl font-semibold text-white mb-6'>
              What I Love
            </h2>
            <p className='text-gray-400 mb-4'>
              I have a unique ability to blend art, science, and technology.
              Whether it&apos;s analyzing the proportion of cinema, exploring
              historical narratives, or traveling across the world, I draw
              inspiration from everything around me.
            </p>
            <p className='text-gray-400'>
              I aim to convey my cognition to others in a way that allows them
              to visualize and experience what I&apos;ve been observing during
              my leisure time.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className=' mt-12 text-center'>
            <a
              href='#contact'
              className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105'
              // data-aos='fade-up'
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
