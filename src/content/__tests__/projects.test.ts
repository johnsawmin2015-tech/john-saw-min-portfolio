import { describe, expect, it } from "vitest";
import { projects } from "../projects";

describe("project content", () => {
  it("contains the six source-backed projects", () => {
    expect(projects).toHaveLength(6);
    expect(projects.map((project) => project.title)).toEqual([
      "ThriveAI",
      "Student Records Portal",
      "Morrow",
      "FinanceFlow",
      "UniTrack",
      "SANTINEL",
    ]);
  });

  it("uses unique slugs and display indices", () => {
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
    expect(new Set(projects.map((project) => project.index)).size).toBe(projects.length);
  });

  it("uses unique case-study headings within each project", () => {
    for (const project of projects) {
      const headings = project.caseStudy.map((section) => section.heading);
      expect(new Set(headings).size, project.title).toBe(headings.length);
    }
  });

  it("labels unfinished capability states explicitly", () => {
    const unfinished = projects.flatMap((project) => project.capabilities);
    expect(unfinished).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ stage: "in-progress" }),
        expect.objectContaining({ stage: "planned" }),
      ]),
    );
  });

  it("publishes only well-formed HTTPS project links", () => {
    for (const project of projects) {
      for (const link of project.links ?? []) {
        expect(() => new URL(link.href), `${project.title}: ${link.href}`).not.toThrow();
        expect(link.href.startsWith("https://"), project.title).toBe(true);
      }
    }
  });

  it("keeps every architecture trace to four explicit boundaries", () => {
    for (const project of projects) {
      expect(project.architecture.steps, project.title).toHaveLength(4);
    }
  });
});
