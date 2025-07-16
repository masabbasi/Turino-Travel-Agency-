const useGetTours = (query) => {
  const url = "tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tours", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};