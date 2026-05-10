import axios from "axios";

const AUTH_API = axios.create({
  baseURL: "https://ctube-correction-4.onrender.com",
});

export const loginUser = (data) =>
  AUTH_API.post("/auth/login", data);

export const registerUser = (data) =>
  AUTH_API.post("/auth/register", data);
