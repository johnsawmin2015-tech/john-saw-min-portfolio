import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { StackList, StatusTag } from "@/components/projects/ProjectMeta";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectFeature({
  project,
  flip = false,
  headingLevel = "h3",
}: {
  project: Project;
  flip?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const flagship = project.tier === "flagship";
  const Heading = headingLevel;

  return (
    <article className="group py-3 sm:py-5">
      <Container>
        <div className="work-card overflow-hidden">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            aria-label={`View ${project.title} case study`}
            className="block overflow-hidden rounded-[inherit] rounded-b-none"
          >
            <div
              aria-hidden="true"
              className={cn(
                "overflow-hidden",
                flagship ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/3] sm:aspect-[16/7]",
              )}
            >
              <div className="h-full transition-transform duration-[var(--duration-slow)] ease-[var(--ease-standard)] group-hover:scale-[1.018]">
                <ProjectVisual variant={project.visual} label={project.title} />
              </div>
            </div>
          </Link>

          <div className="grid gap-9 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="type-metadata text-champagne">{project.index}</span>
                <span className="type-metadata text-graphite">{project.category}</span>
              </div>
              <Heading className="mt-5 text-4xl leading-[0.9] font-extrabold tracking-[-0.06em] text-balance uppercase sm:text-6xl">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="transition-colors hover:text-champagne"
                >
                  {project.title}
                </Link>
              </Heading>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-graphite text-pretty">
                {project.summary}
              </p>
            </div>

            <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
              <div className="border-t border-border pt-5">
                <p className="type-metadata text-graphite">Core challenge</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground">{project.challenge}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                <StatusTag status={project.status} />
                <span className="type-metadata text-graphite">{project.year}</span>
              </div>
              <div className="mt-3">
                <StackList stack={project.stack} />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="inline-flex min-h-11 items-center gap-3 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-champagne"
                >
                  {project.caseStudy.length > 3 ? "Read case study" : "Project detail"}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-metadata inline-flex min-h-11 items-center text-graphite transition-colors hover:text-foreground"
                  >
                    {link.label}&nbsp;&#8599;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
