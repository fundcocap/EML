import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";
import { PARTNERS } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The coalition behind Electrify MicroGrid — DREEF, the Clean Energy Fund, InfraCredit, UBA, Stanbic IBTC, and KPMG.",
};

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="Backed by a Coalition of Partners"
        subtitle="Electrify MicroGrid works alongside project-preparation facilities, concessional financiers, credit enhancers, and professional services firms to deliver reliable, bankable microgrid infrastructure across Nigeria."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-6">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={120}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-wide text-navy text-center">
                      {p.name}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-navy">{p.name}</h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                {p.role}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {p.text}
            </p>
          </div>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
