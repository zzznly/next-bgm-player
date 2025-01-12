import { create } from "zustand";

export type PlayerState = {
  playingUrl: string;
  playingCategory: string;
  deviceId: string;
  currentTrack: any;
  isPaused: boolean;
  currentPosition: number;
  durationMs: number;
};
export type PlayerActions = {
  setPlayingUrl: (url: string) => void;
  setPlayingCategory: (category: string) => void;
  setDeviceId: (deviceID: string) => void;
  setCurrentTrack: (currentTrack: any) => void;
  setIsPaused: (isPaused: boolean) => void;
  setCurrentPosition: (currentPosition: number) => void;
  setDurationMs: (durationMs: number) => void;
};

export const usePlayerStore = create<PlayerState & PlayerActions>((set) => ({
  playingUrl: "", // ex. spotify:track:2pIUpMhHL6L9Z5lnKxJJr9
  playingCategory: "",
  deviceId: "",
  currentTrack: null,
  isPaused: true,
  currentPosition: 0,
  durationMs: 0,
  setPlayingUrl: (url) => set({ playingUrl: url }),
  setPlayingCategory: (category) => set({ playingCategory: category }),
  setDeviceId: (deviceId) => set({ deviceId: deviceId }),
  setCurrentTrack: (currentTrack: any) => set({ currentTrack: currentTrack }),
  setIsPaused: (isPaused: boolean) => set({ isPaused: isPaused }),
  setCurrentPosition: (currentPosition: number) =>
    set({ currentPosition: currentPosition }),
  setDurationMs: (durationMs: number) => set({ durationMs: durationMs }),
}));
