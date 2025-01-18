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
    domains: [
      "i.scdn.co",
      "t.scdn.co",
      "charts-images.scdn.co",
      "dummyimage.com",
      "mosaic.scdn.co",
      "image-cdn-ak.spotifycdn.com",
      "image-cdn-fa.spotifycdn.com",
    ],
  },
};

export default nextConfig;
