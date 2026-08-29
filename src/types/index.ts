export type ProjectStatus = "COMPLETED" | "ACTIVE DEVELOPMENT" | "IN DEVELOPMENT" | "CONCEPT";

export type ProjectTier = "flagship" | "selected" | "experimental";

export type ProjectVisualKey =
  "decision" | "records" | "commerce" | "finance" | "attendance" | "security";

export interface CaseStudySection {
  readonly heading: string;
  readonly body?: readonly string[];
  readonly points?: readonly string[];
}

export interface ArchitectureStep {
  readonly title: string;
  readonly detail: string;
}

export interface ProjectArchitecture {
  readonly label: string;
  readonly summary: string;
  readonly steps: readonly [ArchitectureStep, ArchitectureStep, ArchitectureStep, ArchitectureStep];
  readonly caveat?: string;
}

export type CapabilityStage = "implemented" | "in-progress" | "planned";

export interface ProjectCapability {
  readonly label: string;
  readonly stage: CapabilityStage;
}

export type ProjectLinkKind = "live" | "source";

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly kind: ProjectLinkKind;
}

export interface Project {
  readonly slug: string;
  readonly index: string;
  readonly title: string;
  readonly category: string;
  readonly summary: string;
  readonly year: string;
  readonly status: ProjectStatus;
  readonly tier: ProjectTier;
  readonly visual: ProjectVisualKey;
  readonly challenge: string;
  readonly stack: readonly string[];
  readonly capabilities: readonly ProjectCapability[];
  readonly architecture: ProjectArchitecture;
  readonly caseStudy: readonly CaseStudySection[];
  readonly links?: readonly ProjectLink[];
}

export interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export interface ProcessStage {
  readonly index: string;
  readonly title: string;
  readonly body: string;
}
