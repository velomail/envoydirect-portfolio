import { Navigation } from "lucide-react";
import { LiveClock } from "@/components/live-clock";
import { sectionShell } from "@/lib/layout-classes";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-glass-border glass-panel">
      <div
        className={`${sectionShell} flex flex-col items-center gap-4 py-4 text-center md:flex-row md:items-center md:justify-between md:text-left`}
      >
        <div className="flex w-full max-w-full items-start gap-2.5 md:items-center md:justify-start">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-glass-border bg-accent-neon/10 sm:h-6 sm:w-6"
            aria-hidden="true"
          >
            <Navigation className="h-3.5 w-3.5 text-accent-neon" />
          </span>
          <p className="font-mono text-xs leading-5 tracking-tight text-foreground sm:text-sm">
            <span className="font-semibold">ENVOYDIRECT</span>{" "}
            <span className="text-muted-foreground" aria-hidden="true">
              //
            </span>{" "}
            <span className="text-muted-foreground">SOFTWARE ARCHITECT & SOLUTIONS SPECIALIST</span>
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-2 md:w-auto md:items-end">
          <div
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-glass-border glass-panel px-3 py-2 sm:py-1.5"
            role="status"
            aria-label="Availability status: open to custom client builds"
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-2 w-2 rounded-full bg-status-green" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-green" />
            </span>
            <span className="font-mono text-[11px] tracking-tight text-foreground sm:text-xs">
              STATUS: OPEN TO CUSTOM CLIENT BUILDS
            </span>
          </div>
          <LiveClock />
        </div>
      </div>
    </header>
  );
}
