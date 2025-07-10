import { useQuery } from "@tanstack/react-query";
import { api } from "@services/config";

export function useUser() {
  const fetchUser = async () => {
    const response = await api.get(`/user/profile`);
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
