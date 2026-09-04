import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FaqPreview from "@/components/FaqPreview";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Electrify MicroGrid in Victoria Island, Lagos, to learn more about our solar mini-grid projects or explore partnership and investment opportunities.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="We Would Love To Hear From You"
        subtitle="Whether you're interested in our projects, have questions, or want to collaborate, reach out to us."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">Address</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Plot 1610, Adeola Hopewell Street,
            <br />
            Victoria Island, Lagos.
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Email</h2>
          <p className="text-text-secondary mb-6">
            <a href="mailto:Info@electrifymicrogrid.ng" className="hover:text-brand">
              Info@electrifymicrogrid.ng
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">
            Phone Number
          </h2>
          <p className="text-text-secondary">
            <a href="tel:+23401-4545361" className="hover:text-brand">
              +234 01-4545361
            </a>
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out our contact form with accurate information.
          </p>
          <ContactForm />
        </div>
      </section>

      <div className="bg-surface border-y border-border">
        <FaqPreview />
      </div>
    </>
  );
}
