import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Electrify MicroGrid collects, uses, and protects your personal data when you use electrifymicrogrid.ng.",
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-text-secondary leading-relaxed mb-4">{children}</p>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-navy mt-8 mb-3">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-text mt-4 mb-2">{children}</h3>;
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
        <P>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use
          the Service and tells You about Your privacy rights and how the
          law protects You.
        </P>
        <P>
          We use Your Personal data to provide and improve the Service. By
          using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy.
        </P>

        <H2>Interpretation and Definitions</H2>
        <H3>Definitions</H3>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
          <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
          <li>
            <strong>Company</strong> (&ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers to
            Electrify MicroGrid, Plot 1610, Adeola Hopewell Street, Victoria Island, Lagos.
          </li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Website</strong> refers to Electrify MicroGrid, accessible from electrifymicrogrid.ng</li>
        </ul>

        <H2>Collecting and Using Your Personal Data</H2>
        <H3>Types of Data Collected</H3>
        <P>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information, including but not limited
          to: email address, first and last name, and phone number.
        </P>
        <P>
          Usage Data is collected automatically when using the Service,
          including IP address, browser type and version, the pages of our
          Service that You visit, time and date of Your visit, and other
          diagnostic data.
        </P>

        <H3>Tracking Technologies and Cookies</H3>
        <P>
          We use Cookies and similar tracking technologies to track activity
          on Our Service. We use both Session and Persistent Cookies for
          purposes including Necessary/Essential Cookies, Cookies Policy
          Notice Acceptance Cookies, and Functionality Cookies.
        </P>

        <H2>Use of Your Personal Data</H2>
        <P>The Company may use Personal Data to:</P>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
          <li>Provide and maintain our Service, including monitoring usage.</li>
          <li>Manage Your Account and registration.</li>
          <li>Contact You by email, phone, SMS or other electronic means.</li>
          <li>Provide news, offers and information about similar services.</li>
          <li>Manage Your requests to Us.</li>
          <li>Evaluate or conduct a merger, divestiture, or business transfer.</li>
        </ul>

        <H2>Retention and Transfer of Your Personal Data</H2>
        <P>
          The Company will retain Your Personal Data only for as long as
          necessary for the purposes set out in this Privacy Policy, and to
          comply with legal obligations. Your information may be
          transferred to and maintained on computers outside Your
          jurisdiction, where data protection laws may differ.
        </P>

        <H2>Delete Your Personal Data</H2>
        <P>
          You have the right to delete or request that We assist in
          deleting the Personal Data We have collected about You. You may
          contact Us to request access to, correct, or delete any personal
          information You have provided to Us.
        </P>

        <H2>Disclosure of Your Personal Data</H2>
        <P>
          The Company may disclose Your Personal Data in connection with a
          business transaction, if required by law, or in the good faith
          belief that such action is necessary to comply with a legal
          obligation or protect the rights and safety of the Company or
          others.
        </P>

        <H2>Security of Your Personal Data</H2>
        <P>
          The security of Your Personal Data is important to Us, but no
          method of transmission over the Internet or electronic storage is
          100% secure. While We strive to use commercially acceptable means
          to protect Your Personal Data, We cannot guarantee its absolute
          security.
        </P>

        <H2>Children&rsquo;s Privacy</H2>
        <P>
          Our Service does not address anyone under the age of 13. We do
          not knowingly collect personally identifiable information from
          anyone under the age of 13.
        </P>

        <H2>Changes to this Privacy Policy</H2>
        <P>
          We may update Our Privacy Policy from time to time. We will
          notify You of any changes by posting the new Privacy Policy on
          this page and updating the &ldquo;Last updated&rdquo; date.
        </P>

        <H2>Contact Us</H2>
        <P>
          If you have any questions about this Privacy Policy, You can
          contact us by email at{" "}
          <a href="mailto:Info@electrifymicrogrid.ng" className="text-brand">
            Info@electrifymicrogrid.ng
          </a>
        </P>
      </section>
    </>
  );
}
