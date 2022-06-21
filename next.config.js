/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      tls: false,
      stream: false,
      constants: false,
    };
    return config;
  },
  images: {
    domains: ['upcdn.io'],
    layoutRaw: true,
  },
};

module.exports = nextConfig;
