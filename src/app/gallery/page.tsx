import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GALLERY } from "@/lib/data/gallery";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "A gallery of Citadel K9s German Shepherds — adults, puppies, working moments and candid life at the kennel in Kenya.",
  path: "/gallery",
});

// VideoObject markup for our real gallery videos — makes them eligible for
// Google video results. Date reflects when the media was published to the site.
const videoJsonLd = GALLERY.filter(
  (g) => g.type === "video" && g.videoSrc && g.media.src,
).map((g) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: g.media.alt,
  description: `${g.media.alt} — Citadel K9s, an EAKC-registered German Shepherd breeder in Kenya.`,
  thumbnailUrl: `${SITE.url}${g.media.src}`,
  contentUrl: `${SITE.url}${g.videoSrc}`,
  // Full ISO 8601 with Kenya's time zone (EAT, +03:00) — Google requires a
  // time zone on VideoObject uploadDate.
  uploadDate: "2026-07-14T09:00:00+03:00",
}));

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          ...videoJsonLd,
        ]}
      />
      <PageHero
        eyebrow="The Collection"
        title="Gallery"
        description="A window into life at Citadel K9s. Browse by category and tap any image to view it larger. Professional photography is being added continually."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="container-site py-16 lg:py-24">
        <GalleryGrid />
      </section>

      <CTASection />
    </>
  );
}
