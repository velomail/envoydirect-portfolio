# Component Patterns

Copy class strings verbatim unless the spec says otherwise.

## Primary button (CTA)

```tsx
<a className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
  Label
  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</a>
```

## Secondary button

```tsx
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
  Label
</a>
```

## Ghost / outline link button

```tsx
<a className="group inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
  Label
  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</a>
```

## Status pill

```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground">
  <span className="relative flex size-2">
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
    <span className="relative inline-flex size-2 rounded-full bg-success" />
  </span>
  Open for work
</span>
```

## Meta pill (mono)

```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-sm tabular-nums text-muted-foreground">
  EST · 3:42 PM
</span>
```

## Card (content)

```tsx
<div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
  {/* content */}
</div>
```

## Card (feature / list item)

```tsx
<div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
  {/* icon + text */}
</div>
```

## Stat grid

```tsx
<dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
  <div className="bg-card px-6 py-8 sm:px-8 sm:py-10">
    <dt className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">12+</dt>
    <dd className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">Label</dd>
  </div>
</dl>
```

## Tab list (pill switcher)

```tsx
<div role="tablist" className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-card p-1">
  <button
    role="tab"
    className="rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground"
  >
    Active
  </button>
  <button role="tab" className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
    Inactive
  </button>
</div>
```

## Form field

```tsx
<label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
<input
  id="email"
  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 sm:text-sm"
/>
```

## Form error

```tsx
<p className="text-sm text-destructive" role="alert">Message</p>
```

## Stack tag

```tsx
<li className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
  Next.js
</li>
```

## Shipped badge

```tsx
<span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
  Shipped
</span>
```

## Site header (desktop)

```tsx
<header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
  <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
    {/* logo | links | CTA */}
  </nav>
</header>
```

## Site header (mobile)

- Centered brand: `text-lg font-semibold tracking-[0.14em]`
- Subtitle under logo: `font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground`
- No hamburger unless product requires it; prefer hero CTAs for navigation

## Footer

```tsx
<footer className="border-t border-border py-10">
  <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
    {/* brand + links */}
  </div>
</footer>
```

## Empty / preview placeholder

```tsx
<div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
  <span className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
    <ImageIcon className="size-5" />
  </span>
  <p className="font-serif text-2xl font-medium tracking-tight">Preview coming soon</p>
</div>
```
