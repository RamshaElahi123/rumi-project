// // src/sanity/lib/client.ts
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Environment variables with fallbacks for development
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pux4p4jv';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-01-01'; // Lock version for stability

// Create Sanity client instance
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN, // Keep undefined for read-only
  useCdn: false, // Disable CDN for always fresh data
});

// Image URL builder instance
const builder = imageUrlBuilder(client);

/**
 * Generate a Sanity image URL from a given source.
 * @param source - The Sanity image object, asset, or reference.
 * @returns A configured image URL builder instance.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
