import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the management and regional team behind Electrify MicroGrid, seasoned professionals with extensive experience in energy, environmental management, and project development.",
};

const MANAGEMENT = [
  {
    name: "Jojo Ngene",
    role: "Chief Executive Officer",
    image: "/uploads/2025/01/headshot_1_enhanced.jpg",
    bio: null,
  },
  {
    name: "Godswill Nwajagu",
    role: "Civil and Structural Engineer",
    image: "/uploads/2026/06/IMG-20260628-WA0005.jpg",
    bio: "Results-driven Civil and Structural Engineer with extensive experience in the design and construction supervision of bridges, motorways, renewable energy facilities, buildings, and other civil engineering structures. Combines technical expertise with leadership and training ability to deliver safe, compliant, and cost-effective projects from concept to completion.",
  },
  {
    name: "Omodele Tolutope",
    role: "Business Development Manager",
    image: "/uploads/2026/06/IMG-20260627-WA0018.jpg",
    bio: null,
  },
  {
    name: "Vivian Umeaku",
    role: "Finance Manager",
    image: "/uploads/2025/01/headshot_2_enhanced.jpg",
    bio: null,
  },
];

const REGIONAL_TEAM = [
  {
    name: "Popoola Taiwo Israel",
    role: "Community Engagement Officer, Southern Region",
    image: "/uploads/2025/01/Popoola.jpg",
  },
  {
    name: "Abdulateef Adekunle Anjorin",
    role: "Community Engagement Officer",
    image: "/uploads/2025/01/Abdulateef.jpg",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="Our Team"
        subtitle="Seasoned professionals with extensive experience in energy, environmental management, business and project development."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
          Management Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MANAGEMENT.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 w-full bg-surface overflow-hidden">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-text">{m.name}</h3>
                <p className="text-sm text-brand font-medium mb-2">{m.role}</p>
                {m.bio && (
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {m.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
            Regional Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-xl mx-auto">
            {REGIONAL_TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 w-full bg-white overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-text">{m.name}</h3>
                  <p className="text-sm text-brand font-medium">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
