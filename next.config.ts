import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.spotify.com/v1/:path*",
      },
    ];
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

export default nextConfig;
