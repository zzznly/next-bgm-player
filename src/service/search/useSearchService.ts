import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "./queries";

export const useSearchResult = (
  params: SearchRequestParams,
  { enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["search.searchResult", params],
    queryFn: () => queryOptions.getSearchResult(params),
    enabled,
  });
};
