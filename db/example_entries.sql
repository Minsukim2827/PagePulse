-- Ensure the citext extension is available
CREATE EXTENSION IF NOT EXISTS citext;

-- Create the users table
CREATE TABLE IF NOT EXISTS public.users (
  id BIGSERIAL PRIMARY KEY,
  username CITEXT UNIQUE NOT NULL,
  password TEXT,
  avatar TEXT,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create the posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES public.users (id),
  content TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  is_misinformation BOOLEAN,
  is_misinformation_flagged_at TIMESTAMP
);

-- Create the follows table
CREATE TABLE IF NOT EXISTS public.follows (
  user_id BIGINT NOT NULL REFERENCES public.users (id),
  follower_id BIGINT NOT NULL REFERENCES public.users (id),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, follower_id)
);

-- Create necessary indexes
CREATE INDEX posts_user_id_index ON public.posts (user_id);
CREATE INDEX follows_user_id_index ON public.follows (user_id);
CREATE INDEX follows_follower_id_index ON public.follows (follower_id);

-- Insert sample data into users
INSERT INTO public.users (username, password, avatar, is_admin) VALUES
('user1', 'pass1', 'avatar1', false),
('user2', 'pass2', 'avatar2', true),
('user3', 'pass3', 'avatar3', false),
('user4', 'pass4', 'avatar4', false),
('user5', 'pass5', 'avatar5', true);

-- Insert sample data into posts
INSERT INTO public.posts (user_id, content) VALUES
(1, 'Post content 1'),
(2, 'Post content 2'),
(3, 'Post content 3'),
(4, 'Post content 4'),
(5, 'Post content 5');

-- Insert sample data into follows
INSERT INTO public.follows (user_id, follower_id) VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 4),
(4, 5);
