/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TEST: process.env.TEST
  }
}

module.exports = nextConfig
