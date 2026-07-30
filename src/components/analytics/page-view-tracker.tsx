"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VISITOR_KEY = "ed_visitor_id";

function getVisitorId() {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    return `anon-${Date.now()}`;
  }
}

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    const visitorId = getVisitorId();
    const referrer = document.referrer || "";

    void fetch("/api/analytics/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        visitorId,
        referrer: referrer.slice(0, 500),
      }),
      keepalive: true,
    }).catch(() => {
      // Analytics should never block the page.
    });
  }, [pathname]);

  return null;
}
