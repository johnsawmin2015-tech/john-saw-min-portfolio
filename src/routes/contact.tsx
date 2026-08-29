import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ActionAnchor } from "@/components/ui/action";
import { absoluteSiteUrl } from "@/config/public";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — John Saw Min" },
      {
        name: "description",
        content:
          "Get in touch with John Saw Min about collaboration, internships, or software engineering.",
      },
      { property: "og:title", content: "Contact — John Saw Min" },
      { property: "og:description", content: "Let's build something meaningful." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteSiteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteSiteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    ...(site.links.email && site.contactEmail
      ? [
          {
            label: "Email",
            href: site.links.email,
            value: site.contactEmail,
            note: "Direct enquiries and collaboration",
          },
        ]
      : []),
    ...(site.links.github
      ? [
          {
            label: "GitHub",
            href: site.links.github,
            value: displayUrl(site.links.github),
            note: "Source code and repositories",
          },
        ]
      : []),
    ...(site.links.linkedin
      ? [
          {
            label: "LinkedIn",
            href: site.links.linkedin,
            value: displayUrl(site.links.linkedin),
            note: "Professional profile",
          },
        ]
      : []),
  ];

  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <p className="type-metadata text-graphite">
          <span className="text-champagne">&#9679;&nbsp;</span>Contact
        </p>
        <h1 className="text-poster mt-7 max-w-[11ch]">Let&rsquo;s make something meaningful.</h1>
        <p className="text-lead mt-7 max-w-2xl text-graphite text-pretty">
          Whether you&rsquo;re interested in collaborating, discussing software engineering, or
          simply connecting, I&rsquo;d be glad to hear from you.
        </p>

        {channels.length > 0 ? (
          <dl className="mt-14 grid max-w-5xl gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <div key={channel.label} className="rounded-2xl bg-secondary p-6 sm:min-h-52">
                <dt className="type-metadata text-graphite">{channel.label}</dt>
                <dd className="mt-10">
                  <a
                    href={channel.href}
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.02em] transition-colors duration-[var(--duration-fast)] hover:text-champagne"
                  >
                    {channel.value}
                  </a>
                  <span className="type-metadata mt-2 block text-graphite">{channel.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p role="status" className="mt-14 max-w-2xl border-y border-border py-6 text-graphite">
            Public contact details are not configured yet. Add them through the documented public
            environment settings before deployment.
          </p>
        )}

        {site.links.email || site.links.resume ? (
          <div className="mt-12 flex flex-wrap gap-3">
            {site.links.email ? (
              <ActionAnchor href={site.links.email} variant="solid">
                Send an email
              </ActionAnchor>
            ) : null}
            {site.links.resume ? (
              <ActionAnchor href={site.links.resume}>Resume</ActionAnchor>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function displayUrl(value: string): string {
  const url = new URL(value);
  return `${url.hostname}${url.pathname}`.replace(/\/$/, "");
}
