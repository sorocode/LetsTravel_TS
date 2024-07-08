import { LoginState, NavState } from "@/types/state";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useNavStore = create(
  devtools<NavState>((set) => ({
    navNum: 0,
    setNavNum: (value: number) => set({ navNum: value }),
  }))
);

export const useLoginStore = create(
  devtools<LoginState>((set) => ({
    isLogin: false,
    setLogin: () => set({ isLogin: true }),
    setLogout: () => set({ isLogin: false }),
  }))
);
