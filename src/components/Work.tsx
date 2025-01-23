'use client';

import { Carousel } from '@/components/ui/carousel';

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
    <div className='h-[120vh] w-full mt-[2.3rem] flex flex-col'>
      {/* Animated "WORKS" Heading */}
      <div className='relative flex justify-center items-center h-96 overflow-hidden'>
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
      <div className='w-full py-12 flex items-center justify-center'>
        <button className='text-yellow-400 hover:text-white text-xl rounded border-2 hover:bg-yellow-400 duration-200 border-yellow-400 py-2 px-8 mt-12'>
          MORE 👉
        </button>
      </div>
    </div>
  );
}
