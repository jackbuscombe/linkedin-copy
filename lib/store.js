import create from "zustand";

export const useStore = create((set) => ({
	user: null,
	setUser: (toSet) => set(() => ({ user: toSet })),
	logout: () => set({ user: null }),
}));
