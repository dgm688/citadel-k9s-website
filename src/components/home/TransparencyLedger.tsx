import { TRANSPARENCY_LEDGER } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Check } from "@/components/ui/Icons";

/**
 * Documentation ledger. Each item renders either as a published
 * document link (when `href` is set in site.ts) or as an honest
 * "how to verify today" note. Designed so health records, DNA
 * results and certificates slot in with a one-line data change.
 */
export function TransparencyLedger() {
  return (
    <section className="border-y border-white/5 bg-ink-800/30 py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Transparency"
          title="What we document — and how you can verify it."
          description="We publish only what we can prove. As our documentation library grows, it appears here; until then, every item tells you exactly how to verify it in person."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {TRANSPARENCY_LEDGER.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 2) * 0.08}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-900 p-6"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Check className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-medium text-bone">{item.title}</h3>
                <p className="text-sm leading-relaxed text-bone-muted">
                  {item.note}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-gold hover:underline"
                  >
                    View document <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
