import { describe, expect, it } from "vitest";
import { withSecurityHeaders } from "../security-headers";

describe("security headers", () => {
  it("preserves the response while applying the baseline", async () => {
    const response = withSecurityHeaders(
      new Response("ok", {
        status: 201,
        headers: { "content-type": "text/plain", "x-existing": "kept" },
      }),
      new Request("https://portfolio.example/contact"),
    );

    expect(response.status).toBe(201);
    expect(await response.text()).toBe("ok");
    expect(response.headers.get("content-type")).toBe("text/plain");
    expect(response.headers.get("x-existing")).toBe("kept");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(response.headers.get("x-frame-options")).toBe("DENY");
    expect(response.headers.get("content-security-policy")).toContain("default-src 'self'");
    expect(response.headers.get("strict-transport-security")).toBe("max-age=31536000");
  });

  it("does not advertise HSTS over HTTP development requests", () => {
    const response = withSecurityHeaders(
      new Response(null, { status: 204 }),
      new Request("http://127.0.0.1:4173/"),
    );

    expect(response.headers.has("strict-transport-security")).toBe(false);
  });

  it("prevents error responses from being indexed", () => {
    const response = withSecurityHeaders(
      new Response("Not found", { status: 404 }),
      new Request("https://portfolio.example/missing"),
    );

    expect(response.headers.get("x-robots-tag")).toBe("noindex");
  });
});
