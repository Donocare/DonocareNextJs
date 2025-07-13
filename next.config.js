// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: { unoptimized: true },
//   output: "export",
//    experimental: {
//     appDir: true, // must be enabled if using app directory
//   },
// };

// module.exports = nextConfig;
const nextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
