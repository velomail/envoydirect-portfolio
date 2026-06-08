"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { projectTypes, siteConfig, socialLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState<(typeof projectTypes)[number]>("MVP");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType: type,
          message,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("done");
      event.currentTarget.reset();
      setType("MVP");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email hello@envoydirect.co.");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                Let&apos;s get it built
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Limited availability and I reply within 48 hours. Tell me what you&apos;re
                building — I&apos;ll come back with honest next steps.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <dt className="text-sm text-muted-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm font-medium text-foreground hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <dt className="text-sm text-muted-foreground">Elsewhere</dt>
                  <dd className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        {social.label}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-muted-foreground">Based in</dt>
                  <dd className="text-sm font-medium text-foreground">{siteConfig.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {status === "done" ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-6" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Thanks for reaching out. You&apos;ll hear back from me within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-foreground">Project type</span>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((projectType) => (
                        <button
                          key={projectType}
                          type="button"
                          onClick={() => setType(projectType)}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                            type === projectType
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {projectType}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What are you building?"
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                    />
                  </div>

                  {status === "error" ? (
                    <p className="text-sm text-destructive" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
