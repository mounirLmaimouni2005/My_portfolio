import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="/repo-name" when deploying to GitHub Pages project sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};
export default config;
