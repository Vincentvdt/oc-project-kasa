import styles from './Home.module.css'
import { CheckIcon, GlobeIcon, HomeIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import type { Logement } from '@/types/global.type.ts'
import HousingCard from '@/components/HousingCard/HousingCard.tsx'
import { getLogements } from '@/api/logements.ts'

const Home = () => {
  const [logements, setLogements] = useState<Logement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getLogements()
      .then((data) => setLogements(data))
      .catch(() => setError('Failed to fetch logements'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.title}>
          Chez vous, partout et <br /> ailleurs
        </h1>
        <div className={styles.headerAside}>
          <div className={styles.iconList}>
            <span className={styles.icon}>
              <GlobeIcon />
            </span>
            <span className={styles.icon}>
              <CheckIcon />
            </span>
            <span className={styles.icon}>
              <HomeIcon />
            </span>
          </div>
          <h2 className={styles.subtitle}>
            Trouvez un logement a votre image, parmi <br /> nos annonces verifiees, entre confort,
            securite et liberte.
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        <h3>Logements</h3>
        {loading && <p>Chargement...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.grid}>
          {!loading &&
            !error &&
            logements
              .slice(0, 10)
              .map((logement) => <HousingCard key={logement.id} logement={logement} />)}
        </div>
      </div>
    </section>
  )
}

export default Home
