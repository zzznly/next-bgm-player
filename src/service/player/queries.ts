import PlayerService from "@/service/player/PlayerService";

export const queryKeys = {
  getPlaybackState: ["player.playbackState"] as const,
  getCurrentPlayingTrack: ["player.currentTrack"] as const,
  getUserCurrentPlaylist: ["player.currentPlaylist"] as const,
};

// export const mutationKeys = {
//   addToUserCurrentPlaylist: ["player.addToCurrentPlaylist"] as const,
//   startPlayback: ["player.startPlayback"] as const,
//   pausePlayback: ["player.pausePlayback"] as const,
//   skipNextTrack: ["player.skipNextTrack"] as const,
//   skipPreviousTrack: ["player.skipPreviousTrack"] as const,
//   seekPosition: ["player.seekPosition"] as const,
//   setRepeat: ["player.setRepeat"] as const,
//   setVolume: ["player.setVolume"] as const,
//   toggleShuffle: ["player.toggleShuffle"] as const,
// };

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

export const mutationOptions = {
  addToUserCurrentPlaylist: () => ({
    mutationFn: ({ device_id, uri }: { device_id: string; uri: string | undefined }) =>
      PlayerService.addToUserCurrentPlaylist(device_id, uri),
  }),
  startPlayback: () => ({
    mutationFn: (
      { device_id, uri, position }: { device_id: string; uri: string | undefined; position: number }
    ) => PlayerService.startPlayback(device_id, uri, position),
  }),
  pausePlayback: () => ({
    mutationFn: (device_id: string) => PlayerService.pausePlayback(device_id),
  }),
  skipNextTrack: () => ({
    mutationFn: (device_id: string) => PlayerService.skipNextTrack(device_id),
  }),
  skipPreviousTrack: () => ({
    mutationFn: (device_id: string) =>
      PlayerService.skipPreviousTrack(device_id),
  }),
  seekPosition: () => ({
    mutationFn: ({ position_ms, device_id }: { position_ms: number; device_id: string }) =>
      PlayerService.seekPosition(position_ms, device_id),
  }),
  setRepeat: () => ({
    mutationFn: ({ state, device_id }: { state: string; device_id: string }) =>
      PlayerService.setRepeat(state, device_id),
  }),
  setVolume: () => ({
    mutationFn: ({ volume_percent, device_id }: { volume_percent: number; device_id: string }) =>
      PlayerService.setVolume(volume_percent, device_id),
  }),
  toggleShuffle: () => ({
    mutationFn: ({ state, device_id }: { state: boolean; device_id: string }) =>
      PlayerService.toggleShuffle(state, device_id),
  }),
};
