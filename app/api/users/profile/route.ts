import { getJWTPayload } from "@/app/scripts/auth";
import { sql } from "@/app/scripts/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //getting current users credentials
  const jwtPayload = await getJWTPayload();

  const res = await sql(
    "select id, username, avatar from users where id = $1",
    [jwtPayload.sub]
  );
  const user = res.rows[0];
  if (!user.avatar) {
    user.avatar = '/avatar-default.png'; 
  }
  console.log(user);
  return NextResponse.json({ data: user });
}
