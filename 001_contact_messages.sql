create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  subject text,
  message text not null
);
alter table public.contact_messages enable row level security;
create index if not exists contact_messages_email_created_idx on public.contact_messages (email, created_at);
