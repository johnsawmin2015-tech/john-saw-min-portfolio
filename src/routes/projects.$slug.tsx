import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { MetaRow, StackList, StatusTag } from "@/components/projects/ProjectMeta";
import { ActionLink } from "@/components/ui/action";
import { absoluteSiteUrl } from "@/config/public";
import { getProject, projects } from "@/content/projects";
import type { CapabilityStage, Project } from "@/types";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — John Saw Min" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — John Saw Min`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteSiteUrl(`/projects/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteSiteUrl(`/projects/${params.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            keywords: project.stack.join(", "),
            author: { "@type": "Person", name: "John Saw Min" },
            url: absoluteSiteUrl(`/projects/${params.slug}`),
            ...(project.links?.length ? { sameAs: project.links.map((link) => link.href) } : {}),
            ...(project.links?.find((link) => link.kind === "source")
              ? {
                  codeRepository: project.links.find((link) => link.kind === "source")?.href,
                }
              : {}),
          }),
        },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="py-28">
      <Container>
        <p className="type-metadata text-graphite">404 / Project</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          That project doesn&rsquo;t exist.
        </h1>
        <p className="text-lead mt-5 max-w-xl text-graphite">
          The link may be out of date. The full catalogue is one step away.
        </p>
        <div className="mt-9">
          <ActionLink to="/projects">All projects</ActionLink>
        </div>
      </Container>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const order = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(order + 1) % projects.length] ?? projects[0]!;

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Link
            to="/projects"
            className="type-metadata inline-flex min-h-11 items-center text-graphite hover:text-foreground"
          >
            &#8592;&nbsp; All projects
          </Link>
          <div className="mt-10 flex items-baseline gap-4">
            <span className="type-metadata text-champagne">{project.index}</span>
            <span className="type-metadata text-graphite">{project.category}</span>
          </div>
          <h1 className="text-poster mt-6 max-w-[12ch]">{project.title}</h1>
          <p className="text-lead mt-7 max-w-2xl text-graphite text-pretty">{project.summary}</p>
          <div className="mt-10 grid gap-3 rounded-2xl bg-secondary p-6 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-8">
            <p className="type-metadata text-graphite">Engineering challenge</p>
            <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
              {project.challenge}
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9]">
            <ProjectVisual variant={project.visual} label={project.title} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <ProjectArchitecture
            id="system-architecture"
            architecture={project.architecture}
            projectTitle={project.title}
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <aside className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <dl>
                  <MetaRow label="Year" value={project.year} />
                  <div className="flex flex-col gap-2 border-t border-border py-4">
                    <dt className="type-metadata text-graphite">Status</dt>
                    <dd>
                      <StatusTag status={project.status} />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 border-t border-border py-4">
                    <dt className="type-metadata text-graphite">Stack</dt>
                    <dd>
                      <StackList stack={project.stack} />
                    </dd>
                  </div>
                  {project.links?.length ? (
                    <div className="flex flex-col gap-2 border-t border-border py-4">
                      <dt className="type-metadata text-graphite">Verified links</dt>
                      <dd>
                        <ul className="space-y-1 text-sm">
                          {project.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-8 items-center border-b border-border text-foreground transition-colors hover:border-champagne hover:text-graphite"
                              >
                                {link.label}&nbsp;&#8599;
                              </a>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-2 border-y border-border py-4">
                    <dt className="type-metadata text-graphite">Project scope</dt>
                    <dd>
                      <ul className="space-y-2.5 text-sm text-foreground">
                        {project.capabilities.map((item) => (
                          <li key={item.label} className="flex flex-col gap-1">
                            <span>{item.label}</span>
                            <span className="type-metadata text-graphite">
                              {capabilityStageLabel(item.stage)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                <nav aria-label="On this case study" className="mt-8 hidden md:block">
                  <p className="type-metadata text-graphite">On this page</p>
                  <ol className="mt-4 space-y-2.5 border-l border-border pl-4 text-sm text-graphite">
                    <li>
                      <a
                        href="#system-architecture"
                        onClick={() => focusCaseStudyTarget("system-architecture")}
                        className="inline-flex min-h-8 items-center hover:text-foreground"
                      >
                        System architecture
                      </a>
                    </li>
                    {project.caseStudy.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${sectionId(section.heading)}`}
                          onClick={() => focusCaseStudyTarget(sectionId(section.heading))}
                          className="inline-flex min-h-8 items-center hover:text-foreground"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="md:col-span-8">
              {project.caseStudy.map((section, i) => (
                <section
                  key={section.heading}
                  className="border-t border-border py-10 first:border-t-0 first:pt-0"
                >
                  <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                    <span className="type-metadata pt-1 text-champagne" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2
                        id={sectionId(section.heading)}
                        tabIndex={-1}
                        className="scroll-mt-28 text-2xl font-semibold tracking-[-0.025em] text-balance sm:text-3xl"
                      >
                        {section.heading}
                      </h2>
                      {section.body?.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 32)}
                          className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-foreground text-pretty"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.points ? (
                        <ul className="mt-5 max-w-2xl space-y-3">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="grid grid-cols-[1rem_1fr] text-[0.9375rem] leading-relaxed text-foreground"
                            >
                              <span aria-hidden="true" className="text-champagne">
                                &#8212;
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-[1.75rem] bg-secondary p-6 sm:p-10">
            <p className="type-metadata text-graphite">Next project</p>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group mt-5 flex min-h-11 flex-wrap items-baseline gap-x-5 gap-y-2"
            >
              <span className="type-metadata text-champagne">{next.index}</span>
              <span className="text-3xl font-extrabold tracking-[-0.045em] uppercase transition-colors group-hover:text-champagne sm:text-5xl">
                {next.title}
              </span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function sectionId(heading: string): string {
  return `section-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function capabilityStageLabel(stage: CapabilityStage): string {
  return {
    implemented: "Implemented",
    "in-progress": "In progress",
    planned: "Planned",
  }[stage];
}

function focusCaseStudyTarget(id: string): void {
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.focus({ preventScroll: true });
  });
}
