# Motion & Interaction

## Philosophy

Motion confirms affordance — never decorates. Subtle vertical lift on primary CTAs, fade-in on scroll for below-fold content, ping on live status dot.

## CTA hover

```tsx
transition-transform hover:-translate-y-0.5
```

Arrow icon nudge (group pattern):

```tsx
group-hover:translate-x-0.5 group-hover:-translate-y-0.5
```

## Scroll reveal (optional)

Portfolio uses a `Reveal` wrapper:

- Default visible (SSR-safe)
- Below-fold: `translate-y-6 opacity-0 blur-[2px]` → `translate-y-0 opacity-100 blur-0`
- Duration: `700ms ease-out`
- Stagger via `delay` prop (60ms increments)
- **Disable animation** when `prefers-reduced-motion: reduce`

## Header on scroll

```tsx
scrolled
  ? "border-b border-border bg-background/80 backdrop-blur-md"
  : "border-b border-transparent bg-background/0"
```

Threshold: `window.scrollY > 12`.

## Nav active section

`IntersectionObserver` with `rootMargin: "-45% 0px -50% 0px"` — underline grows on active link.

## Tabs

Instant swap with `hidden` attribute on panels — no slide animations. Selected tab: `bg-primary text-primary-foreground`.

## Forms

- Loading: spinner + disabled button at `opacity-70`
- Success: replace form with centered check + serif confirmation heading
- No shake animations on errors — text only `text-destructive`

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

Strip `animate-ping`, `blur`, and `translate` transitions when reduced motion is preferred.
