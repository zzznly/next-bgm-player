import { generateRandomString } from "@/utils/auth";
import { NextResponse } from "next/server";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

export async function GET() {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";
  const queryParams = querystring.stringify({
    response_type: "code",
    client_id,
    redirect_uri,
    scope,
    state,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${queryParams}`
  );
}