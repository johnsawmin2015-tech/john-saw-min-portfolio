import { publicConfig } from "@/config/public";

export const site = {
  name: "John Saw Min",
  role: "Software Engineer",
  secondaryRole: "Computer Science Student",
  statement:
    "I design and engineer reliable web systems where the rules are clear, the evidence is visible, and the experience feels considered.",
  description:
    "Portfolio of John Saw Min — software engineer and computer science student building reliable, well-architected web systems.",
  location: "Available for internships and collaboration",
  primaryStack: ["TypeScript", "React", "JavaScript"],
  origin: publicConfig.origin,
  contactEmail: publicConfig.contactEmail,
  links: publicConfig.links,
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Engineering", to: "/engineering" },
    { label: "Contact", to: "/contact" },
  ],
} as const;

export const aboutStatement =
  "I build reliable and thoughtfully designed software systems, combining engineering discipline with product-focused thinking.";

export const aboutColumns = [
  {
    index: "01",
    title: "Engineering",
    items: ["Architecture", "Maintainability", "Performance", "Security"],
  },
  {
    index: "02",
    title: "Product",
    items: ["UX", "Usability", "Accessibility", "Interaction"],
  },
  {
    index: "03",
    title: "Growth",
    items: ["Algorithms", "System Design", "Cloud", "Distributed Systems"],
  },
] as const;

export const portfolioEvidence = [
  {
    signal: "06 / Systems",
    detail:
      "Six case studies traced directly to existing source folders, with prototype boundaries left visible.",
  },
  {
    signal: "03 / Flagship studies",
    detail:
      "ThriveAI, Student Records Portal, and Morrow receive the deepest source-backed treatment.",
  },
  {
    signal: "02 / Public repositories",
    detail:
      "Only source URLs verified from the local checkouts are published; one also has a live demo.",
  },
  {
    signal: "Verified / Boundaries",
    detail:
      "Tests and builds are reported precisely, including an open build blocker and missing suites.",
  },
] as const;
