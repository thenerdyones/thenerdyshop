import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { client, urlFor } from '@/app/lib/client';
import Image from 'next/image';

async function getData(){
const bannerQuery = '*[_type == "banner"]';
const bannerData = await client.fetch(bannerQuery);

return bannerData;

}

export default async function HeroBanner () {
  const data = await getData();
  return (
    <div className='relative w-full h-[400px] bg-background-gray lg:h-[600px] rounded-2xl py-[100px] px-[40px] leading-[0.9]'>
      <div>
      
        <p className='text-[20px] font-medium text-black'>{data[0].smallText}</p>
        <h3 className='text-[44px] lg:text-[54px] mt-2 mb-6 font-bold'>{data[0].midText}</h3>
        <h1 className='text-[54px] lg:text-[64px] mt-2 mb-6 font-bold'>{data[0].largeText1}</h1>
        <h1 className='text-[54px] lg:text-[64px] mt-2 mb-6 font-bold'>{data[0].largeText2}</h1>
        <Image src={urlFor(data[0].image).url()} width={320} height={320} alt='image' className='absolute top-0 right-[-6%] md:w-[450px] md:h-[450px] md:right-[20%]'/>

      <div>
        
    <Link href={`/product/${data[0].product}`}>
      <Button>
        {data[0].buttonText}
      </Button>
    </Link>

    <div className='absolute right-6 bottom-2 w-[200px] md:w-[400px] flex-col leading-5'>
      <h5 className='font-bold text-[12px] md:text-[16px] text-custom-gray self-end'>Description</h5>
      <p className='font-thin text-[#5f5f5f]'>{data[0].desc}</p>
    </div>
      </div>
         </div>
    </div>
  )
};

