import type { ProjectArchitecture as ProjectArchitectureModel } from "@/types";

export function ProjectArchitecture({
  architecture,
  projectTitle,
  id,
}: {
  architecture: ProjectArchitectureModel;
  projectTitle: string;
  id?: string;
}) {
  const headingId = id ?? `architecture-${toId(projectTitle)}`;

  return (
    <figure aria-labelledby={headingId}>
      <figcaption className="grid gap-6 md:grid-cols-12 md:gap-10">
        <p className="type-metadata text-graphite md:col-span-3">Source-traced architecture</p>
        <div className="md:col-span-9">
          <h2
            id={headingId}
            tabIndex={-1}
            className="scroll-mt-28 text-2xl font-semibold tracking-[-0.025em] text-balance sm:text-3xl"
          >
            {architecture.label}
          </h2>
          <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-graphite text-pretty">
            {architecture.summary}
          </p>
        </div>
      </figcaption>

      <ol className="mt-10 border-y border-border md:grid md:grid-cols-4">
        {architecture.steps.map((step, index) => (
          <li
            key={step.title}
            className="relative grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border py-6 first:border-t-0 md:block md:border-t-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
          >
            <span className="type-metadata text-champagne" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{step.detail}</p>
            </div>
            {index < architecture.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-2 z-10 hidden h-4 w-4 -translate-y-1/2 place-items-center bg-background text-xs text-champagne md:grid"
              >
                &#8594;
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      {architecture.caveat ? (
        <p className="mt-6 max-w-3xl border-l-2 border-champagne pl-4 text-sm leading-relaxed text-graphite">
          <span className="font-medium text-foreground">Current boundary: </span>
          {architecture.caveat}
        </p>
      ) : null}
    </figure>
  );
}

function toId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
