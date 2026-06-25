import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Enquire",
    text: "Reach out via WhatsApp or the waiting-list form. Tell us about your home, your experience and what you're looking for.",
  },
  {
    n: "02",
    title: "Consultation",
    text: "We'll have a relaxed conversation to ensure the right match — temperament, sex and timing — and answer every question.",
  },
  {
    n: "03",
    title: "Reserve",
    text: "A deposit secures your place. We keep you updated with photos and milestones as your puppy grows.",
  },
  {
    n: "04",
    title: "Welcome home",
    text: "Collect your fully documented puppy with a settling-in pack — and lifetime support from the Citadel team.",
  },
];

export function Journey() {
  return (
    <section className="border-y border-white/5 bg-ink-800/30 py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="The Journey"
          title="A considered, personal process — start to finish."
          description="Bringing home a Citadel K9s puppy is a relationship, not a transaction. Here is what to expect."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 0.1}
              className="relative flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-gold">{s.n}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
