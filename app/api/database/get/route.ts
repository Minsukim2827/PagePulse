import { NextResponse } from 'next/server';
import {getClient} from "@/scripts/db"

export async function GET() {
    // Create a new client instance
    const client = await getClient();

    try {

        await client.connect();

        const { rows } = await client.query('SELECT * FROM public.users');
        return NextResponse.json(rows);
    } catch (err) {
        console.error('Database query error', err);
        return new NextResponse('Internal Server Error', { status: 500 });
    } finally {
        await client.end();
    }
}
