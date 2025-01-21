'use client';

export default function Contact() {
  return (
    <>
      <div className='flex justify-end overflow-hidden'>
        <div className='text absolute gap-20 flex animate-aboutMeScroll overflow-hidden text-[12vw] font-bold uppercase text-transparent whitespace-nowrap'>
          <span>CONTACT</span>
          <span>CONTACT</span>
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
      <div className='h-screen flex flex-col justify-center w-full items-center'>
        <div>
          <button className='text-red-400 hover:text-white text-xl rounded border-2 hover:bg-red-400 duration-200 border-red-400 py-2 px-8 mt-12'>
            MORE 👉
          </button>
        </div>
      </div>
    </>
  );
}
