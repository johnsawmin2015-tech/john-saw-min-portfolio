import { describe, expect, it } from "vitest";
import { addMoney, budgetProgress, formatMoney, money, sumMoney } from "../money";

describe("money", () => {
  it("rejects fractional minor units", () => {
    expect(() => money(10.5)).toThrow(TypeError);
  });

  it("rejects amounts and totals outside the safe integer range", () => {
    expect(() => money(Number.MAX_SAFE_INTEGER + 1)).toThrow(TypeError);
    expect(() => addMoney(money(Number.MAX_SAFE_INTEGER), money(1))).toThrow(RangeError);
  });

  it("adds without floating point drift", () => {
    expect(addMoney(money(10), money(20)).amountMinor).toBe(30);
    expect(sumMoney([money(1), money(2), money(3)]).amountMinor).toBe(6);
  });

  it("refuses to mix currencies", () => {
    expect(() => addMoney(money(100, "USD"), money(100, "EUR"))).toThrow(TypeError);
  });

  it("formats minor units as currency", () => {
    expect(formatMoney(money(123456))).toBe("$1,234.56");
    expect(formatMoney(money(123456, "JPY"))).toBe("¥123,456");
  });

  it("reports budget progress", () => {
    expect(budgetProgress(500, 0)).toEqual({ kind: "no-budget" });
    expect(budgetProgress(500, 1000)).toEqual({
      kind: "tracked",
      percentUsed: 50,
      overBudget: false,
    });
    expect(budgetProgress(1500, 1000)).toEqual({
      kind: "tracked",
      percentUsed: 150,
      overBudget: true,
    });
  });
});
