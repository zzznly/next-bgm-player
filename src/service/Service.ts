import {
  deleteCookie,
  getCookies,
  setCookie,
  TmpCookiesObj,
} from "cookies-next";
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
  private cookie: TmpCookiesObj | undefined;
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
    this.cookie = await getCookies({ cookies });
    console.log("### cookie: ", this.cookie);

    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          Authorization:
            this.cookie?.access_token && `Bearer ${this.cookie?.access_token}`,
          ...config?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
        credentials: "include",
        ...config,
      });
      const responseData: T = await response.json();
      console.log(123, responseData);

      // 토큰 만료시 refresh
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - this.tokenGenerateTime;

      if (timeDifference >= 3 * 1000) {
        this.tokenGenerateTime = currentTime;
        const data = await this.tokenRefresh();
        // setCookie("accessToken", data.access_token);
        console.log("### refresh: ", data);
        console.log("Time diff (ms):", timeDifference, data.access_token);
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
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
      const response = await fetch(
        this.baseURL +
          `/auth/refresh?refresh_token=${this.cookie?.refresh_token}`
      );
      if (!response.ok) {
        throw new Error(`Refresh token failed: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Refresh token error:", error);
      throw error;
    }
  }
}
