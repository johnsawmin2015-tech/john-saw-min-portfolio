import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <Container className="pt-3">
        <div className="flex items-start justify-between gap-3">
          <div className="pointer-events-auto overflow-hidden rounded-xl bg-secondary shadow-[0_1px_0_oklch(0_0_0/6%)]">
            <div className="flex h-13 items-center gap-1 px-2 sm:h-14">
              <Link
                to="/"
                className="flex min-h-11 shrink-0 flex-col justify-center rounded-lg px-2.5 leading-none text-foreground transition-colors hover:bg-background"
              >
                <span className="type-metadata text-[0.55rem] text-graphite">
                  Software engineer
                </span>
                <span className="mt-1 text-sm font-extrabold tracking-[-0.045em] uppercase">
                  {site.name}
                </span>
              </Link>

              <nav aria-label="Primary" className="hidden items-center px-2 md:flex">
                {site.nav.slice(1).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex min-h-11 items-center rounded-lg px-3 text-[0.8125rem] font-semibold tracking-[-0.015em] text-graphite transition-colors hover:bg-background hover:text-foreground data-[status=active]:bg-background data-[status=active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid h-11 w-11 place-items-center rounded-lg transition-colors hover:bg-background md:hidden"
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-5 bg-foreground transition-transform duration-[var(--duration-standard)]",
                      open ? "top-1.5 rotate-45" : "top-0.5",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-5 bg-foreground transition-transform duration-[var(--duration-standard)]",
                      open ? "top-1.5 -rotate-45" : "top-2.5",
                    )}
                  />
                </span>
              </button>
            </div>

            {open ? (
              <div
                id="mobile-navigation"
                ref={panelRef}
                className="border-t border-border px-2 pb-2 md:hidden"
              >
                <nav aria-label="Mobile" className="flex flex-col pt-1">
                  {site.nav.slice(1).map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-semibold text-graphite data-[status=active]:bg-background data-[status=active]:text-foreground"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-champagne">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            ) : null}
          </div>

          <Link
            to="/projects"
            className="pointer-events-auto relative inline-flex min-h-13 shrink-0 items-center rounded-xl bg-secondary px-4 text-[0.8125rem] font-semibold tracking-[-0.015em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:min-h-14 sm:px-5"
          >
            Latest work
            <span
              aria-hidden="true"
              className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-champagne"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
}
