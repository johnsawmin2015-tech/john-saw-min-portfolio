import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex min-h-12 items-center gap-3 rounded-full px-6 py-3 text-[0.8125rem] font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,transform] duration-[var(--duration-standard)] ease-[var(--ease-standard)] active:translate-y-px";

const variants = {
  solid: "bg-foreground text-background hover:bg-champagne hover:text-white",
  outline:
    "border border-border bg-secondary text-foreground hover:border-foreground hover:bg-background",
  quiet: "px-0 py-1 text-foreground hover:text-graphite",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  variant = "solid",
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "children"> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
      <Arrow />
    </Link>
  );
}

export function ActionAnchor({
  variant = "outline",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  const external = props.target === "_blank";
  return (
    <a
      className={cn(base, variants[variant], className)}
      rel={external ? "noopener noreferrer" : props.rel}
      {...props}
    >
      {children}
      <Arrow />
    </a>
  );
}

function Arrow(): ReactNode {
  return (
    <span
      aria-hidden="true"
      className="translate-x-0 transition-transform duration-[var(--duration-standard)] ease-[var(--ease-standard)] group-hover:translate-x-1"
    >
      &#8594;
    </span>
  );
}
