'use client';

// import { Vortex } from '@/utils/vortex';
// import VariableProximity from '@/utils/VariableProximity ';
// import { useRef } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  //   const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      {/* <Vortex
        // backgroundColor='#111118'
        className='flex items-center flex-col justify-center px-2 md:px-10  w-full h-full'
      > */}
      <div className='flex mt-20 justify-end overflow-hidden'>
        <div className='text2 absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[12vw] font-bold uppercase text-transparent whitespace-nowrap'>
          {/* <div
            className='text tracking-widest'
            ref={containerRef}
            style={{ position: 'relative' }}
            >
            <VariableProximity
            label='CONTACT'
            className='variable-proximity-demo'
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
              />
              </div> */}
          <h1 className='tracking-widest'>CONTACT</h1>
          <h1 className='tracking-widest'>CONTACT</h1>
          {/* <h1 className='tracking-widest'>CONTACT</h1> */}
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
      <div className='h-screen text-white flex flex-col justify-center w-full items-center'>
        <div className='flex flex-col mt-24 items-center text-xl font-bold'>
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
      {/* </Vortex> */}
    </>
  );
}
