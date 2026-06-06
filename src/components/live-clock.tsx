"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

function formatEstClock(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: siteConfig.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatEstClock(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="text-center font-mono text-[11px] leading-5 tracking-tight text-muted-foreground md:text-right">
      <span className="sr-only">Location and current Eastern Time: </span>
      LOC // {siteConfig.locationShort} • EST //{" "}
      <time suppressHydrationWarning>{time ?? "Loading time"}</time>
    </p>
  );
}
