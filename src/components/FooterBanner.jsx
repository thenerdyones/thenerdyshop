import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '@/app/lib/client'

const FooterBanner = ({ footerBanner: { discount, saleTime, largeText1, largeText2, midText, product, buttonText, image, smallText, desc } }) => {
  return (
    <div>
      <div className='relative right w-full h-[600px] bg-red-500 lg:h-[400px] py-[100px] px-[40px] leading-[0.9] text-white'>
      <p className='text-[20px] font-medium'>{discount}</p>
        <h1 className='text-[54px] lg:text-[64px] mt-2 mb-6 font-bold'>{largeText1}</h1>
        <h1 className='text-[54px] lg:text-[64px] mt-2 mb-6 font-bold'>{largeText2}</h1>
        <p className='text-[20px] font-medium'>{saleTime}</p>
      
      <div className='left absolute top-2 right-6'>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
        <Image src={urlFor(image).url()} width={320} height={320} alt='image' className='absolute top-0 right-[-6%] md:w-[450px] md:h-[450px] md:right-[20%]'/>
      </div>
    </div>
    </div>
  )
}

export default FooterBanner