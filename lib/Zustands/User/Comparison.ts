import { create } from "zustand";

interface ComparisonState {
  ids: string[];
  count: number;
  is_readed: boolean;
}

interface ComparisonProps {
  addCompare: (id: string) => void;
  removeCompare: (packetId: string) => void;
  setCompares: (ids: string[]) => void;
  setCount: (value: number) => void;
  counting: () => void;
  incCount: () => void;
  decCount: () => void;
}

export const useComparison = create<ComparisonState & ComparisonProps>(
  (set) => ({
    ids: [],
    count: 0,
    is_readed: false,

    addCompare(id) {
      return set((state) => ({
        ids: [...state.ids, id],
        count: state.count + 1,
      }));
    },

    removeCompare(packetId: string) {
      return set((state) => ({
        ids: state.ids.filter((id) => id !== packetId),
        count: state.count - 1,
      }));
    },

    setCompares(ids) {
      return set((state) => ({ ids: state.ids }));
    },

    setCount: (value) => set((state) => ({ count: value })),
    counting: () => set((state) => ({ count: state.count + 1 })),
    incCount: () => set((state) => ({ count: state.count + 1 })),
    decCount: () => set((state) => ({ count: state.count - 1 })),
  })
);
