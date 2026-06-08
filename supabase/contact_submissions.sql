-- Run this in Supabase: SQL Editor → New query → Run

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- No public policies: inserts go through your Next.js API using the service role key.
-- Review submissions in Supabase → Table Editor → contact_submissions
