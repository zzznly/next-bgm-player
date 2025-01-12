import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthState = {
  tokenParams: any;
  isLoggedIn: boolean;
};
export type AuthActions = {
  setTokenParams: (params: TokenParams) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const useAuthStore = create<AuthState & AuthActions>(
  persist(
    (set) => ({
      tokenParams: null,
      isLoggedIn: false,
      setTokenParams: (params: TokenParams) => set({ tokenParams: params }),
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn }),
    }),
    {
      name: "authStore",
      getStorage: () => localStorage,
    }
  )
);
