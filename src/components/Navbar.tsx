'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(boxRef.current, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: window,
      inertia: true,
      onDragEnd: function () {
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
    <div className='flex justify-center items-center'>
      <div className='z-20 absolute flex justify-between px-4 md:px-8 w-full top-0 h-24 items-center '>
        {/* Logo Section */}
        <div ref={boxRef} className='flex-shrink-0'>
          <Link href='/'>
            <Image
              src='https://www.praveenatom91.com/praveen_logo1.png'
              width={120}
              height={120}
              alt='logo'
              className='w-40 '
            />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className='hidden md:flex gap-4'>
          <Link href='/'>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              HOME
            </button>
          </Link>
          <Link href='/'>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              SCULPTUREZ
            </button>
          </Link>
          <Link href='/'>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              SANCHARIZ
            </button>
          </Link>
          <Link href='/'>
            <button className='text-white font-bold py-1 rounded-sm hover:bg-gray-300/30 px-3 duration-200'>
              TECHNIQZ
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className='hidden md:flex items-center gap-2 '>
          <a
            target='_blank'
            href='https://www.instagram.com/praveenatom91/'
            className='text-gray-400 hover:text-red-400 duration-200'
          >
            <FaInstagram className='text-xl md:text-2xl' />
          </a>
          <a
            target='_blank'
            href='https://www.facebook.com/PraveenAtom91'
            className='text-gray-400 hover:text-blue-400 duration-200'
          >
            <FaFacebookF className='text-xl md:text-2xl' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/praveenkumarsfdc/'
            className='text-gray-400 hover:text-blue-600 duration-200'
          >
            <FaLinkedinIn className='text-xl md:text-2xl' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/praveenkumarsfdc/'
            className='text-gray-400 hover:text-gray-600 duration-200'
          >
            <BsTwitterX className='text-xl md:text-2xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
