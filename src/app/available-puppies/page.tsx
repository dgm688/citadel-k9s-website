import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PuppyCard } from "@/components/cards/PuppyCard";
import { WaitingListForm } from "@/components/forms/WaitingListForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PUPPIES, AVAILABLE_PUPPIES } from "@/lib/data/puppies";

// Metadata reflects the true state of the page: promise a sale only when a
// real puppy is published; otherwise target the waiting-list intent honestly.
const puppiesAvailable = AVAILABLE_PUPPIES.length > 0;

export const metadata: Metadata = pageMeta({
  title: puppiesAvailable
    ? "German Shepherd Puppies for Sale in Kenya"
    : "German Shepherd Puppy Waiting List — Kenya",
  description: puppiesAvailable
    ? "German Shepherd puppies available now in Kenya — vet-checked, vaccinated and documented, raised near Nairobi by Citadel K9s. See this litter or join the waiting list."
    : "No puppies are available right now. Join the Citadel K9s waiting list to be first to hear when our next German Shepherd litter is planned — raised near Nairobi, Kenya.",
  path: "/available-puppies",
});

export default function AvailablePuppiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Available Puppies", path: "/available-puppies" },
        ])}
      />
      <PageHero
        eyebrow="Available Now"
        title="Available Puppies"
        description="We breed a small number of carefully planned litters. Each puppy below is health-checked, vaccinated on schedule and raised to the Citadel standard."
        crumbs={[{ label: "Home", href: "/" }, { label: "Available Puppies" }]}
      />

      <section className="container-site py-20 lg:py-28">
        {AVAILABLE_PUPPIES.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PUPPIES.map((puppy, i) => (
              <Reveal key={puppy.slug} delay={i * 0.1}>
                <PuppyCard puppy={puppy} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="panel p-12 text-center">
            <h2 className="text-2xl font-light">No puppies available right now</h2>
            <p className="mx-auto mt-3 max-w-md text-bone-muted">
              Our litters are planned and reserved quickly. Join the waiting list
              below to be first to know when the next litter arrives.
            </p>
          </Reveal>
        )}
      </section>

      {/* Waiting list */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Reserve Your Place"
            title="Join the waiting list"
            description="Tell us a little about your home and preferences. We match each puppy thoughtfully and will be in touch personally about availability and timing."
          />
          <Reveal delay={0.1} className="panel p-7 lg:p-9">
            <WaitingListForm />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
