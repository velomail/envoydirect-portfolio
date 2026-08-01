# Typography

## Pairing rule

- **Serif (Newsreader)** = authority, headlines, numbers in stats
- **Sans (Geist)** = UI chrome, body, buttons, labels
- **Mono (Geist Mono)** = eyebrows, timestamps, stack tags, fine print

Never use serif for long body paragraphs. Never use mono for headlines.

## Scale

| Element | Classes |
|---------|---------|
| Hero H1 | `font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl` |
| Section H2 | `font-serif text-4xl font-medium tracking-tight sm:text-5xl` |
| Card H3 | `font-serif text-2xl font-medium tracking-tight` |
| Body lead | `text-lg leading-relaxed text-muted-foreground` |
| Body default | `text-base leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed` |
| Body mobile | `text-base leading-7` (hero subcopy on small screens) |
| UI small | `text-sm` |
| Eyebrow | `font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground` |
| Section label | `text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground` |
| Logo | `text-sm font-semibold tracking-[0.12em]` (desktop) |
| Logo mobile | `text-lg font-semibold tracking-[0.14em]` |

## Headline tricks

- Split emphasis: primary phrase + `<span className="text-muted-foreground">` secondary clause
- Use `text-balance` on H1/H2, `text-pretty` on paragraphs
- Max width on copy: `max-w-xl` for leads, `max-w-4xl` for hero titles

## Muted hierarchy

1. `text-foreground` — primary content, names, nav active
2. `text-muted-foreground` — descriptions, meta, inactive nav
3. `font-medium` on labels only when needed for scanability
