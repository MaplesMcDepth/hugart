import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hf.co',
      },
      {
        protocol: 'https',
        hostname: '**.huggingface.co',
      },
    ],
  },
};

export default nextConfig;
