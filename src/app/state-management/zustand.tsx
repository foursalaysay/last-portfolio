'use client'

import { create } from 'zustand';

export const useScrollStore = create((set) => ({
  isSectionScrolled: false,
  setSectionScrolled: (value: any) => set({ isSectionScrolled: value }),
}));

export const navLinkActive = create((set) => ({
  isNavActive : false
}))