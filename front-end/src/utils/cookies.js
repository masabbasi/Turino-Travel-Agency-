"use client";

export const setCookies = (tokens) => {
  if (typeof window === "undefined") {
    return;
  }
  document.cookie = `accessToken=${tokens.accessToken}; max-age=86400; path=/; secure; samesite=strict`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=604800; path=/; secure; samesite=strict`;
};

export const getCookies = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
    return cookies;
  }
};

export const clearCookies = () => {
  if (typeof window === "undefined") return;

  document.cookie = `accessToken=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `refreshToken=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};