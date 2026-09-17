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
    <dd ref={ref} className="t-num mt-auto pt-3 text-[1.7rem] sm:text-[2.25rem] md:text-[3rem]">
      {shown}
    </dd>
  );
}

export function StatBand() {
  return (
    <div className="border-y border-border bg-panel">
      <dl className="mx-auto grid max-w-[1200px] grid-cols-3 md:grid-cols-[auto_repeat(3,minmax(0,1fr))]">
        <div className="col-span-3 flex items-center border-b border-border px-6 py-4 md:col-span-1 md:border-b-0 md:border-r md:py-9 md:pl-10 md:pr-14">
          <span className="t-label">{siteConfig.name}</span>
        </div>
        {heroStats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              "flex min-w-0 flex-col px-4 py-6 sm:px-6 md:px-10 md:py-9",
              index < heroStats.length - 1 && "border-r border-border",
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
      </dl>
    </div>
  );
}
