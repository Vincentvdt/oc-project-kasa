import styles from './HousingCard.module.css'
import type { Logement } from '@/types/global.type.ts'
import { Link } from 'react-router'

interface HousingCardProps {
  logement: Logement
}

const HousingCard = ({ logement }: HousingCardProps) => {
  return (
    <Link to={`/logement/${logement.id}`} state={{ logement }} className={styles.card}>
      <img src={logement.cover} alt={logement.title} className={styles.cover} />
      <div className={styles.content}>
        <h4 className={styles.title}>{logement.title}</h4>
        <p className={styles.location}>{logement.location}</p>
      </div>
    </Link>
  )
}

export default HousingCard
