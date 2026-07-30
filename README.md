# EnvoyDirect Portfolio

Production portfolio for EnvoyDirect — the umbrella studio behind VeloMail, MetroRate, and RadarAI.

## Features

- Pixel-matched dark glass UI from the v0 design
- Live EST clock in the header
- Copy-to-clipboard contact email (with Instagram in-app browser fallback)
- Interactive VeloMail viewport toggle demo
- Live MetroRate commission calculator
- RadarAI launch link
- Open Graph metadata for Instagram and social link previews
- Mobile-safe layout with `viewport-fit=cover` and safe-area support

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Admin dashboard

Password-protected analytics and quotes inbox at `/admin`.

1. Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` (16+ chars) in `.env.local` and Vercel.
2. In Supabase SQL Editor, run:
   - [`supabase/contact_submissions.sql`](supabase/contact_submissions.sql)
   - [`supabase/page_views.sql`](supabase/page_views.sql)
3. Open `/admin/login` and sign in with `ADMIN_PASSWORD`.

## Deploy

Deploys automatically on Vercel when pushed to the main branch.

```bash
npm run build
npx vercel --prod
```
