"use server";

import { getCookie, getCookies, TmpCookiesObj } from "cookies-next";
import { cookies } from "next/headers";

export const getServerSideCookieValue = async (
  name: string
): Promise<string | undefined> => {
  return await getCookie(name, { cookies });
};

export const getServerSideCookies = async (): Promise<
  | Partial<{
      [key: string]: string;
    }>
  | Promise<TmpCookiesObj>
  | undefined
> => {
  return await getCookies({ cookies });
};
