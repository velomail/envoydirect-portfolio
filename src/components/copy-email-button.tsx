"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
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
      aria-label="Copy email address"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-background/40 px-3 py-1.5 font-mono text-xs tracking-tight text-foreground transition-colors hover:border-accent-neon/40 hover:bg-accent-neon/10"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-status-green" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
