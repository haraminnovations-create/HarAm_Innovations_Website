-- =============================================
-- HERAM INNOVATIONS — Supabase Schema
-- Run this in the Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────────
-- contacts
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacts (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  name       TEXT        NOT NULL,
  email      TEXT        NOT NULL,
  subject    TEXT        NOT NULL,
  message    TEXT        NOT NULL,
  is_read    BOOLEAN     DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
-- Only service role can read/write (no public access)
CREATE POLICY "Service role only" ON contacts
  USING (false);

-- ─────────────────────────────────────────────
-- newsletter_subscribers
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id            UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  email         TEXT        NOT NULL UNIQUE,
  is_active     BOOLEAN     DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role only" ON newsletter_subscribers
  USING (false);

-- ─────────────────────────────────────────────
-- products
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id          UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       TEXT        NOT NULL,
  category    TEXT        NOT NULL CHECK (category IN ('games', 'agriculture', 'education')),
  description TEXT,
  image_url   TEXT,
  tags        TEXT[]      DEFAULT '{}',
  is_active   BOOLEAN     DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
-- Public can read active products
CREATE POLICY "Public read active products" ON products
  FOR SELECT USING (is_active = true);

-- ─────────────────────────────────────────────
-- blog_posts
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id            UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         TEXT        NOT NULL,
  slug          TEXT        NOT NULL UNIQUE,
  content       TEXT,
  thumbnail_url TEXT,
  category      TEXT,
  author        TEXT        DEFAULT 'HarAm Team',
  is_published  BOOLEAN     DEFAULT false,
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
-- Public can read published posts
CREATE POLICY "Public read published posts" ON blog_posts
  FOR SELECT USING (is_published = true);

-- ─────────────────────────────────────────────
-- Indexes
-- ─────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_products_category  ON products (category);
CREATE INDEX IF NOT EXISTS idx_products_active    ON products (is_active);
CREATE INDEX IF NOT EXISTS idx_blog_slug          ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_published     ON blog_posts (is_published);
CREATE INDEX IF NOT EXISTS idx_contacts_created   ON contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email   ON newsletter_subscribers (email);

-- ─────────────────────────────────────────────
-- Sample seed data
-- ─────────────────────────────────────────────
INSERT INTO products (title, category, description, tags, is_active) VALUES
  ('FarmQuest',    'games',       'Immersive farming simulation that teaches real agricultural concepts.',         ARRAY['Simulation','Strategy','Educational'], true),
  ('BrainBattle',  'games',       'Competitive quiz game covering science, math, and general knowledge.',         ARRAY['Quiz','Multiplayer','Learning'],        true),
  ('EcoBuilder',   'games',       'Build sustainable ecosystems and learn about environmental conservation.',      ARRAY['Puzzle','Strategy','Environment'],      true),
  ('CropSense',    'agriculture', 'AI-powered crop monitoring using satellite imagery and IoT sensors.',           ARRAY['AI/ML','IoT','Crop Monitoring'],        true),
  ('FarmerConnect','agriculture', 'Direct market linkage platform connecting farmers to buyers.',                  ARRAY['Marketplace','Mobile App','B2B'],       true),
  ('SoilIQ',       'agriculture', 'Smart soil testing kit with real-time analysis and fertilizer recommendations.',ARRAY['Hardware','Analytics','Sustainability'],true),
  ('LearnLab',     'education',   'Interactive STEM learning platform for students aged 8-18.',                    ARRAY['STEM','K-12','Interactive'],            true),
  ('SkillBridge',  'education',   'Vocational training platform for rural youth to gain market-ready skills.',     ARRAY['Vocational','Rural','Certification'],   true),
  ('TeacherOS',    'education',   'Classroom management platform for teachers in low-connectivity areas.',         ARRAY['EdTech','Teachers','Offline-first'],    true);
