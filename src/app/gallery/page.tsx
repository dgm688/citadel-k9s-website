import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "A gallery of Citadel K9s German Shepherds — adults, puppies, working moments and candid life at the kennel in Kenya.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
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
