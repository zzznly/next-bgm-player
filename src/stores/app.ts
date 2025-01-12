import { create } from "zustand";

export type AppState = {
  isLoading: boolean;
};
export type AppActions = {
  setIsLoading: (isLoading: boolean) => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading: isLoading }),
}));
