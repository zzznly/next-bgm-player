interface UseQueryProps {
  onSuccess?: ({ data }: any) => void;
  onError?: (err: any) => void;
  enabled?: boolean;
  queryKey?: string[];
  select?: ({ data }: any) => void;
}

interface ListDataResponse<T> {
  href: string;
  limit: number;
  next: string;
  items: T[];
  offset: number;
  previous: null;
  total: number;
}

interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface ExternalUrls {
  spotify: string;
}

interface Follower {
  href: string;
  total: number;
}

interface Owner {
  external_urls: ExternalUrls;
  followers: Follower;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}
