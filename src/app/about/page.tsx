import React from 'react';

const page = () => {
  return (
    <>
      <div className='flex flex-col  w-full justify-between  text-white'>
        <div className='flex justify-end h-[50vh] items-center  flex-col'>
          <h1 className='text-[13rem] text-white font-semibold leading-[10rem] -tracking-widest'>
            ABOUT ME
          </h1>
        </div>
        <div className='h-screen items-center w-full justify-center flex'>
          <div className='w-[45%]'>
            <h2 className='text-4xl uppercase font-black '>
              7 years of extensive experience in web agencies,collaborating with
              both large-scale companies and innovative smaller ones.This has
              equipped me with the ability to effectively understand and meet
              companies preferences and needs.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
