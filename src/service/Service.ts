import { getCookies } from "cookies-next";
import { cookies } from "next/headers";

interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  delete<T>(url: string, config?: RequestInit): Promise<T>;
  // patch<T>(
  //     url: string,
  //     data?: unknown,
  //     config?: RequestInit,
  // ): Promise<T>;
  // head<T>(
  //     url: string,
  //     config?: RequestInit,
  // ): Promise<T>;
  // options<T>(
  //     url: string,
  //     config?: RequestInit,
  // ): Promise<T>;
}

export default class Service {
  public http: HTTPInstance;
  private baseURL: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseURL = process.env.SPOTIFY_BASE_URL!;
    this.headers = {
      // TODO: Add Headers...
    };
    this.http = {
      get: this.get.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      delete: this.delete.bind(this),
    };
  }

  private async request<T = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit
  ): Promise<T> {
    const cookie = await getCookies({ cookies });
    console.log("### cookie: ", cookie);

    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          Authorization:
            cookie?.access_token && `Bearer ${cookie?.access_token}`,
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
  private delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("DELETE", url, undefined, config);
  }
}
