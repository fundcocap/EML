import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: `${project.excerpt} A solar mini-grid project delivered by Electrify MicroGrid as part of its portfolio of rural electrification sites in Nigeria.`,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        breadcrumb="Our Projects"
        title={project.title}
        subtitle={project.excerpt}
        image={project.image}
      />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16 text-center">
        <p className="text-text-secondary leading-relaxed mb-8">
          {project.excerpt} This mini-grid site is part of Electrify
          MicroGrid&rsquo;s portfolio of solar-powered rural electrification
          projects, designed to bring reliable, renewable, and resilient
          energy to underserved communities across Nigeria.
        </p>
        <Link
          href="/projects"
          className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
        >
          &larr; Back to All Projects
        </Link>
      </section>

      <JoinCta />
    </>
  );
}
