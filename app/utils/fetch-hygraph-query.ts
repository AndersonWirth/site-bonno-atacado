export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }

  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate }
  }

  const response = await fetch(process.env.HYGRAPH_URL!, fetchOptions)
  const { data } = await response.json()

  return data
}
