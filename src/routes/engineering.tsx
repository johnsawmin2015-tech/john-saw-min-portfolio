import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ActionLink } from "@/components/ui/action";
import { absoluteSiteUrl } from "@/config/public";
import { engineeringNotes, processStages } from "@/content/engineering";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering — John Saw Min" },
      {
        name: "description",
        content:
          "How John Saw Min builds software: understand, architect, implement, validate, iterate — with correctness, accessibility, and proportional architecture as constraints.",
      },
      { property: "og:title", content: "Engineering — John Saw Min" },
      { property: "og:description", content: "Process, principles, and quality gates." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteSiteUrl("/engineering") },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/engineering") }],
  }),
  component: EngineeringPage,
});

function EngineeringPage() {
  return (
    <>
      <section className="pt-20 pb-14 sm:pt-28">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Engineering"
            title="How I build software."
            lead="Five stages, applied consistently. The order matters more than the ceremony around it."
          />
        </Container>
      </section>

      <section>
        <Container>
          <ol>
            {processStages.map((stage) => (
              <li
                key={stage.index}
                className="mb-3 grid gap-4 rounded-2xl bg-secondary p-6 md:grid-cols-12 md:gap-10 md:p-8"
              >
                <span className="type-metadata text-champagne md:col-span-2">{stage.index}</span>
                <h2 className="text-xl font-extrabold tracking-[-0.035em] uppercase md:col-span-3">
                  {stage.title}
                </h2>
                <p className="text-[0.9375rem] leading-relaxed text-graphite md:col-span-7">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <p className="type-metadata text-graphite">Principles</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {engineeringNotes.map((note) => (
              <article key={note.heading} className="rounded-2xl bg-secondary p-6 sm:p-8">
                <h2 className="text-xl font-extrabold tracking-[-0.035em] uppercase">
                  {note.heading}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-graphite">{note.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <ActionLink to="/projects" variant="outline">
              See it applied
            </ActionLink>
          </div>
        </Container>
      </section>
    </>
  );
}
