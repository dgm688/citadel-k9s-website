import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Paw, ShieldCheck, Heart, Check, Sparkle } from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "Puppy Care",
  description:
    "Essential care guidance for your Citadel K9s German Shepherd puppy — nutrition, health, socialisation, training and settling in.",
  path: "/puppy-care",
});

const guides = [
  {
    icon: Paw,
    title: "Settling in",
    points: [
      "Prepare a calm, defined space before arrival",
      "Keep the first days quiet and low-stimulation",
      "Maintain a consistent feeding and toilet routine",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Health & vaccination",
    points: [
      "Complete the booster schedule with your vet",
      "Stay current on deworming and parasite control",
      "Schedule a wellness check within the first week",
    ],
  },
  {
    icon: Sparkle,
    title: "Nutrition",
    points: [
      "Feed a quality large-breed puppy formula",
      "Keep your puppy lean for healthy joint growth",
      "Transition foods gradually over 7–10 days",
    ],
  },
  {
    icon: Heart,
    title: "Socialisation",
    points: [
      "Introduce new people, sounds and surfaces positively",
      "Keep experiences short, frequent and rewarding",
      "Build confidence before exposing to challenges",
    ],
  },
];

const checklist = [
  "Crate or defined sleeping area",
  "Stainless steel food & water bowls",
  "Large-breed puppy food (as advised)",
  "Collar, lead and ID tag",
  "Safe chew toys for teething",
  "Grooming brush for the coat",
  "Vet appointment booked",
  "Settling-in guide from Citadel K9s",
];

export default function PuppyCarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Puppy Care", path: "/puppy-care" },
        ])}
      />
      <PageHero
        eyebrow="Care Guide"
        title="Raising a Citadel puppy."
        description="Everything you need to give your German Shepherd the best possible start. Every Citadel family also receives a personalised settling-in pack."
        crumbs={[{ label: "Home", href: "/" }, { label: "Puppy Care" }]}
      />

      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal
                key={g.title}
                delay={(i % 2) * 0.1}
                className="panel flex flex-col gap-5 p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-light">{g.title}</h2>
                <ul className="space-y-3 text-sm text-bone-muted">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Checklist */}
      <section className="border-y border-white/5 bg-ink-800/30 py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <ImageFrame
              media={{
                src: "/images/gallery/young-sit-1.jpg",
                alt: "A young Citadel K9s German Shepherd settled at home",
              }}
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="shadow-luxe"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Before You Collect"
              title="Your new-puppy checklist"
              description="Have these ready and your puppy's first days will be calm and confident."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-bone"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Questions about caring for your puppy?" description="Our team is always available to help — before and long after you bring your puppy home." />
    </>
  );
}
