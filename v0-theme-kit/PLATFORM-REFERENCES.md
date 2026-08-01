# Platform UX References — Job Search Apps

Use this file when the target app is a **job board, job search utility, or career tool** (e.g. RadarAI). The product adds **AI for better matching** — it does **not** reinvent how job platforms work. Users should feel at home on day one.

## Two-layer design model

| Layer | Source | What to copy |
|-------|--------|--------------|
| **Brand skin** | Envoy Direct kit (`globals.css`, typography, spacing) | Colors, fonts, radius, motion, studio polish |
| **UX skeleton** | Indeed, Glassdoor, LinkedIn Jobs, etc. | Layout, IA, component placement, labels users already know |

**Do not** copy platform brand colors (Indeed blue, LinkedIn blue). **Do** copy their mental models, field order, and interaction patterns — then apply Envoy tokens on top.

---

## Reference platforms

### Indeed — [indeed.com](https://www.indeed.com)

**Best for**: search-first flows, high-volume results, mobile job hunting.

| Pattern | Implementation |
|---------|----------------|
| Hero search | Two fields prominent above fold: **What** (job title/keywords) + **Where** (city/remote) + single Search CTA |
| Results list | Vertical stack of job cards; scan-friendly; newest/relevance sort dropdown |
| Job card | **Title** (largest), company name, location, salary snippet if known, 1–2 line description, posted date |
| Quick actions | Save, share, apply — visible without opening detail |
| Filters | Left sidebar desktop / bottom sheet or slide-over mobile: date posted, salary, job type, experience level |
| Detail page | Title block → company → metadata row → full description → apply CTA sticky on mobile |

### Glassdoor — [glassdoor.com](https://www.glassdoor.com)

**Best for**: company context, trust signals, salary transparency.

| Pattern | Implementation |
|---------|----------------|
| Company block | Logo + company name + **star rating** + review count when available |
| Job card | Company prominence equal to title; "Easy Apply" badge; salary range highlighted |
| Tabs on detail | Overview / Reviews / Salaries / Jobs — use tabs or sections for company intel |
| Salary | Show range or estimate inline on card when data exists — users expect it |
| Trust copy | "Your data stays yours" style privacy callouts near forms |

### LinkedIn Jobs — [linkedin.com/jobs](https://www.linkedin.com/jobs)

**Best for**: professional tone, saved jobs, filter chips, application state.

| Pattern | Implementation |
|---------|----------------|
| Filter chips | Horizontal scroll: Remote, Full-time, Entry level, Date posted — pill toggles |
| Job card | Logo left, title + company stacked, location, **promoted** or **Easy Apply** tags |
| Metadata row | Icons + text: location, salary, job type, applicants (if shown) |
| Save job | Bookmark icon top-right of card — filled when saved |
| List + detail | Master-detail on desktop (list left, preview right); full page on mobile |
| Alerts | "Create job alert" after search — email/notify pattern |

### ZipRecruiter — [ziprecruiter.com](https://www.ziprecruiter.com)

**Best for**: mobile apply, urgency without spam.

| Pattern | Implementation |
|---------|----------------|
| One-tap apply | Minimize steps when resume on file; clear progress |
| Notification opt-in | Post-search prompt for alerts — optional, not blocking |
| Card density | Slightly tighter cards than Indeed; still thumb-friendly |

### Google Jobs / aggregator pattern

**Best for**: RadarAI-style aggregation from Adzuna/APIs.

| Pattern | Implementation |
|---------|----------------|
| Source attribution | Small label: "via Adzuna" / source name — don't hide aggregator origin |
| Deduped results | Same role at same company — merge or flag duplicates |
| Freshness | "Posted 2d ago" relative timestamps |

---

## AI differentiation (your value-add)

Layer these **on top of** standard platform cards — don't replace familiar structure.

