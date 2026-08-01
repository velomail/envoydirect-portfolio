# Envoy Direct — v0 Theme Kit

Portable design-system package for restyling other apps to match [envoydirect.co](https://envoydirect.co).

**18 files** — under the 20-file v0 limit.

## Quick start in v0

1. Upload or attach this entire `v0-theme-kit` folder to your v0 project/chat.
2. Paste the full contents of **`MASTER_PROMPT.md`** as your first message.
3. Add your app-specific brief second, e.g.:
   > Redesign RadarAI. Envoy brand skin + Indeed/LinkedIn job UX. AI match scores on cards. Keep Supabase auth and all routes.

4. Let the agent output its **Redesign Plan** before code.
5. Verify against **`CHECKLIST.md`** when done.

## File index

| File | Purpose |
|------|---------|
| `MASTER_PROMPT.md` | **Start here** — strict agent instructions |
| `DESIGN-SYSTEM.md` | One-page system overview |
| `tokens.json` | Machine-readable color/radius/type tokens |
| `globals.css` | Drop-in Tailwind v4 theme (OKLCH) |
| `layout.reference.tsx` | Font + viewport setup |
| `utils.ts` | `cn()` helper |
| `section-label.tsx` | Reference section label component |
| `example-shell.page.tsx` | Minimal page scaffold |
| `PLATFORM-REFERENCES.md` | Indeed, Glassdoor, LinkedIn Jobs UX patterns + AI placement |
| `JOB-COMPONENTS.md` | Job cards, search bar, match badges, apply bar |
| `COMPONENTS.md` | Buttons, cards, nav, forms, tabs |
| `TYPOGRAPHY.md` | Type scale and pairing rules |
| `SPACING-AND-LAYOUT.md` | Grid, sections, breakpoints |
| `MOTION-AND-INTERACTION.md` | Reveal, hover, scroll behavior |
| `COPY-AND-TONE.md` | Voice, CTAs, microcopy patterns |
| `DEPENDENCIES.md` | npm packages to match portfolio stack |
| `CHECKLIST.md` | Pre-ship QA for the agent |

## Stack assumed

- Next.js 15+ App Router
- React 19
- Tailwind CSS v4 (`@import "tailwindcss"`)
- `tw-animate-css`, `clsx`, `tailwind-merge`, `lucide-react`
