export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenParams = (params: any) => {
  localStorage.setItem("access_token", params.access_token ?? "");
  localStorage.setItem("refresh_token", params.refresh_token ?? "");
  localStorage.setItem("expires_in", params.expires_in ?? "");
  localStorage.setItem("token_type", params.token_type ?? "");
  localStorage.setItem("scope", params.scope ?? "");
};

export const removeAuthToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("expires_in");
  localStorage.removeItem("token_type");
  localStorage.removeItem("scope");
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
