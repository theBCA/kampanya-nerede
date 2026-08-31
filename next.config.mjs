const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isGitHubPages ? "/kampanya-nerede" : undefined,
  basePath: isGitHubPages ? "/kampanya-nerede" : undefined,
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  output: "export",
  reactStrictMode: true
};

export default nextConfig;
