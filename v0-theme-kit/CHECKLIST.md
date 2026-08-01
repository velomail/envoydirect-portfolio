# Redesign Checklist

Agent must verify every item before marking complete.

## Foundation

- [ ] `globals.css` OKLCH tokens match kit exactly (no hex overrides)
- [ ] Geist Sans, Geist Mono, Newsreader loaded via `next/font`
- [ ] `themeColor` is `#faf9f7`
- [ ] `cn()` utility present
- [ ] `tw-animate-css` imported
- [ ] Skip link to `#main-content` exists

## Typography

- [ ] All H1–H3 use `font-serif` (Newsreader)
- [ ] Body uses `font-sans`; eyebrows use `font-mono`
- [ ] No font smaller than 16px on mobile form inputs
- [ ] Headlines use `text-balance` or `text-pretty` where appropriate

## Components

- [ ] Primary buttons are `rounded-full bg-primary` with arrow icon
- [ ] Cards use `border border-border` + `rounded-2xl` or `rounded-3xl`
- [ ] No heavy drop shadows on cards
- [ ] Status/live indicators use `bg-success` ping dot pattern
- [ ] Stack/tags use `font-mono text-xs` pills

## Layout

- [ ] Page container `max-w-6xl mx-auto px-5 sm:px-8`
- [ ] Sections `py-20 sm:py-28`
- [ ] Anchored sections `scroll-mt-20`
- [ ] Mobile: no horizontal overflow (`overflow-x: clip`)
- [ ] Desktop layout unchanged from pre-mobile-adaptation spec

## Mobile

- [ ] Header brand centered; subtitle under logo if applicable
- [ ] Hero subcopy `text-base leading-7` on small screens
- [ ] Form fields `text-base sm:text-sm`
- [ ] Touch targets ≥ 44px height on primary actions

## Motion & a11y

- [ ] Focus rings on all interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] Form labels tied with `htmlFor` / `id`
- [ ] Images have meaningful `alt` text
- [ ] Tab components use proper `role="tablist"` / `role="tabpanel"`

## Functionality

- [ ] All original routes and features still work
- [ ] API calls / auth flows unchanged
- [ ] External links use `rel="noopener noreferrer"`

## Job platform UX (if applicable)

- [ ] Search bar uses What + Where + Search (Indeed pattern)
- [ ] Job cards show title → company → location → salary/date before AI text
- [ ] Match score badge visible on card and detail — not the only metadata
- [ ] Role summary + fit comparison on detail page above raw posting
- [ ] Filter chips or sidebar filters present
- [ ] Sort includes relevance, date, and match score
- [ ] Save/bookmark and apply actions on cards
- [ ] Sticky apply bar on mobile detail view
- [ ] Empty states for no results, no resume, rate limit
- [ ] Platform IA from `PLATFORM-REFERENCES.md` — not chat-only UI
- [ ] Envoy tokens applied — not Indeed blue / LinkedIn blue

## Deliverables

- [ ] Redesign Plan was written before code (includes platform mapping for job apps)
- [ ] Changelog lists pages touched
- [ ] No generic AI aesthetic drift (purple gradients, etc.)
