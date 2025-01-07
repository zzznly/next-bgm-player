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

interface PlaylistRequest {
  playlist_id: string;
}

//
// interface TrackItem {
//   album: Album;
//   artists: Artist[];
//   available_markets: string[];
//   disc_number: number;
//   duration_ms: number;
//   explicit: boolean;
//   external_ids: {
//     isrc: string;
//     ean: string;
//     upc: string;
//   };
//   external_urls: {
//     spotify: string;
//   };
//   href: string;
//   id: string;
//   is_playable: boolean;
//   linked_from: {
//     external_urls: {
//       spotify: string;
//     };
//     href: string;
//     id: string;
//     type: string;
//     uri: string;
//   };
//   restrictions: {
//     reason: string;
//   };
//   name: string;
//   popularity: number;
//   preview_url: string;
//   track_number: number;
//   type: string;
//   uri: string;
//   is_local: boolean;
// }

// interface PlaylistDetailResponse {
//   collaborative: boolean;
//   description: string;
//   external_urls: {
//     spotify: string;
//   };
//   followers: {
//     href: string | null;
//     total: number;
//   };
//   href: string;
//   id: string;
//   images: {
//     height: number;
//     url: string;
//     width: number;
//   }[];
//   name: string;
//   owner: {
//     display_name: string;
//     external_urls: {
//       spotify: string;
//     };
//     href: string;
//     id: string;
//     type: string;
//     uri: string;
//   };
//   primary_color: string | null;
//   public: boolean | null;
//   snapshot_id: string;
//   tracks: {
//     href: string;
//     items: PlaylistDetailItems[];
//     limit: number;
//     next: string | null;
//     offset: number;
//     previous: string | null;
//     total: number;
//   };
//   type: string;
//   uri: string;
// }
// interface PlaylistDetailItems {
//   added_at: string;
//   added_by: {
//     external_urls: {
//       spotify: string;
//     };
//     href: string;
//     id: string;
//     type: string;
//     uri: string;
//   };
//   is_local: boolean;
//   primary_color: null | string;
//   track: PlaylistDetailItemsTrack;
//   video_thumbnail: {
//     url: null | string;
//   };
// }
// interface PlaylistDetailItemsTrack {
//   album: {
//     album_group: string;
//     album_type: string;
//     artists: {
//       external_urls: {
//         spotify: string;
//       };
//     }[];
//     external_urls: {
//       spotify: string;
//     };
//     href: string;
//     id: string;
//     images: Image[];
//     is_playable: boolean;
//     name: string;
//     release_date: string;
//     release_date_precision: string;
//     total_tracks: number;
//     type: string;
//     uri: string;
//   };
//   artists: Artist[];
//   disc_number: number;
//   duration_ms: number;
//   episode: boolean;
//   explicit: boolean;
//   external_ids: {
//     isrc: string;
//   };
//   external_urls: {
//     spotify: string;
//   };
//   href: string;
//   id: string;
//   is_local: boolean;
//   is_playable: boolean;
//   name: string;
//   popularity: number;
//   preview_url: string;
//   track: boolean;
//   track_number: number;
//   type: string;
//   uri: string;
// }

// interface FeaturedPlaylistRes {
//   message: string;
//   playlists: FeaturedPlaylistItem[];
// }
// interface FeaturedPlaylistItem {
//   collaborative: boolean;
//   description: string;
//   external_urls: ExternalUrls;
//   href: string;
//   id: string;
//   images: Image[];
//   name: string;
//   owner: Owner;
//   public: boolean;
//   snapshot_id: string;
//   tracks: Tracks;
//   type: string;
//   uri: string;
// }
