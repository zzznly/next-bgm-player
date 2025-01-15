interface SearchRequestParams {
  q: string;
  type: string | string[] | undefined;
}
interface SearchFilterItem {
  id: number;
  label: string;
  type: string;
}

interface SearchResponse {
  albums?: ListDataResponse<any>;
  artists?: ListDataResponse<any>;
  tracks?: ListDataResponse<any>;
  playlists?: ListDataResponse<any>;
}
