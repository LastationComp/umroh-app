import { create } from "zustand";

interface FavoriteState {
  favorites: any[];
}

interface FavoriteProps {
  addFavorites: (data: any) => void;
}

export const useFavorites = create<FavoriteState & FavoriteProps>((set) => ({
  favorites: [],
  addFavorites: (data: any) =>
    set((state: any) => ({ favorites: [...state.favorites, data] })),
}));
