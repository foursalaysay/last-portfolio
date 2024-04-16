'use client'

import  { create } from 'zustand';

interface State {
  activeLink: string | null;
  setActiveLink: (activeLink: string | null) => void;
}

export const useStore = create<State>((set) => ({
  activeLink: 'section-1', // Initial active link
  setActiveLink: (activeLink) => set({ activeLink }),
}));
