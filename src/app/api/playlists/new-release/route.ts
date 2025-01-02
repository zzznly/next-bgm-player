import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const access_token = request.headers.get("Authorization")?.split(" ")[1];
    const response = await fetch(
      `${process.env.SPOTIFY_BASE_URL}/browse/new-releases`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const data = await response.json();
    console.log("## new-release api response: ", response);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tokens" },
      { status: 500 }
    );
  }
}
