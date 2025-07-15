export function calculateTourDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end - start;

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const nights = diffDays > 0 ? diffDays : 0;

  return {
    days: diffDays + 1,
    nights,
  };
}
