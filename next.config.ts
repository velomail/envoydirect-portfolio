import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/experiment", destination: "/", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/work", destination: "/#work", permanent: false },
    ];
  },
};

export default nextConfig;
