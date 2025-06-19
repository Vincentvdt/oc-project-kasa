// Fetch list of logements and expose loading/error state

import { useEffect, useState } from 'react'
import type { Logement } from '@/types/global.type'
import { getLogements } from '@/api/logements'

export const useLogements = () => {
  const [logements, setLogements] = useState<Logement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getLogements()
      .then(setLogements)
      .catch(() => setError('Failed to fetch logements'))
      .finally(() => setLoading(false))
  }, [])

  return { logements, loading, error }
}
