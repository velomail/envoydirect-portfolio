"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { focusRing } from "@/lib/layout-classes";
import { siteConfig } from "@/lib/site-config";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = siteConfig.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  }

  return (
    <button
      type="button"
      aria-label={copied ? "Email copied to clipboard" : "Copy email address to clipboard"}
      aria-live="polite"
      onClick={handleCopy}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-glass-border bg-background/40 px-4 py-2.5 font-mono text-xs tracking-tight text-foreground transition-colors hover:border-accent-neon/40 hover:bg-accent-neon/10 ${focusRing}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-status-green" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
