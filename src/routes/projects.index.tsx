import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProjectIndexList } from "@/features/projects/ProjectIndexList";
import { absoluteSiteUrl } from "@/config/public";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — John Saw Min" },
      {
        name: "description",
        content:
          "Six source-backed engineering case studies: ThriveAI, Student Records Portal, Morrow, FinanceFlow, UniTrack, and SANTINEL.",
      },
      { property: "og:title", content: "Projects — John Saw Min" },
      {
        property: "og:description",
        content: "Systems, case studies, and the engineering decisions behind them.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteSiteUrl("/projects") },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/projects") }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="pt-20 pb-20 sm:pt-28 sm:pb-28">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Selected work"
          title="Six systems, traced from source."
          lead="Each project is grounded in its existing codebase: what works, how it is structured, which checks pass, and where the prototype boundary still sits. Planned work is never described as finished."
        />
      </Container>
      <div className="mt-16">
        <ProjectIndexList />
      </div>
    </section>
  );
}
