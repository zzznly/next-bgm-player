import { setCookie } from "cookies-next";
import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (state === null) {
    return NextResponse.redirect(new URL(`/?error=state_mismatch`, req.url));
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: new URLSearchParams({
        code: code || "",
        redirect_uri: redirect_uri || "",
        grant_type: "authorization_code",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();

    setCookie("refresh_token", data.refresh_token, {
      req,
      res: NextResponse.next(),
      path: "/",
      maxAge: 2592000, // 30일
      httpOnly: true,
      secure: true, //process.env.NODE_ENV === "production"
      sameSite: "lax",
    });

    setCookie("access_token", data.access_token, {
      req,
      res: NextResponse.next(),
      path: "/",
      maxAge: 3600,
      httpOnly: false, // Allow client access
      secure: false, //process.env.NODE_ENV === "production"
      sameSite: "lax",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tokens" },
      { status: 500 }
    );
  }
}
