import React from 'react'

const Header = () => {
    return (
        <>
            <div className=' w-full h-screen border-b-2 border-gray-600 flex justify-center items-center'>
                <div className='z-50 flex justify-center flex-col items-start'>
                    <h1 className='text-white font-black text-4xl ml-3'>HEY, IM</h1>
                    <div className='flex justify-center gap-5 items-center'>
                        <h1 className='text-[10rem]  leading-[8rem] text-white font-black -tracking-widest '>
                            PRAVEEN
                        </h1>
                        <h1 className='text-[10rem]  leading-[8rem] text-white font-black -tracking-widest '>
                            PASUPULETI
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header