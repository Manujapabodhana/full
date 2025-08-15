import { create } from "zustand";
import axios from "axios";

// API Configuration
const API_BASE_URL = "http://localhost:5000/api";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sap_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;
      
      localStorage.setItem("sap_token", token);
      set({ 
        user, 
        loading: false, 
        isAuthenticated: true,
        error: null 
      });
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      set({ 
        error: errorMessage, 
        loading: false,
        isAuthenticated: false,
        user: null 
      });
      return false;
    }
  },

  register: async (userData) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/register", userData);
      set({ loading: false, error: null });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      set({ error: errorMessage, loading: false });
      throw new Error(errorMessage);
    }
  },

  verifyToken: async () => {
    const token = localStorage.getItem("sap_token");
    if (!token) {
      set({ isAuthenticated: false, user: null });
      return false;
    }

    try {
      const response = await api.get("/auth/verify");
      set({ 
        user: response.data.user, 
        isAuthenticated: true,
        error: null 
      });
      return true;
    } catch (error) {
      localStorage.removeItem("sap_token");
      set({ 
        isAuthenticated: false, 
        user: null,
        error: "Session expired"
      });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("sap_token");
    set({ 
      user: null, 
      isAuthenticated: false,
      error: null 
    });
  },

  clearError: () => {
    set({ error: null });
  },

  // Demo login function for testing
  demoLogin: (role = "ADMIN") => {
    const demoUsers = {
      ADMIN: { id: 1, name: "Admin User", role: "ADMIN", email: "admin@school.com" },
      TEACHER: { id: 2, name: "Teacher User", role: "TEACHER", email: "teacher@school.com" },
      STUDENT: { id: 3, name: "Student User", role: "STUDENT", email: "student@school.com" },
      PARENT: { id: 4, name: "Parent User", role: "PARENT", email: "parent@school.com" }
    };

    const user = demoUsers[role];
    const token = "demo-token-" + role.toLowerCase();
    
    localStorage.setItem("sap_token", token);
    set({ 
      user, 
      loading: false, 
      isAuthenticated: true,
      error: null 
    });
    return true;
  }
}));
