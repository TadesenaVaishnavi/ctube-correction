import axios from "axios";

const AUTH_API = axios.create({
  baseURL: "https://ctube-correction-4.onrender.com",
});

export const loginUser = (data) => {
  return AUTH_API.post("/auth/login", data);
};

export const registerUser = (data) => {
  return AUTH_API.post("/auth/register", data);
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
