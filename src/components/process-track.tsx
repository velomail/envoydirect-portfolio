"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ProcessTrack() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = [...list.querySelectorAll("li")];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = items.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      { threshold: 0.6, rootMargin: "-20% 0px -35% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={listRef} className="relative mt-12 border-t border-border">
      <span
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-border md:block"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-0 top-0 hidden w-px bg-foreground transition-[height] duration-500 md:block"
        style={{ height: `${((active + 1) / processSteps.length) * 100}%` }}
        aria-hidden="true"
      />
      {processSteps.map((step, index) => (
        <li
          key={step.step}
          className={cn(
            "grid grid-cols-[3.5rem_1fr] gap-4 border-b border-border py-5 text-[15px] transition-colors duration-500 md:grid-cols-[5rem_1fr] md:pl-6",
            index === active ? "text-foreground" : "text-muted-foreground",
          )}
        >
          <span className="t-num pt-[3px] text-[14px]">{step.step}</span>
          <span>
            <span className="block font-medium text-foreground">{step.title}</span>
            <span className="mt-1 block">{step.description}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
