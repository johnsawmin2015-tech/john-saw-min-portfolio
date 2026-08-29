import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ActionLink } from "@/components/ui/action";
import { absoluteSiteUrl } from "@/config/public";
import { aboutColumns, aboutStatement, site } from "@/content/site";
import { skillGroups } from "@/content/skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — John Saw Min" },
      {
        name: "description",
        content:
          "John Saw Min is a software engineer and computer science student focused on architecture, maintainability, accessibility, and product thinking.",
      },
      { property: "og:title", content: "About — John Saw Min" },
      {
        property: "og:description",
        content: "Engineering discipline combined with product-focused thinking.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: absoluteSiteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <Container>
          <SectionHeading as="h1" eyebrow="About" title={aboutStatement} />
          <div className="mt-14 grid gap-10 rounded-[1.75rem] bg-secondary p-6 sm:p-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="type-metadata text-graphite">Background</p>
            </div>
            <div className="space-y-5 text-[0.9375rem] leading-relaxed text-graphite md:col-span-7">
              <p>
                I am a computer science student who spends most of his time building the kind of
                systems that other people have to rely on: registration platforms, schedulers,
                record keeping, financial tracking. Systems where a wrong number is not a cosmetic
                bug.
              </p>
              <p>
                That has shaped how I work. I care about where a rule lives, whether a calculation
                can be tested in isolation, and whether the person using the interface can tell what
                the system just did. I would rather ship a smaller surface that is correct,
                accessible, and understandable than a larger one that only demonstrates well.
              </p>
              <p>
                I am currently deepening my work in algorithms, system design, and distributed
                systems, and I am open to internships and collaboration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <p className="type-metadata text-graphite">Focus</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {aboutColumns.map((column) => (
              <div key={column.index} className="min-h-64 rounded-2xl bg-secondary p-6 sm:p-8">
                <p className="type-metadata text-champagne">{column.index}</p>
                <h2 className="mt-12 text-2xl font-extrabold tracking-[-0.04em] uppercase">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-2 text-sm text-graphite">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="type-metadata text-graphite">Capability</p>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                Technology, described as what it lets me build.
              </h2>
            </div>
            <dl className="md:col-span-8">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-3 border-t border-border py-5 sm:grid-cols-[10rem_1fr]"
                >
                  <dt className="type-metadata text-graphite">{group.label}</dt>
                  <dd className="text-[0.9375rem] text-foreground">{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <ActionLink to="/projects">See the work</ActionLink>
            <ActionLink to="/contact" variant="outline">
              Get in touch
            </ActionLink>
          </div>
          <p className="sr-only">{site.location}</p>
        </Container>
      </section>
    </>
  );
}
