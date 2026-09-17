"use client";

import { useEffect, useRef, useState } from "react";
import { heroStats, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function StatValue({
  value,
  countTo,
  suffix,
}: {
  value: string;
  countTo?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(countTo == null ? value : `0${suffix ?? ""}`);

  useEffect(() => {
    if (countTo == null) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 900);
          const eased = 1 - (1 - t) ** 3;
          const current = Math.round(countTo * eased);
          setShown(`${current}${suffix ?? ""}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [countTo, suffix, value]);

  return (
    <dd ref={ref} className="t-num text-[1.75rem] sm:mt-auto sm:pt-3 sm:text-[2.25rem] md:text-[3rem]">
      {shown}
    </dd>
  );
}

export function StatBand() {
  return (
    <div className="border-y border-border bg-panel">
      <dl className="mx-auto max-w-[1200px]">
        <div className="flex items-center border-b border-border px-5 py-3 sm:px-6 lg:hidden">
          <span className="t-label">{siteConfig.name}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[auto_repeat(3,minmax(0,1fr))]">
          <div className="hidden items-center border-r border-border px-10 py-9 lg:flex lg:pl-10 lg:pr-14">
            <span className="t-label">{siteConfig.name}</span>
          </div>
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex min-w-0 items-baseline justify-between gap-4 px-5 py-4 sm:flex-col sm:items-stretch sm:justify-start sm:px-6 sm:py-6 md:px-10 md:py-9",
                index < heroStats.length - 1 &&
                  "border-b border-border sm:border-b-0 sm:border-r",
              )}
            >
              <dt className="t-label text-muted-foreground">{stat.label}</dt>
              <StatValue
                value={stat.value}
                countTo={"countTo" in stat ? stat.countTo : undefined}
                suffix={"suffix" in stat ? stat.suffix : undefined}
              />
            </div>
          ))}
        </div>
      </dl>
    </div>
  );
}
