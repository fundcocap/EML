import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions governing your use of Electrify MicroGrid's website and services.",
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-text-secondary leading-relaxed mb-4">{children}</p>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-navy mt-8 mb-3">{children}</h2>;
}

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle="Please read these terms and conditions carefully before using Our Service."
      />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
        <H2>Interpretation and Definitions</H2>
        <P>
          For the purposes of these Terms and Conditions, &ldquo;the
          Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or
          &ldquo;Our&rdquo; refers to Electrify MicroGrid, Plot 1610, Adeola
          Hopewell Street, Victoria Island, Lagos. &ldquo;Service&rdquo;
          refers to the Website, accessible from electrifymicrogrid.ng.
        </P>

        <H2>Acknowledgment</H2>
        <P>
          These are the Terms and Conditions governing the use of this
          Service and the agreement that operates between You and the
          Company. Your access to and use of the Service is conditioned on
          Your acceptance of and compliance with these Terms and
          Conditions, which apply to all visitors, users and others who
          access or use the Service.
        </P>
        <P>
          By accessing or using the Service You agree to be bound by these
          Terms and Conditions. If You disagree with any part of these
          Terms and Conditions then You may not access the Service. You
          represent that you are over the age of 18.
        </P>

        <H2>Links to Other Websites</H2>
        <P>
          Our Service may contain links to third-party websites or services
          that are not owned or controlled by the Company. The Company has
          no control over, and assumes no responsibility for, the content,
          privacy policies, or practices of any third-party websites or
          services.
        </P>

        <H2>Termination</H2>
        <P>
          We may terminate or suspend Your access immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if You breach these Terms and Conditions.
        </P>

        <H2>Limitation of Liability</H2>
        <P>
          Notwithstanding any damages that You might incur, the entire
          liability of the Company and any of its suppliers under any
          provision of this Terms and Your exclusive remedy for all of the
          foregoing shall be limited to the amount actually paid by You
          through the Service or 100 USD if You haven&rsquo;t purchased
          anything through the Service.
        </P>

        <H2>&ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer</H2>
        <P>
          The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS
          AVAILABLE&rdquo; and with all faults and defects without warranty
          of any kind, to the maximum extent permitted under applicable
          law.
        </P>

        <H2>Governing Law</H2>
        <P>
          The laws of Nigeria, excluding its conflicts of law rules, shall
          govern these Terms and Your use of the Service.
        </P>

        <H2>Disputes Resolution</H2>
        <P>
          If You have any concern or dispute about the Service, You agree
          to first try to resolve the dispute informally by contacting the
          Company.
        </P>

        <H2>Severability and Waiver</H2>
        <P>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to
          accomplish the objectives of such provision to the greatest
          extent possible under applicable law, and the remaining
          provisions will continue in full force and effect.
        </P>

        <H2>Changes to These Terms and Conditions</H2>
        <P>
          We reserve the right, at Our sole discretion, to modify or
          replace these Terms at any time. If a revision is material We
          will make reasonable efforts to provide at least 30 days&rsquo;
          notice prior to any new terms taking effect.
        </P>

        <H2>Contact Us</H2>
        <P>
          If you have any questions about these Terms and Conditions, You
          can contact us by email at{" "}
          <a href="mailto:Info@electrifymicrogrid.ng" className="text-brand">
            Info@electrifymicrogrid.ng
          </a>
        </P>
      </section>
    </>
  );
}
