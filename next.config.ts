const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
import type {
  basePath: base || undefined,
  assetPrefix: base ? base + "/" : undefined,
  images: { unoptimized: true },
  output: "export", NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
};

export default nextConfig;

