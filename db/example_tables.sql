-- Insert sample data into users table
INSERT INTO users (username, password, email, avatar, is_admin)
VALUES
('user1', 'password1', 'johnjohns@gmail.com', '', false),
('user2', 'password2', 'peterdavis@gmail.com', '', false),
('admin', 'adminpassword', 'ymr123@gmail.com', '', true);

-- Insert sample data into posts table
INSERT INTO posts (user_id, content)
VALUES
(1, 'This is the first post by user1.'),
(2, 'This is the first post by user2.'),
(1, 'This is another post by user1.');

-- Insert sample data into follows table
INSERT INTO follows (user_id, follower_id)
VALUES
(1, 2),
(2, 1),
(1, 3);

-- Insert sample data into playlists table
INSERT INTO playlists (user_id, username, title, is_private, likes, dislikes, views, followers)
VALUES
(1, 'user1', 'Playlist 1', false, 10, 2, 100, ARRAY['user2', 'admin']),
(2, 'user2', 'Playlist 2', true, 5, 1, 50, ARRAY['user1']),
(1, 'user1', 'Playlist 3', false, 20, 3, 200, ARRAY['user2']);

-- Insert sample data into reviews table
INSERT INTO reviews (user_id, playlist_id, image, title, score, genres, notes)
VALUES
(1, 1, '', 'Review 1', 5, ARRAY['rock', 'pop'], 'Great playlist!'),
(2, 2, '', 'Review 2', 4, ARRAY['jazz'], 'Nice selection.'),
(1, 3, '', 'Review 3', 3, ARRAY['classical'], 'Could be better.');