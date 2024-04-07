import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../app/lib/client";

async function getData() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {products}
};



export default async function Home() {
const products = await getData();
  return (
    <>
      <HeroBanner />
      <div className="text-center my-10 text-custom-gray">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Best selling products
        </h2>

        <p>Items of many variations</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
        {console.log(products)}
        
      </div>

      <FooterBanner />
    </>
  );
};
