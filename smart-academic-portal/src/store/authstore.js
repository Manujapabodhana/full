import { create } from "zustand";
import api from "../lib/axios";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      // TODO: replace with real endpoint
      // const { data } = await api.post("/auth/login", { username, password });
      // Mock for now:
      const data = {
        token: "mock-token",
        user: { id: 1, name: "Demo User", role: "ADMIN" },
      };
      localStorage.setItem("sap_token", data.token);
      set({ user: data.user, loading: false });
      return true;
    } catch (e) {
      set({ error: e?.response?.data?.message || "Login failed", loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("sap_token");
    set({ user: null });
  },
}));
