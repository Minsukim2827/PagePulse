// /app/api/get-profile/route.ts
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
  // Get the current user from Clerk
  const user = await currentUser();

  // If the user is not authenticated, return a 401 Unauthorized
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Extract the username and avatar (imageUrl)
  const userProfile = {
    username: user.username,
    avatar: user.imageUrl || '@/public/avatar-default.png',
    created: user.createdAt,
  };

  // Return the username and avatar as a JSON response
  return NextResponse.json(userProfile);
}
