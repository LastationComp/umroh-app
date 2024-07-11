import { create } from 'zustand';

interface PageState {
  page: number;
  search: string;
  category: string;
}

interface PageProps {
  incPage: () => void;
  decPage: () => void;
  resetPage: () => void;
  setCategory: (category: string) => void;
  resetCategory: () => void;
}

export const defaultInitiate: PageState = {
  page: 1,
  search: '',
  category: '',
};

export const useSearchPacket = create<PageProps & PageState>((set) => ({
  page: 1,
  search: '',
  category: '',
  incPage: () => set((state) => ({ page: state.page + 1 })),
  decPage: () => set((state) => ({ page: state.page - 1 })),
  resetPage: () =>
    set({
      page: 1,
      search: '',
    }),
  setCategory(category) {
    return set({
      category: category,
    });
  },
  resetCategory: () =>
    set({
      category: '',
    }),
}));
