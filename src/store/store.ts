import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface NavState {
  navNum: number;
  setNavNum: (value: number) => void;
}

export const useNavStore = create(
  devtools<NavState>((set) => ({
    navNum: 0,
    setNavNum: (value: number) => set({ navNum: value }),
  }))
);
