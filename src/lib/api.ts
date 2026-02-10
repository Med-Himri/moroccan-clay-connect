import axios from "axios";
import type { Product, AuthResponse, QuoteRequest } from "@/types";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://api.example.com";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// Attach token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productsApi = {
  getAll: () => api.get<Product[]>("/products"),
  getById: (id: string) => api.get<Product>(`/products/${id}`),
};

export const authApi = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>("/auth/login", { email, password }),
  register: (data: { email: string; password: string; companyName: string }) =>
    api.post<AuthResponse>("/auth/register", data),
};

export const quotesApi = {
  submit: (data: QuoteRequest) => api.post("/quotes", data),
};

export default api;
