-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create custom types
create type user_role as enum ('creator', 'fan');
create type pricing_tier as enum ('free', 'basic', 'premium', 'vip');
create type subscription_status as enum ('active', 'cancelled', 'past_due', 'incomplete');
create type content_type as enum ('video', 'image', 'audio', 'text', 'pdf', 'live');

-- Categories table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique,
  slug text not null unique,
  description text,
  icon text,
  creator_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Users table (extends auth.users)
create table public.users (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text not null,
  role user_role not null default 'fan',
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Creators table
create table public.creators (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null unique,
  category_id uuid references public.categories(id) on delete set null,
  display_name text not null,
  description text,
  pricing_tier pricing_tier default 'basic',
  monthly_price decimal(10,2),
  subscriber_count integer default 0,
  rating decimal(3,2) default 0.0,
  verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Subscriptions table
create table public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  fan_id uuid references public.users(id) on delete cascade not null,
  creator_id uuid references public.creators(id) on delete cascade not null,
  status subscription_status default 'active',
  tier pricing_tier not null,
  start_date timestamp with time zone default timezone('utc'::text, now()) not null,
  end_date timestamp with time zone,
  stripe_subscription_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(fan_id, creator_id)
);

-- Content table
create table public.content (
  id uuid default uuid_generate_v4() primary key,
  creator_id uuid references public.creators(id) on delete cascade not null,
  title text not null,
  description text,
  content_type content_type not null,
  media_url text,
  thumbnail_url text,
  duration integer, -- in seconds
  tier_required pricing_tier default 'free',
  view_count integer default 0,
  like_count integer default 0,
  is_published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content likes table
create table public.content_likes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  content_id uuid references public.content(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, content_id)
);

-- Messages table (for creator-fan communication)
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references public.users(id) on delete cascade not null,
  recipient_id uuid references public.users(id) on delete cascade not null,
  content text not null,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Contact messages table
create table public.contact_messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  is_resolved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Blog posts table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  featured_image_url text,
  author_id uuid references public.users(id) on delete set null,
  is_published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Help articles table
create table public.help_articles (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text not null,
  category text not null,
  order_index integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for better performance
create index idx_users_role on public.users(role);
create index idx_users_email on public.users(email);
create index idx_creators_category on public.creators(category_id);
create index idx_creators_verified on public.creators(verified);
create index idx_subscriptions_fan on public.subscriptions(fan_id);
create index idx_subscriptions_creator on public.subscriptions(creator_id);
create index idx_subscriptions_status on public.subscriptions(status);
create index idx_content_creator on public.content(creator_id);
create index idx_content_published on public.content(is_published);
create index idx_content_tier on public.content(tier_required);
create index idx_messages_recipient on public.messages(recipient_id);
create index idx_messages_sender on public.messages(sender_id);
create index idx_blog_posts_published on public.blog_posts(is_published);
create index idx_help_articles_category on public.help_articles(category);

-- Row Level Security (RLS)
alter table public.users enable row level security;
alter table public.creators enable row level security;
alter table public.subscriptions enable row level security;
alter table public.content enable row level security;
alter table public.content_likes enable row level security;
alter table public.messages enable row level security;
alter table public.contact_messages enable row level security;
alter table public.blog_posts enable row level security;
alter table public.help_articles enable row level security;

-- RLS Policies

-- Users can read their own data and public creator profiles
create policy "Users can read own data" on public.users for select using (auth.uid() = id);
create policy "Users can update own data" on public.users for update using (auth.uid() = id);
create policy "Users can read creator profiles" on public.users for select using (role = 'creator');

-- Creators can manage their own profile
create policy "Creators can read own profile" on public.creators for select using (user_id = auth.uid());
create policy "Creators can update own profile" on public.creators for update using (user_id = auth.uid());
create policy "Anyone can read published creator profiles" on public.creators for select using (true);

-- Subscription policies
create policy "Users can read own subscriptions" on public.subscriptions for select using (fan_id = auth.uid());
create policy "Creators can read their subscriptions" on public.subscriptions for select using (creator_id in (select id from public.creators where user_id = auth.uid()));
create policy "Users can create subscriptions" on public.subscriptions for insert with check (fan_id = auth.uid());
create policy "Users can update own subscriptions" on public.subscriptions for update using (fan_id = auth.uid());

-- Content policies
create policy "Creators can manage own content" on public.content for all using (creator_id in (select id from public.creators where user_id = auth.uid()));
create policy "Users can read published content" on public.content for select using (is_published = true);
create policy "Subscribers can read creator content" on public.content for select using (
  is_published = true and (
    tier_required = 'free' or
    creator_id in (
      select creator_id from public.subscriptions
      where fan_id = auth.uid() and status = 'active'
    )
  )
);

-- Content likes policies
create policy "Users can manage own likes" on public.content_likes for all using (user_id = auth.uid());
create policy "Users can read all likes" on public.content_likes for select using (true);

-- Message policies
create policy "Users can read own messages" on public.messages for select using (sender_id = auth.uid() or recipient_id = auth.uid());
create policy "Users can send messages" on public.messages for insert with check (sender_id = auth.uid());
create policy "Users can update own messages" on public.messages for update using (recipient_id = auth.uid());

-- Public content policies
create policy "Anyone can read categories" on public.categories for select using (true);
create policy "Anyone can read published blog posts" on public.blog_posts for select using (is_published = true);
create policy "Anyone can read help articles" on public.help_articles for select using (is_published = true);
create policy "Anyone can create contact messages" on public.contact_messages for insert with check (true);

-- Functions to handle updated_at timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger handle_users_updated_at before update on public.users for each row execute procedure public.handle_updated_at();
create trigger handle_creators_updated_at before update on public.creators for each row execute procedure public.handle_updated_at();
create trigger handle_subscriptions_updated_at before update on public.subscriptions for each row execute procedure public.handle_updated_at();
create trigger handle_content_updated_at before update on public.content for each row execute procedure public.handle_updated_at();
create trigger handle_blog_posts_updated_at before update on public.blog_posts for each row execute procedure public.handle_updated_at();
create trigger handle_help_articles_updated_at before update on public.help_articles for each row execute procedure public.handle_updated_at();

-- Function to create user profile after signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Insert sample data
insert into public.categories (name, slug, description, icon, creator_count) values
  ('Fitness', 'fitness', 'Health and fitness content creators', 'dumbbell', 245),
  ('Art', 'art', 'Digital and traditional art tutorials', 'palette', 189),
  ('Cooking', 'cooking', 'Culinary tutorials and recipes', 'chef-hat', 156),
  ('Music', 'music', 'Music production and performance', 'music', 203),
  ('Education', 'education', 'Educational content and tutorials', 'book', 298),
  ('Gaming', 'gaming', 'Gaming content and streaming', 'gamepad-2', 167),
  ('Photography', 'photography', 'Photography tips and techniques', 'camera', 134),
  ('Technology', 'technology', 'Tech reviews and tutorials', 'laptop', 178);
