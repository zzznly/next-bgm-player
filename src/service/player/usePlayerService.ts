import { useMutation, useQuery } from "@tanstack/react-query";
import { queryOptions } from "@/service/player/queries";
import { mutationOptions } from "@/service/player/mutations";

export function usePlaybackState() {
  return useQuery(queryOptions.getPlaybackState());
}

export function useCurrentTrack() {
  return useQuery(queryOptions.getCurrentPlayingTrack());
}

export function useUserCurrentPlaylist() {
  return useQuery(queryOptions.getUserCurrentPlaylist());
}

export function useAddToCurrentPlaylist(
  device_id: string,
  uri: string | undefined
) {
  return useMutation(mutationOptions.addToUserCurrentPlaylist(device_id, uri));
}

export function useStartPlayback(
  device_id: string,
  uri: string | undefined,
  position: number
) {
  return useMutation(mutationOptions.startPlayback(device_id, uri, position));
}

export function usePausePlayback(device_id: string) {
  return useMutation(mutationOptions.pausePlayback(device_id));
}

export function useSkipNextTrack(device_id: string) {
  return useMutation(mutationOptions.skipNextTrack(device_id));
}

export function useSkipPreviousTrack(device_id: string) {
  return useMutation(mutationOptions.skipPreviousTrack(device_id));
}

export function useSeekPosition(device_id: string, position_ms: number) {
  return useMutation(mutationOptions.seekPosition(device_id, position_ms));
}

export function useSetRepeat(device_id: string, state: RepeatState) {
  return useMutation(mutationOptions.setRepeat(device_id, state));
}

export function useSetVolume(device_id: string, volume_percent: number) {
  return useMutation(mutationOptions.setVolume(device_id, volume_percent));
}

export function useToggleShuffle(device_id: string, state: boolean) {
  return useMutation(mutationOptions.toggleShuffle(device_id, state));
}
