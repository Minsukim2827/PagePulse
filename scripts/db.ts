import {Client} from "pg";
import {loadEnvConfig} from "@next/env";



export async function getClient() {
    const projectDir = process.cwd();
    loadEnvConfig(projectDir);

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT!),
        ssl: {
          rejectUnauthorized: false,
        }});
    
        return client;
}
