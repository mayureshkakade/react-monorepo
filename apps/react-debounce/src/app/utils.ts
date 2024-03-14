export function API_ENDPOINT(_strings: TemplateStringsArray, query: string) {
  return `https://api.jikan.moe/v4/anime?q=${query}`;
}

export type ResponseType = {
  title: string;
  url: string;
  score: string;
  type: string;
};

export const fetchAnimeSearchResults = async (query: string) => {
  const rawResult = await fetch(API_ENDPOINT`${query}`);
  const result = await rawResult.json();
  if (result.data) {
    const data: ResponseType[] = result.data.slice(0, 5).map((item: any) => ({
      title: item.title,
      url: item.url,
      score: item.score,
      type: item.type,
    }));
    console.log({ data });
    return data;
  }
  return null;
};
