import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch("https://open.spotify.com/logout", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch refresh token: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tokens" },
      { status: 500 }
    );
  }
}
