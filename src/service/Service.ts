import { cookies } from "next/headers"; // Server

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
  //   private cookie: Record<string, string> | undefined;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
    this.headers = {
      // TODO: Add Headers...
      //   csrf: "token",
      //   Referer: this.baseURL,
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
    const cookieStore = await cookies();
    const accessToken = await cookieStore?.get("access_token")?.value;

    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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