import './Home.module.css'
import Header from '@/components/Header/Header.tsx'
import { Outlet } from 'react-router-dom'
import Container from '@/components/Container/Container.tsx'
import Footer from '@/components/Footer/Footer.tsx'

const Layout = () => {
  return (
    <>
      <Header />
      <Container tag="main" className="main">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
