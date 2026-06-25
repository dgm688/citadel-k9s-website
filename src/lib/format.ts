/** Format an ISO date as e.g. "28 May 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/** Approximate age in weeks from a date of birth, for puppies. */
export function ageInWeeks(dobIso: string, now = new Date()): number {
  const dob = new Date(dobIso);
  const ms = now.getTime() - dob.getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24 * 7)));
}
