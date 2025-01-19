import { removeAccessToken, saveAccessToken } from "@/utils/auth";
import {
  getClientSideCookies,
  getClientSideCookieValue,
} from "@/utils/cookies.client";
import {
  getServerSideCookies,
  getServerSideCookieValue,
} from "@/utils/cookies.server";

interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  delete<T>(url: string, config?: RequestInit): Promise<T>;
}

export default class Service {
  public http: HTTPInstance;
  private baseURL: string;
  private headers: Record<string, string>;
  private cookies: any;
  private tokenGenerateTime: number;
  private accessToken: string | undefined;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
    this.headers = {
      csrf: "token",
      Referer: this.baseURL,
    };
    this.tokenGenerateTime = new Date().getTime();
    this.http = {
      get: this.get.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this),
      delete: this.delete.bind(this),
    };
  }

  private async request<T = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit
  ): Promise<T> {
    try {
      const isClientSide = typeof window !== "undefined";
      this.cookies = isClientSide
        ? await getClientSideCookies()
        : await getServerSideCookies();
      this.accessToken = isClientSide
        ? await getClientSideCookieValue("access_token")
        : await getServerSideCookieValue("access_token");
      // console.log("### cookies: ", this.cookies);
      // console.log("### access token: ", this.accessToken);

      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          Authorization: this.accessToken && `Bearer ${this.accessToken}`,
          ...config?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
        credentials: "include",
        ...config,
      });

      if (!response.ok) {
        switch (response.status) {
          case 401:
            // 토큰 만료시 refresh
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - this.tokenGenerateTime;
            const expiresIn = this.cookies.expires_in;

            if (timeDifference >= Number(expiresIn) * 1000) {
              console.log("!!! Token Expired !!! :", timeDifference);
              this.tokenGenerateTime = currentTime;
              await this.tokenRefresh();
            }

            return this.request<T>(method, url, data, config);
          default:
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const responseData: T = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("GET", url, undefined, config);
  }
  private post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit
  ): Promise<T> {
    return this.request<T>("POST", url, data, config);
  }
  private put<T>(
    url: string,
    data?: unknown,
    config?: RequestInit
  ): Promise<T> {
    return this.request<T>("PUT", url, data, config);
  }
  private patch<T>(
    url: string,
    data?: unknown,
    config?: RequestInit
  ): Promise<T> {
    return this.request<T>("PATCH", url, data, config);
  }
  private delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("DELETE", url, undefined, config);
  }

  private async tokenRefresh() {
    try {
      const response = await fetch(this.baseURL + `/auth/refresh`, {
        method: "POST",
        body: JSON.stringify({
          refresh_token: this.cookies.refresh_token,
        }),
      });

      if (!response?.ok) {
        throw new Error(`Refresh token failed: ${response?.status}`);
      }
      const data = await response?.json();
      console.log("## new access_token: ", data.access_token);
      removeAccessToken();
      saveAccessToken(data.access_token);
    } catch (error) {
      console.error("Refresh token error:", error);
      throw error;
    }
  }
}
