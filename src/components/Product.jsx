import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/app/lib/client';

export default function Product({product}) {

  if(!product){
    return null
  }

  const { name, slug, price, image } = product;
  
  return (
    <div>
      <div className='product-card cursor-pointer transform transition-transform hover:scale-105'>
      <Link href={`/product/${slug.current}`}>
      <Image src={urlFor(image[0]).url()} height={650} width={350} alt="card" className='product-image rounded-[15px] bg-background-gray transform scale-100 transition-transform duration-500'/>
        <p className='product-name text-lg font-bold'>{name}</p>
        <p className='product-price'>${price}</p>
        </Link>
        </div>
    </div>
  )
}

