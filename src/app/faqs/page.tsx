import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about mini-grids, how they are designed and financed, and how they benefit rural electrification in Nigeria.",
};

const FAQS = [
  {
    q: "What is a MiniGrid?",
    a: "A MiniGrid is a localized power system serving a small community or an area not connected to the main electrical grid, often using renewable energy sources like solar, wind, or hydro.",
  },
  {
    q: "What are the key steps in MiniGrid design?",
    a: "Define geographic scope, assess commercial viability of a community based on predetermined criteria for a minigrid, assess available resources, size the system, select the configuration, and design the distribution system.",
  },
  {
    q: "What are the phases of a MiniGrid project lifecycle?",
    a: "The phases include community consultation and system planning & design, construction, operation & maintenance, and end use of electricity for residential and productive users.",
  },
  {
    q: "What are the technical components of a MiniGrid?",
    a: "Basic components are grouped into Production, Distribution, and End-User systems, including energy storage like lithium-ion batteries, distribution lines, and metering systems.",
  },
  {
    q: "How do MiniGrids benefit rural electrification?",
    a: "MiniGrids can provide reliable, affordable electricity in remote areas, promote productive use of energy (PUE), and reduce carbon emissions by leveraging renewable resources.",
  },
  {
    q: "What challenges are associated with MiniGrid implementation?",
    a: "Challenges include lack of sustainable maintenance, insufficient primary energy resources, high upfront costs, regulatory issues, and cultural or economic factors affecting adoption.",
  },
  {
    q: "How does financing work for MiniGrid projects?",
    a: "Financing can involve grants, subsidies, public-private partnerships, or private investment. The financial structure often includes considerations for high initial costs and long-term sustainability.",
  },
  {
    q: "What types of MiniGrid models exist?",
    a: "Models include utility, private, community, and public-private partnership models.",
  },
  {
    q: "How is the performance of MiniGrids monitored?",
    a: "Performance monitoring involves tracking energy generation, system health, consumer usage and consumer revenue collections, often through online real-time remote monitoring systems and/or on-site checks.",
  },
  {
    q: "Can MiniGrids be integrated with the national grid?",
    a: "Yes, MiniGrids can be designed with the flexibility to integrate with the national grid when it extends to their area, often requiring technical upgrades to match grid standards.",
  },
];

export default function FAQs() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20 space-y-4">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-border bg-white p-6 open:border-brand transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text">
              {f.q}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="shrink-0 text-brand transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
