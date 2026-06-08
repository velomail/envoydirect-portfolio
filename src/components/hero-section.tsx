import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container-page pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="max-w-[720px]">
        <h1 className="heading-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] tracking-[-0.02em]">
          Independent developer shipping high-utility software.
        </h1>
        <p className="mt-8 max-w-[560px] text-[15px] leading-7 text-body sm:text-base">
          Envoy Direct is a one-person software lab. I build lean, functional utilities and
          high-performance interfaces for founders who value velocity over bureaucracy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="#software" className="btn-orange px-7">
            View projects
          </Link>
          <div className="btn-outline gap-2.5 px-5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-status-green" aria-hidden="true" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
