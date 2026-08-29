import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { publicConfig } from "@/config/public";

const staticPaths = ["/", "/about", "/projects", "/engineering", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = publicConfig.origin ?? new URL(request.url).origin;
        const paths = [...staticPaths, ...projects.map((p) => `/projects/${p.slug}`)];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
