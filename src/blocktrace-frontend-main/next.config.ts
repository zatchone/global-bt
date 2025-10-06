import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_DFX_NETWORK: process.env.DFX_NETWORK || 'local',
    NEXT_PUBLIC_IC_HOST: process.env.DFX_NETWORK === 'ic' 
      ? 'https://ic0.app' 
      : 'http://127.0.0.1:8081'
  }
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.generateBuildId = async () => 'build';
}

export default nextConfig;