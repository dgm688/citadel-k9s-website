import Link from "next/link";
import type { Puppy } from "@/lib/types";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "@/components/ui/Icons";

const statusTone = {
  Available: "available",
  Reserved: "reserved",
  Sold: "sold",
} as const;

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  return (
    <Link
      href={`/available-puppies/${puppy.slug}`}
      className="group block panel overflow-hidden transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative">
        <ImageFrame
          media={puppy.hero}
          aspect="aspect-[4/5]"
          rounded="rounded-none"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <Badge tone={statusTone[puppy.status]}>{puppy.status}</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-light">{puppy.name}</h3>
          <span className="text-xs uppercase tracking-wide2 text-bone-faint">
            {puppy.sex}
          </span>
        </div>
        {puppy.litter && (
          <p className="text-xs uppercase tracking-wide2 text-gold/80">
            {puppy.litter}
          </p>
        )}
        <p className="line-clamp-2 text-sm text-bone-muted">
          {puppy.temperament}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View puppy <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
