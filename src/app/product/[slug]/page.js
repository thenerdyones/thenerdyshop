import React from 'react'
import { client, urlFor } from '@/app/lib/client';
import Image from 'next/image';

export const dynamicParams = true;
export async function generateStaticParams() {
  const query = `*[_type == "product"]{
  slug {
    current 
   }
  }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    slug: product.slug.current
  }));

  return paths;
}

async function getData(slug) {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type == "product"]`
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {product, products};
  }
  

export default async function ProductDetails () {
    const productsDetails = await getData();
    const { products: { image, name, details, price}} = productsDetails
    console.log(image[0])
    
  
  return (
    <div>
        <div className='product-detail-container'>
            <div className='image-container'>
                <Image src={urlFor(image[0]).url()} className='product-image' />
                 </div>
        </div>
    </div>
  )
}


