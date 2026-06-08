"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="container-page pb-20 pt-4 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 id="contact-heading" className="heading-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight">
            Ready to build?
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-body">
            I take on a limited number of projects at a time. Tell me what you&apos;re building and
            I&apos;ll respond within 48 hours.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-opacity hover:opacity-70"
              >
                LinkedIn →
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-opacity hover:opacity-70"
              >
                GitHub →
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-ink transition-opacity hover:opacity-70"
              >
                {siteConfig.contactEmail} →
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="contact-name" className="section-label">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className="input-underline mt-2"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="section-label">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@example.com"
              className="input-underline mt-2"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="section-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="input-underline mt-2 resize-none"
            />
          </div>
          <button
            type="submit"
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-ink text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {status === "sent" ? "Opening email client…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
