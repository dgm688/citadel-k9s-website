import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Close } from "@/components/ui/Icons";

/**
 * Comparison table. Every Citadel row is a commitment a buyer can
 * verify before paying — deliberately no certification claims.
 */
const rows = [
  { point: "Visit the kennel and meet the parents", citadel: true, typical: false },
  { point: "Live video call before any payment", citadel: true, typical: false },
  { point: "Vet check, deworming & vaccination records handed over", citadel: true, typical: true },
  { point: "Puppies raised inside the household", citadel: true, typical: false },
  { point: "Honest matching — including 'this puppy isn't for you'", citadel: true, typical: false },
  { point: "Direct WhatsApp line to the breeder for life", citadel: true, typical: false },
  { point: "Small, planned litters — never volume", citadel: true, typical: false },
];

export function CitadelDifference() {
  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="The Citadel Difference"
        title="Judge us by what you can verify."
        description="Anyone can write promises on a website. Here is what we invite every buyer to test in person before committing a shilling."
        className="mx-auto"
      />

      <Reveal className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 bg-ink-800 px-6 py-5 text-xs uppercase tracking-wide2 sm:px-8">
          <span className="text-bone-faint">What you can test</span>
          <span className="w-20 text-center font-medium text-gold sm:w-28">
            Citadel K9s
          </span>
          <span className="w-20 text-center text-bone-faint sm:w-28">
            Typical listing
          </span>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.point}
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 sm:px-8 ${
              i % 2 === 0 ? "bg-ink-900" : "bg-ink-800/40"
            }`}
          >
            <span className="text-sm text-bone">{row.point}</span>
            <span className="flex w-20 justify-center sm:w-28">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <Check className="h-4 w-4" />
              </span>
            </span>
            <span className="flex w-20 justify-center sm:w-28">
              {row.typical ? (
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-bone-faint">
                  <Check className="h-4 w-4" />
                </span>
              ) : (
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-bone-faint/50">
                  <Close className="h-3.5 w-3.5" />
                </span>
              )}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
