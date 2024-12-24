export const generateRandomString = (length: number) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenParams = (params: URLSearchParams) => {
  localStorage.setItem("access_token", params.get("access_token") ?? "");
  localStorage.setItem("expires_in", params.get("expires_in") ?? "");
  localStorage.setItem("token_type", params.get("token_type") ?? "");
};

export const removeAuthToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
  localStorage.removeItem("token_type");
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
