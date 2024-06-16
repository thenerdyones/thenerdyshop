import React from 'react'
import { client } from '@/app/lib/client'


async function getData(){
  const query = '*[_type == "product"]';
  const prod = await client.fetch(query);
  return console.log(prod);
}

export default async function NavBar() {
  const data = await getData();
  return (
    <div>NavBar</div>
  )
}
