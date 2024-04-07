import sanityClient from '@sanity/cli';
import { apiVersion, dataset, projectId } from '../../sanity/env';


export const client = sanityClient(
   { projectId: 'rtlrkha5',
    dataset: 'production',
    apiVersion: '2024-03-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
}
);
