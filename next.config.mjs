/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: false,
  }, env: {
    BASE_URL: process.env.BASE_URL,
    BASE_CDN: process.env.BASE_CDN,
    MAIN_BASE_URL:process.env.MAIN_BASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    MODE:process.env.MODE
  }
};

export default nextConfig;

