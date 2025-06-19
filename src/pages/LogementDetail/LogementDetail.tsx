import { useMemo } from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import styles from './LogementDetail.module.css'

import type { Logement } from '@/types/global.type'
import {
  DragHandleDots1Icon,
  ExclamationTriangleIcon,
  Share2Icon,
  StarFilledIcon,
} from '@radix-ui/react-icons'
import Button from '@/components/Button/Button.tsx'

const LogementDetail = () => {
  const { state } = useLocation() as { state?: { logement?: Logement } }
  const loaderLogement = useLoaderData() as Logement
  const logement = state?.logement ?? loaderLogement

  const rating = useMemo(() => Number(logement.rating).toFixed(2), [logement.rating])
  const equipmentChunks = useMemo(() => {
    const chunkSize = 5
    return Array.from({ length: Math.ceil(logement.equipments.length / chunkSize) }, (_, i) =>
      logement.equipments.slice(i * chunkSize, (i + 1) * chunkSize)
    )
  }, [logement.equipments])

  return (
    <div className={styles.detailPage}>
      <section className={styles.gallerySection}>
        <h1 className={styles.titleMobile}>{logement.title}</h1>
        <div className={styles.gallery}>
          <img
            className={styles.mainImage}
            src={logement.pictures[0]}
            alt={`Vue principale du logement "${logement.title}"`}
            loading="lazy"
          />
          <div className={styles.thumbnailRow}>
            {logement.pictures.slice(1, 4).map((src, index) => (
              <img
                key={src}
                className={styles.thumbnail}
                src={src}
                alt={`Photo ${index + 2} du logement`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <button className={styles.showAllPhotosButton} aria-label="Afficher toutes les photos">
          <DragHandleDots1Icon aria-hidden="true" />
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
                loading="lazy"
              />
              <div className={styles.hostMeta}>
                <p className={styles.hostName}>{logement.host.name}</p>
                <span className={styles.rating}>
                  <StarFilledIcon /> {rating} (5 avis)
                </span>
                <Link to="/" className={styles.hostProfileLink}>
                  voir profil
                </Link>
              </div>
            </div>
            <Button>Envoyer un message</Button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h1 className={styles.title}>{logement.title}</h1>
            <button type="button" className={styles.shareLink} aria-label="Partager l'annonce">
              <Share2Icon aria-hidden="true" />
              <span>Partager</span>
            </button>
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
              <StarFilledIcon /> {rating} (5 avis)
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
            <ExclamationTriangleIcon aria-hidden="true" />
            <span>Signaler cette annonce</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default LogementDetail
