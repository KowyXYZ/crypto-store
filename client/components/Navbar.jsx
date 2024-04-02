"use client"

import React, { useState } from 'react'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full py-6'>
        <div className='container mx-auto hidden sm:flex items-center justify-between '>
            <div className='flex gap-12 text-center justify-center items-center text-[19px] text-gray-700'>
                <img src='/assets/logo.png'/>

                <p>|</p>

               <div className='flex justify-center items-center gap-12'>
                    <p>Home</p>
                    <p>Products</p>
               </div>
            </div>

            <div className='flex justify-center items-center gap-9 text-[18px]'>
                <p>Connect Wallet</p>
            </div>
        </div>


        {/* mobile */}
        <div className='mx-4 relative flex sm:hidden items-center justify-between'>
            <div>
                <img src='/assets/logo.png'/>
            </div>

            <div>
                <img className='w-[20px] h-[20px] object-contain'  src={`${toggle ? '/assets/close.png' : '/assets/filter.png'} `} onClick={() => setToggle(!toggle)}/>
                {toggle ? 
                <div className='absolute top-10 bg-[#fff] border-[#000] rounded-2xl  gap-4  text-center right-2 border-2 p-2 flex flex-col'>
                    <p>Home</p>
                    <p>Products</p>
                </div>
                :
                <></>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar