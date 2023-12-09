import { Joke } from '@/lib/definitions'

// https://icanhazdadjoke.com/api#fetch-a-dad-joke
const API_URL = 'https://icanhazdadjoke.com'

export const getJokes = async (size: number, page: number): Promise<Joke[]> => {
  if (size <= 0) {
    return []
  }

  const response = await fetch(`${API_URL}/search?page=${page}&limit=${size}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  return response.results.map((joke: any) => ({
    id: joke.id,
    text: joke.joke,
  })) as Joke[]
}
