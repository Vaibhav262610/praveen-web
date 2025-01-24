'use client';

import Image from 'next/image';
import Squares from '@/utils/Squares';

const AboutMe: React.FC = () => {
  return (
    <>
      <div className='absolute z-10 border-b-2 border-white opacity-10'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className='flex justify-end overflow-hidden'>
        <div className='text z-50 absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[10vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <h1>ABOUT ME</h1>
          <h1>ABOUT ME</h1>
          <h1>ABOUT ME</h1>
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
            animation: aboutMeScroll 25s linear infinite;
          }
        `}</style>
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-evenly items-center h-auto lg:h-[100vh] mt-16 lg:mt-40 px-6 lg:px-16'>
        <div className='lg:w-[40%] flex flex-col text-center lg:text-left'>
          <div>
            <h1 className='text-gray-300 leading-relaxed text-lg sm:text-xl lg:text-2xl'>
              Hi! I am
              <span className='bg-white mx-2 rounded font-bold uppercase px-2 py-1 text-black'>
                Praveen Pasupuleti
              </span>
              , Originated from Pulivendula, YSR Kadapa, Andhra Pradesh, India.
              I began my Praveen SculptureZ in the year 2015 with the film
              Bahubali. I have turned out 130+ Sculptures so far. I got
              recognized by prominent directors and writers from Tollywood. My
              SculptureZ were published in various newspapers ie., V6News,
              NamasteTelangana & social media platforms like ChaiBisket &
              Thyview.
            </h1>
          </div>
          <div>
            <button className='text-green-400 hover:text-white text-lg lg:text-xl rounded border-2 hover:bg-green-400 duration-200 border-green-400 py-2 px-6 sm:px-8 mt-8'>
              MORE 👉
            </button>
          </div>
        </div>
        <div className='mt-12 lg:mt-0'>
          <Image
            src='/aboutMe-img.png'
            className='border-2 admin border-white rounded mx-auto lg:mx-0'
            width={350}
            height={350}
            alt='image'
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
