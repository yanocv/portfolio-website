/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/portfolio-website" : "",
  assetPrefix: isProd ? "/portfolio-website" : "",

  reactStrictMode: true
};

export default nextConfig;
