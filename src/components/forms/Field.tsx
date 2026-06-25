import type { ReactNode } from "react";

const inputBase =
  "w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-gold/50";

export function Field({
  label,
  htmlFor,
  required,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs uppercase tracking-wide2 text-bone-muted"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
      {hint && <span className="text-xs text-bone-faint">{hint}</span>}
    </div>
  );
}

export { inputBase };
