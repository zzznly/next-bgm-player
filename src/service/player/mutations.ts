import PlayerService from "./PlayerService";

export const mutationOptions = {
  addToUserCurrentPlaylist: (device_id: string, uri: string | undefined) => ({
    mutationFn: () => PlayerService.addToUserCurrentPlaylist(device_id, uri),
  }),
  startPlayback: (
    device_id: string,
    uri: string | undefined,
    position: number
  ) => ({
    mutationFn: () => PlayerService.startPlayback(device_id, uri, position),
  }),
  pausePlayback: (device_id: string) => ({
    mutationFn: () => PlayerService.pausePlayback(device_id),
  }),
  skipNextTrack: (device_id: string) => ({
    mutationFn: () => PlayerService.skipNextTrack(device_id),
  }),
  skipPreviousTrack: (device_id: string) => ({
    mutationFn: () => PlayerService.skipPreviousTrack(device_id),
  }),
  seekPosition: (device_id: string, position_ms: number) => ({
    mutationFn: () => PlayerService.seekPosition(position_ms, device_id),
  }),
  setRepeat: (device_id: string, state: RepeatState) => ({
    mutationFn: () => PlayerService.setRepeat(state, device_id),
  }),
  setVolume: (device_id: string, volume_percent: number) => ({
    mutationFn: () => PlayerService.setVolume(volume_percent, device_id),
  }),
  toggleShuffle: (device_id: string, state: boolean) => ({
    mutationFn: () => PlayerService.toggleShuffle(state, device_id),
  }),
};
