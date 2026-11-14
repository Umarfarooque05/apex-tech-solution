import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/services/ai-automation',
        destination: '/services/custom-web-applications',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
