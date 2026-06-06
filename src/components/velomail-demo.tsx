"use client";

import { useId, useState } from "react";
import { focusRing } from "@/lib/layout-classes";

export function VeloMailDemo() {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");
  const groupId = useId();

  return (
    <div className="w-full rounded-xl border border-glass-border bg-background/60 p-4 sm:p-5">
      <fieldset className="mb-4 flex flex-col gap-3 border-0 p-0">
        <legend
          id={`${groupId}-legend`}
          className="w-full text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:text-left sm:tracking-widest"
        >
          Viewport Mode
        </legend>
        <div
          role="radiogroup"
          aria-labelledby={`${groupId}-legend`}
          className="flex flex-col gap-3"
        >
          {(["desktop", "mobile"] as const).map((option) => {
            const active = mode === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setMode(option)}
                className={`flex min-h-11 w-full items-center justify-center gap-4 rounded-lg px-1 font-mono text-xs capitalize text-foreground sm:justify-start ${focusRing}`}
              >
                <span
                  aria-hidden="true"
                  className={`relative h-[26px] w-[52px] shrink-0 overflow-hidden rounded-full border border-glass-border transition-colors ${
                    active ? "bg-accent-neon/20" : "bg-background/80"
                  }`}
                >
                  <span
                    className={`absolute top-[3px] left-[3px] h-[18px] w-[18px] rounded-full bg-accent-neon transition-transform duration-200 ${
                      active ? "translate-x-[28px]" : "translate-x-0"
                    }`}
                  />
                </span>
                <span className="min-w-[4.5rem] text-left">{option}</span>
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between rounded-md border border-glass-border bg-background/40 px-3 py-2.5 font-mono text-xs sm:text-[11px]">
          <span className="text-muted-foreground">Viewport Scale</span>
          <span className="font-medium text-foreground" aria-live="polite">
            {mode === "desktop" ? "1280px" : "320px"}
          </span>
        </div>
      </fieldset>

      <div
        aria-live="polite"
        aria-label={`Email preview in ${mode} viewport`}
        className={`overflow-hidden rounded-lg border border-glass-border bg-background/80 transition-all duration-300 ${
          mode === "mobile" ? "mx-auto max-w-[320px]" : "w-full"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-2 border-b border-glass-border bg-background/40 px-3 py-2 font-mono text-[10px] leading-5 text-muted-foreground sm:justify-start sm:text-[11px]">
          <span>From: jesse@envoydirect.co</span>
          <span aria-hidden="true">·</span>
          <span>Re: Proposal v3</span>
        </div>
        <div className="space-y-2 p-3" aria-hidden="true">
          <div className="h-2 rounded bg-glass-border" />
          <div className="mx-auto h-2 w-4/5 rounded bg-glass-border" />
          <div className="h-2 rounded bg-glass-border" />
          <div className="mx-auto h-2 w-3/5 rounded bg-glass-border" />
          <div className="h-2 rounded bg-glass-border" />
          <div className="mx-auto h-2 w-4/5 rounded bg-glass-border" />
        </div>
      </div>
    </div>
  );
}
