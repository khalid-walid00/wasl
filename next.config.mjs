/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: false,
  }, env: {
    MAIN_BASE_URL:process.env.MAIN_BASE_URL,
    MODE:process.env.MODE
  }
};

export default nextConfig;

