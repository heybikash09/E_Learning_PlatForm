import { create } from 'zustand';

export const useStore = create((set, get) => ({
  products: [],
  store: null,

  addData: (product) =>
    set((state) => ({ products: [...state.products, product] })),
    setStore: (store) => set({ store }),
}));
