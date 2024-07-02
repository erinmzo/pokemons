import { create } from "zustand";

interface SearchState {
  searchValue: string;
  saveSearchValue: (value: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchValue: "",
  saveSearchValue: (value: string) => set({ searchValue: value }),
}));
