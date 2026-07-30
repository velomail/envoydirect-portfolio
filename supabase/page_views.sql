-- Run this in Supabase: SQL Editor → New query → Run
-- Custom visitor / page-view counter for the Envoy Direct admin dashboard

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  visitor_id text not null,
  referrer text,
  created_at timestamptz not null default now()
);

create index if not exists page_views_created_at_idx
  on public.page_views (created_at desc);

create index if not exists page_views_visitor_id_idx
  on public.page_views (visitor_id);

create index if not exists page_views_path_idx
  on public.page_views (path);

alter table public.page_views enable row level security;

-- No public policies: inserts go through Next.js API using the service role key.
-- Review analytics in the portfolio /admin dashboard.
