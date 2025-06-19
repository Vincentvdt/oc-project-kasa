import type { Logement } from '@/types/global.type'

let logementsCache: Logement[] | null = null

export const getLogements = async (): Promise<Logement[]> => {
  if (logementsCache) return logementsCache

  const res = await fetch('/data/logements.json')
  if (!res.ok) {
    throw new Error('Failed to fetch logements')
  }
  const data: Logement[] = await res.json()
  logementsCache = data
  return data
}

export const getLogementById = async (
  id: string
): Promise<Logement | undefined> => {
  const logements = await getLogements()
  return logements.find((item) => item.id === id)
}
