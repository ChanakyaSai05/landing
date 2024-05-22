/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'vison.ai',
      },
      {
        protocol: 'https',
        hostname: 'landing.infiniticube.in',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_BASE_URL,
      },
    ],
  },
};

export default nextConfig;
