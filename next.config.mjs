/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.umroh.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'umroh-static.s3.ap-southeast-1.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.umroh.com',
        port: '',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
