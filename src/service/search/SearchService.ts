import Service from "@/service/Service";

class SearchService extends Service {
  async getSearchResult({ q, type }: SearchRequestParams) {
    return await this.http.get<SearchResponse>(`search?q=${q}&type=${type}`, {
      cache: "no-store",
    });
  }
}

export default new SearchService();
