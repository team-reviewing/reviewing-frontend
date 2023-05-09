/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
