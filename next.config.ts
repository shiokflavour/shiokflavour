import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed hawker centre pages (old names were inaccurate).
      {
        source: "/hawker/buona-vista-market",
        destination: "/hawker/holland-drive-market-food-centre",
        permanent: true,
      },
      {
        source: "/hawker/woodlands-centre-market",
        destination: "/hawker/marsiling-mall-hawker-centre",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
