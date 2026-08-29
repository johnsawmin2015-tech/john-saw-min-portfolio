import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("type-metadata text-graphite", className)}>
      <span className="text-champagne">&#9679;&nbsp;</span>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Tag className="mt-6 text-4xl leading-[0.9] font-extrabold tracking-[-0.055em] text-balance uppercase sm:text-6xl lg:text-7xl">
        {title}
      </Tag>
      {lead ? <p className="text-lead mt-6 text-graphite text-pretty">{lead}</p> : null}
    </div>
  );
}
