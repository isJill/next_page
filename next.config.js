/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/next_page',
  assetPrefix: '/next_page',

};
module.exports = nextConfig;
