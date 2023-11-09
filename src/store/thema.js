import { create } from "zustand";

const useThemaStore = create((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ isDark: !state.isDark }))
}));

export default useThemaStore;