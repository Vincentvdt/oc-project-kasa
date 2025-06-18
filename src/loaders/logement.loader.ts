import type { LoaderFunction } from 'react-router-dom'
import type { Logement } from '@/types/global.type'

export const logementLoader: LoaderFunction = async ({ params }) => {
  const id = params.id
  if (!id) throw new Response('Missing logement ID', { status: 400 })

  const res = await fetch('/data/logements.json')
  const data: Logement[] = await res.json()

  const logement = data.find((item) => item.id === id)

  if (!logement) {
    throw new Response('LogementDetail not found', { status: 404 })
  }

  return logement
}
