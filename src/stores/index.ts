import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AppSlice, createAppSlice } from "./app";
import { PlayerSlice, createPlayerSlice } from "./player";
import { AuthSlice, createAuthSlice } from "./auth";

export const useBoundStore = create<AppSlice & AuthSlice & PlayerSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAppSlice(...a),
        ...createAuthSlice(...a),
        ...createPlayerSlice(...a),
      }),
      {
        name: "boundStore",
        partialize: (state) => ({
          access_token: state.tokenParams?.access_token,
          refresh_token: state.tokenParams?.refresh_token,
          expires_in: state.tokenParams?.expires_in,
        }),
      }
    )
  )
);
