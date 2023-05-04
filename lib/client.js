
import { createClient } from 'next-sanity';
import imageURLBuilder from '@sanity/image-url'

const client = createClient({
    projectId: '9cwj6wtj',
    dataset: 'production',
    apiVersion: '2021-10-12',
    useCdn: true,
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;