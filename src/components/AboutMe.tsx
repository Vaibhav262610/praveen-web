'use client';

import Image from 'next/image';

export default function AboutMe() {
  return (
    <>
      <div className='flex justify-end overflow-hidden'>
        <div className='text absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[10vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <span>
            ABOUT <span>ME</span>
          </span>
          <span>
            ABOUT <span>ME</span>
          </span>
          <span>
            ABOUT <span>ME</span>
          </span>
          <span>
            ABOUT <span>ME</span>
          </span>
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
      <div className='flex w-full justify-evenly h-[150vh] items-center '>
        <div className='w-[35%] flex-col flex-wrap flex'>
          <div className=' flex-wrap flex'>
            <h1 className='text-gray-300 leading-normal text-3xl'>
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
        <div>
          <Image
            src='/aboutMe-img.png'
            className='border-2 admin border-black rounded'
            width={500}
            height={500}
            alt='image'
          />
        </div>
      </div>
    </>
  );
}
