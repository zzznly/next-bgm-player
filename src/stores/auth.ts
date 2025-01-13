import { StateCreator } from "zustand";

export type AuthState = {
  tokenParams: TokenParams | null;
  isLoggedIn: boolean;
};
export type AuthActions = {
  setTokenParams: (params: TokenParams) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
export type AuthSlice = AuthState & AuthActions;

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [],
  AuthActions
> = (set) => ({
  tokenParams: null,
  isLoggedIn: false,
  setTokenParams: (params: TokenParams) => set({ tokenParams: params }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn: isLoggedIn }),
});
