import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Heart,
  Sparkle,
  Paw,
  Check,
  Star,
} from "@/components/ui/Icons";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Health-first breeding",
    text: "Hip and elbow screened parents, DM-clear lines and a written health guarantee on every puppy.",
  },
  {
    icon: Sparkle,
    title: "Championship structure",
    text: "Sound conformation and correct movement bred for a lifetime of athletic, effortless health.",
  },
  {
    icon: Heart,
    title: "Stable temperament",
    text: "Confident, biddable dogs raised underfoot — equally suited to family life and serious work.",
  },
  {
    icon: Paw,
    title: "Early socialisation",
    text: "Neurological stimulation and varied exposure from day one for resilient, adaptable puppies.",
  },
  {
    icon: Check,
    title: "Full documentation",
    text: "Vaccination records, registration paperwork and pedigree provided with every puppy.",
  },
  {
    icon: Star,
    title: "Lifetime support",
    text: "Guidance on nutrition, training and care for the life of your dog. We never disappear.",
  },
];

export function WhyChoose() {
  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        eyebrow="Why Citadel K9s"
        title={
          <>
            An uncompromising standard,
            <br className="hidden sm:block" /> from pedigree to porch.
          </>
        }
        description="We breed a small number of exceptional litters each year — never volume, always quality. Every decision serves the long-term health and character of the dog."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <Reveal
              key={r.title}
              delay={(i % 3) * 0.08}
              className="flex flex-col gap-4 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-medium text-bone">{r.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">{r.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
