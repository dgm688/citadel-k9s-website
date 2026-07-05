import { ShieldCheck, Check, Heart, WhatsApp } from "@/components/ui/Icons";

/**
 * Thin trust strip beneath the hero. Every item is a commitment a
 * visitor can verify — nothing here claims a certification.
 */
const items = [
  { icon: Heart, label: "Visit by appointment" },
  { icon: ShieldCheck, label: "Meet the parents" },
  { icon: Check, label: "Records with every puppy" },
  { icon: WhatsApp, label: "Direct line to the breeder" },
];

export function GuaranteeStrip() {
  return (
    <section
      aria-label="Our commitments"
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
