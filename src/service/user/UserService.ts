import Service from "../Service";

export interface UserTopItemsReq {
  type: string;
  time_range?: string;
  limit?: number;
  offset?: number;
}

class UserService extends Service {
  getUserInfo() {
    return this.http.get("/me");
  }
  getUsersTopItems(params: UserTopItemsReq) {
    return this.http.get(`/me/top/${params.type}`);
  }
}

export default new UserService();
