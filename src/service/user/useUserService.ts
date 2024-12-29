import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { queryOptions } from "@/service/user/queries";
import { UserTopItemsRequest } from "./UserService";

export function useUserInfo() {
  return useQuery(queryOptions.me());
}

export const useUserTopItems = (params: UserTopItemsRequest) => {
  return useQuery(queryOptions.top(params.type));
};
