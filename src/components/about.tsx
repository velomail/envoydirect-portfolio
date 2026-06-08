import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { aboutParagraphs, aboutPoints, siteConfig, socialLinks } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Reveal delay={60}>
              <h2 className="max-w-xl text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                Hi, I&apos;m Jesse.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {aboutPoints.map((point, index) => (
                <Reveal as="li" key={point} delay={160 + index * 60}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug text-foreground">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:pt-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/5] w-full bg-secondary">
                <Image
                  src="/jesse-portrait.png"
                  alt="Portrait of Jesse, founder of Envoy Direct"
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 384px"
                  priority
                />
              </div>
              <figcaption className="flex items-center justify-between gap-2 border-t border-border px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Jesse — Founder</p>
                  <p className="text-xs text-muted-foreground">
                    {siteConfig.name} · Ontario, CA
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-success" />
                  Available
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
