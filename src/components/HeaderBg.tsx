import Image from 'next/image';
import React from 'react';

const HeaderBg = () => {
  return (
    <>
      <div>
        <div className='flex main z-10'>
          <div className=' flex gap-4 w-full h-screen'>
            <div className='flex drag box1 flex-col gap-4 '>
              <div className='translate-y-[-2rem] flex flex-col gap-4'>
                <Image
                  src='https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
                  width={650}
                  height={400}
                  className='hello'
                  alt='nothing'
                />
                <Image
                  src='https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
              </div>
            </div>
            <div className='flex drag box2 flex-col gap-4 '>
              <div className='translate-y-[-10rem] flex flex-col gap-4'>
                <Image
                  src='https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
                <Image
                  src='https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
              </div>
            </div>
            <div className='flex drag box3 flex-col '>
              <div className='translate-y-[-30rem] flex flex-col gap-4'>
                <Image
                  src='https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
                <Image
                  src='https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBg;
