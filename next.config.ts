import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Support clean deploy + future custom domain
  poweredByHeader: false,
};

export default nextConfig;
