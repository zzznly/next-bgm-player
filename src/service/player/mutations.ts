import PlayerService from "./PlayerService";

export const mutationOptions = {
  addToUserCurrentPlaylist: () => ({
    mutationFn: ({
      device_id,
      uri,
    }: {
      device_id: string;
      uri: string | undefined;
    }) => PlayerService.addToUserCurrentPlaylist(device_id, uri),
  }),
  startPlayback: () => ({
    mutationFn: ({
      device_id,
      uri,
      position,
    }: {
      device_id: string;
      uri: string | undefined;
      position: number;
    }) => PlayerService.startPlayback(device_id, uri, position),
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
    mutationFn: ({
      position_ms,
      device_id,
    }: {
      position_ms: number;
      device_id: string;
    }) => PlayerService.seekPosition(position_ms, device_id),
  }),
  setRepeat: () => ({
    mutationFn: ({ state, device_id }: { state: string; device_id: string }) =>
      PlayerService.setRepeat(state, device_id),
  }),
  setVolume: () => ({
    mutationFn: ({
      volume_percent,
      device_id,
    }: {
      volume_percent: number;
      device_id: string;
    }) => PlayerService.setVolume(volume_percent, device_id),
  }),
  toggleShuffle: () => ({
    mutationFn: ({ state, device_id }: { state: boolean; device_id: string }) =>
      PlayerService.toggleShuffle(state, device_id),
  }),
};
