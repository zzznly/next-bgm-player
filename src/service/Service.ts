import { removeAccessToken, saveAccessToken } from "@/utils/auth";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

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
  private cookies: ReadonlyRequestCookies | undefined;
  private tokenGenerateTime: number;

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
    this.cookies = await cookies();
    console.log("### cookies: ", this.cookies);

    try {
      // 토큰 만료시 refresh
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - this.tokenGenerateTime;
      const expiresIn = this.cookies.get("expires_in")?.value;

      if (timeDifference >= Number(expiresIn)) {
        console.log("!!! Token Expired !!! :", timeDifference);
        this.tokenGenerateTime = currentTime;
        await this.tokenRefresh();
      }

      const accessToken = this.cookies.get("access_token")?.value;
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          Authorization: accessToken && `Bearer ${accessToken}`,
          ...config?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
        credentials: "include",
        ...config,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
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
      const refreshToken = this.cookies?.get("refresh_token")?.value;
      const response = await fetch(this.baseURL + `/auth/refresh`, {
        method: "POST",
        body: JSON.stringify({
          refresh_token: refreshToken,
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
