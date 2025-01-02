import PlaylistService from "@/service/playlist/PlaylistService";

export const queryKeys = {
  newReleases: ["playlist.newReleases"] as const,
  detail: ["playlist.detail"] as const,
};

export const queryOptions = {
  newReleaseAlbums: () => ({
    queryKey: queryKeys.newReleases,
    queryFn: () => PlaylistService.getNewReleaseAlbums(),
  }),
  detail: (params: PlaylistRequest) => ({
    queryKey: queryKeys.detail,
    queryFn: () => PlaylistService.getPlaylistDetail(params),
  }),
};
