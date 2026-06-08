import { aboutParagraphs } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="container-page pb-16 sm:pb-20">
      <div className="rounded-[28px] bg-card px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <p className="section-label">About</p>
        <h2
          id="about-heading"
          className="heading-serif mt-4 max-w-[640px] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.12]"
        >
          AI-native development for a post-agency world.
        </h2>
        <div className="mt-6 max-w-[720px] space-y-5 text-sm leading-7 text-body sm:text-[15px]">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
