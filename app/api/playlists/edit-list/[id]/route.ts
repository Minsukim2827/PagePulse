import { supabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { title, description, isPrivate } = await request.json();
    const { data: updatedPlaylist, error } = await supabase
      .from('playlists')
      .update({
        title,
        description,
        is_private: isPrivate,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()
      .single();
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    return NextResponse.json(updatedPlaylist, { status: 200 });
  }
  