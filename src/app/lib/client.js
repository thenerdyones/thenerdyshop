import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity"


export const client = createClient({
    projectId: 'rtlrkha5',
    dataset: 'production',
    apiVersion: '2024-03-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);