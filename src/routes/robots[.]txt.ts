import { createFileRoute } from "@tanstack/react-router";
import { publicConfig } from "@/config/public";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = publicConfig.origin ?? new URL(request.url).origin;
        const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap.xml`, ""].join(
          "\n",
        );

        return new Response(body, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
