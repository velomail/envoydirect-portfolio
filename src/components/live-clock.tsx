"use client";

import { useEffect, useState } from "react";

function formatEstClock(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto",
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
    <p className="font-mono text-[11px] tracking-tight text-muted-foreground">
      LOC // ONTARIO, CA • EST // {time ?? "24H_CLOCK_FORMAT"}
    </p>
  );
}
