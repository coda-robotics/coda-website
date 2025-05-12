import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // This allows the build to proceed despite TypeScript errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This disables ESLint during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
