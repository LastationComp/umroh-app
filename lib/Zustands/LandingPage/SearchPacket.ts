import { create } from "zustand";

interface PageState {
  page: number;
  search: string;
}

interface PageProps {
  incPage: () => void;
  decPage: () => void;
  resetPage: () => void;
}

export const defaultInitiate: PageState = {
  page: 1,
  search: "",
};

export const useSearchPacket = create<PageProps & PageState>((set) => ({
  page: 1,
  search: "",
  incPage: () => set((state) => ({ page: state.page + 1 })),
  decPage: () => set((state) => ({ page: state.page - 1 })),
  resetPage: () => set(() => ({ page: 1 })),
  setSearch: (value: string) => set(() => ({ search: value })),
}));
