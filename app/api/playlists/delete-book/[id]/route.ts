import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Book review deleted successfully' }, { status: 200 });
}
