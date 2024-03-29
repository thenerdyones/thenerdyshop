import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const HeroBanner = () => {
  return (
    <div className='relative w-full h-[400px] bg-background-gray lg:h-[600px] rounded-2xl py-[100px] px-[40px] leading-[0.9]'>
      <div>
        <p className='text-[20px] font-medium text-black'>SMALL TEXT</p>
        <h3 className='text-[54px] lg:text-[64px] mt-2 mb-6 font-bold'>MID TEXT</h3>
        <img src="" alt="computer" className='absolute top-0 right-[-6%] h-[320px] w-[320px] md:w-[450px] md:h-[450px] md:right-[20%] ' />

      <div>
        
    <Link href="/product/ID">
      <Button>
        Button Text
      </Button>
    </Link>

    <div className='absolute right-6 bottom-2 w-[150px] md:w-[300px] flex-col leading-5'>
      <h5 className='font-bold text-[12px] md:text-[16px] text-custom-gray self-end'>Description</h5>
      <p className='font-thin text-[#5f5f5f] '>DESCRIPTION</p>
    </div>
      </div>
         </div>
    </div>
  )
}

export default HeroBanner