import React from 'react';
import CountUp from './ui/CountUp';
import { BackgroundLines } from './ui/BackgroundLinesDemo';

const Services = () => {
  return (
    <BackgroundLines
      svgOptions={{ duration: 2 }}
      className='flex  items-center justify-center w-full flex-col px-4'
    >
      <div className='h-screen w-full flex justify-center  items-center'>
        <div className='flex flex-col gap-24 items-center w-[80%]'>
          <div className='text-gray-200 text-9xl flex items-end w-full  justify-end font-black'>
            <h1 className='flex gap-5 items-end'>
              <CountUp
                from={0}
                to={100}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-4xl font-white words font-bold'>
                Sculpturez
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-9xl flex items-end w-full  justify-start font-black'>
            <h1 className='flex gap-5 items-end'>
              <CountUp
                from={0}
                to={4}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-4xl font-white words font-bold'>
                Featured
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-9xl flex items-end w-full  justify-end font-black'>
            <h1 className='flex gap-5 items-end'>
              <CountUp
                from={0}
                to={7}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-4xl font-white words font-bold'>
                Countries Travelled
              </span>
            </h1>
          </div>
          <div className='text-gray-200 text-9xl flex items-end w-full  justify-start font-black'>
            <h1 className='flex gap-5 items-end'>
              <CountUp
                from={0}
                to={14}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text'
              />
              <span className='text-4xl font-white words font-bold'>
                States Travelled (India)
              </span>
            </h1>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Services;
