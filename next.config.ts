import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ref",
        destination: "https://lazlle-ref26.vercel.app",
      },
      {
        source: "/ref/:path*",
        destination: "https://lazlle-ref26.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
