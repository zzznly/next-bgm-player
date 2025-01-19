import { deleteCookie, setCookie } from "cookies-next";

export const saveAccessToken = (accessToken: string) => {
  setCookie("access_token", accessToken, { path: "/" });
};

export const removeAccessToken = () => {
  deleteCookie("access_token", { path: "/" });
};

export const saveTokenParams = (params: any) => {
  setCookie("access_token", params.access_token ?? "");
  setCookie("expires_in", params.expires_in ?? "");
};

export const removeTokenParams = () => {
  deleteCookie("access_token");
  deleteCookie("expires_in");
  deleteCookie("refresh_token");
};

export const getSpotifyAuthUrl = () => {
  const params = {
    response_type: "token",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope: [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
      "streaming",
      "user-read-email",
      "user-read-private",
    ].join("%20"),
    show_dialog: "true",
  };

  return `${process.env.SPOTIFY_AUTHORIZE_URL}?${new URLSearchParams(
    params
  ).toString()}`;
};