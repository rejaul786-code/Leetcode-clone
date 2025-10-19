import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 👈 loads from .env
  withCredentials: true,                 // 👈 allow cookies/session if needed
  headers: {
    "Content-Type": "application/json",
  },
});



export default axiosClient;
