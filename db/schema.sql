-- SQL Code to set up the schema
-- Ensure the extension for generating UUIDs is available
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(16) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    avatar TEXT,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Posts Table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Follows Table
CREATE TABLE IF NOT EXISTS follows (
    user_id INTEGER NOT NULL REFERENCES users(id),
    follower_id INTEGER NOT NULL REFERENCES users(id),
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, follower_id)
);

-- Playlists Table
CREATE TABLE IF NOT EXISTS playlists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    username VARCHAR(16) NOT NULL REFERENCES users(username),
    title VARCHAR(50) NOT NULL,
    is_private BOOLEAN DEFAULT false,
    likes INTEGER DEFAULT 0,
    dislikes INTEGER DEFAULT 0,
    views BIGINT DEFAULT 0,
    followers INTEGER[] DEFAULT '{}',
    follower_count INTEGER GENERATED ALWAYS AS (array_length(followers, 1)) STORED,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Review Table
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    playlist_id INTEGER NOT NULL REFERENCES playlists(id),
    image TEXT DEFAULT NULL,
    title VARCHAR(50) NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 5),
    genres TEXT[] DEFAULT ARRAY['unknown'],
    notes TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE TABLE user_session (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id TEXT NOT NULL REFERENCES users(id)
)

CREATE TABLE IF NOT EXISTS user_session (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),  -- Generate a UUID as the session ID
    expires_at TIMESTAMPTZ NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id)     -- Make sure user_id refers to the users table
);
