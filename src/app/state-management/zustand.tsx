'use client'

import { create } from 'zustand';

const useScrollStore = create((set) => ({
  isSectionScrolled: false,
  setSectionScrolled: (value: any) => set({ isSectionScrolled: value }),
}));

