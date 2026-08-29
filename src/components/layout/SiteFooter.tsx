import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";

export function SiteFooter() {
  const footerLinks = [
    ...(site.links.email ? [{ label: "Email", href: site.links.email }] : []),
    ...(site.links.github ? [{ label: "GitHub", href: site.links.github }] : []),
    ...(site.links.linkedin ? [{ label: "LinkedIn", href: site.links.linkedin }] : []),
    ...(site.links.resume ? [{ label: "Resume", href: site.links.resume }] : []),
  ];

  return (
    <footer className="pb-3 sm:pb-6">
      <Container>
        <div className="overflow-hidden rounded-[1.75rem] bg-foreground px-5 py-10 text-background sm:px-10 sm:py-14 lg:px-14">
          <p className="type-metadata text-background/60">Open to the right opportunity</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl leading-[0.88] font-extrabold tracking-[-0.06em] text-balance uppercase sm:text-6xl lg:text-7xl">
                Let&rsquo;s make complex things feel clear.
              </h2>
              <Link
                to="/contact"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-champagne hover:text-white"
              >
                Start a conversation <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              {footerLinks.length > 0 ? (
                <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              ) : null}
              <p className="type-metadata mt-5 text-background/45">&copy; 2026 {site.name}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
