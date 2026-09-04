import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Electrify MicroGrid's portfolio of solar mini-grid sites across Jigawa, Cross River, Katsina, Ondo, Plateau, Kogi, and Kano states, bringing clean electricity to rural Nigerian communities.",
};

export default function Projects() {
  return (
    <>
      <PageHero
        breadcrumb="Our Portfolio"
        title="Deliver renewable micro grids that transform lives and support local economies."
        subtitle="Our projects focus on delivering reliable, renewable, and resilient energy systems that transform lives, support local economies, and protect the environment. Explore our diverse portfolio to see how we are making a difference."
        image="/uploads/2024/10/Image-7.png"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <p className="text-center text-text-secondary mb-10">
          {PROJECTS.length} mini-grid sites across seven states — Jigawa,
          Cross River, Katsina, Ondo, Plateau, Kogi and Kano.
        </p>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-32 sm:h-36 w-full bg-surface overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-navy leading-snug">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <JoinCta />
    </>
  );
}
