'use client';
import { create } from 'zustand';

interface ProfileState {
  avatar: string | null;
}

interface ProfileProps {
  setProfileAvatar: (avatar: string) => void;
}

export const profileInitiateState: ProfileState = {
  avatar: null,
};

export const useProfileAvatar = create<ProfileState & ProfileProps>((set) => ({
  avatar: null,
  setProfileAvatar: (avatar) => set((state) => ({ avatar: avatar })),
}));
