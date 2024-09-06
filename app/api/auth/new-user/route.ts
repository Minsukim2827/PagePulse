import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }

  try {
    // Check if user exists in the database using Supabase
    const { data: dbUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('clerkId', user.id)
      .single();

    if (fetchError) throw fetchError;

    if (!dbUser) {
      // Insert new user if not found
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{
          clerkId: user.id,
          name: user.firstName ?? '',
          lastName: user.lastName ?? '',
          email: user.emailAddresses[0]?.emailAddress ?? '',
        }])
        .single();

      if (insertError) throw insertError;
      return new NextResponse(null, {
        status: 302,
        headers: {
          Location: '/success',
        },
      });
    }

    // Redirect to dashboard after successful operations
    return new NextResponse(null, {
      status: 302,
      headers: {
        Location: '/success',
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
