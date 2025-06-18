import styles from './LogementDetail.module.css'
import { Link, useLoaderData, useLocation } from 'react-router'

import type { Logement } from '@/types/global.type'
import {
  DragHandleDots1Icon,
  ExclamationTriangleIcon,
  Share2Icon,
  StarFilledIcon,
} from '@radix-ui/react-icons'

const LogementDetail = () => {
  const location = useLocation()
  const loaderLogement = useLoaderData<Logement>()
  const logement: Logement = location.state?.logement ?? loaderLogement

  const equipmentChunks = Array.from(
    { length: Math.ceil(logement.equipments.length / 5) },
    (_, i) => logement.equipments.slice(i * 5, i * 5 + 5)
  )

  return (
    <div className={styles.detailPage}>
      <section className={styles.gallerySection}>
        <div className={styles.gallery}>
          <img
            className={styles.mainImage}
            src={logement.pictures[0]}
            alt={`Vue principale du logement "${logement.title}"`}
          />
          <div className={styles.thumbnailRow}>
            {logement.pictures.slice(1, 4).map((src, index) => (
              <img
                key={index}
                className={styles.thumbnail}
                src={src}
                alt={`Photo ${index + 2} du logement`}
              />
            ))}
          </div>
        </div>
        <button className={styles.showAllPhotosButton} aria-label="Afficher toutes les photos">
          <DragHandleDots1Icon />
          <span>Afficher toutes les photos</span>
        </button>

        <div className={styles.hostSection}>
          <h2 className={styles.sectionTitle}>Votre hôte</h2>
          <div className={styles.hostCard}>
            <div className={styles.hostInfo}>
              <img
                className={styles.hostAvatar}
                src={logement.host.picture}
                alt={`Photo de ${logement.host.name}`}
              />
              <div className={styles.hostMeta}>
                <p className={styles.hostName}>{logement.host.name}</p>
                <span className={styles.rating}>
                  <StarFilledIcon /> {Number(logement.rating).toFixed(2)} (5 avis)
                </span>
                <Link to="/" className={styles.hostProfileLink}>
                  voir profil
                </Link>
              </div>
            </div>
            <button className={styles.messageButton}>Envoyer un message</button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h1 className={styles.title}>{logement.title}</h1>
            <a href="#" className={styles.shareLink} aria-label="Partager l'annonce">
              <Share2Icon />
              <span>Partager</span>
            </a>
          </div>
          <div className={styles.meta}>
            <ul className={styles.tags}>
              {logement.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  # {tag}
                </li>
              ))}
            </ul>
            <span className={styles.rating}>
              <StarFilledIcon /> {Number(logement.rating).toFixed(2)} (5 avis)
            </span>
          </div>
        </header>

        <article className={styles.block}>
          <h2>Description</h2>
          <p>{logement.description}</p>
        </article>

        <article className={styles.block}>
          <h2>Adresse</h2>
          <p>{logement.location}</p>
        </article>

        <article className={styles.block}>
          <h2>Équipements</h2>
          <div className={styles.equipmentColumns}>
            {equipmentChunks.map((chunk, index) => (
              <ul key={index} className={styles.equipmentColumn}>
                {chunk.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            ))}
          </div>
        </article>

        <div className={styles.footerRow}>
          <span className={styles.logementId}>ID: {logement.id}</span>
          <button className={styles.reportButton} aria-label="Signaler cette annonce">
            <ExclamationTriangleIcon />
            <span>Signaler cette annonce</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default LogementDetail
