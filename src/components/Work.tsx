'use client';

import { Carousel } from '@/components/ui/carousel';
// import { Vortex } from '@/utils/vortex';
// import { BsTwitterX } from 'react-icons/bs';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Work() {
  const slideData = [
    {
      title: 'Mystic Mountains',
      button: 'Explore Component',
      src: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Urban Dreams',
      button: 'Explore Component',
      src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Neon Nights',
      button: 'Explore Component',
      src: 'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Desert Whispers',
      button: 'Explore Component',
      src: 'https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className='h-screen w-full mt-52 flex flex-col'>
      {/* Animated "WORKS" Heading */}
      <div className='relative flex  justify-center items-center h-52 overflow-hidden'>
        <div className='absolute text flex gap-20 animate-aboutMeScroll text-[12vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <h1 className='tracking-widest'>WORKS</h1>
          <h1 className='tracking-widest'>WORKS</h1>
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
            animation: aboutMeScroll 15s linear infinite;
          }
        `}</style>
      </div>

      {/* Carousel Section */}
      <div className='h-screen flex items-center justify-center'>
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
