import type { ProcessStage } from "@/types";

export const processStages: readonly ProcessStage[] = [
  {
    index: "01",
    title: "Understand",
    body: "Define the problem before touching an editor. Who uses the system, what outcome do they need, and which constraints are non-negotiable? Requirements written as sentences, not tickets.",
  },
  {
    index: "02",
    title: "Architect",
    body: "Model responsibilities, data flow, and boundaries. Decide where state lives, what the persistence shape is, and which parts must stay replaceable. Sketch the data model before the interface.",
  },
  {
    index: "03",
    title: "Implement",
    body: "Build in small, reviewable increments. Types describe the domain, components stay focused, and shared behaviour is extracted only after the second real use — never in anticipation.",
  },
  {
    index: "04",
    title: "Validate",
    body: "Verify behaviour with unit tests around the logic that would silently produce wrong numbers, and check the interface with a keyboard, a screen reader, and a slow connection.",
  },
  {
    index: "05",
    title: "Iterate",
    body: "Measure, refactor, remove. Most improvement comes from deleting accidental complexity rather than adding features.",
  },
];

export const engineeringNotes = [
  {
    heading: "Correctness before convenience",
    body: "Financial and attendance calculations belong in central domain functions, persisted browser records pass through validation boundaries, and model-written financial guidance must stay constrained to deterministic evidence.",
  },
  {
    heading: "Boundaries proportional to the problem",
    body: "A student registration system does not need event sourcing. Architecture should be the smallest structure that keeps change cheap — layered when it earns its keep, flat when it does not.",
  },
  {
    heading: "Accessibility as a build requirement",
    body: "Semantic structure, visible focus, reachable targets, and reduced-motion support are part of the definition of done, not a remediation pass at the end.",
  },
  {
    heading: "Evidence over assertion",
    body: "Every project page is traced to an existing source folder. Verified repositories, passing checks, missing test suites, static fixtures, and open build defects are identified instead of being converted into unsupported product claims.",
  },
] as const;
