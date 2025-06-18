import styles from './Home.module.css'
import { CheckIcon, GlobeIcon, HomeIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import type { Logement } from '@/types/global.type.ts'
import HousingCard from '@/components/HousingCard/HousingCard.tsx'

const Home = () => {
  const [logements, setLogements] = useState<Logement[]>([])

  useEffect(() => {
    // Fetch logements from the JSON file
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error('Failed to fetch logements:', error))
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
            Trouvez un logement à votre image, parmi <br /> nos annonces vérifiées, alliant confort,{' '}
            sécurité et liberté.
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        <h3>Logements</h3>
        <div className={styles.grid}>
          {logements.length > 0 &&
            logements
              .slice(0, 10)
              .map((logement) => <HousingCard key={logement.id} logement={logement} />)}
        </div>
      </div>
    </section>
  )
}

export default Home
