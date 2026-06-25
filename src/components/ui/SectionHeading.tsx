import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="text-balance text-3xl font-light leading-[1.1] sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
