import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { absoluteSiteUrl } from "../config/public";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const socialImage = absoluteSiteUrl("/og-image.png");
const sameAs = [site.links.github, site.links.linkedin].filter(
  (url): url is string => url !== undefined,
);
const netlifyHeadHydrationGuard = `(()=>{const marker=document.head.querySelector('meta[name="netlify-deploy"][content*="utm_campaign=ai-legible"]');if(!marker)return;for(const node of [...document.head.childNodes]){if((node.nodeType===Node.COMMENT_NODE&&node.textContent?.includes("This site is hosted on Netlify"))||(node.nodeType===Node.TEXT_NODE&&!node.textContent?.trim())||(node instanceof HTMLMetaElement&&(node.name==="hosting-provider"||node.name==="netlify-deploy")))node.remove()}})()`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "John Saw Min — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of John Saw Min, software engineer and computer science student building reliable, well-architected systems.",
      },
      { name: "author", content: "John Saw Min" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "John Saw Min" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "John Saw Min — Software Engineer" },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: "John Saw Min — Software Engineer" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        children: netlifyHeadHydrationGuard,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "John Saw Min",
          jobTitle: "Software Engineer",
          description:
            "Software engineer and computer science student focused on reliable, well-architected systems.",
          knowsAbout: ["Software Engineering", "React", "TypeScript", "Node.js", "System Design"],
          ...(site.origin ? { url: site.origin } : {}),
          ...(sameAs.length > 0 ? { sameAs } : {}),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <RouteA11yManager />
      <a
        href="#main"
        className="type-metadata sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

function RouteA11yManager() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const firstRender = useRef(true);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    let announcementTimer: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("main")?.focus({ preventScroll: true });
      announcementTimer = window.setTimeout(() => setAnnouncement(document.title), 0);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (announcementTimer !== undefined) window.clearTimeout(announcementTimer);
    };
  }, [pathname]);

  return (
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {announcement}
    </span>
  );
}
