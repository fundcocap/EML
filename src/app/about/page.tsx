import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";
import DfboReveal from "@/components/DfboReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Electrify MicroGrid Limited (EML) is a renewable energy asset management company delivering solar mini-grids across Nigeria using a Design, Finance, Build, and Operate model.",
};

const DFBO = [
  {
    title: "Design",
    text: "Leveraging our expertise in engineering and system integration to develop efficient, sustainable energy solutions tailored to the needs of rural communities.",
  },
  {
    title: "Finance",
    text: "Structuring financial models and securing funding through partnerships with developmental financial institutions, government bodies, and investors.",
  },
  {
    title: "Build",
    text: "Managing the construction of mini-grid systems, ensuring they are built to high standards with a focus on integrating productive use of energy.",
  },
  {
    title: "Operate",
    text: "Overseeing the maintenance and optimization of energy systems to guarantee long-term reliability and efficiency.",
  },
];

const STRATEGY = [
  {
    number: "01",
    title: "Integrated Solutions",
    text: "We offer end-to-end services, simplifying the complexity of project management for stakeholders, providing a single point of accountability.",
  },
  {
    number: "02",
    title: "Agro-Productive Use Emphasis",
    text: "Our projects prioritize the use of electricity for agricultural productivity, recognizing the pivotal role of energy in enhancing food security and rural economy growth.",
  },
  {
    number: "03",
    title: "Scalability and Impact",
    text: "Committed to expanding our reach across Nigeria's six geopolitical zones, we aim to energize 200 sites annually, targeting 1,000 sites and 1.5 million new connections over five years.",
  },
];

const BOARD = [
  { name: "Engr. Olumide Fatoki", role: "Executive Board Chairman", image: "/uploads/2025/01/d9173a25-d4ea-47f3-abcc-f66504412976.jpg" },
  { name: "Abiodun Oni", role: "Executive Director", image: "/uploads/2026/06/Abiodun-Oni.jpg" },
  { name: "Funmi Abraham", role: "Executive Director", image: "/uploads/2026/06/WhatsApp-Image-2025-01-27-at-11.21.18-AM-600x897.jpeg" },
];

const MANAGEMENT_TEAM = [
  { name: "Jojo Ngene", role: "Chief Executive Officer", image: "/uploads/2025/01/headshot_1_enhanced.jpg" },
  { name: "Godswill Nwajagu", role: "Civil and Structural Engineer", image: "/uploads/2026/06/IMG-20260628-WA0005.jpg" },
  { name: "Omodele Tolutope", role: "Business Development Manager", image: "/uploads/2026/06/IMG-20260627-WA0018.jpg" },
  { name: "Vivian Umeaku", role: "Finance Manager", image: "/uploads/2025/01/headshot_2_enhanced.jpg" },
];

const CORE_VALUES = [
  {
    number: "01",
    title: "Sustainability",
    text: "We focus on eco-friendly solutions that reduce carbon emissions and conserve resources for a greener future.",
  },
  {
    number: "02",
    title: "Community-Centered",
    text: "We collaborate with communities, involving them in every project phase to ensure lasting impact.",
  },
  {
    number: "03",
    title: "Integrity",
    text: "We maintain transparency, accountability, and trust in all partnerships and interactions.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Electrify MicroGrid Limited (EML) is a pioneering renewable energy asset management company dedicated to transforming rural electrification in Nigeria."
        image="/uploads/2024/10/aerial-shot-solar-panels-cascade-field-florida-2-1.png"
      />

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16 text-center">
        <p className="text-text-secondary leading-relaxed mb-4">
          Established under the umbrella of FundCo Capital Managers Limited,
          EML operates with a clear mission to accelerate access to
          sustainable energy through the development of solar mini-grids
          integrated with agro-productive use of energy (PuE).
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 mt-10">
          Our Mission
        </h2>
        <p className="text-text-secondary leading-relaxed">
          We aim to bridge the gap between energy access and agricultural
          productivity in rural Nigeria by providing innovative, scalable,
          and financially viable energy solutions — leveraging solar energy
          to empower communities, enhance agricultural practices, and
          stimulate economic growth, contributing to SDG 7 (Affordable and
          Clean Energy) and SDG 13 (Climate Action).
        </p>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Vision
              </h3>
              <p className="text-navy font-medium">
                Leading the way in renewable microgrid solutions for a
                sustainable world.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Focus
              </h3>
              <p className="text-navy font-medium">
                Empowering communities and building a sustainable future
                with microgrid technology.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
            Our Impact
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary text-center leading-relaxed">
            We believe that energy access is a catalyst for economic growth
            and social development. By combining advanced technology and
            sustainable practices, we empower people and drive long-term
            positive impact, fostering economic growth and improved quality
            of life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">
          Our Core Values
        </h2>
        <p className="mx-auto max-w-2xl text-text-secondary text-center mb-12">
          We are committed to providing eco-friendly solutions, building
          trust with our partners, involving communities in our projects
          and delivering the highest quality microgrid systems.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {CORE_VALUES.map((v) => (
            <div key={v.number}>
              <div className="text-4xl font-extrabold text-brand mb-3">
                {v.number}
              </div>
              <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">
            What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary text-center mb-12">
            EML employs a Design, Finance, Build, and Operate (DFBO) model
            through strategic joint ventures with off-grid renewable energy
            development companies.
          </p>
          <DfboReveal steps={DFBO} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12 text-center">
          Our Strategy
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {STRATEGY.map((s) => (
            <div key={s.number}>
              <div className="text-4xl font-extrabold text-accent mb-3">
                {s.number}
              </div>
              <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Members of the Board
          </h2>
          <p className="mx-auto max-w-3xl text-white/75 text-center mb-12">
            The Board of Directors of Electrify Microgrid comprises
            accomplished professionals with extensive leadership experience
            across engineering, finance, investment, law, and the renewable
            energy sector.
          </p>
          <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
            {BOARD.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden mb-4 ring-4 ring-white/10">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-accent">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
          Meet Our Management Team
        </h2>
        <p className="mx-auto max-w-2xl text-text-secondary text-center mb-12">
          Our leadership has a proven track record in securing funding,
          project management, and integrating ESG principles into our
          operations.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MANAGEMENT_TEAM.map((m) => (
            <div key={m.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden mb-4 ring-4 ring-surface shadow-sm">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-text">{m.name}</h3>
              <p className="text-sm text-brand">{m.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Meet the Full Team
          </Link>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Partnerships &amp; Funding
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We collaborate with a diverse set of partners including
            Developers, equipment manufacturers, consultants, and financial
            institutions. Our funding model is innovative, employing a
            conveyor-belt approach to finance, which recycles capital
            through various stages of project development, construction,
            and operation, ensuring sustainability and scalability.
          </p>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
