import UserService from "@/service/user/UserService";

export const queryKeys = {
  me: ["user.userInfo"] as const,
  top: (type: string) => ["user.topItems", type] as const,
};

export const queryOptions = {
  me: () => ({
    queryKey: queryKeys.me,
    queryFn: () => UserService.getUserInfo(),
  }),
  // topItems: (type: "artists" | "tracks") => ({
  //   queryKey: queryKeys.top(type),
  //   queryFn: () => UserService.getUserTopItems(type),
  // }),
};
