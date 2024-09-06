import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  // Get the current user from Clerk
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  // Extract the Clerk ID from the user object
  const clerkId = user.id;

  // Check if the user already exists in the Supabase database
  const { data: existingUser, error } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is the code for "No rows found"
    console.error('Error checking user in Supabase:', error);
    return NextResponse.json({ error: 'Error checking user in database' }, { status: 500 });
  }

  if (existingUser) {
    // User already exists, return a success message
    return NextResponse.json({ message: 'User already exists' });
  }

  // If the user does not exist, insert a new user into the database
  const { error: insertError } = await supabase
    .from('users')
    .insert([
      {
        clerk_id: clerkId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);

  if (insertError) {
    console.error('Error inserting user into Supabase:', insertError);
    return NextResponse.json({ error: 'Error inserting user into database' }, { status: 500 });
  }

  // Return a success message if the user was successfully created
  return NextResponse.json({ message: 'User created successfully' });
}
