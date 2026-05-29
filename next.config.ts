import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /approche merged into /le-studio
      { source: "/approche", destination: "/le-studio", permanent: true },
    ];
  },
};

export default nextConfig;
