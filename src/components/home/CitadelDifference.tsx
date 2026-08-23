import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

/**
 * A checklist of commitments a buyer can verify in person before paying.
 * Deliberately makes no claims about other breeders — only statements about
 * ourselves that a visitor can test. No certification claims.
 */
const points = [
  "Visit the kennel and meet the parents",
  "Live video call before any payment",
  "Vet check, deworming & vaccination records handed over",
  "Puppies raised inside the household",
  "Honest matching — including “this puppy isn't for you”",
  "Direct WhatsApp line to the breeder for life",
  "Small, planned litters — never volume",
];

export function CitadelDifference() {
  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="The Citadel Difference"
        title="Judge us by what you can verify."
        description="Anyone can write promises on a website. Here is what we invite every buyer to test in person before committing a shilling — ask us to prove any of it."
        className="mx-auto"
      />

      <Reveal className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-white/10">
        <ul>
          {points.map((point, i) => (
            <li
              key={point}
              className={`flex items-center gap-4 px-6 py-4 sm:px-8 ${
                i % 2 === 0 ? "bg-ink-900" : "bg-ink-800/40"
              }`}
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm text-bone sm:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
