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

export function useAddToCurrentPlaylist() {
  return useMutation(mutationOptions.addToUserCurrentPlaylist());
}

export function useStartPlayback() {
  return useMutation(mutationOptions.startPlayback());
}

export function usePausePlayback() {
  return useMutation(mutationOptions.pausePlayback());
}

export function useSkipNextTrack() {
  return useMutation(mutationOptions.skipNextTrack());
}

export function useSkipPreviousTrack() {
  return useMutation(mutationOptions.skipPreviousTrack());
}

export function useSeekPosition() {
  return useMutation(mutationOptions.seekPosition());
}

export function useSetRepeat() {
  return useMutation(mutationOptions.setRepeat());
}

export function useSetVolume() {
  return useMutation(mutationOptions.setVolume());
}

export function useToggleShuffle() {
  return useMutation(mutationOptions.toggleShuffle());
}
