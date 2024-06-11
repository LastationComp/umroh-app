import { create } from 'zustand';

interface PageState {
  draft: number;
  publish: number;
}

interface PageProps {
  incPage: (pageName: string) => void;
  decPage: (pageName: string) => void;
  resetPage: (pageName: string) => void;
  setPage: (pageName: string, value: number) => void;
}

export const defaultInitiate: PageState = {
  draft: 1,
  publish: 1,
};

export const usePagination = create<PageProps & PageState>((set) => ({
  draft: 1,
  publish: 1,
  incPage: (pageName) => set((state: any) => ({ [pageName]: state[pageName] + 1 })),
  decPage: (pageName) => set((state: any) => ({ [pageName]: state[pageName] - 1 })),
  setPage: (pageName, value) => set((state: any) => ({ [pageName]: value })),
  resetPage: (pageName) => set((state: any) => ({ [pageName]: 1 })),
}));
