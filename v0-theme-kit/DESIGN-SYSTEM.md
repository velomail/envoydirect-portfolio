# Design System — Envoy Direct

## Aesthetic

Warm cream minimal studio. Editorial serif headlines on utilitarian sans body. Quiet green accent. No dark mode in the portfolio reference. Feels like a senior independent developer's site — credible, calm, hire-ready.

## Color personality

- **Background**: near-white cream `oklch(0.992 0.003 95)`
- **Foreground**: deep blue-gray ink `oklch(0.23 0.035 256)`
- **Primary**: same ink family — buttons, emphasis
- **Accent**: soft sage wash for highlights and selection
- **Success**: green dot for "available" / live status
- **Borders**: light gray-blue hairlines, never heavy

## Font roles

| Role | Family | Usage |
|------|--------|-------|
| Sans | Geist Sans | UI, body, buttons, nav |
| Serif | Newsreader | H1–H3, stat numbers, card titles |
| Mono | Geist Mono | Eyebrows, timestamps, stack tags |

## Shape language

- Pills: CTAs, badges, filters, status chips
- Large cards: `rounded-2xl` or `rounded-3xl` with `border border-border`
- Inputs: `rounded-xl`
- Base radius token: `0.75rem`

## Layout constants

```
Container: mx-auto max-w-6xl px-5 sm:px-8
Wide content: max-w-5xl (work panels)
Narrow copy: max-w-xl
Section: py-20 sm:py-28 border-t border-border
Scroll offset: scroll-mt-20 on anchored sections
```

## Signature elements

1. Section label: line + uppercase label (`SectionLabel`)
2. Hero glow: `bg-accent/40 blur-3xl` orb top-right
3. Status pill: green ping dot + "Open for work"
4. Stat grid: 3-col `gap-px` with `bg-border` faux dividers
5. Primary CTA: dark pill + arrow that nudges on hover

## Job app split

| Surface | Design mode |
|---------|-------------|
| Landing, pricing, privacy | Full Envoy studio — serif hero, feature cards, cream minimal |
| Dashboard, search, results, detail | Platform UX (Indeed/LinkedIn IA) + Envoy tokens |
| AI blocks | Accent/success badges, summary cards — see `JOB-COMPONENTS.md` |

## Do / Don't

**Do**: generous whitespace, `text-balance`/`text-pretty`, semantic HTML, skip link, focus rings, familiar job-board labels ("Search jobs", "Save", "Apply").

**Don't**: drop shadows on cards, gradient text, Inter/Roboto, sharp `rounded-md` only UI, cramped mobile type, neon colors, carousel heroes, chat-only job UI, Indeed-blue or LinkedIn-blue brand theft.
