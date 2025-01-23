'use client';

import Image from 'next/image';
// import { useRef } from 'react';
// import VariableProximity from '@/utils/VariableProximity ';
import Squares from '@/utils/Squares';
// import Stack from '@/utils/Stack';

const AboutMe: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className='absolute z-10 border-b-2 border-white opacity-10'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className='flex justify-end overflow-hidden'>
        <div className='text z-50 absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[10vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <h1>ABOUT ME</h1>
          <h1>ABOUT ME</h1>
          <h1>ABOUT ME</h1>
          {/* <div
            className='text'
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={'ABOUT ME'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>
          <div
            className='text'
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={'ABOUT ME'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>
          <div
            className='text'
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={'ABOUT ME'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div> */}
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
      <div className='flex w-full justify-evenly h-[100vh] mt-40 items-center'>
        <div className='w-[35%] z-50 flex-col flex-wrap flex'>
          <div className='flex-wrap flex'>
            <h1 className='text-gray-300 leading-normal text-2xl'>
              Hi! I am
              <span className='bg-white mx-2 rounded font-bold uppercase p-1 text-black'>
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
            <button className='text-green-400 hover:text-white text-xl rounded border-2 hover:bg-green-400 duration-200 border-green-400 py-2 px-8 mt-12'>
              MORE 👉
            </button>
          </div>
        </div>
        <div className='z-50'>
          <Image
            src='/aboutMe-img.png'
            className='border-2 admin border-white rounded'
            width={450}
            height={450}
            alt='image'
          />
          {/* <Stack
            randomRotation={true}
            sensitivity={180}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={images}
          /> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
