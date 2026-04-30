import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevents Next.js from detecting C:\Users\hp\Documents\ as the workspace root
    root: process.cwd(),
  },
  // Use a fresh output directory to avoid locked .next files from previous runs
  distDir: ".next-fresh",
};

export default nextConfig;
