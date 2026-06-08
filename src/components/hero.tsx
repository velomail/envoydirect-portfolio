"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { heroStats, siteConfig } from "@/lib/site-config";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        timeZone: siteConfig.timezone,
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(`EST · ${formatted}`);
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Envoy Direct — Independent software studio
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Software that ships.{" "}
            <span className="text-muted-foreground">Not slideware.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I build MVPs, workflow automations, and UI systems for founders who need working
            software — one person, from scope through deployment.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Open for work
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-sm tabular-nums text-muted-foreground">
              {time || "EST · —"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground">
              {siteConfig.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View services
              <ArrowDown className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 sm:max-w-2xl">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-8 sm:px-8 sm:py-10">
                <dt className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
