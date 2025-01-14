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
  // if (params?.refresh_token) {
  //   setCookie("refresh_token", params?.refresh_token, {
  //     path: "/",
  //     httpOnly: true,
  //     secure: true,
  //     maxAge: 60 * 60 * 24 * 30,
  //     sameSite: "lax",
  //   });
  // }
};

export const removeTokenParams = () => {
  deleteCookie("access_token");
  deleteCookie("expires_in");
  deleteCookie("refresh_token");
};
