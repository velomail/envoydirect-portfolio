"use client";

import { useState } from "react";

export function VeloMailDemo() {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="rounded-xl border border-glass-border bg-background/60 p-4">
      <div className="mb-4 flex flex-col gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
          Viewport Mode
        </span>
        <div className="flex flex-wrap gap-4">
          {(["desktop", "mobile"] as const).map((option) => {
            const active = mode === option;
            return (
              <button
                key={option}
                type="button"
                role="switch"
                aria-checked={active}
                aria-label={`${option} view`}
                onClick={() => setMode(option)}
                className="flex items-center gap-2 font-mono text-xs capitalize text-foreground"
              >
                <span
                  className={`relative h-[26px] w-[52px] rounded-full border border-glass-border transition-colors ${
                    active ? "bg-accent-neon/20" : "bg-background/80"
                  }`}
                >
                  <span
                    className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-accent-neon transition-transform ${
                      active ? "translate-x-[26px]" : "translate-x-[3px]"
                    }`}
                  />
                </span>
                {option}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between rounded-md border border-glass-border bg-background/40 px-3 py-2 font-mono text-[11px]">
          <span className="text-muted-foreground/60">Viewport Scale</span>
          <span className="font-medium text-foreground">
            {mode === "desktop" ? "1280px" : "320px"}
          </span>
        </div>
      </div>

      <div
        aria-live="polite"
        aria-label="Email preview"
        className={`overflow-hidden rounded-lg border border-glass-border bg-background/80 transition-all duration-300 ${
          mode === "mobile" ? "mx-auto max-w-[320px]" : "w-full"
        }`}
      >
        <div className="flex flex-wrap gap-2 border-b border-glass-border bg-background/40 px-3 py-2 font-mono text-[10px] text-muted-foreground">
          <span>From: jesse@envoydirect.co</span>
          <span>·</span>
          <span>Re: Proposal v3</span>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 rounded bg-glass-border" />
          <div className="h-2 w-4/5 rounded bg-glass-border" />
          <div className="h-2 rounded bg-glass-border" />
          <div className="h-2 w-3/5 rounded bg-glass-border" />
          <div className="h-2 rounded bg-glass-border" />
          <div className="h-2 w-4/5 rounded bg-glass-border" />
        </div>
      </div>
    </div>
  );
}
