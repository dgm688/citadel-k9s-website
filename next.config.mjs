/**
 * Two build targets share this config:
 *  - Default (Vercel / Node): full-featured — image optimization, headers.
 *  - GitHub Pages (DEPLOY_TARGET=github-pages): static export under a basePath.
 */
const isPages = process.env.DEPLOY_TARGET === "github-pages";
const repo = "citadel-k9s-website";
const basePath = isPages ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static HTML export for GitHub Pages. `trailingSlash` makes every route a
  // directory with index.html so paths resolve cleanly on static hosting.
  ...(isPages
    ? { output: "export", basePath, assetPrefix: basePath, trailingSlash: true }
    : {}),
  // Expose the base path to the app (used for favicon/manifest links).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // GitHub Pages can't run the Next image optimizer.
    unoptimized: isPages,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Allow swapping in remote CDN images later without code changes.
      { protocol: "https", hostname: "**" },
    ],
  },
  // Custom headers are only applied by a Node server (not static export).
  ...(isPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
