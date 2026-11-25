import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows Vercel production build to successfully complete even if Next.js internal .next/types/validator.ts has upstream type bugs
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
