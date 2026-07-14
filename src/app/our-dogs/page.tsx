import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DogCard } from "@/components/cards/DogCard";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SIRES, DAMS, HAS_DOGS } from "@/lib/data/dogs";
import { whatsappLink } from "@/lib/site";
import { WhatsApp, Check } from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "Our Dogs",
  description:
    "The sires and dams behind Citadel K9s. Full profiles with photography, pedigree and health documentation are published as they are finalised — meet the dogs in person by appointment.",
  path: "/our-dogs",
});

/** What every published profile will document. */
const profileStandards = [
  "Professional photography — the actual dog, never stock images",
  "Temperament described honestly, in the home and at work",
  "Pedigree taken directly from registration papers",
  "Health information we can document — nothing we can't",
];

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
        description="Every Citadel puppy begins with the dogs behind it. We're preparing full public profiles to a standard we're proud of — and until they're live, you can do something better than read about our dogs: come and meet them."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Dogs" }]}
      />

      {HAS_DOGS ? (
        <>
          {SIRES.length > 0 && (
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
          )}
          {DAMS.length > 0 && (
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
          )}
        </>
      ) : (
        <section className="container-site py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <ImageFrame
                media={{
                  src: "/images/gallery/adult-stack.jpg",
                  alt: "A Citadel K9s long-coat black and red German Shepherd standing in profile",
                }}
                aspect="aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-luxe"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Coming Soon"
                title="Profiles worth waiting for."
                description="We'd rather publish nothing than publish filler. Each dog's profile goes live once it meets our standard:"
              />
              <ul className="grid gap-3">
                {profileStandards.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-bone">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-2 rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm leading-relaxed text-bone-muted">
                  <span className="font-medium text-bone">
                    Don&apos;t wait for the website.
                  </span>{" "}
                  Serious buyers can meet our dogs in person by appointment, or
                  see them live on a WhatsApp video call today.
                </p>
                <a
                  href={whatsappLink(
                    "Hello Citadel K9s, I'd like to see your dogs — could we arrange a visit or video call?",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-4"
                >
                  <WhatsApp className="h-4 w-4" />
                  Arrange a visit or video call
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection title="Questions about our breeding programme?" description="Ask us anything — including the hard questions. We'd rather earn your trust than assume it." />
    </>
  );
}
