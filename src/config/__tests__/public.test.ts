import { describe, expect, it } from "vitest";
import {
  absoluteSiteUrl,
  normalizeEmail,
  normalizeHttpUrl,
  normalizePublicAssetUrl,
  normalizeSiteOrigin,
} from "../public";

describe("public configuration", () => {
  it("accepts valid public email addresses", () => {
    expect(normalizeEmail(" hello@example.com ")).toBe("hello@example.com");
    expect(normalizeEmail("not-an-email")).toBeUndefined();
    expect(normalizeEmail(undefined)).toBeUndefined();
  });

  it("allows only HTTP(S) URLs", () => {
    expect(normalizeHttpUrl("https://github.com/john/")).toBe("https://github.com/john");
    expect(normalizeHttpUrl("https://example.com/?return=/")).toBe("https://example.com/?return=/");
    expect(normalizeHttpUrl("javascript:alert(1)")).toBeUndefined();
    expect(normalizeHttpUrl("https://user:password@example.com")).toBeUndefined();
    expect(normalizeHttpUrl("https://exam\nple.com")).toBeUndefined();
    expect(normalizeHttpUrl("github.com/john")).toBeUndefined();
  });

  it("normalises the configured site URL to an origin", () => {
    expect(normalizeSiteOrigin("https://portfolio.example/about?preview=1")).toBe(
      "https://portfolio.example",
    );
    expect(normalizeSiteOrigin("not-a-url")).toBeUndefined();
  });

  it("accepts root-relative or HTTP(S) public assets", () => {
    expect(normalizePublicAssetUrl("/resume.pdf")).toBe("/resume.pdf");
    expect(normalizePublicAssetUrl("//example.com/resume.pdf")).toBeUndefined();
    expect(normalizePublicAssetUrl("/\\evil.example/resume.pdf")).toBeUndefined();
    expect(normalizePublicAssetUrl("/\n/example.com/resume.pdf")).toBeUndefined();
    expect(normalizePublicAssetUrl("/\r/example.com/resume.pdf")).toBeUndefined();
    expect(normalizePublicAssetUrl("/\t/example.com/resume.pdf")).toBeUndefined();
    expect(normalizePublicAssetUrl("data:text/plain,hello")).toBeUndefined();
  });

  it("creates absolute metadata URLs when an origin is configured", () => {
    expect(absoluteSiteUrl("/projects", "https://portfolio.example")).toBe(
      "https://portfolio.example/projects",
    );
    expect(absoluteSiteUrl("/projects", undefined)).toBe("/projects");
  });
});
