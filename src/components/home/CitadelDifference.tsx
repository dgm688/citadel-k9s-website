import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Close } from "@/components/ui/Icons";

const rows = [
  {
    point: "Hip & elbow screened parents",
    citadel: true,
    typical: false,
  },
  { point: "Written health guarantee", citadel: true, typical: false },
  {
    point: "Early socialisation & neurological stimulation",
    citadel: true,
    typical: false,
  },
  { point: "Complete vaccination & registration records", citadel: true, typical: true },
  { point: "Temperament matched to your home", citadel: true, typical: false },
  { point: "Lifetime breeder support", citadel: true, typical: false },
  { point: "Small, planned litters — never volume", citadel: true, typical: false },
];

export function CitadelDifference() {
  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="The Citadel Difference"
        title="Not all German Shepherds are bred equal."
        description="The difference between a well-bred dog and the rest reveals itself over a lifetime. Here is what sets a Citadel puppy apart."
        className="mx-auto"
      />

      <Reveal className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 bg-ink-800 px-6 py-5 text-xs uppercase tracking-wide2 sm:px-8">
          <span className="text-bone-faint">What matters</span>
          <span className="w-20 text-center font-medium text-gold sm:w-28">
            Citadel K9s
          </span>
          <span className="w-20 text-center text-bone-faint sm:w-28">
            Typical breeder
          </span>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.point}
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 sm:px-8 ${
              i % 2 === 0 ? "bg-ink-900" : "bg-ink-800/40"
            }`}
          >
            <span className="text-sm text-bone">{row.point}</span>
            <span className="flex w-20 justify-center sm:w-28">
              {row.citadel ? (
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                  <Check className="h-4 w-4" />
                </span>
              ) : (
                <Dash />
              )}
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

function Dash() {
  return <span className="text-bone-faint">—</span>;
}
