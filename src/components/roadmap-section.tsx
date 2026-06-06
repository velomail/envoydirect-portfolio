import { CircleDot, Clock, Telescope, Terminal } from "lucide-react";
import { roadmapPhases } from "@/lib/site-config";

const phaseIcons = {
  active: CircleDot,
  upcoming: Clock,
  horizon: Telescope,
} as const;

export function RoadmapSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-neon">// The Blueprint Log</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Roadmap & Infrastructure Sprint
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-glass-border glass-panel">
        <div className="flex items-center gap-2 border-b border-glass-border px-5 py-3">
          <Terminal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="font-mono text-xs tracking-tight text-muted-foreground">
            roadmap.log — architectural goals
          </span>
        </div>

        <ul className="divide-y divide-glass-border">
          {roadmapPhases.map((phase) => {
            const Icon = phaseIcons[phase.tone];
            const statusClass =
              phase.tone === "active"
                ? "text-accent-neon"
                : phase.tone === "horizon"
                  ? "text-muted-foreground/70"
                  : "text-muted-foreground";

            return (
              <li
                key={phase.phase}
                className="group flex flex-col gap-3 px-5 py-6 transition-colors hover:bg-foreground/[0.02] md:flex-row md:gap-6 md:px-6"
              >
                <div className="flex shrink-0 items-center gap-3 md:w-64">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    {phase.tone === "active" ? (
                      <span className="neon-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-neon" />
                    ) : null}
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        phase.tone === "active" ? "text-accent-neon" : "text-muted-foreground"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-mono text-sm tracking-tight text-foreground">
                    {phase.phase}{" "}
                    <span className={statusClass}>// {phase.status}</span>
                  </span>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
