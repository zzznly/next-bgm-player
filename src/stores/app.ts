import { StateCreator } from "zustand";

export type AppState = {
  isLoading: boolean;
};
export type AppActions = {
  setIsLoading: (isLoading: boolean) => void;
};
export type AppSlice = AppState & AppActions;

export const createAppSlice: StateCreator<
  AppSlice,
  [],
  [],
  AppActions
> = (set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading: isLoading }),
})