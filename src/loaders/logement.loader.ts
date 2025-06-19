import type { LoaderFunction } from 'react-router-dom'
import type { Logement } from '@/types/global.type'
import { getLogementById } from '@/api/logements.ts'

export const logementLoader: LoaderFunction = async ({ params }) => {
  const id = params.id
  if (!id) throw new Response('Missing logement ID', { status: 400 })

  const logement = await getLogementById(id)

  if (!logement) {
    throw new Response('LogementDetail not found', { status: 404 })
  }

  return logement
}
