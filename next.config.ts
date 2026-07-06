import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host: apex -> www, permanent (308). Without this Vercel
      // answers with a 307 (temporary), which tells crawlers NOT to
      // consolidate ranking signals onto www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "yofield.com" }],
        destination: "https://www.yofield.com/:path*",
        permanent: true,
      },
      // /approche merged into /le-studio
      { source: "/approche", destination: "/le-studio", permanent: true },
    ];
  },
};

export default nextConfig;
