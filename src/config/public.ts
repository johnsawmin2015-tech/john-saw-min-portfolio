function optionalValue(value: string | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

export function normalizeEmail(value: string | undefined): string | undefined {
  const email = optionalValue(value);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return undefined;
  return email;
}

export function normalizeHttpUrl(value: string | undefined): string | undefined {
  const candidate = optionalValue(value);
  if (!candidate || containsAsciiControl(candidate)) return undefined;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    if (url.username || url.password) return undefined;
    if (url.pathname !== "/") {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    if (url.pathname === "/" && !url.search && !url.hash) return url.origin;
    return url.toString();
  } catch {
    return undefined;
  }
}

export function normalizeSiteOrigin(value: string | undefined): string | undefined {
  const candidate = normalizeHttpUrl(value);
  if (!candidate) return undefined;
  return new URL(candidate).origin;
}

export function normalizePublicAssetUrl(value: string | undefined): string | undefined {
  const candidate = optionalValue(value);
  if (!candidate || containsAsciiControl(candidate)) return undefined;
  if (candidate.includes("\\")) return undefined;
  if (candidate.startsWith("/") && !candidate.startsWith("//")) return candidate;
  return normalizeHttpUrl(candidate);
}

const verifiedPublicDefaults = {
  contactEmail: "johnsawmin2015@gmail.com",
  githubUrl: "https://github.com/johnsawmin2015-tech",
} as const;

const contactEmail = normalizeEmail(
  import.meta.env["VITE_CONTACT_EMAIL"] || verifiedPublicDefaults.contactEmail,
);
const origin = normalizeSiteOrigin(import.meta.env["VITE_SITE_URL"]);

export const publicConfig = {
  origin,
  contactEmail,
  links: {
    email: contactEmail ? `mailto:${contactEmail}` : undefined,
    github: normalizeHttpUrl(
      import.meta.env["VITE_GITHUB_URL"] || verifiedPublicDefaults.githubUrl,
    ),
    linkedin: normalizeHttpUrl(import.meta.env["VITE_LINKEDIN_URL"]),
    resume: normalizePublicAssetUrl(import.meta.env["VITE_RESUME_URL"]),
  },
} as const;

export function absoluteSiteUrl(path: string, siteOrigin = publicConfig.origin): string {
  if (!siteOrigin) return path;
  return new URL(path, `${siteOrigin}/`).toString();
}

function containsAsciiControl(value: string): boolean {
  return Array.from(value).some((character) => {
    const codePoint = character.codePointAt(0);
    return codePoint !== undefined && (codePoint <= 0x1f || codePoint === 0x7f);
  });
}
