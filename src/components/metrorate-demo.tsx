"use client";

import { useId, useMemo, useState } from "react";
import { focusRing } from "@/lib/layout-classes";

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
  const baseId = useId();
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
    {
      id: `${baseId}-deal-size`,
      label: "Deal Size",
      value: dealSize,
      setter: setDealSize,
      suffix: "USD — gross contract value",
      step: 1000,
    },
    {
      id: `${baseId}-comm-rate`,
      label: "Commission Rate",
      value: commRate,
      setter: setCommRate,
      suffix: "% — of gross contract value",
      step: 0.5,
      max: 100,
    },
    {
      id: `${baseId}-split-pct`,
      label: "Rep Split",
      value: splitPct,
      setter: setSplitPct,
      suffix: "% — rep's share after house split",
      step: 5,
      max: 100,
    },
    {
      id: `${baseId}-tax-rate`,
      label: "Tax Withholding",
      value: taxRate,
      setter: setTaxRate,
      suffix: "% — estimated federal + state",
      step: 1,
      max: 50,
    },
  ] as const;

  return (
    <div className="grid w-full gap-4 md:grid-cols-2">
      <div className="space-y-4 rounded-xl border border-glass-border bg-background/40 p-4 sm:space-y-3">
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-widest"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type="number"
              value={field.value}
              min={0}
              max={"max" in field ? field.max : undefined}
              step={field.step}
              inputMode="decimal"
              onChange={(event) => field.setter(Number(event.target.value) || 0)}
              className={`min-h-11 w-full rounded-md border border-glass-border bg-background/80 px-3 py-2 font-mono text-base text-foreground sm:text-sm ${focusRing}`}
            />
            <p className="mt-1.5 font-mono text-[11px] leading-5 text-muted-foreground">{field.suffix}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-glass-border bg-background/60 p-4">
        <div className="responsive-table-wrap">
          <table className="w-full min-w-[280px] border-collapse font-mono text-xs">
            <caption className="sr-only">Commission calculation results</caption>
            <thead>
              <tr className="text-left text-muted-foreground">
                <th scope="col" className="border border-glass-border px-2 py-2.5 font-normal uppercase tracking-widest">
                  Field
                </th>
                <th scope="col" className="border border-glass-border px-2 py-2.5 font-normal uppercase tracking-widest">
                  Value
                </th>
              </tr>
            </thead>
            <tbody aria-live="polite" aria-relevant="text">
              <tr>
                <th scope="row" className="border border-glass-border px-2 py-2.5 text-left font-normal">
                  Gross Commission
                </th>
                <td className="border border-glass-border px-2 py-2.5 font-medium">{formatCurrency(results.grossComm)}</td>
              </tr>
              <tr>
                <th scope="row" className="border border-glass-border px-2 py-2.5 text-left font-normal">
                  House Deduction
                </th>
                <td className="border border-glass-border px-2 py-2.5 font-medium">{formatCurrency(-results.houseDeduct)}</td>
              </tr>
              <tr>
                <th scope="row" className="border border-glass-border px-2 py-2.5 text-left font-normal">
                  Rep Share (pre-tax)
                </th>
                <td className="border border-glass-border px-2 py-2.5 font-medium">{formatCurrency(results.repShare)}</td>
              </tr>
              <tr>
                <th scope="row" className="border border-glass-border px-2 py-2.5 text-left font-normal">
                  Tax Withheld
                </th>
                <td className="border border-glass-border px-2 py-2.5 font-medium">{formatCurrency(-results.taxWithheld)}</td>
              </tr>
              <tr className="bg-accent-neon/15">
                <th scope="row" className="border border-glass-border px-2 py-2.5 text-left font-semibold">
                  Net Payout
                </th>
                <td className="border border-glass-border px-2 py-2.5 font-semibold text-accent-neon">
                  {formatCurrency(results.netPayout)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-md border border-glass-border bg-background/40 p-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-widest">
            Effective Rate on Deal
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground" aria-live="polite">
            {formatPercent(results.effectiveRate)}
          </p>
        </div>
      </div>
    </div>
  );
}
