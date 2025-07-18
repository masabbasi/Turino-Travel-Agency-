export function buildQueryString({ origin, destination, date }) {
  const params = new URLSearchParams();

  if (origin) params.set("origin", origin);
  if (destination) params.set("destination", destination);
  if (date) params.set("date", date);

  return params.toString() ? `?${params.toString()}` : "";
}
