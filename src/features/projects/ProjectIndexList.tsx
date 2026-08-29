import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProjectFeature } from "@/features/projects/ProjectFeature";
import { projects, projectTiers } from "@/content/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | (typeof projectTiers)[number]["key"];

const filters: readonly { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  ...projectTiers.map((tier) => ({ key: tier.key as Filter, label: tier.label })),
];

export function ProjectIndexList() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.tier === filter)),
    [filter],
  );

  return (
    <>
      <Container>
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2 rounded-2xl bg-secondary p-2"
        >
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              aria-pressed={filter === item.key}
              onClick={() => setFilter(item.key)}
              className={cn(
                "type-metadata min-h-11 rounded-xl px-4 transition-colors duration-[var(--duration-fast)]",
                filter === item.key
                  ? "bg-background text-foreground"
                  : "text-graphite hover:bg-background/60 hover:text-foreground",
              )}
            >
              <span
                aria-hidden="true"
                className={filter === item.key ? "text-champagne" : "opacity-0"}
              >
                &#9679;&nbsp;
              </span>
              {item.label}
            </button>
          ))}
          <p className="type-metadata ml-auto self-center px-4 text-graphite" aria-live="polite">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </Container>

      <div className="mt-5">
        {visible.map((project, i) => (
          <ProjectFeature
            key={project.slug}
            project={project}
            flip={i % 2 === 1}
            headingLevel="h2"
          />
        ))}
      </div>
    </>
  );
}
