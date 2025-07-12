"use client";

import { getCookies } from "@utils/cookies";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6501",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const cookies = getCookies();
    const accessToken = cookies.accessToken;
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
