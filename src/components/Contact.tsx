'use client';

import Squares from '@/utils/Squares';
// import { Vortex } from '@/utils/vortex';
// import VariableProximity from '@/utils/VariableProximity ';
// import { useRef } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  //   const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className='absolute z-10 border-t-2 border-white opacity-10'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className='flex mt-20 justify-end overflow-hidden'>
        <div className='text2 absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[12vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <h1 className='tracking-widest'>CONTACT</h1>
          <h1 className='tracking-widest'>CONTACT</h1>
        </div>
        <style jsx>{`
          @keyframes aboutMeScroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-40%);
            }
          }

          .animate-aboutMeScroll {
            animation: aboutMeScroll 15s linear infinite;
          }
        `}</style>
      </div>
      <div className='h-screen text-white flex gap-10 flex-col justify-center w-full items-center'>
        <div className='text-white mt-28 text-6xl font-semibold'>
          <h1>
            Is it <span className='text-yellow-300'>ME</span> you are looking
            for?
          </h1>
        </div>
        <div className='flex flex-col  items-center text-xl font-bold'>
          <h1>praveenatom91@gmail.com</h1>
          <h1 className='text-gray-300'>+91 9010810194</h1>
        </div>
        <div className='mt-12 flex items-center gap-3'>
          <a target='_blank' href='https://www.instagram.com/praveenatom91/'>
            <FaInstagram className='text-2xl text-gray-400 hover:text-red-400 duration-200' />
          </a>
          <a target='_blank' href='https://www.facebook.com/PraveenAtom91'>
            <FaFacebookF className='text-2xl text-gray-400 hover:text-blue-400 duration-200' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/praveenkumarsfdc/'
          >
            <FaLinkedinIn className='text-3xl text-gray-400 hover:text-blue-600 duration-200' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/praveenkumarsfdc/'
          >
            <BsTwitterX className='text-2xl text-gray-400 hover:text-gray-600 duration-200' />
          </a>
        </div>
      </div>
    </>
  );
}
