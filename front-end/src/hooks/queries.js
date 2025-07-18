"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@services/config";

function useGetUser() {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user"];
  return useQuery({ queryFn, queryKey });
}

function useGetUserTransactions() {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["user-transactions"];
  return useQuery({ queryFn, queryKey });
}

function useGetUserTours() {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["user-tours"];
  return useQuery({ queryFn, queryKey });
}

function useGetUserBasket() {
  const queryFn = () => api.get("/basket");
  const queryKey = ["user-basket"];
  return useQuery({ queryFn, queryKey });
}
export {
  useGetUser,
  useGetUserTransactions,
  useGetUserTours,
  useGetUserBasket,
};
