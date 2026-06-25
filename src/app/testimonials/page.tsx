import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export const metadata: Metadata = pageMeta({
  title: "Testimonials",
  description:
    "What Citadel K9s families say about their German Shepherds — health, temperament and a premium experience from enquiry to home.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const avg =
    TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <PageHero
        eyebrow="In Their Words"
        title="Trusted by families across Kenya."
        description="Our reputation is built one happy home at a time. Here is what our families have to say."
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <section className="container-site py-16 lg:py-24">
        <Reveal className="mb-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-white/5 pb-10">
          <div>
            <span className="font-display text-5xl text-gold">
              {avg.toFixed(1)}
            </span>
            <span className="ml-2 text-bone-faint">/ 5 average</span>
          </div>
          <div>
            <span className="font-display text-5xl text-gold">100%</span>
            <span className="ml-2 text-bone-faint">would recommend</span>
          </div>
          <div>
            <span className="font-display text-5xl text-gold">Lifetime</span>
            <span className="ml-2 text-bone-faint">breeder support</span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1} className="h-full">
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Become our next happy family." />
    </>
  );
}
