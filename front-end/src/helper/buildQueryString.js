export function buildQueryString({ origin, destination, startDate,endDate }) {
  const params = new URLSearchParams();

  if (origin) params.set("origin", origin);
  if (destination) params.set("destination", destination);
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);

  return params.toString() ? `?${params.toString()}` : "";
}
