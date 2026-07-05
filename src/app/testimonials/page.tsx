import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS, HAS_TESTIMONIALS } from "@/lib/data/testimonials";
import { whatsappLink } from "@/lib/site";
import { WhatsApp, ShieldCheck } from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "Testimonials",
  description:
    "Verified reviews from Citadel K9s families. We publish only genuine testimonials — ask us for direct references any time.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
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
        title={
          HAS_TESTIMONIALS
            ? "What Citadel families say."
            : "Verified reviews only."
        }
        description={
          HAS_TESTIMONIALS
            ? "Genuine words from genuine families — each review states its source."
            : "We publish only reviews we can verify from real Citadel K9s families — never invented praise."
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <section className="container-site py-16 lg:py-24">
        {HAS_TESTIMONIALS ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.1} className="h-full">
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto max-w-2xl">
            <div className="panel flex flex-col items-center gap-6 p-10 text-center lg:p-14">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-light">
                Our first public reviews are being collected.
              </h2>
              <p className="max-w-lg leading-relaxed text-bone-muted">
                Plenty of breeder websites fill this page with invented praise.
                We won&apos;t. As Citadel families give permission to share
                their words — with the source stated — they will appear here.
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-bone-muted">
                Until then: ask us for direct references, or better, arrange a
                visit and judge our dogs in person.
              </p>
              <a
                href={whatsappLink(
                  "Hello Citadel K9s, could I speak to a reference family or arrange a visit?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsApp className="h-4 w-4" />
                Ask for references
              </a>
            </div>
          </Reveal>
        )}
      </section>

      <CTASection title="Become one of our first featured families." />
    </>
  );
}
