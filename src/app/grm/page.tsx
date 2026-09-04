import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GrmForm from "@/components/GrmForm";
import FaqPreview from "@/components/FaqPreview";

export const metadata: Metadata = {
  title: "Grievance Redress Mechanism",
  description:
    "Submit complaints, concerns, or feedback about Electrify MicroGrid's services, staff, or community projects through our Grievance Redress Mechanism.",
};

export default function GRM() {
  return (
    <>
      <PageHero
        breadcrumb="Resources"
        title="Grievance Redress Mechanism"
        subtitle="This form allows you to submit complaints, concerns, or feedback about our services, staff, or community projects. All complaints will be treated fairly and confidentially."
      />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-navy mb-3">
            Note
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>All complaints will be acknowledged within 3 working days.</li>
            <li>Resolution will be provided within 15 working days where possible.</li>
            <li>Closure will be provided within 30 working days.</li>
            <li>
              If not satisfied, the case can be escalated to management or
              an independent review committee.
            </li>
          </ul>
        </div>

        <GrmForm />
      </section>

      <div className="bg-surface border-y border-border">
        <FaqPreview />
      </div>
    </>
  );
}
