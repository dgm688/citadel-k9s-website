import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const currentYear = new Date().getFullYear();

const stats = [
  {
    value: currentYear - SITE.foundingYear,
    suffix: "+",
    label: "Years dedicated to the breed",
  },
  { value: 100, suffix: "%", label: "Health-screened breeding lines" },
  { value: 100, suffix: "%", label: "Puppies sold fully documented" },
  { value: 24, suffix: "/7", label: "Personal breeder support" },
];

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-ink-900 py-16 lg:py-20">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="font-display text-5xl font-light text-gold-gradient lg:text-6xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </span>
            <span className="max-w-[12rem] text-xs uppercase tracking-wide2 text-bone-muted">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
