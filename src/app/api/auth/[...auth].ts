import { NextApiRequest, NextApiResponse } from "next";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === "GET" && query.auth === "login") {
    const authUrl = `${AUTH_ENDPOINT}?response_type=code&client_id=${CLIENT_ID}&scope=user-read-private user-read-email&redirect_uri=${REDIRECT_URI}`;
    res.redirect(authUrl);
  }

  if (method === "GET" && query.auth === "callback") {
    const { code } = query;

    try {
      const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: code as string,
          redirect_uri: REDIRECT_URI,
        }),
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Failed to exchange code for token" });
    }
  }
}
