// File: /api/feed/delete-feed.ts

import { currentUser } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  const { postId } = await request.json();

  // Fetch the user from Supabase
  const { data: existingUser, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', user.id)
    .single();

  if (userError || !existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Delete the post
  const { error: deleteError } = await supabase
    .from('posts')
    .delete()
    .eq('id', postId)
    .eq('user_id', existingUser.id);

  if (deleteError) {
    return NextResponse.json({ error: 'Error deleting post' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
