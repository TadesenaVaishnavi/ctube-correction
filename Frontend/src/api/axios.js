import axios from "axios";

const AUTH_API = axios.create({
  baseURL: "https://ctube-correction-4.onrender.com",
});

// login
export const loginUser = (data) => {
  return AUTH_API.post("/auth/login", data);
};

// register
export const registerUser = (data) => {
  return AUTH_API.post("/auth/register", data);
};

// ⭐ NEW: forgot password
export const forgotPassword = (data) => {
  return AUTH_API.post("/auth/forgot-password", data);
};
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:9090",
// });

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;
