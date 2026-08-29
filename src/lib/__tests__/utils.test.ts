import { describe, expect, it } from "vitest";
import { cn } from "../utils";

describe("class name composition", () => {
  it("preserves custom typography and semantic colour utilities together", () => {
    expect(cn("type-metadata", "text-graphite")).toBe("type-metadata text-graphite");
  });
});
