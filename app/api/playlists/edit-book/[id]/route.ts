import { supabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { score, notes } = await request.json();
    const { data: updatedReview, error } = await supabase
      .from('reviews')
      .update({
        score,
        notes,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()
      .single();
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    return NextResponse.json(updatedReview, { status: 200 });
  }
  