import { supabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('playlist_id', params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
    const { error: playlistError } = await supabase
      .from('playlists')
      .delete()
      .eq('id', params.id);
  
    if (playlistError) {
      return NextResponse.json({ error: playlistError.message }, { status: 500 });
    }
  
    return NextResponse.json({ message: 'Playlist and associated books deleted' }, { status: 200 });
  }
  