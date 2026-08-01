# Spacing & Layout

## Containers

| Token | Value |
|-------|-------|
| Page max | `max-w-6xl` (1152px logical) |
| Work / wide panels | `max-w-5xl` |
| Prose / lead | `max-w-xl` |
| Hero title | `max-w-4xl` |
| Horizontal pad | `px-5 sm:px-8` |

Always center: `mx-auto`.

## Section rhythm

```tsx
<section className="scroll-mt-20 border-t border-border py-20 sm:py-28">
```

Alternate backgrounds sparingly:

- Default: `bg-background`
- Emphasis band: `bg-secondary/40` (contact, CTA sections)

## Hero spacing

```tsx
<section className="relative overflow-hidden pb-20 pt-[5.75rem] sm:pb-28 sm:pt-36 md:pt-28">
```

Account for fixed header height on mobile when header stacks logo + subtitle.

## Grids

| Pattern | Classes |
|---------|---------|
| Two-col content | `grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16` |
| Services cards | `grid gap-5 sm:grid-cols-2 lg:grid-cols-3` |
| About points | `grid gap-3 sm:grid-cols-2` |
| CTA row | `flex flex-col gap-3 sm:flex-row sm:items-center` |
| Badge row | `flex flex-wrap items-center gap-2.5` |

## Breakpoint policy

| Breakpoint | Behavior |
|------------|----------|
| `< md` (768px) | Mobile layout rules — centered header, no nav links, 16px form text |
| `md+` | Full desktop nav, eyebrow in hero, original spacing |
| `sm` (640px) | Intermediate typography scale-up only — do not change desktop structure |

**Rule**: mobile overrides use unprefixed or `max-md:` classes; restore desktop with `md:` exactly as portfolio.

## Z-index

- Fixed header: `z-50`
- Decorative blur orb: `-z-10`
- Tab list above panels: `z-20` when overlap risk

## Safe areas

Body uses `env(safe-area-inset-*)` — do not remove on iOS builds.
