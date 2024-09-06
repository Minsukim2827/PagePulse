import { currentUser } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  // Get the current user from Clerk
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  // Extract the Clerk ID from the user object
  const clerkId = user.id;

  // Fetch the user from Supabase using their Clerk ID
  const { data: existingUser, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (userError || !existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const userId = existingUser.id;

  // Fetch the current user's posts
  const { data: userPosts, error: postsError } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', userId);

  if (postsError) {
    return NextResponse.json({ error: 'Error fetching user posts' }, { status: 500 });
  }

  // Fetch the list of users the current user is following
  const { data: following, error: followsError } = await supabase
    .from('follows')
    .select('user_id')
    .eq('follower_id', userId);

  if (followsError) {
    return NextResponse.json({ error: 'Error fetching following users' }, { status: 500 });
  }

  // Get posts of users the current user is following
  const followingIds = following.map(f => f.user_id);

  let followingPosts = [];
  if (followingIds.length > 0) {
    const { data: postsOfFollowedUsers, error: followPostsError } = await supabase
      .from('posts')
      .select('*')
      .in('user_id', followingIds);

    if (followPostsError) {
      return NextResponse.json({ error: 'Error fetching posts of followed users' }, { status: 500 });
    }

    followingPosts = postsOfFollowedUsers;
  }

  // Combine current user posts and followed user posts
  const allPosts = [...userPosts, ...followingPosts];

  // Sort posts by created_at date in descending order (newest first)
  allPosts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return NextResponse.json(allPosts);
}
