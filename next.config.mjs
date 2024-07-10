/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.umroh.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "umroh-static.s3.ap-southeast-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.umroh.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "c4.wallpaperflare.com",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "umroh-ai-api.000webhostapp.com",
      },
      {
        protocol: "http",
        hostname: "umroh-ai-api.test",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "http",
        hostname: "192.168.100.6",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "139.99.68.206",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "api.umrohkan.online",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.APP_KEY;
  },
};

export default nextConfig;
