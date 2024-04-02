import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full sm:py-12'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-center text-center items-center sm:text-start bg-[#C1DCDC] sm:rounded-2xl p-5 pb-0'> 
      
        <div className='flex flex-col gap-4 justify-center items-center sm:items-start' >
          <p className='text-[#121212] text-[60px] font-black uppercase'>Buy your  dream <br /> plants</p>
          <div className='text-[24px] flex text-gray-600 gap-4'>
            <p>50+</p>
            <p>Customers</p>
          </div>
          <p className='w-[300px] sm:w-[500px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus cupiditate sequi numquam autem. </p>
        </div>

        <div>
          <img src='/assets/herosection.png'/>
        </div>

      </div>
    </div>
  )
}

export default HeroSection