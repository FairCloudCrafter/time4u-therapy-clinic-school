import type { NextConfig } from "next";

// GitHub Pages serves this project under /time4u-therapy-clinic-school; Cloudflare will serve at root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "time4u-therapy-clinic-school";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
