import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "German Shepherd Puppies in Kenya",
  description:
    "German Shepherd puppies in Kenya from Citadel K9s — an EAKC-registered breeder near Nairobi. Health-tested parents, in-home raised pups, full records. Enquire or join the waiting list.",
  path: "/german-shepherd-puppies-kenya",
});

const included = [
  "EAKC registration paperwork and pedigree",
  "Microchip, registered to you",
  "Veterinary health check before collection",
  "Deworming and vaccination records, up to date",
  "A settling-in and feeding guide",
  "A direct WhatsApp line to the breeder — for life",
];

const steps = [
  {
    title: "Enquire",
    body: "Message us on WhatsApp and tell us about your home and what you're looking for. Every enquiry is answered personally by the breeder.",
  },
  {
    title: "Visit or video call",
    body: "See the puppies and their mother in person by appointment, or on a live video call — before any payment is discussed.",
  },
  {
    title: "Reserve",
    body: "A deposit reserves a specific puppy once you've chosen; the balance is settled at collection. We explain every step before you commit.",
  },
  {
    title: "Collection & support",
    body: "Your puppy goes home fully documented, and we stay a phone call away for the life of your dog.",
  },
];

const faqs = [
  {
    question: "How much is a German Shepherd puppy in Kenya?",
    answer:
      "A healthy, purebred German Shepherd puppy from a documented breeder typically costs between KSh 40,000 and KSh 150,000 in Kenya, depending on pedigree, health testing, coat and lineage. Puppies advertised below KSh 15,000 are usually unpapered, with no verifiable health or pedigree.",
  },
  {
    question: "Do you have German Shepherd puppies available now?",
    answer:
      "We breed a small number of carefully planned litters, so availability changes through the year. When we have no puppies ready, we keep a short waiting list — message us and we'll tell you honestly what's available and when the next litter is expected.",
  },
  {
    question: "Are your German Shepherds registered and health-tested?",
    answer:
      "Yes. We breed as an East African Kennel Club (EAKC) Associate Member (#2217); our dogs are EAKC registered, hip scored under the EAKC / KESCAVA scheme, and microchipped. Every puppy leaves with its registration and health records.",
  },
  {
    question: "Can I visit before I buy?",
    answer:
      "Absolutely — serious buyers are welcome by appointment to meet the puppies and their mother in Ruaka, Kiambu, near Nairobi. We also offer live video calls before any payment. Seeing the dogs in person is the surest way to know a breeder is genuine.",
  },
  {
    question: "Do you deliver puppies across Kenya?",
    answer:
      "We can arrange safe ground transport within Kenya, planned around the puppy's wellbeing, with the full document pack travelling with the puppy. Talk to us about your location and we'll give you honest options and costs.",
  },
];

export default function GermanShepherdPuppiesKenyaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "German Shepherd Puppies in Kenya",
              path: "/german-shepherd-puppies-kenya",
            },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="German Shepherd Puppies · Kenya"
        title="German Shepherd Puppies in Kenya"
        description="Citadel K9s breeds premium German Shepherds near Nairobi — health-tested parents, EAKC registration, and puppies raised in-home for sound structure, health and temperament. Here's everything you need to buy well."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "German Shepherd Puppies in Kenya" },
        ]}
      />

      {/* Intro */}
      <section className="container-site max-w-3xl py-20 lg:py-28">
        <div className="space-y-5 text-base leading-relaxed text-bone-muted">
          <p>
            Buying a German Shepherd puppy in Kenya should be one of the happiest
            decisions you make — and it is, when you buy from the right place.
            The gap between a well-bred, health-tested puppy and an anonymous
            classifieds advert is enormous, and it shows up years later in a
            dog&apos;s hips, its nerves and its temperament. Citadel K9s exists to
            close that gap: a small, serious kennel breeding German Shepherds to a
            standard we&apos;re happy to be judged on in person.
          </p>
          <p>
            We&apos;re based in Ruaka, Kiambu County, on the edge of Nairobi, and
            families come to us from across Kenya. Whether you want a devoted
            family companion or a capable{" "}
            <Link
              href="/blog/security-dogs-for-sale-kenya"
              className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
            >
              guard dog
            </Link>
            , everything starts with the same foundation — sound parents and a
            properly raised puppy.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="What you take home"
            title="Every Citadel puppy comes fully documented."
            description="No vague promises — what we've done is written down and handed over."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.05}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-ink-900 p-5 text-bone"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to reserve */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="The process"
          title="How to reserve a puppy"
          description="Simple, transparent, and always personal. No pressure, no rushed deposits."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.08}
              className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-ink-900 p-6"
            >
              <span className="font-display text-4xl text-gold/30">
                0{i + 1}
              </span>
              <h3 className="text-xl font-light">{s.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explore / internal links */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Buy with confidence"
            title="Read before you buy"
            description="Everything a first-time Kenyan buyer should know."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "See available puppies", href: "/available-puppies" },
              { label: "Meet our dogs", href: "/our-dogs" },
              {
                label: "German Shepherd price guide for Kenya",
                href: "/blog/german-shepherd-price-kenya",
              },
              {
                label: "How to choose a healthy puppy",
                href: "/blog/choosing-a-german-shepherd-puppy-in-kenya",
              },
              {
                label: "How to avoid puppy scams",
                href: "/blog/avoid-puppy-scams-kenya",
              },
              {
                label: "About Citadel K9s, the breeder",
                href: "/german-shepherd-breeder-kenya",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-900 p-5 text-bone transition-colors hover:border-gold/40"
              >
                <span className="text-sm">{l.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site max-w-3xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Questions"
          title="German Shepherd puppies in Kenya — FAQs"
        />
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
        <div className="mt-10">
          <ButtonLink href="/available-puppies" variant="primary">
            View available puppies
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      <CTASection title="Ready to find your German Shepherd?" />
    </>
  );
}
