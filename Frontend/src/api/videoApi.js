import axios from "axios";

const VIDEO_API = axios.create({
  baseURL: "https://ctube-correction-1.onrender.com",
});

// auto token attach
VIDEO_API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const uploadVideo = (formData) =>
  VIDEO_API.post("/api/ctube/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getAllVideos = () =>
  VIDEO_API.get("/api/videos");



// import axios from "axios";

// const VIDEO_API = axios.create({
//   baseURL: "https://ctube-correction-1.onrender.com",
// });

// // 🔐 attach token automatically
// VIDEO_API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });

// export const uploadVideo = (formData) => {
//   return VIDEO_API.post("/api/videos/upload", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// export const getAllVideos = () => {
//   return VIDEO_API.get("/api/videos");
// };
