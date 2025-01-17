import PlaylistService from "@/service/playlist/PlaylistService";

export const queryKeys = {
  newReleases: ["playlist.newReleases"] as const,
  getCurrentPlaylist: ["playlist.current"] as const,
  detail: ["playlist.detail"] as const,
};

export const queryOptions = {
  newReleaseAlbums: () => ({
    queryKey: queryKeys.newReleases,
    queryFn: () => PlaylistService.getNewReleaseAlbums(),
  }),
  getCurrentPlaylists: () => ({
    queryKey: queryKeys.getCurrentPlaylist,
    queryFn: () => PlaylistService.getCurrentPlaylists(),
  }),
  // detail: (params: PlaylistRequest) => ({
  //   queryKey: queryKeys.detail,
  //   queryFn: () => PlaylistService.getPlaylistDetail(params),
  // }),
};
