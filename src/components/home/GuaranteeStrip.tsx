import { ShieldCheck, Check, Heart, Sparkle } from "@/components/ui/Icons";

const items = [
  { icon: ShieldCheck, label: "Health-screened lines" },
  { icon: Check, label: "Written guarantee" },
  { icon: Sparkle, label: "Fully documented" },
  { icon: Heart, label: "Lifetime support" },
];

/** Thin trust strip that sits directly beneath the hero. */
export function GuaranteeStrip() {
  return (
    <section
      aria-label="Our guarantees"
      className="border-y border-white/5 bg-ink-800/40"
    >
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 text-center"
            >
              <Icon className="h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm tracking-wide text-bone-muted">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
