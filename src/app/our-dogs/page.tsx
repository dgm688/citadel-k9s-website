import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DogCard } from "@/components/cards/DogCard";
import { Reveal } from "@/components/ui/Reveal";
import { SIRES, DAMS } from "@/lib/data/dogs";

export const metadata: Metadata = pageMeta({
  title: "Our Dogs",
  description:
    "Meet the sires and dams behind Citadel K9s — health-screened German Shepherds of exceptional structure, pedigree and temperament.",
  path: "/our-dogs",
});

export default function OurDogsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Dogs", path: "/our-dogs" },
        ])}
      />
      <PageHero
        eyebrow="The Foundation"
        title="Our Dogs"
        description="Every Citadel puppy begins here — with sires and dams chosen for health, structure and temperament. These are the dogs that define our bloodlines."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Dogs" }]}
      />

      <section className="container-site py-20 lg:py-28">
        <SectionHeading eyebrow="Sires" title="Our stud dogs" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {SIRES.map((dog, i) => (
            <Reveal key={dog.slug} delay={i * 0.1}>
              <DogCard dog={dog} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site pb-24 lg:pb-32">
        <SectionHeading eyebrow="Dams" title="Our brood bitches" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {DAMS.map((dog, i) => (
            <Reveal key={dog.slug} delay={i * 0.1}>
              <DogCard dog={dog} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Planning a future litter?" description="Ask us about upcoming pairings and how to reserve from our bloodlines." />
    </>
  );
}
