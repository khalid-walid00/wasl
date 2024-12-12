/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: false,
  },
  env: {
    MAIN_BASE_URL: process.env.MAIN_BASE_URL,
    MODE: process.env.MODE,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.99.33.197:8083/api/v1/:path*', // Proxy to Backend
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
