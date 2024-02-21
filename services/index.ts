export async function getNews() {
  const response = await fetch(
    `https://www.ppmimesir.or.id/wp-json/wp/v2/posts?page=1`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Error occured");
  }

  return response.json();
}
