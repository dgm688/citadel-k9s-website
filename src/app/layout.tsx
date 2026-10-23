import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE, GOOGLE_SITE_VERIFICATION } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts are SELF-HOSTED (next/font/local) rather than fetched from Google at
// build time. next/font/google intermittently crashes the Vercel build when
// Google's font API returns a malformed response; serving the woff2 files from
// the repo removes that dependency entirely (and avoids an external fetch at runtime).
const display = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  // Official brand favicon set (from the uploaded brand package)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
