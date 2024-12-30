import { deleteCookie, setCookie } from "cookies-next";

export const saveToken = (token: string) => {
  setCookie("access_token", token);
};
export const removeToken = () => {
  deleteCookie("access_token");
};

export const saveTokenParams = (params: any) => {
  setCookie("access_token", params.access_token ?? "");
  setCookie("refresh_token", params.refresh_token ?? "");
  setCookie("expires_in", params.expires_in ?? "");
  setCookie("token_type", params.token_type ?? "");
  setCookie("scope", params.scope ?? "");
};

export const removeAuthTokenParams = () => {
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  deleteCookie("expires_in");
  deleteCookie("token_type");
  deleteCookie("scope");
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

  return `https://accounts.spotify.com/authorize?${new URLSearchParams(
    params
  ).toString()}`;
};
