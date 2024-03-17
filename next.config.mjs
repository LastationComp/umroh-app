/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.umroh.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
