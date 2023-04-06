/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["cdn.lorem.space"],
    unoptimized: true,
  },
  env: {
    PUBLIC_URL: "/",
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/all.module.scss";
    `,
  },
};

module.exports = nextConfig;
