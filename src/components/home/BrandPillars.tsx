import { BRAND_PILLARS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Heart, Sparkle } from "@/components/ui/Icons";

const icons = [Sparkle, ShieldCheck, Heart];

export function BrandPillars() {
  return (
    <section className="container-site py-24 lg:py-32">
      <div className="grid gap-8 md:grid-cols-3">
        {BRAND_PILLARS.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <Reveal
              key={pillar.title}
              delay={i * 0.1}
              className="group relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-ink-800/40 p-8 transition-colors duration-500 hover:border-gold/30"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-light">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">
                {pillar.description}
              </p>
              <span className="absolute right-8 top-8 font-display text-5xl text-white/5 transition-colors group-hover:text-gold/10">
                0{i + 1}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
