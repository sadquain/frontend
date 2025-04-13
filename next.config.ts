// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend.up.railway.app/api/:path*', // Proxy to NestJS
      },
    ];
  },
};

export default nextConfig;