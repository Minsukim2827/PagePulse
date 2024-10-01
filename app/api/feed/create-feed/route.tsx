import { currentUser } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      console.error('User not authenticated');
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const { content } = await request.json();

    // Fetch the user from Supabase
    const { data: existingUser, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', user.id)
      .single();

    if (userError || !existingUser) {
      console.error('User not found:', userError);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
console.log(existingUser)
    // Insert the new post into the database
    const { error: insertError } = await supabase
      .from('posts')
      .insert({
        user_id: existingUser.id,
        content,
        created_at: new Date().toISOString(),
        username: existingUser.username,
      });

    if (insertError) {
      console.error('Error inserting post:', insertError);
      return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
