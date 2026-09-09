import Image from "next/image";
import Link from "next/link";
import JoinCta from "@/components/JoinCta";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import OperationsMap from "@/components/OperationsMap";
import LogoMarquee from "@/components/LogoMarquee";
import { PROJECTS } from "@/lib/projects";
import { PARTNERS } from "@/lib/partners";

const SERVICES = [
  {
    title: "Micro & Mini Grid Development",
    text: "Developing customized microgrid solutions tailored to specific energy needs, from rural communities to off-grid businesses.",
  },
  {
    title: "Project Finance",
    text: "End-to-end financial solutions, offering investment strategies and financing plans that make sustainable energy development achievable.",
  },
  {
    title: "Operations & Maintenance",
    text: "Ongoing operations and maintenance services, ensuring microgrid systems run optimally with minimal downtime.",
  },
];

const WHY_US = [
  {
    title: "Expertise in Renewable Energy",
    text: "Our team comprises industry experts with years of experience in renewable energy and microgrid solutions.",
  },
  {
    title: "Access to Finance",
    text: "We connect projects to developmental financial institutions, government bodies, and investors for sustainable funding.",
  },
  {
    title: "Commitment to Sustainability",
    text: "Every project we deliver is designed to reduce carbon emissions and conserve resources for a greener future.",
  },
  {
    title: "Community Impact",
    text: "We involve communities in every project phase, ensuring lasting, locally-driven impact.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-navy to-dark text-white">
        <Image
          src="/uploads/2024/10/HERO-1-1024x479.png"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/50 via-navy/45 to-dark/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Reliable, Renewable, and Resilient Energy Solutions
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Empowering Communities with Sustainable Microgrids
          </h1>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-accent hover:text-dark hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          About Us
        </h2>
        <p className="mx-auto max-w-2xl text-text-secondary leading-relaxed mb-6">
          Electrify MicroGrid is dedicated to transforming energy access for
          communities. Our innovative micro-grid solutions offer
          sustainable, reliable, and cost-effective energy systems tailored
          to the unique needs of under-served and off-grid areas.
        </p>
        <Link
          href="/about"
          className="inline-block rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand transition-colors"
        >
          Learn More
        </Link>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary">
              Support the development of clean energy infrastructure that
              benefits both the environment and local communities.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-brand mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/service"
              className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {WHY_US.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-brand mb-2">
                {w.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {w.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Projects
            </h2>
            <p className="mx-auto max-w-2xl text-white/75">
              Support the development of clean energy infrastructure that
              benefits both the environment and local communities.
            </p>
          </div>
          <ProjectsCarousel projects={PROJECTS} />
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-dark transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <OperationsMap />

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-10">
            Backed By
          </h2>
        </div>
        <LogoMarquee partners={PARTNERS} />
        <div className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20 text-center">
          <Link
            href="/partners"
            className="inline-block mt-4 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Meet Our Partners
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Frequently Asked Questions
        </h2>
        <div className="text-left mx-auto max-w-2xl mt-10 space-y-6">
          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-text mb-2">
              What is a MiniGrid?
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              A MiniGrid is a localized power system serving a small
              community or an area not connected to the main electrical
              grid, often using renewable energy sources like solar, wind,
              or hydro.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-text mb-2">
              What are the key steps in MiniGrid design?
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Define geographic scope, assess commercial viability of a
              community based on predetermined criteria, assess available
              resources, size the system, select the configuration, and
              design the distribution system.
            </p>
          </div>
        </div>
        <Link
          href="/faqs"
          className="inline-block mt-8 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
        >
          View More
        </Link>
      </section>

      <JoinCta />
    </>
  );
}
