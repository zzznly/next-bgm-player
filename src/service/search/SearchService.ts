import Service from "@/service/Service";

class SearchService extends Service {
  getSearchResult({ q, type }: SearchRequestParams) {
    return this.http.get<SearchResponse>(`/search?q=${q}&type=${type}`);
  }
}

export default new SearchService();
