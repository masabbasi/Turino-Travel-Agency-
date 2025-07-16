"use client";
import { getCookies } from "@utils/cookies.js";

function AuthProvider({ children }) {
  const token = getCookies();
  if (!token) return <p>عدم دسترسی</p>;

  return children;
}

export default AuthProvider;
