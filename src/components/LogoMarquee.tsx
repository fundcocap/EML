import Image from "next/image";
import type { Partner } from "@/lib/partners";

export default function LogoMarquee({ partners }: { partners: Partner[] }) {
  const track = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-6 sm:gap-8 py-2">
        {track.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex h-16 sm:h-20 w-40 sm:w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-white px-6 py-4 shadow-sm"
            aria-label={p.name}
          >
            {p.logo ? (
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={64}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-sm font-bold uppercase tracking-wide text-navy text-center">
                {p.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
