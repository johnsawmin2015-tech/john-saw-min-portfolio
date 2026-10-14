# John Saw Min

Server-rendered portfolio for John Saw Min, a software engineer and computer science student. Case studies are typed content. Interaction is limited to navigation, a responsive menu, and project filtering.

**Live site:** [john-saw-min-portfolio.netlify.app](https://john-saw-min-portfolio.netlify.app)

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Introduction, selected work, capabilities, and process |
| `/about` | Background and focus |
| `/projects` | Filterable index of six case studies |
| `/projects/:slug` | Architecture, scope, and source-backed notes for one project |
| `/engineering` | Working process and engineering principles |
| `/contact` | Email, GitHub, and any other configured public links |
| `/sitemap.xml`, `/robots.txt` | Generated from the same route and project data |

There is no authentication, database, user-submitted data, or application API.

## Requirements

- Node.js 22.12 or newer, below 25
- npm 11

## Local development

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Values in `.env.local` are public site configuration. They are embedded in the client bundle and are not secrets. Invalid values are dropped. LinkedIn and the resume stay hidden until a valid URL is set. Email and GitHub fall back to the verified public defaults in `src/config/public.ts` when their variables are empty.

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Production origin for canonical, Open Graph, structured-data, sitemap, and robots URLs |
| `VITE_CONTACT_EMAIL` | Public contact address |
| `VITE_GITHUB_URL` | Full GitHub profile URL |
| `VITE_LINKEDIN_URL` | Full LinkedIn profile URL |
| `VITE_RESUME_URL` | Root-relative path or HTTPS resume URL |

If `VITE_RESUME_URL=/resume.pdf`, place the file at `public/resume.pdf` before deployment.

Set `VITE_SITE_URL` before any production build. Without it, metadata URLs remain relative to the current request.

## Quality gate

```sh
npm run check
```

This runs Prettier, strict TypeScript, ESLint, unit tests, and the production build. GitHub Actions runs the same command on every push and pull request.

| Command | Purpose |
| --- | --- |
| `npm run format` | Write Prettier formatting |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest once |
| `npm run build` | Produce the production build |

## Deployment

`VITE_*` variables are fixed at build time. Confirm the origin, then build for one host.

### Netlify

[`netlify.toml`](netlify.toml) builds with Node.js 22.12, `NITRO_PRESET=netlify`, and `VITE_SITE_URL` set to the live site. Connect the repository in Netlify and deploy from that file. Static responses also receive the headers in `public/_headers`.

### Cloudflare Workers

The npm scripts build a Nitro Worker and serve or publish it with Wrangler.

```sh
npm run preview
```

Inspect `.output/server/wrangler.json` and confirm the account and worker name. Export `VITE_SITE_URL` for that build, then deploy:

```sh
npm run deploy
```

The Worker entry in `src/server.ts` adds the application security headers, including HSTS on HTTPS responses only.

## Repository layout

| Path | Responsibility |
| --- | --- |
| `src/content` | Typed site copy and case studies |
| `src/routes` | File routes, document metadata, sitemap, and robots |
| `src/features` | Project index and filtering |
| `src/components` | Layout, navigation, project visuals, and actions |
| `src/config/public.ts` | Validation for public environment values |
| `src/lib` | Security headers, error pages, and tested domain examples |
| `src/server.ts` | SSR entry and normalization of catastrophic server errors |

## Launch checklist

1. Set `VITE_SITE_URL` to the production origin for the host you are deploying.
2. Confirm the contact email and GitHub URL, and add LinkedIn or a resume URL when those destinations exist.
3. Publish only repository and demo links that resolve, and keep unfinished work marked as in progress or planned.
4. Check the Open Graph image at `public/og-image.png` against the production domain.
5. Run `npm run check`, then preview the production build before promoting it.

## Source history

This project is connected to [Lovable](https://lovable.dev). Commits on the connected branch synchronize back to the editor. Do not force-push or rewrite history that has already been published.
