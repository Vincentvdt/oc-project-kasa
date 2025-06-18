import Container from '@/components/Container/Container.tsx'
import styles from './Footer.module.css'
import logo from '@/assets/logo-white.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container tag="footer" className={styles.footer}>
      <Link to="/" aria-label="Go to homepage">
        <img src={logo} className={styles.logo} alt="Kasa Logo" />
      </Link>
      <p className={styles.copyright}>© 2025 Kasa. All rights reserved</p>
    </Container>
  )
}

export default Footer
