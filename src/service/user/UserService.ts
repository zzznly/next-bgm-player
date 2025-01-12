import Service from "../Service";

export interface UserTopItemsRequest {
  type: string;
  time_range?: string;
  limit?: number;
  offset?: number;
}

class UserService extends Service {
  getUserInfo() {
    return this.http.get("/me");
  }
  // getUserTopItems(params: "artists" | "tracks") {
  //   return this.http.get(`/me/top/${params}`);
  // }
}

export default new UserService();
