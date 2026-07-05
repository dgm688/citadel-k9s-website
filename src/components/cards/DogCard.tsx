import Link from "next/link";
import type { Dog } from "@/lib/types";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "@/components/ui/Icons";

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link
      href={`/our-dogs/${dog.slug}`}
      className="group block panel overflow-hidden transition-transform duration-500 hover:-translate-y-1"
    >
      <ImageFrame
        media={dog.hero}
        aspect="aspect-[4/5]"
        rounded="rounded-none"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="gold">{dog.role}</Badge>
          {dog.color && (
            <span className="text-xs uppercase tracking-wide2 text-bone-faint">
              {dog.color}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-light">{dog.name}</h3>
        {dog.titles && (
          <p className="text-xs uppercase tracking-wide2 text-gold/80">
            {dog.titles}
          </p>
        )}
        <p className="line-clamp-2 text-sm text-bone-muted">{dog.description}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View profile <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
