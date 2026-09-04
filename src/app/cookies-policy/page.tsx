import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Read how Electrify MicroGrid uses session and persistent cookies on electrifymicrogrid.ng, and how to manage your cookie preferences.",
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-text-secondary leading-relaxed mb-4">{children}</p>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-navy mt-8 mb-3">{children}</h2>;
}

export default function CookiesPolicy() {
  return (
    <>
      <PageHero title="Cookies Policy" />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
        <P>
          This Cookies Policy explains what Cookies are and how We use
          them. You should read this policy so You can understand what
          type of cookies We use, or the information We collect using
          Cookies and how that information is used.
        </P>
        <P>
          We do not store sensitive personal information, such as mailing
          addresses, account passwords, etc. in the Cookies We use.
        </P>

        <H2>Definitions</H2>
        <P>
          <strong>Company</strong> (&ldquo;the Company&rdquo;,
          &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers
          to Electrify MicroGrid, Plot 1610, Adeola Hopewell Street,
          Victoria Island, Lagos. <strong>Website</strong> refers to
          Electrify MicroGrid, accessible from electrifymicrogrid.ng
        </P>

        <H2>The Use of the Cookies</H2>
        <P>
          Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo;
          Cookies. Persistent Cookies remain on your device when You go
          offline, while Session Cookies are deleted as soon as You close
          your web browser. We use both session and persistent Cookies for
          the purposes set out below:
        </P>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
          <li>
            <strong>Necessary / Essential Cookies</strong> (Session) —
            essential to provide You with services available through the
            Website and to enable You to use some of its features.
          </li>
          <li>
            <strong>Functionality Cookies</strong> (Persistent) — allow us
            to remember choices You make when You use the Website, to
            provide You with a more personal experience.
          </li>
        </ul>

        <H2>Your Choices Regarding Cookies</H2>
        <P>
          If You prefer to avoid the use of Cookies on the Website, You
          must disable the use of Cookies in your browser and then delete
          the Cookies saved in your browser associated with this website.
          If You do not accept Our Cookies, You may experience some
          inconvenience and some features may not function properly.
        </P>

        <H2>Contact Us</H2>
        <P>
          If you have any questions about this Cookies Policy, You can
          contact us by email at{" "}
          <a href="mailto:Info@electrifymicrogrid.ng" className="text-brand">
            Info@electrifymicrogrid.ng
          </a>
        </P>
      </section>
    </>
  );
}
