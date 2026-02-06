import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pai_nai_dee",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
