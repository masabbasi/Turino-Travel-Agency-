export function buildQueryString({ origin, destination, startDate }) {
  const params = new URLSearchParams();

  if (origin) params.set("origin", origin);
  if (destination) params.set("destination", destination);
  if (startDate) params.set("startDate", startDate);

  return params.toString() ? `?${params.toString()}` : "";
}
