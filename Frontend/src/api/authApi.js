import axios from "axios";

// ✅ Base API (environment-based = production safe)
const AUTH_API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// 🔐 INTERCEPTOR: attach token
AUTH_API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔐 RESPONSE HANDLER
AUTH_API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized - Token expired or invalid");
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

// ===============================
// 🔑 AUTH SERVICES
// ===============================

// Login
export const loginUser = async (data) => {
  try {
    const res = await AUTH_API.post("/auth/login", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// Register
export const registerUser = async (data) => {
  try {
    const res = await AUTH_API.post("/auth/register", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// 🔥 ADD THIS (IMPORTANT)
export const forgotPassword = async (data) => {
  try {
    const res = await AUTH_API.post("/auth/forgot-password", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};