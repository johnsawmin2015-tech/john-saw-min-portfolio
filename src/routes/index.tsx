import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ActionAnchor, ActionLink } from "@/components/ui/action";
import { absoluteSiteUrl } from "@/config/public";
import { ProjectFeature } from "@/features/projects/ProjectFeature";
import { projects } from "@/content/projects";
import { aboutColumns, portfolioEvidence, site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { processStages } from "@/content/engineering";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "John Saw Min — Software Engineer & CS Student" },
      {
        name: "description",
        content:
          "John Saw Min builds reliable, well-architected software. Portfolio with six source-backed engineering projects, case studies, and the reasoning behind each decision.",
      },
      { property: "og:title", content: "John Saw Min — Software Engineer" },
      {
        property: "og:description",
        content: "Engineering software with precision, scalability, and purpose.",
      },
      { property: "og:url", content: absoluteSiteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/") }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.filter((project) => project.tier === "flagship");

  return (
    <>
      <section className="pt-5 pb-20 sm:pt-8 sm:pb-28">
        <Container>
          <div className="hero-stage relative flex min-h-[43rem] overflow-hidden rounded-[1.75rem] px-5 py-6 text-white sm:min-h-[48rem] sm:px-9 sm:py-8 lg:min-h-[calc(100svh-7rem)] lg:px-12 lg:py-10">
            <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
            <div className="flex w-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <p className="type-metadata flex items-center gap-2 text-white/70">
                  <span className="h-2 w-2 rounded-full bg-champagne" aria-hidden="true" />
                  {site.location}
                </p>
                <p className="type-metadata hidden text-right text-white/45 sm:block">
                  Portfolio / 2026
                </p>
              </div>

              <div className="my-auto py-16">
                <p className="type-metadata mb-6 text-white/55">Software with purpose</p>
                <h1 className="text-poster max-w-[11ch] text-balance">
                  Systems that
                  <br />
                  feel <span className="text-champagne">clear.</span>
                </h1>
              </div>

              <div className="grid gap-7 border-t border-white/20 pt-6 md:grid-cols-12 md:items-end">
                <div className="md:col-span-4">
                  <p className="text-sm font-semibold">{site.role}</p>
                  <p className="mt-1 text-sm text-white/55">{site.secondaryRole}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="max-w-lg text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
                    {site.statement}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:col-span-3 md:justify-end">
                  <ActionLink to="/projects" className="bg-white text-black hover:text-white">
                    Explore work
                  </ActionLink>
                  {site.links.github ? (
                    <ActionAnchor
                      href={site.links.github}
                      target="_blank"
                      className="border-white/30 bg-transparent text-white hover:border-white hover:bg-transparent"
                    >
                      GitHub
                    </ActionAnchor>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden pb-20 sm:pb-28" aria-labelledby="intro-title">
        <Container>
          <p className="mx-auto max-w-4xl text-center font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-graphite text-balance sm:text-5xl">
            I turn complicated requirements into software that feels understandable, dependable, and
            considered.
          </p>
          <h2 id="intro-title" className="sr-only">
            Portfolio introduction
          </h2>
        </Container>
        <div className="mt-16 overflow-hidden border-y border-border py-5 sm:mt-24">
          <div className="ticker-track flex items-center whitespace-nowrap" aria-hidden="true">
            {[0, 1].map((copy) => (
              <p
                key={copy}
                className="pr-10 text-2xl font-extrabold tracking-[-0.045em] uppercase sm:text-4xl"
              >
                Reliable systems <span className="px-5 text-champagne">&#9679;</span> Product
                thinking
                <span className="px-5 text-champagne">&#9679;</span> Honest boundaries
                <span className="px-5 text-champagne">&#9679;</span> Accessible interfaces
                <span className="px-5 text-champagne">&#9679;</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="scroll-mt-24 pb-20 sm:pb-28" aria-labelledby="profile-title">
        <Container>
          <div className="grid gap-8 rounded-[1.75rem] bg-secondary p-4 sm:p-7 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <div className="relative lg:col-span-5 lg:self-start">
              <div
                aria-hidden="true"
                className="absolute -right-2 -bottom-2 h-full w-full rounded-[1.75rem] bg-champagne/55 sm:-right-3 sm:-bottom-3"
              />
              <figure className="relative rounded-[1.75rem] border border-black/10 bg-background p-3 shadow-[0_24px_60px_rgba(20,20,18,0.12)] sm:p-4">
                <div className="flex items-center justify-between px-1 pb-3">
                  <p className="type-metadata text-graphite">Portrait / 2026</p>
                  <span className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-graphite uppercase">
                    <span className="h-2 w-2 rounded-full bg-champagne" aria-hidden="true" />
                    Mandalay
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-[1.25rem] bg-secondary">
                  <img
                    src="/john-saw-min-profile-photo.jpeg"
                    alt="John Saw Min at the University of Computer Studies Mandalay welcome event"
                    width="640"
                    height="640"
                    loading="lazy"
                    className="aspect-square w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/30"
                  />
                </div>
                <figcaption className="flex items-end justify-between gap-4 px-1 pt-4 pb-1">
                  <div>
                    <p className="text-sm font-extrabold tracking-[-0.02em] uppercase">
                      John Saw Min
                    </p>
                    <p className="mt-1 text-xs text-graphite">Software Engineer &amp; CS Student</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-[0.65rem] font-extrabold tracking-[0.12em]"
                  >
                    JSM
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col p-2 sm:p-3 lg:col-span-7 lg:py-4">
              <p className="type-metadata text-graphite">
                <span className="text-champagne">&#9679;&nbsp;</span>Profile / {site.name}
              </p>
              <h2
                id="profile-title"
                className="mt-6 max-w-[12ch] text-4xl leading-[0.9] font-extrabold tracking-[-0.055em] uppercase sm:text-6xl"
              >
                Engineer the logic. Design the experience.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-graphite text-pretty sm:text-lg">
                I&rsquo;m a computer science student focused on building systems people have to rely
                on&mdash;from finance and student records to commerce and operational workflows. I
                care about clear rules, testable logic, and interfaces that explain what just
                happened.
              </p>
              <p className="type-metadata mt-7 text-graphite">{site.primaryStack.join(" · ")}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                <ActionLink to="/about">More about me</ActionLink>
                {site.links.github ? (
                  <ActionAnchor href={site.links.github} target="_blank">
                    GitHub profile
                  </ActionAnchor>
                ) : null}
                {site.links.email && site.contactEmail ? (
                  <ActionAnchor href={site.links.email} variant="quiet">
                    {site.contactEmail}
                  </ActionAnchor>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="portfolio-evidence-title">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2
              id="portfolio-evidence-title"
              className="text-3xl font-extrabold tracking-[-0.05em] uppercase sm:text-5xl"
            >
              The proof, up front.
            </h2>
            <p className="type-metadata hidden text-graphite sm:block">Source-backed portfolio</p>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioEvidence.map((item) => (
              <div key={item.signal} className="rounded-2xl bg-secondary p-6 sm:min-h-52">
                <dt className="type-metadata text-champagne">{item.signal}</dt>
                <dd className="mt-12 text-sm leading-relaxed text-graphite">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <p className="type-metadata text-graphite">01 / Point of view</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="text-poster max-w-[8ch] lg:col-span-8">Build trust into the system.</h2>
            <p className="text-lead max-w-xl text-graphite lg:col-span-4">
              Good software is more than a successful render. It keeps rules explicit, evidence
              traceable, and the person using it oriented.
            </p>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {aboutColumns.map((column) => (
              <article key={column.index} className="rounded-2xl bg-secondary p-6 sm:p-8">
                <p className="type-metadata text-champagne">{column.index}</p>
                <h3 className="mt-10 text-2xl font-extrabold tracking-[-0.04em] uppercase">
                  {column.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {column.items.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="type-metadata text-graphite">02 / Selected work</p>
              <h2 className="mt-6 text-5xl leading-[0.86] font-extrabold tracking-[-0.06em] uppercase sm:text-7xl lg:text-8xl">
                Built to work.
              </h2>
            </div>
            <ActionLink to="/projects" variant="outline">
              All six projects
            </ActionLink>
          </div>
        </Container>
        <div className="mt-10 sm:mt-16">
          {featured.map((project) => (
            <ProjectFeature key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="type-metadata text-graphite">03 / Capability</p>
              <h2 className="mt-6 text-4xl leading-[0.9] font-extrabold tracking-[-0.055em] uppercase sm:text-6xl">
                Tools serve the outcome.
              </h2>
            </div>
            <dl className="lg:col-span-7">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-3 border-t border-border py-5 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="type-metadata text-graphite">{group.label}</dt>
                  <dd className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <p className="type-metadata text-graphite">04 / Process</p>
          <h2 className="mt-6 text-4xl leading-[0.9] font-extrabold tracking-[-0.055em] uppercase sm:text-6xl">
            Five moves. One clear path.
          </h2>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {processStages.map((stage) => (
              <li key={stage.index} className="flex min-h-72 flex-col rounded-2xl bg-secondary p-6">
                <span className="type-metadata text-champagne">{stage.index}</span>
                <h3 className="mt-12 text-xl font-extrabold tracking-[-0.035em] uppercase">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{stage.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
