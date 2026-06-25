import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { NAV } from "@/lib/site";

export default function NotFound() {
  const quickLinks = NAV.filter((n) =>
    ["/available-puppies", "/our-dogs", "/gallery", "/contact"].includes(n.href),
  );

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-ink" />
        <div className="absolute left-1/2 top-1/4 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="container-site flex flex-col items-center gap-8 py-32 text-center">
        <span className="eyebrow">Error 404</span>
        <p className="font-display text-[28vw] leading-none text-white/5 sm:text-[18rem]">
          404
        </p>
        <div className="-mt-[18vw] flex flex-col items-center gap-6 sm:-mt-48">
          <h1 className="text-balance text-4xl font-light sm:text-5xl">
            This trail leads nowhere.
          </h1>
          <p className="max-w-md text-bone-muted">
            The page you&apos;re looking for has wandered off. Let&apos;s get you
            back to the pack.
          </p>
          <ButtonLink href="/" variant="primary">
            Return home
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-bone-muted hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
