"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@services/config";

export function useUser() {
  const fetchUser = async () => {
    const response = await api.get(`/user/profile`);
    console.log(response);
    return response;
  };

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return {
    data,
    isSuccess,
    isLoading,
  };
}
