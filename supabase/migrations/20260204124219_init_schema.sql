CREATE TABLE items (
  id uuid primary key default gen_random_uuid(),
  name text,
  created_at timestamptz default now()
);