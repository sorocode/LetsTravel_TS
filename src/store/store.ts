import create from "zustand";

interface NavState {
  navNum: number;
  setNavNum: (value: number) => void;
}

export const useNavStore = create<NavState>((set) => ({
  navNum: 0,
  setNavNum: (value: number) => set({ navNum: value }),
}));