| AI feature | Placement | Pattern |
|------------|-----------|---------|
| **Match score** | Top-right of job card + hero of detail page | Badge: `87% match` — use `bg-accent text-accent-foreground` or success tier |
| **Role summary** | First block on detail page, before raw description | Plain-English "What you'd actually do" — card with serif subheading |
| **Experience comparison** | Below summary on detail | Two columns or stacked: **Strengths** (check icons) + **Gaps** (neutral flags) |
| **Resume-aware label** | Near search or results header | Mono eyebrow: "Resume-aware results" |
| **Scan on demand** | Dashboard CTA, not background cron | "Run search" button — user-initiated (free tier); no fake "scanning 24/7" unless Pro |

Match score tiers (Envoy tokens):

- **Strong** (80%+): `success` accent
- **Good** (60–79%): `accent`
- **Fair** (<60%): `muted-foreground` — still show, don't hide

---

## Page templates (job apps)

### 1. Marketing / landing (studio layer)

Use full Envoy portfolio patterns: serif hero, cream background, feature cards, privacy box. Reference: [envoydirect.co](https://envoydirect.co) + [RadarAI landing](https://web-ashen-sigma-71.vercel.app/).

### 2. Dashboard / search (platform layer)

```
[ Logo ]                    [ Sign in | Avatar ]

[ What: job title    ] [ Where: location ] [ Search ]

( Filter chips: Remote · Full-time · Posted 7d )

┌─────────────────────────────────────────────┐
│ Software Engineer          [ 87% match ]    │
│ Acme Inc · Toronto · $90–110k · 2d ago      │
│ AI summary: You'd build API services for…   │
│ [ Save ]  [ View ]              [ Apply → ] │
└─────────────────────────────────────────────┘
```

### 3. Job detail (platform + AI layer)

```
← Back to results

Senior Developer                    [ 87% match ]
Acme Inc · Toronto · Full-time · Posted 3d ago

┌─ Role summary (AI) ─────────────────────────┐
│ Plain-English what you'd do day-to-day      │
└─────────────────────────────────────────────┘

┌─ Your fit (AI) ─────────────────────────────┐
│ ✓ 5 years React    ✓ PostgreSQL             │
│ △ Missing: Kubernetes (nice-to-have)        │
└─────────────────────────────────────────────┘

Full posting (collapsible or below fold)
[ Apply ]  [ Save ]  [ Share ]
```

### 4. Auth / onboarding (hybrid)

Indeed-simple forms: email/password, resume upload prominent. Envoy styling: `rounded-xl` inputs, cream bg, privacy bullets (Glassdoor-style trust).

---

## Component mapping → `COMPONENTS.md`

Add these job-specific components when building search apps:

- `JobSearchBar` — Indeed dual-input pattern
- `FilterChipRow` — LinkedIn horizontal pills
- `JobCard` — title, company, meta row, AI summary line, match badge
- `JobDetailHeader` — title + company + metadata
- `MatchScoreBadge` — percentage pill
- `RoleSummaryCard` — AI plain-English block
- `FitComparisonPanel` — strengths / gaps lists
- `SavedJobButton` — bookmark toggle

---

## Anti-patterns for job apps

- ❌ Chat-only UI with no job list (users expect lists)
- ❌ Hiding company name or location to show AI first
- ❌ Match score as only sort with no relevance/date option
- ❌ Forcing signup before showing a single result (show teasers)
- ❌ Dark hacker aesthetic for a mainstream job tool
- ❌ Inventing new labels ("Opportunity units", "Talent nodes")
- ❌ Auto-playing AI voice or chat widget on landing

---

## Redesign Plan requirement (job apps)

When the target is a job platform, Phase 1 plan **must** include:

1. Which reference platform each screen maps to (Indeed card → our card, etc.)
2. Where AI surfaces sit relative to standard fields (never replace title/company/location)
3. Mobile job card and sticky apply bar wireframe
4. Filter/sort behavior table
5. Empty states: no results, no resume, search limit reached
