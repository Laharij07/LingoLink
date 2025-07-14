import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("lingolink-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("lingolink-theme", theme);
        set({ theme });
    },
}));