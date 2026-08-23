/**
 * Production config for Vercel (or any Node host).
 * Full-featured: image optimization, security headers.
 *
 * Domain: set NEXT_PUBLIC_SITE_URL (or the fallback in src/lib/site.ts)
 * when the custom domain is purchased — nothing here hardcodes a host.
 */

/**
 * Canonical host for redirects. Derived from NEXT_PUBLIC_SITE_URL so the
 * www→apex redirect follows the domain automatically (no hardcoding).
 */
const canonicalHost = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://citadelk9s.com"
).replace(/^https?:\/\//, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Clean URL for the standalone WebGL splash (isolated static page).
  async rewrites() {
    return [
      { source: "/experience", destination: "/experiments/flow-wave.html" },
    ];
  },
  // Consolidate www → apex so Google sees one canonical version of every page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${canonicalHost}` }],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Local images only. If a remote CDN is introduced later, allowlist its
    // exact host here rather than opening the optimizer to every host.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
