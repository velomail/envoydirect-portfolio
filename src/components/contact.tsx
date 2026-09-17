"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { ProjectTypePicker } from "@/components/project-type-picker";
import { useProjectType } from "@/components/project-type-context";
import { SectionFrame } from "@/components/section-frame";
import { contactFollowUps, siteConfig, socialLinks } from "@/lib/site-config";

export function Contact() {
  const { projectType } = useProjectType();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const followUp = contactFollowUps[projectType];

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";
  const labelClass = "text-[13px] font-medium text-muted-foreground";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          siteUrl,
        }),
      });

      const raw = await response.text();
      let result: { error?: string; ok?: boolean } = {};

      if (raw) {
        try {
          result = JSON.parse(raw) as { error?: string; ok?: boolean };
        } catch {
          throw new Error("Invalid server response");
        }
      }

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("done");
      setName("");
      setEmail("");
      setMessage("");
      setSiteUrl("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email jesse03hiles@gmail.com.");
    }
  }

  return (
    <SectionFrame id="contact" label="Quote">
      <h2 className="t-title text-[2.5rem] md:text-[3.25rem]">Get a quote.</h2>
      <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
        You&apos;ve seen the work and how a project runs. Tell me what you need — I&apos;ll reply
        within 48 hours with a price and next steps.
      </p>

      {status === "done" ? (
        <div className="mt-12">
          <span className="jewel" aria-hidden="true" />
          <h3 className="mt-4 t-title text-[1.75rem]">Message sent</h3>
          <p className="mt-2 max-w-xs text-[15px] text-muted-foreground">
            Thanks for reaching out. You&apos;ll hear back from me within 48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-12 space-y-8" noValidate>
          <ProjectTypePicker id="contact-project-type" label="What are you looking for?" />

          <div>
            <label htmlFor="message" className={labelClass}>
              What do you need?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={followUp.messagePlaceholder}
              className={`${fieldClass} mt-1 resize-none`}
            />
          </div>

          {followUp.showSiteUrl ? (
            <div>
              <label htmlFor="siteUrl" className={labelClass}>
                Current site
              </label>
              <input
                id="siteUrl"
                name="siteUrl"
                type="url"
                inputMode="url"
                value={siteUrl}
                onChange={(event) => setSiteUrl(event.target.value)}
                placeholder="https://your-site.com"
                className={`${fieldClass} mt-1`}
              />
            </div>
          ) : null}

          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className={`${fieldClass} mt-1`}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              className={`${fieldClass} mt-1`}
            />
          </div>

          {status === "error" ? (
            <p className="text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-[15px] font-medium text-background transition-colors hover:bg-accent disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Request a quote"
              )}
            </button>
            <p className="mt-3 text-[14px] text-muted-foreground">Reply within 48 hours.</p>
          </div>
        </form>
      )}

      <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
        <a href={`mailto:${siteConfig.contactEmail}`} className="link">
          {siteConfig.contactEmail}
        </a>
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {social.label}
          </a>
        ))}
      </p>
    </SectionFrame>
  );
}
