import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "neutral" | "available" | "reserved" | "sold";
}) {
  const tones: Record<string, string> = {
    gold: "border-gold/40 text-gold bg-gold/5",
    neutral: "border-white/15 text-bone-muted bg-white/5",
    available: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
    reserved: "border-amber-400/40 text-amber-300 bg-amber-400/10",
    sold: "border-white/15 text-bone-faint bg-white/5",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide2 ${tones[tone]}`}
    >
      {(tone === "available" || tone === "reserved") && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            tone === "available" ? "bg-emerald-400" : "bg-amber-400"
          } ${tone === "available" ? "animate-pulse" : ""}`}
        />
      )}
      {children}
    </span>
  );
}
