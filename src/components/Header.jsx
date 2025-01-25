import Image from 'next/image';
import React from 'react';
import { FlipWords } from './ui/flip-words';

const Header = () => {
    const words = ["Cloud Engineer", "Shutterbug", "Articulate Minimalist", "Writer"];
    return (
        <>
            <div className='w-full h-screen border-b-2 border-gray-600 flex justify-center items-center p-4 md:p-8'>
                <div className='z-50 flex flex-col items-start'>
                    <h1 className='text-white font-black text-2xl sm:text-4xl md:text-5xl sm:ml-0 md:ml-3'>HEY, I'M</h1>
                    {/* Uncomment this if you want to display the image */}
                    {/* <Image className='absolute pb-32 ml-32' src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-3d-camera-icon-on-a-transparent-background-png-image_14037680.png" width={200} height={200} alt='camera' /> */}
                    <div className='flex flex-col flex-wrap md:flex-row md:gap-5 items-start md:items-center'>
                        <h1 className='text-5xl sm:text-6xl md:text-[8rem] leading-1 sm:leading-tight md:leading-[7rem] text-white font-black tracking-tight md:-tracking-widest'>
                            PRAVEEN
                        </h1>
                        <h1 className='text-5xl sm:text-6xl md:text-[8rem] leading-1 sm:leading-tight md:leading-[7rem] text-white font-black tracking-tight md:-tracking-widest'>
                            PASUPULETI
                        </h1>
                    </div>
                    <div className='flex justify-end w-full mt-4'>
                        <div className='text-xl sm:text-2xl md:text-4xl font-bold words'>
                            <h1 className='text-yellow-400'>
                                <FlipWords words={words} />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
