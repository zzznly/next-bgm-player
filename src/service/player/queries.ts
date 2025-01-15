import PlayerService from "@/service/player/PlayerService";

export const queryKeys = {
  getPlaybackState: ["player.playbackState"] as const,
  getCurrentPlayingTrack: ["player.currentTrack"] as const,
  getUserCurrentPlaylist: ["player.currentPlaylist"] as const,
};

export const queryOptions = {
  getPlaybackState: () => ({
    queryKey: queryKeys.getPlaybackState,
    queryFn: () => PlayerService.getPlaybackState(),
  }),
  getCurrentPlayingTrack: () => ({
    queryKey: queryKeys.getCurrentPlayingTrack,
    queryFn: () => PlayerService.getCurrentPlayingTrack(),
  }),
  getUserCurrentPlaylist: () => ({
    queryKey: queryKeys.getUserCurrentPlaylist,
    queryFn: () => PlayerService.getUserCurrentPlaylist(),
  }),
};