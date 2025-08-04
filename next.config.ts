import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
