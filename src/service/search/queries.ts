import SearchService from "./SearchService";

export const queryKeys = {
  searchResult: ["search.searchResult"] as const,
};

export const queryOptions = {
  getSearchResult: (params: SearchRequestParams) => ({
    queryKey: queryKeys.searchResult,
    queryFn: () => SearchService.getSearchResult(params),
  }),
};
