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
                  src='https://scontent.fluh1-4.fna.fbcdn.net/v/t39.30808-6/447051893_10224634718357192_7407971311188320429_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0ZNV4ra5wgIQ7kNvgG-ww2r&_nc_zt=23&_nc_ht=scontent.fluh1-4.fna&_nc_gid=AARAJIVFabokNwvbo468TQ-&oh=00_AYA9YadlWS76sM8pGeO76PDiGVcf1ylc1Vi96y2xbuuJSA&oe=67958901'
                  width={650}
                  height={400}
                  className='hello'
                  alt='nothing'
                />
                <Image
                  src='https://scontent.fluh1-3.fna.fbcdn.net/v/t39.30808-6/471220191_10226645853034302_3366927365682211655_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kyLDD8fFp_UQ7kNvgFYgPv4&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=A5Sddscph18bFUZNhM34-_w&oh=00_AYCvPp-mHtoBKF2dLVDYnQE2k6X_worYDeQALSLExXOuKg&oe=67959F14'
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
                  src='https://scontent.fluh1-3.fna.fbcdn.net/v/t39.30808-6/452349080_10224917501866603_5309301061957396592_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gZPhH144seYQ7kNvgHvYR-y&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=ABQ9Sm-ysEvdnyFVShuKPnp&oh=00_AYBogehZdVa3my0k0LukrHPJSgWwDG537V7V1nEUROzvCQ&oe=6795B9EE'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
                <Image
                  src='https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/441226435_10224598271446042_9208438501963056087_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vtWe7I7WGdEQ7kNvgF-hRzr&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=AHe-PNRgVE5patwHonmTWT-&oh=00_AYAzJKWE8BjX8iwIkafWr7u3Y4Dk0-Hbd2H9UwWI0LIJKg&oe=679598D8'
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
                  src='https://scontent.fluh1-4.fna.fbcdn.net/v/t39.30808-6/400861293_10223859273971567_5371339130199071091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GIpxANu6acIQ7kNvgGKugZD&_nc_zt=23&_nc_ht=scontent.fluh1-4.fna&_nc_gid=ANS5nZ198QVRUv6hAxOSgNf&oh=00_AYAzidWOfwYoLSJVr2RSikDeJfzj8RtBCH0FKd4LjwiEjA&oe=67959695'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
                <Image
                  src='https://scontent.fluh1-4.fna.fbcdn.net/v/t39.30808-6/397436076_10223821134618107_7049687780364885415_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rqAjlnfQdB4Q7kNvgHHKF8I&_nc_zt=23&_nc_ht=scontent.fluh1-4.fna&_nc_gid=AUsmB2Ktj4mt8nOMkwcV_z6&oh=00_AYCxTC3LXZkBQmVkMoE8PyNjgGpkw7IOppHjBhvYlQrYCw&oe=6795AD00'
                  width={650}
                  height={400}
                  alt='nothing'
                  className='hello'
                />
                <Image
                  src='https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/379349649_10223587805425023_6264020704670342744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e8ZRLIayGsEQ7kNvgE1HHEz&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=A-qkaV383_XvO1j87zXJlab&oh=00_AYChg8_9d2hXlewFQa_7hb1pS2XjK5c1WcHC4WRywOZ5xA&oe=6795A041'
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
