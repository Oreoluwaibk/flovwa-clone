import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.flowvahub.com',
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
