import { NextResponse } from 'next/server';
import {sql} from "@/scripts/db"

export async function GET() {

    try {
        const { rows } = await sql('SELECT * FROM public.users');
        return NextResponse.json(rows);
    } catch (err) {
        console.error('Database query error', err);
        return new NextResponse('Internal Server Error', { status: 500 });
    } 
}
