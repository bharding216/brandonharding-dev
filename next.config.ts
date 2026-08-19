import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "brandonharding.dev" }],
        destination: "https://www.brandonharding.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
