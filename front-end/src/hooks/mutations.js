import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@services/config";

const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export { useUpdateUserInfo };
