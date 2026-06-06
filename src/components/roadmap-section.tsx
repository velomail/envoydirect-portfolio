import { CircleDot, Clock, Telescope, Terminal } from "lucide-react";
import {
  cardShell,
  mobileStackCenter,
  sectionEyebrow,
  sectionHeading,
  sectionPadding,
  sectionShell,
  sectionTitle,
} from "@/lib/layout-classes";
import { roadmapPhases } from "@/lib/site-config";

const phaseIcons = {
  active: CircleDot,
  upcoming: Clock,
  horizon: Telescope,
} as const;

export function RoadmapSection() {
  return (
    <section
      aria-labelledby="roadmap-heading"
      className={`${sectionShell} ${sectionPadding}`}
    >
      <div className={sectionHeading}>
        <p className={sectionEyebrow}>// The Blueprint Log</p>
        <h2 id="roadmap-heading" className={sectionTitle}>
          Roadmap & Infrastructure Sprint
        </h2>
      </div>

      <div className={`${cardShell} overflow-hidden p-0`}>
        <div className="flex items-center justify-center gap-2 border-b border-glass-border px-4 py-3 sm:justify-start sm:px-5">
          <Terminal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="font-mono text-xs tracking-tight text-muted-foreground">
            roadmap.log — architectural goals
          </span>
        </div>

        <ol className="divide-y divide-glass-border">
          {roadmapPhases.map((phase) => {
            const Icon = phaseIcons[phase.tone];
            const statusClass =
              phase.tone === "active"
                ? "text-accent-neon"
                : phase.tone === "horizon"
                  ? "text-muted-foreground/80"
                  : "text-muted-foreground";

            return (
              <li
                key={phase.phase}
                className={`${mobileStackCenter} gap-3 px-4 py-5 transition-colors hover:bg-foreground/[0.02] sm:px-6 sm:py-6 md:flex-row md:items-start md:gap-6 md:text-left`}
              >
                <div className="flex shrink-0 items-center gap-3 md:w-64 md:justify-start">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center" aria-hidden="true">
                    {phase.tone === "active" ? (
                      <span className="neon-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-neon" />
                    ) : null}
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        phase.tone === "active" ? "text-accent-neon" : "text-muted-foreground"
                      }`}
                    />
                  </span>
                  <span className="font-mono text-sm tracking-tight text-foreground">
                    {phase.phase}{" "}
                    <span className={statusClass}>// {phase.status}</span>
                  </span>
                </div>
                <p className="max-w-prose text-pretty text-sm leading-7 text-muted-foreground">
                  {phase.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
