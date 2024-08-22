import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
    // Create a new client instance
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT!),
        ssl: {
            rejectUnauthorized: false 
        }
    });

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
