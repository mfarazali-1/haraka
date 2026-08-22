import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/haraka-cares",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
