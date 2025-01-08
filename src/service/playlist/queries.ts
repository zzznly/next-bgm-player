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
  getCurrentPlaylist: () => ({
    queryKey: queryKeys.getCurrentPlaylist,
    queryFn: () => PlaylistService.getCurrentPlaylist(),
  }),
  // detail: (params: PlaylistRequest) => ({
  //   queryKey: queryKeys.detail,
  //   queryFn: () => PlaylistService.getPlaylistDetail(params),
  // }),
};
