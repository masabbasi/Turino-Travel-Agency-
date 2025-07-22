import api from "@services/config";

export default async function sitemap() {
  const baseUrl = "http://localhost:3000/";
  const tours = await api.get("/tour");

  const tourUrls = tours.map((tour) => ({
    url: `${baseUrl}/tour/${tour.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...tourUrls,
  ];
}
