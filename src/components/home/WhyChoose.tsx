import { TRUST_COMMITMENTS } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Heart,
  Sparkle,
  Paw,
  Check,
  WhatsApp,
} from "@/components/ui/Icons";

const icons = [Heart, Check, Paw, WhatsApp, Sparkle, ShieldCheck];

/**
 * "Why families trust Citadel K9s" — replaces the former statistics
 * band. Every card is a verifiable commitment, not a claimed
 * certification; no invented numbers, no pre-hydration zeros.
 */
export function WhyChoose() {
  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        eyebrow="Why Families Trust Citadel K9s"
        title={
          <>
            We'd rather prove it
            <br className="hidden sm:block" /> than promise it.
          </>
        }
        description="No breeder's website should ask for blind trust. Everything below is something you can see, verify, or hold in your hands — and we invite you to."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_COMMITMENTS.map((r, i) => {
          const Icon = icons[i % icons.length];
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
              <p className="text-sm leading-relaxed text-bone-muted">
                {r.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
