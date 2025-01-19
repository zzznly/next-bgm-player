"use client";

import { getCookie, getCookies, TmpCookiesObj } from "cookies-next";

export const getClientSideCookieValue = async (
  name: string
): Promise<string | undefined> => {
  return await getCookie(name);
};

export const getClientSideCookies = async (): Promise<
  | Partial<{
      [key: string]: string;
    }>
  | Promise<TmpCookiesObj>
  | undefined
> => {
  return await getCookies();
};
