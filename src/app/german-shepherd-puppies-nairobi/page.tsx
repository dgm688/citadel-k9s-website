import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, MapPin } from "@/components/ui/Icons";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "German Shepherd Puppies in Nairobi",
  description:
    "German Shepherd puppies near Nairobi from Citadel K9s — based in Ruaka, Kiambu, on the city's northern edge. Visit by appointment, meet the parents, and buy from a registered, health-testing breeder.",
  path: "/german-shepherd-puppies-nairobi",
});

const faqs = [
  {
    question: "Where is Citadel K9s located?",
    answer:
      "We're in Ruaka, Kiambu County, just off the northern edge of Nairobi — close to the city yet out where the dogs have room. Serious buyers are welcome to visit by appointment.",
  },
  {
    question: "Can I visit to see the puppies near Nairobi?",
    answer:
      "Yes. Visits are by appointment so we can protect young litters from infection and stress. You'll meet the puppies and their mother and can take your time. We also offer a live video call before any payment.",
  },
  {
    question: "Do you deliver German Shepherd puppies in Nairobi?",
    answer:
      "For a reserved puppy that's old enough to travel, we can arrange safe ground transport within Kenya, planned around the puppy's wellbeing, with the full document pack travelling with the puppy. Talk to us about your location for honest options and costs.",
  },
  {
    question: "How much do German Shepherd puppies cost in Nairobi?",
    answer:
      "A healthy, documented purebred German Shepherd puppy typically costs between KSh 40,000 and KSh 150,000 depending on pedigree, health testing and coat. Our German Shepherd price guide for Kenya explains exactly what you should expect to pay and why.",
  },
];

export default function GermanShepherdPuppiesNairobiPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "German Shepherd Puppies in Nairobi",
              path: "/german-shepherd-puppies-nairobi",
            },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="German Shepherd Puppies · Nairobi"
        title="German Shepherd Puppies in Nairobi"
        description="Citadel K9s is based in Ruaka, Kiambu — on the northern edge of Nairobi. Buying near the city means you can meet the parents, skip risky long-distance transport, and know your breeder is real."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "German Shepherd Puppies in Nairobi" },
        ]}
      />

      {/* Intro */}
      <section className="container-site max-w-3xl py-20 lg:py-28">
        <div className="space-y-5 text-base leading-relaxed text-bone-muted">
          <p>
            If you&apos;re searching for a German Shepherd puppy in Nairobi,
            buying from a breeder near the city is one of the smartest decisions
            you can make. You can visit in person, meet your puppy&apos;s parents,
            see the environment it was raised in, and avoid the stress and risk of
            transporting a young pup long distances. It&apos;s also your best
            protection against scams — which almost always fall apart the moment
            you ask to visit.
          </p>
          <p>
            Citadel K9s is in Ruaka, Kiambu County, right on Nairobi&apos;s
            northern edge. We&apos;re a registered, health-testing kennel, and
            families come to us from across Kenya — and buyers travel from as far
            as Tanzania — to collect a properly bred German Shepherd.
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <SectionHeading
            eyebrow="Where we are"
            title="Ruaka — on Nairobi's doorstep"
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-bone-muted">
            <p>
              Ruaka sits just off the northern edge of Nairobi, within easy reach
              of the city&apos;s northern and north-western areas and the Kiambu
              Road and Thika Road corridors. It&apos;s close enough for a
              straightforward visit, yet gives our dogs the space they need to be
              raised well.
            </p>
            <p>
              We welcome serious buyers by appointment — an appointment simply
              lets us protect young litters from infection and stress, and gives
              you our full attention when you come.
            </p>
          </div>
          <a
            href={CONTACT.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 px-5 py-3 text-sm text-bone transition-colors hover:border-gold hover:text-gold"
          >
            <MapPin className="h-4 w-4 text-gold" />
            View our location on the map
          </a>
        </div>
      </section>

      {/* Why local */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why buy near Nairobi"
          title="Three reasons local matters"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Meet the parents",
              body: "Judge the temperament and health your puppy will inherit with your own eyes — something no photo or advert can replace.",
            },
            {
              title: "No risky transport",
              body: "A short local collection is far kinder to a young puppy than a stressful long-distance journey.",
            },
            {
              title: "Real, ongoing support",
              body: "A breeder you can actually reach, who knows your dog — before, during and long after the sale.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-ink-900 p-8"
            >
              <h3 className="text-xl font-light">{c.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Next steps" title="Keep exploring" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "See available puppies", href: "/available-puppies" },
              { label: "Meet our dogs", href: "/our-dogs" },
              {
                label: "German Shepherd puppies in Kenya",
                href: "/german-shepherd-puppies-kenya",
              },
              {
                label: "Buying from outside Kenya (East Africa)",
                href: "/blog/german-shepherd-puppies-east-africa",
              },
              {
                label: "German Shepherd price guide",
                href: "/blog/german-shepherd-price-kenya",
              },
              { label: "Contact Citadel K9s", href: "/contact" },
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
          title="German Shepherd puppies in Nairobi — FAQs"
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
      </section>

      <CTASection title="Come and meet our dogs in Ruaka." />
    </>
  );
}
