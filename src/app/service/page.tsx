import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Electrify MicroGrid offers micro and mini-grid development, project finance, and operations and maintenance services to deliver reliable renewable energy to rural communities.",
};

const SERVICES = [
  {
    title: "Micro & Mini Grid Development",
    tag: "Tailored Energy Solutions",
    text: "Electrify MicroGrid specializes in designing and developing customized microgrid solutions that cater to unique energy needs, from rural communities to off-grid businesses. Our tailored approach ensures reliable, sustainable energy delivery aligned with local resources and demand.",
    points: [
      "Solutions customized to meet specific community and environmental needs.",
      "Reduced energy costs through affordable and efficient power, decreasing reliance on costly fuel alternatives.",
      "Easily expand microgrid systems as demand grows, supporting long-term community growth.",
    ],
  },
  {
    title: "Project Finance",
    tag: "Affordable Energy Financing",
    text: "We provide end-to-end financial solutions to support microgrid projects, offering investment strategies and financing plans that make sustainable energy development achievable for all communities.",
    points: [
      "Customized financial packages that suit a project's budget and scale.",
      "Connects communities to potential investors, ensuring sustainable funding.",
      "Implements financial strategies to lower risks associated with energy project investments.",
    ],
  },
  {
    title: "Operations & Maintenance",
    tag: "Expert Maintenance",
    text: "Our expert team provides ongoing operations and maintenance services, ensuring microgrid systems run optimally with minimal downtime, and guaranteeing longevity and high performance.",
    points: [
      "Minimizes system outages, ensuring communities experience continuous power.",
      "Regular maintenance increases the lifespan and efficiency of equipment.",
      "Reduces costly repairs by proactively managing potential issues.",
    ],
  },
];

export default function Service() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Energy Solutions for a Sustainable Tomorrow — from personalized grid solutions to financial support and 24/7 maintenance."
        image="/uploads/2024/10/renewable-energy-captured-by-solar-panels-clear-sky-2.png"
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 space-y-10">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-white p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {s.tag}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
              {String(i + 1).padStart(2, "0")}. {s.title}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              {s.text}
            </p>
            <ul className="space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
