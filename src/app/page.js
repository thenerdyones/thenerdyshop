import React from "react";
import { client, urlFor } from "./lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import NavBar from "@/components/NavBar";

async function getData() {
  const query = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  const products = await client.fetch(query);
  const productsDetails = products.map(product => {
    const { name, slug, image, price } = product;
    return { name, slug, image, price };
  })
 
  return { productsDetails, bannerData }; 
}

export default async function Home() {
  const { productsDetails, bannerData } = await getData();

  
  return (
    <>
     
      <HeroBanner bannerData = {bannerData && bannerData[0]}/>
      <div className='text-center my-10 text-custom-gray'>
        <h2 className='text-4xl font-extrabold md:text-5xl'>
          Best selling products
        </h2>

        <p>Items of many variations</p>
      </div>

      <div className='flex flex-col p-5 justify-center m-10 w-full md:flex-row md:space-x-10'>
      {productsDetails?.map((product, index) => <Product key={index} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};
