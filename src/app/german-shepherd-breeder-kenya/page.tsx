import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { BRAND_PILLARS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "German Shepherd Breeder in Kenya",
  description:
    "Citadel K9s is an EAKC-registered German Shepherd breeder in Ruaka, Kiambu, near Nairobi — hip-scored parents, in-home raised puppies, full pedigree and lifetime support. Meet the breeder behind the dogs.",
  path: "/german-shepherd-breeder-kenya",
});

const faqs = [
  {
    question: "What makes Citadel K9s a responsible German Shepherd breeder?",
    answer:
      "We health-test our breeding dogs (hip scoring under the EAKC / KESCAVA scheme), register our litters with the East African Kennel Club, breed a small number of planned litters, raise puppies in-home with early socialisation, and support every family for the life of the dog. Every claim we make can be verified in person or in writing.",
  },
  {
    question: "Are your dogs registered with a kennel club?",
    answer:
      "Yes. We breed as an EAKC Associate Member (#2217), our dogs are East African Kennel Club registered, and every puppy leaves with its registration paperwork and pedigree.",
  },
  {
    question: "Do you offer a health guarantee?",
    answer:
      "We breed from health-tested, hip-scored parents and provide complete veterinary, deworming and vaccination records, and we're transparent about what we can and cannot promise. We don't make unsupported guarantees — we let the health testing and documentation speak for themselves, and we stay available for the life of your dog.",
  },
  {
    question: "Where is the kennel located?",
    answer:
      "We're based in Ruaka, Kiambu County, just outside Nairobi. Serious buyers are welcome to visit by appointment to meet our dogs and see how they're raised.",
  },
];

export default function GermanShepherdBreederKenyaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "German Shepherd Breeder in Kenya",
              path: "/german-shepherd-breeder-kenya",
            },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="German Shepherd Breeder · Kenya"
        title="German Shepherd Breeder in Kenya"
        description="Citadel K9s is a registered, health-first German Shepherd kennel in Ruaka, Kiambu — near Nairobi. We breed a small number of carefully planned litters, and we welcome you to judge our standards in person."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "German Shepherd Breeder in Kenya" },
        ]}
      />

      {/* Who we are */}
      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <ImageFrame
            media={{
              src: "/images/gallery/adult-portrait-1.jpg",
              alt: "A Citadel K9s long-coat German Shepherd, bred in Kenya",
            }}
            aspect="aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="shadow-luxe"
          />
        </Reveal>
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Who we are"
            title="A kennel, not a marketplace."
          />
          <div className="space-y-4 text-base leading-relaxed text-bone-muted">
            <p>
              Anyone can advertise a puppy. A breeder is something different — and
              the difference is the whole point of Citadel K9s. We breed German
              Shepherds as an East African Kennel Club Associate Member (#2217),
              from parents we health-test and know intimately, in small planned
              litters, raised inside a working household.
            </p>
            <p>
              We chose to specialise in one breed on purpose. It means we know our
              bloodlines, their health and their temperament far better than
              someone offering five different breeds ever could — and it means
              every puppy we place carries a standard we stand behind.
            </p>
            <p>
              You&apos;re welcome to see all of it for yourself. Come and{" "}
              <Link
                href="/our-dogs"
                className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
              >
                meet our dogs
              </Link>
              , and judge us the honest way — in person.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="What we breed for"
            title="Structure · Health · Temperament"
            description="Three pillars behind every pairing we plan."
            className="mx-auto"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
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

      {/* Health & raising */}
      <section className="container-site max-w-3xl py-20 lg:py-28">
        <div className="space-y-8">
          <div className="space-y-4">
            <SectionHeading eyebrow="Health first" title="Testing, not hoping." />
            <div className="space-y-4 text-base leading-relaxed text-bone-muted">
              <p>
                Hip dysplasia is the health issue German Shepherds are most known
                for, and it is influenced by genetics — which is why our breeding
                dogs are hip scored under the EAKC / KESCAVA scheme and
                microchipped, and our puppies are vet-checked before they go home.
                We don&apos;t guess at soundness; we test for it. Read our
                explainer on{" "}
                <Link
                  href="/blog/hip-dysplasia-in-german-shepherds-kenya"
                  className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
                >
                  hip dysplasia in German Shepherds
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Raised underfoot"
              title="The first weeks that shape a lifetime."
            />
            <div className="space-y-4 text-base leading-relaxed text-bone-muted">
              <p>
                A stable adult dog is built in its first weeks. Our puppies are
                raised in-home — handled daily, exposed to household sounds and
                gentle new experiences — which is the real foundation of the
                confident, level-headed temperament the breed is famous for. If
                you want to understand what separates a responsible breeder from
                the rest, read our guide to{" "}
                <Link
                  href="/blog/how-to-choose-an-ethical-german-shepherd-breeder-kenya"
                  className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
                >
                  choosing an ethical breeder in Kenya
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow="Questions" title="About the breeder — FAQs" />
          <dl className="mt-12 divide-y divide-white/5">
            {faqs.map((f) => (
              <div key={f.question} className="py-6">
                <dt className="text-lg font-light text-bone">{f.question}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-bone-muted">
                  {f.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/german-shepherd-puppies-kenya" variant="primary">
              See our puppies
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Our full story
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection title="Speak directly with the breeder." />
    </>
  );
}
