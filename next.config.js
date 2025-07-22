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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,          // turn back on if you want
  images: { unoptimized: true },  // keep if you rely on it
  experimental: {
    // App Router is *on* by default now – no need for appDir
    serverActions: true,          // only if you use them
    typedRoutes: true,            // optional quality‑of‑life
  },
};

module.exports = nextConfig;
