interface NewReleaseAlbumsResponse {
  albums: ListItemsResponse<NewReleaseAlbumItem>;
}
interface NewReleaseAlbumItem {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  copyrights: any[];
  external_ids: {
    spotify: string;
  };
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
  artists: {
    external_urls: {
      isrc: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
}
