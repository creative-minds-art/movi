import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    // Force the correct workspace root to avoid resolving dependencies from a parent directory
    root: __dirname,
  },
};

export default nextConfig;
