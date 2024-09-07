import { supabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  // First, retrieve the actual user_id from the users table using clerkId
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', user.id)
    .single();

  if (userError || !userData) {
    console.error('Failed to retrieve user:', userError?.message);
    return NextResponse.json({ error: 'Failed to retrieve user' }, { status: 500 });
  }

  const { title, description, isPrivate } = await request.json();
  console.log(`Inserting playlist for user ${user.username} with ID ${userData.id}`);
  
  const { data: newPlaylist, error } = await supabase
    .from('playlists')
    .insert({
      user_id: userData.id, // Use the actual user_id retrieved from users table
      username: user.username,
      title,
      description,
      is_private: isPrivate
    })
    .select()
    .single();

  if (error) {
    console.error('Error inserting playlist:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(newPlaylist, { status: 201 });
}
