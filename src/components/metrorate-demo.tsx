"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number) {
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `${value < 0 ? "−$" : "$"}${formatted}`;
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export function MetroRateDemo() {
  const [dealSize, setDealSize] = useState(250000);
  const [commRate, setCommRate] = useState(8);
  const [splitPct, setSplitPct] = useState(60);
  const [taxRate, setTaxRate] = useState(28);

  const results = useMemo(() => {
    const grossComm = dealSize * (commRate / 100);
    const repShare = grossComm * (splitPct / 100);
    const houseDeduct = grossComm - repShare;
    const taxWithheld = repShare * (taxRate / 100);
    const netPayout = repShare - taxWithheld;
    const effectiveRate = dealSize > 0 ? (netPayout / dealSize) * 100 : 0;

    return {
      grossComm,
      houseDeduct,
      repShare,
      taxWithheld,
      netPayout,
      effectiveRate,
    };
  }, [commRate, dealSize, splitPct, taxRate]);

  const fields = [
    { label: "Deal Size", value: dealSize, setter: setDealSize, suffix: "USD — gross contract value", step: 1000 },
    { label: "Commission Rate", value: commRate, setter: setCommRate, suffix: "% — of gross contract value", step: 0.5, max: 100 },
    { label: "Rep Split", value: splitPct, setter: setSplitPct, suffix: "% — rep's share after house split", step: 5, max: 100 },
    { label: "Tax Withholding", value: taxRate, setter: setTaxRate, suffix: "% — estimated federal + state", step: 1, max: 50 },
  ] as const;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3 rounded-xl border border-glass-border bg-background/40 p-4">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              {field.label}
            </label>
            <input
              type="number"
              value={field.value}
              min={0}
              max={"max" in field ? field.max : undefined}
              step={field.step}
              inputMode="decimal"
              onChange={(event) => field.setter(Number(event.target.value) || 0)}
              className="w-full rounded-md border border-glass-border bg-background/80 px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-accent-neon/40"
            />
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/60">{field.suffix}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-glass-border bg-background/60 p-4">
        <table className="w-full border-collapse font-mono text-xs">
          <thead>
            <tr className="text-left text-muted-foreground/60">
              <th className="border border-glass-border px-2 py-2 font-normal uppercase tracking-widest">Field</th>
              <th className="border border-glass-border px-2 py-2 font-normal uppercase tracking-widest">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-glass-border px-2 py-2">Gross Commission</td>
              <td className="border border-glass-border px-2 py-2 font-medium">{formatCurrency(results.grossComm)}</td>
            </tr>
            <tr>
              <td className="border border-glass-border px-2 py-2">House Deduction</td>
              <td className="border border-glass-border px-2 py-2 font-medium">{formatCurrency(-results.houseDeduct)}</td>
            </tr>
            <tr>
              <td className="border border-glass-border px-2 py-2">Rep Share (pre-tax)</td>
              <td className="border border-glass-border px-2 py-2 font-medium">{formatCurrency(results.repShare)}</td>
            </tr>
            <tr>
              <td className="border border-glass-border px-2 py-2">Tax Withheld</td>
              <td className="border border-glass-border px-2 py-2 font-medium">{formatCurrency(-results.taxWithheld)}</td>
            </tr>
            <tr className="bg-accent-neon/15">
              <td className="border border-glass-border px-2 py-2 font-semibold">Net Payout</td>
              <td className="border border-glass-border px-2 py-2 font-semibold text-accent-neon">
                {formatCurrency(results.netPayout)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 rounded-md border border-glass-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Effective Rate on Deal
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
            {formatPercent(results.effectiveRate)}
          </p>
        </div>
      </div>
    </div>
  );
}
