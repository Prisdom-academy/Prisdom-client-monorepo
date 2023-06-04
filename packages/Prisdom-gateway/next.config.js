/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@prisdom/theme',
    '@prisdom/component-ui',
    '@prisdom/services'
  ]
};

module.exports = nextConfig;
