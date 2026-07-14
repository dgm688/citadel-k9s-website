import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND_PILLARS, SITE } from "@/lib/site";
import { Check } from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "The story, mission and standards behind Citadel K9s — a premium German Shepherd kennel in Kenya breeding for structure, health and temperament.",
  path: "/about",
});

const values = [
  "Responsible, health-first breeding",
  "Lifetime commitment to every puppy",
  "Transparency in pedigree and health",
  "Small-scale, quality-focused litters",
  "Ethical, dog-centred practices",
  "Education and ongoing support",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="Our Story"
        title="Built on an uncompromising standard."
        description="Citadel K9s was founded on a simple conviction: that the German Shepherd, bred correctly, is the finest companion and working dog in the world — and that Africa deserves a kennel worthy of the breed."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="container-site grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <ImageFrame
            media={{
              src: "/images/gallery/adult-portrait-2.jpg",
              alt: "A Citadel K9s long-coat German Shepherd resting calmly at home",
            }}
            aspect="aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="shadow-luxe"
          />
        </Reveal>
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={`${SITE.city} · ${SITE.country}`}
            title="A kennel defined by what it refuses to compromise."
          />
          <div className="space-y-4 text-base leading-relaxed text-bone-muted">
            <p>
              We breed a small number of carefully planned litters each year.
              Every pairing is chosen to advance three things and nothing less:
              the structure that gives a dog a lifetime of sound movement, the
              health that lets it thrive, and the stable temperament that makes
              it a trustworthy member of the family.
            </p>
            <p>
              Our dogs are raised underfoot — handled daily, socialised
              thoughtfully and given the foundation to become confident,
              level-headed adults. When a Citadel puppy leaves for its new home,
              it carries the standard of the kennel with it.
            </p>
            <p>
              That standard does not end at collection. We remain a resource for
              every family, for the life of every dog.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/5 bg-ink-800/30 py-24 lg:py-32">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="What We Breed For"
            title="Structure · Health · Temperament"
            description="Three pillars that guide every decision we make."
            className="mx-auto"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {BRAND_PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.1}
                className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-ink-900 p-8"
              >
                <span className="font-display text-5xl text-gold/30">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-light">{p.title}</h3>
                <p className="text-sm leading-relaxed text-bone-muted">
                  {p.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="container-site grid gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">Our Mission</span>
            <p className="text-2xl font-light leading-relaxed text-bone">
              To breed exceptional German Shepherds with uncompromising standards
              in health, structure, temperament, confidence and working ability —
              supported by responsible breeding and outstanding customer care.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <span className="eyebrow">Our Vision</span>
            <p className="text-2xl font-light leading-relaxed text-bone">
              To become one of Africa&apos;s most respected German Shepherd
              kennels.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="panel flex flex-col gap-6 p-8 lg:p-10">
          <span className="eyebrow">Our Values</span>
          <ul className="grid gap-4">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-bone">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection title="Come and see the Citadel difference." />
    </>
  );
}
