import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/experiment", destination: "/", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/process", destination: "/#process", permanent: false },
    ];
  },
};

export default nextConfig;
