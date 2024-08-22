import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import {getClient} from "@/scripts/db"

export async function POST(request: NextRequest) {
  const client = await getClient();

  try {
    await client.connect();

    const randomPassword = faker.internet.password();
    const hash = await bcrypt.hash(randomPassword, 10);

    // Execute the query
    const { rows } = await client.query(
      "INSERT INTO public.users (username, password, avatar, is_admin) VALUES ($1, $2, $3, $4) RETURNING *",
      [faker.internet.displayName(), hash, faker.image.avatar(), false]
    );

    return NextResponse.json(rows[0], { status: 201 });
  } catch (err) {
    console.error("Database query error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
