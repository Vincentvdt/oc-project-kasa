import styles from './About.module.css'

const AboutCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

const values = [
  {
    title: 'Fiabilité',
    description:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    description:
      'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  },
  {
    title: 'Sécurité',
    description:
      "La sécurité est la priorité de Kasa. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. ",
  },
]

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.aboutWrapper}>
        <div className={styles.textMask}>
          <h1>
            A Propos
            <br />
            De nous
          </h1>
        </div>
        <img
          className={styles.bgImage}
          src="/kalen-emsley-Bkci_8qcdvQ-unsplash%202.png"
          alt="coworking space"
        />
      </section>
      <section className={styles.content}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Nos Valeurs</h2>
          <a href="#" className={styles.seeMore}>
            En savoir plus
          </a>
        </div>
        <div className={styles.cardContainer}>
          {values.map(({ title, description }) => (
            <AboutCard key={title} title={title} text={description} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
