import Image from "next/image";

/** Branded route-transition loading state. */
export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-ink">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/brand/icon-gold.svg"
          alt=""
          width={72}
          height={72}
          priority
          className="animate-pulse"
        />
        <span className="text-[0.6rem] uppercase tracking-luxe text-bone-faint">
          Citadel K9s
        </span>
      </div>
    </div>
  );
}
