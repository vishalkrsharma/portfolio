import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/**'), new URL('https://api.microlink.io/**')],
    loader: 'default',
    unoptimized: true,
  },
};

export default nextConfig;
