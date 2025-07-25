import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/nlp-lesson-web',
  assetPrefix: '/nlp-lesson-web/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
