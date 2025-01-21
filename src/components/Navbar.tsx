'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Register the Draggable plugin
    gsap.registerPlugin(Draggable);

    // Initialize Draggable
    Draggable.create(boxRef.current, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: window,
      inertia: true,
      onDragEnd: function () {
        // Snap back to origin when drag ends
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      },
    });
  }, []);
  return (
    <>
      <div className=' flex justify-center items-center   '>
        <div className='z-20 absolute flex justify-between px-8 w-full top-0 h-24 items-center'>
          <div ref={boxRef}>
            <Link href='/'>
              {/* <h1 className='bg-red-500 px-12'>.</h1> */}
              <Image
                src='https://www.praveenatom91.com/praveen_logo1.png'
                width={160}
                height={160}
                alt='logo'
                //   className=
              />
            </Link>
          </div>
          <div className='flex gap-4 '>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              HOME
            </button>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              SCULPTUREZ
            </button>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              SANCHARIZ
            </button>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              TECHNIQZ
            </button>
          </div>
          <div className='flex items-center gap-3'>
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
      </div>
    </>
  );
};

export default Navbar;
