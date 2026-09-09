export type Partner = {
  name: string;
  role: string;
  text: string;
  /** Path under /public, or null for a text-only badge fallback. */
  logo: string | null;
  /** Use the light-background logo variant on white/light chips (default true). */
  logoOnLight?: boolean;
};

export const PARTNERS: Partner[] = [
  {
    name: "DREEF",
    role: "Project Preparation Facility",
    text: "The Distributed Renewable Energy Enhancement Facility Incorporated (DREEF) is a project-preparation facility established by InfraCredit with the World Bank Group, backed also by the Clean Energy Fund, KfW, and Convergence, with Deloitte serving as Technical Assistance Facility Manager.",
    logo: "/images/partners/dreef-logo-color.svg",
  },
  {
    name: "Clean Energy Fund",
    role: "Concessional Finance Partner",
    text: "The Clean Energy Local Currency Fund (CEF), managed by FundCo Capital Managers, is a Climate Bonds Certified, GCR/Agusto BBB-rated climate-infrastructure fund that provides concessional local-currency capital to blend down the cost of finance for clean energy projects.",
    logo: "/images/partners/clean-energy-fund-logo.png",
  },
  {
    name: "InfraCredit",
    role: "Credit Enhancement Partner",
    text: "InfraCredit provides local-currency guarantees and credit enhancement that unlock long-term, low-cost debt financing for infrastructure projects, including distributed renewable energy.",
    logo: "/images/partners/infracredit.svg",
  },
  {
    name: "UBA",
    role: "Banking Partner",
    text: "United Bank for Africa (UBA) provides banking and transaction services supporting the delivery of microgrid projects.",
    logo: "/images/partners/uba.svg",
  },
  {
    name: "Stanbic IBTC",
    role: "Banking Partner",
    text: "Stanbic IBTC provides banking, treasury, and financing services in support of clean energy infrastructure delivery.",
    // Note: the scraped "Stanbic.svg" asset actually contains FundCo Capital
    // Managers' artwork (a mislabeled legacy upload), not a genuine Stanbic
    // logo, so this uses a text-only badge instead of misrepresenting a mark.
    logo: null,
  },
  {
    name: "KPMG",
    role: "Professional Services Partner",
    text: "KPMG provides advisory, audit, and professional services support across the project lifecycle.",
    logo: "/images/partners/kpmg.svg",
  },
];
