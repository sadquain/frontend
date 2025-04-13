// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://synapse.loca.lt/api/:path*', // Proxy to NestJS
      },
    ];
  },
};

export default nextConfig;