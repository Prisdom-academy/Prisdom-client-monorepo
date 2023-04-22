/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@prisdom/theme',
  '@prisdom/component-ui'
]);
const nextConfig = withTM({
  reactStrictMode: true
});

module.exports = nextConfig;
