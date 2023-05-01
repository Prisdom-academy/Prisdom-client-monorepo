/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@prisdom/theme', '@prisdom/component-ui']
};

module.exports = nextConfig;
