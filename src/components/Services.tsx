import React from 'react';
import CountUp from './ui/CountUp';
import { BackgroundLines } from './ui/BackgroundLinesDemo';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center relative'>
      {/* Circular Image */}
      <div className='absolute hidden md:flex items-center justify-center'>
        <Image
          width={400}
          height={400}
          src='https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/438060207_10224497823294901_139129499392464000_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eBHQbsVnj-4Q7kNvgH-mQrO&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=AbaZyxuQ7oucEOjrGxlgK24&oh=00_AYDM0q05JXDTPg-5AyXPS35c5loub88tWDLnBa3Q18VzaQ&oe=67999A8D'
          alt='profile pic'
          className='rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-yellow-300'
        />
      </div>
      <BackgroundLines
        svgOptions={{ duration: 2 }}
        className='flex items-center justify-center w-full flex-col px-4'
      >
        {/* CountUp sections */}
        <div className='flex flex-col gap-16 md:gap-24 items-center w-[80%]'>
          <div className='text-gray-200 text-6xl md:text-9xl flex items-end w-full justify-end font-black'>
            <h1 className='flex gap-3 md:gap-5 items-end'>
              <CountUp
                from={0}
                to={100}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-3xl md:text-4xl font-white font-bold'>
                Sculpturez
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-6xl md:text-9xl flex items-end w-full justify-start font-black'>
            <h1 className='flex gap-3 md:gap-5 items-end'>
              <CountUp
                from={0}
                to={4}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-3xl md:text-4xl font-white font-bold'>
                Featured
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-6xl md:text-9xl flex items-end w-full justify-end font-black'>
            <h1 className='flex gap-3 md:gap-5 items-end'>
              <CountUp
                from={0}
                to={7}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-3xl md:text-4xl font-white font-bold'>
                Countries Travelled
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-6xl md:text-9xl flex items-end w-full justify-start font-black'>
            <h1 className='flex gap-3 md:gap-5 items-end'>
              <CountUp
                from={0}
                to={14}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-3xl md:text-4xl font-white font-bold'>
                States Travelled (India)
              </span>
            </h1>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Services;
