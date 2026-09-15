"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProjectTypePicker } from "@/components/project-type-picker";
import { useProjectType } from "@/components/project-type-context";
import {
  sectionSplitAsideClass,
  sectionSplitStartClass,
  sectionSplitStretchClass,
  SectionIntro,
} from "@/components/section-intro";
import { contactFollowUps, faqItems, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ContactProps = {
  className?: string;
  layout?: "stack" | "split";
};

export function Contact({ className, layout = "split" }: ContactProps) {
  const { projectType } = useProjectType();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const followUp = contactFollowUps[projectType];
  const splitForm = layout === "split";

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20";
  const fieldClassLg = cn(fieldClass, splitForm && "px-5 py-4 sm:text-base");
  const labelClass = cn("font-medium text-foreground", splitForm ? "text-base" : "text-sm");
  const primaryBtnClass = cn(
    "group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary font-medium text-primary-foreground transition-transform hover:-translate-y-0.5",
    splitForm ? "w-full py-4 text-base" : "w-full px-6 py-3.5 text-sm",
  );
  const secondaryBtnClass = cn(
    "inline-flex flex-1 items-center justify-center rounded-full border border-border font-medium text-foreground transition-colors hover:bg-secondary",
    splitForm ? "px-6 py-4 text-base" : "px-6 py-3.5 text-sm",
  );

  function goToDetails() {
    if (!message.trim()) {
      setErrorMessage("Please add a short note so I know what you need.");
      return;
    }
    setErrorMessage("");
    setStep(3);
  }

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
      setStep(1);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email jesse03hiles@gmail.com.");
    }
  }

  const formCard = (
    <Reveal delay={80} className={layout === "split" ? "flex min-h-0 flex-1 flex-col" : undefined}>
      <div
        className={cn(
          "text-center",
          layout === "split" && "flex min-h-full flex-1 flex-col",
        )}
      >
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
              <form
                onSubmit={onSubmit}
                className={cn(
                  splitForm ? "flex min-h-full flex-1 flex-col gap-8" : "space-y-5",
                )}
                noValidate
              >
                <p
                  className={cn(
                    "shrink-0 font-mono uppercase tracking-[0.16em] text-muted-foreground",
                    splitForm ? "text-sm" : "text-xs",
                  )}
                >
                  Step {step} of 3
                </p>

                {step === 1 ? (
                  <div className={cn(splitForm && "flex min-h-0 flex-1 flex-col")}>
                    <div
                      className={cn(
                        splitForm && "flex flex-1 flex-col justify-center py-6 lg:py-10",
                      )}
                    >
                      <ProjectTypePicker
                        id="contact-project-type"
                        label="What are you looking for?"
                        size={splitForm ? "large" : "default"}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className={primaryBtnClass}
                    >
                      Continue
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                ) : null}

                {step === 2 ? (
                  <div
                    className={cn(
                      "space-y-5",
                      splitForm && "flex min-h-0 flex-1 flex-col justify-between gap-8",
                    )}
                  >
                    <div className={cn("space-y-5", splitForm && "flex-1 content-center py-4")}>
                    {followUp.showSiteUrl ? (
                      <div className="space-y-1.5">
                        <label htmlFor="siteUrl" className={labelClass}>
                          Link to your current site
                        </label>
                        <input
                          id="siteUrl"
                          name="siteUrl"
                          type="url"
                          inputMode="url"
                          value={siteUrl}
                          onChange={(event) => setSiteUrl(event.target.value)}
                          placeholder="https://your-site.com"
                          className={fieldClassLg}
                        />
                      </div>
                    ) : null}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={splitForm ? 6 : 4}
                        required
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder={followUp.messagePlaceholder}
                        className={cn(fieldClassLg, "resize-none")}
                      />
                    </div>
                    {errorMessage ? (
                      <p className="text-sm text-destructive" role="alert">
                        {errorMessage}
                      </p>
                    ) : null}
                    </div>
                    <div className="flex shrink-0 gap-3">
                      <button type="button" onClick={() => setStep(1)} className={secondaryBtnClass}>
                        Back
                      </button>
                      <button type="button" onClick={goToDetails} className={cn(primaryBtnClass, "flex-1")}>
                        Continue
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div
                    className={cn(
                      "space-y-5",
                      splitForm && "flex min-h-0 flex-1 flex-col justify-between gap-8",
                    )}
                  >
                    <div className={cn("space-y-5", splitForm && "flex-1 content-center py-4")}>
                    <div className="space-y-1.5">
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
                        className={fieldClassLg}
                      />
                    </div>
                    <div className="space-y-1.5">
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
                        className={fieldClassLg}
                      />
                    </div>

                    {status === "error" ? (
                      <p className="text-sm text-destructive" role="alert">
                        {errorMessage}
                      </p>
                    ) : null}

                    <p
                      className={cn(
                        "leading-relaxed text-muted-foreground",
                        splitForm ? "text-sm" : "text-xs",
                      )}
                    >
                      No spam, no sales pitch — just a real reply within 48 hours.
                    </p>
                    </div>

                    <div className="flex shrink-0 gap-3">
                      <button type="button" onClick={() => setStep(2)} className={secondaryBtnClass}>
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className={cn(primaryBtnClass, "flex-1 disabled:opacity-70")}
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
                    </div>
                  </div>
                ) : null}
              </form>
            )}
          </div>
    </Reveal>
  );

  const emailLine = (
    <Reveal
      delay={140}
      className={layout === "split" ? "mt-6 shrink-0 lg:mt-auto" : undefined}
    >
      <p
        className={cn(
          "text-muted-foreground",
          layout === "split" ? "text-base" : "mt-6 text-sm",
        )}
      >
        Or email{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-foreground hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
      </p>
    </Reveal>
  );

  const faqBlock = (
    <Reveal
      delay={layout === "split" ? 80 : 220}
      className={layout === "split" ? cn("h-full", sectionSplitAsideClass) : undefined}
    >
      <div className={cn("text-left", layout === "split" && "flex h-full min-h-full flex-col")}>
        <h3 className="font-serif text-2xl font-medium tracking-tight text-center lg:text-left">
          Common questions
        </h3>
        <dl className="mt-8 space-y-0">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className={cn(
                "py-6",
                index > 0 && "border-t border-border/70",
              )}
            >
              <dt className="text-sm font-medium text-foreground">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );

  return (
    <section
      id="contact"
      className={cn(
        "scroll-mt-20 border-t border-border py-14 sm:py-20",
        layout === "stack" && "pb-14 pt-2 sm:pb-16 sm:pt-4",
        className,
      )}
    >
      {layout === "split" ? (
        <>
          <SectionIntro
            label="Get a quote"
            title="Tell me what you need"
            subtitle="Limited availability, and I reply within 48 hours. I'll come back with honest next steps."
          />
          <div className={sectionSplitStretchClass}>
            <div
              className={cn(
                sectionSplitStartClass,
                "flex h-full min-h-full flex-col text-center",
              )}
            >
              {formCard}
              {emailLine}
            </div>
            {faqBlock}
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <SectionIntro
            label="Get a quote"
            title="Tell me what you need"
            subtitle="Limited availability, and I reply within 48 hours. I'll come back with honest next steps."
          />
          <div className="mx-auto mt-10 max-w-xl">
            {formCard}
            {emailLine}
            <div className="mt-12">{faqBlock}</div>
          </div>
        </div>
      )}
    </section>
  );
}
