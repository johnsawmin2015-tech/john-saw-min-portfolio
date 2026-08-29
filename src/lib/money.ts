/**
 * Decimal-safe money helpers.
 * Amounts are integer minor units (e.g. cents) — never floating point.
 */
export interface Money {
  readonly amountMinor: number;
  readonly currency: string;
}

export function money(amountMinor: number, currency = "USD"): Money {
  if (!Number.isSafeInteger(amountMinor)) {
    throw new TypeError("amountMinor must be a safe integer number of minor units");
  }
  return { amountMinor, currency };
}

export function addMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new TypeError("Cannot add amounts with different currencies");
  }
  const amountMinor = a.amountMinor + b.amountMinor;
  if (!Number.isSafeInteger(amountMinor)) {
    throw new RangeError("Money addition exceeds the safe integer range");
  }
  return { amountMinor, currency: a.currency };
}

export function sumMoney(values: readonly Money[], currency = "USD"): Money {
  return values.reduce(addMoney, money(0, currency));
}

export function formatMoney(value: Money, locale = "en-US"): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: value.currency,
  });
  const fractionDigits = formatter.resolvedOptions().maximumFractionDigits ?? 0;
  return formatter.format(value.amountMinor / 10 ** fractionDigits);
}

export type BudgetProgress =
  | { readonly kind: "no-budget" }
  | { readonly kind: "tracked"; readonly percentUsed: number; readonly overBudget: boolean };

export function budgetProgress(spentMinor: number, limitMinor: number): BudgetProgress {
  if (limitMinor <= 0) return { kind: "no-budget" };
  const percentUsed = Math.round((spentMinor / limitMinor) * 100);
  return { kind: "tracked", percentUsed, overBudget: spentMinor > limitMinor };
}
