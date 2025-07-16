// "use client";

import { getCookies } from "@utils/cookies";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6500",
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (request) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      try {
        const cookies = getCookies();
        const accessToken = cookies.accessToken;
        if (accessToken) {
          request.headers["Authorization"] = `Bearer ${accessToken}`;
        }
      } catch (error) {
        console.error('Error handling cookies:', error);
      }
    }
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;