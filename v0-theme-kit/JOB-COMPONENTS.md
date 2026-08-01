# Job Platform Components

Envoy Direct tokens + familiar job-board UX. Use alongside `COMPONENTS.md`.

## Job search bar (Indeed-style)

```tsx
<form className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
  <input
    placeholder="Job title, keywords, or company"
    className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-base sm:text-sm"
  />
  <input
    placeholder="City, province, or remote"
    className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-base sm:text-sm"
  />
  <button
    type="submit"
    className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
  >
    Search jobs
  </button>
</form>
```

## Filter chips (LinkedIn-style)

```tsx
<div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]">
  {["Remote", "Full-time", "Past week", "Easy apply"].map((filter) => (
    <button
      key={filter}
      type="button"
      className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground"
    >
      {filter}
    </button>
  ))}
</div>
```

## Match score badge

```tsx
<span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs font-medium text-accent-foreground">
  87% match
</span>
```

Strong match (80%+): swap `bg-accent` → `bg-success text-success-foreground`.

## Job card

```tsx
<article className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/30 sm:p-6">
  <div className="flex items-start justify-between gap-3">
    <div className="min-w-0 text-left">
      <h3 className="font-serif text-lg font-medium tracking-tight sm:text-xl">
        Senior Software Engineer
      </h3>
      <p className="mt-1 text-sm font-medium text-foreground">Acme Inc</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Toronto, ON · $90k–$110k · Posted 2d ago
      </p>
    </div>
    <span className="shrink-0 font-mono text-xs font-medium text-accent-foreground">
      <span className="rounded-full bg-accent px-2 py-0.5">87%</span>
    </span>
  </div>
  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
    You&apos;d own API services and ship features weekly — not slide decks.
  </p>
  <div className="mt-4 flex flex-wrap items-center gap-2">
    <button type="button" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary">
      Save
    </button>
    <a
      href="/jobs/123"
      className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
    >
      View job
      <ArrowUpRight className="size-4" />
    </a>
  </div>
</article>
```

## Role summary card (AI — top of detail page)

```tsx
<div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
    Role summary
  </p>
  <p className="mt-3 text-base leading-relaxed text-foreground">
    Plain-English description of what you&apos;d actually do day to day.
  </p>
</div>
```

## Fit comparison (AI)

```tsx
<div className="grid gap-4 sm:grid-cols-2">
  <div className="rounded-xl border border-border bg-card p-4">
    <h4 className="text-sm font-medium text-foreground">Strengths</h4>
    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
      <li className="flex items-start gap-2">
        <Check className="mt-0.5 size-4 shrink-0 text-success" />
        5+ years React experience
      </li>
    </ul>
  </div>
  <div className="rounded-xl border border-border bg-card p-4">
    <h4 className="text-sm font-medium text-foreground">Gaps</h4>
    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
      <li className="flex items-start gap-2">
        <span className="mt-1 size-2 shrink-0 rounded-full bg-muted-foreground" />
        Kubernetes (nice-to-have)
      </li>
    </ul>
  </div>
</div>
```

## Sticky apply bar (mobile detail)

```tsx
<div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur-md md:hidden">
  <a
    href="#apply"
    className="flex w-full items-center justify-center gap-1.5 rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground"
  >
    Apply now
    <ArrowUpRight className="size-4" />
  </a>
</div>
```

## Results header

```tsx
<div className="flex flex-wrap items-center justify-between gap-3">
  <p className="text-sm text-muted-foreground">
    <span className="font-medium text-foreground">124 jobs</span> · Resume-aware
  </p>
  <select className="rounded-xl border border-border bg-card px-3 py-2 text-sm">
    <option>Most relevant</option>
    <option>Date posted</option>
    <option>Match score</option>
  </select>
</div>
```

## Empty state (no results)

```tsx
<div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
  <h3 className="font-serif text-xl font-medium">No jobs match yet</h3>
  <p className="mt-2 text-sm text-muted-foreground">
    Try broader keywords, remote, or a different location.
  </p>
</div>
```
