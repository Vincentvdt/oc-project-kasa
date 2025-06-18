import styles from './Header.module.css'
import logo from '@/assets/logo.svg'

import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'
import Container from '@/components/Container/Container.tsx'

const Header = () => {
  return (
    <Container tag="header" fullWidth className={styles.root} innerClassName={styles.inner}>
      <div className={styles.left}>
        <Link to="/" className={styles.logoLink} aria-label="Go to homepage">
          <img src={logo} className={styles.logo} alt="Kasa Logo" />
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
        <Link to="/" className={clsx(styles.button, styles.red)}>
          {' '}
          Login
        </Link>
        <Link to="/" className={clsx(styles.button, styles.black)}>
          {' '}
          Get Started
        </Link>
      </div>
    </Container>
  )
}

export default Header
