import { create } from "zustand";

interface NavState {
  navNum: number;
  navigatePage: (to: number) => void;
}

export const useNavStore = create<NavState>()((set) => ({
  navNum: 0,
  navigatePage: (to) => set((state) => ({ navNum: to })),
}));
