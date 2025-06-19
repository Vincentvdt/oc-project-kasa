import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Header from '@/components/Header/Header.tsx'
import Footer from '@/components/Footer/Footer.tsx'

const NotFound = () => {
  const error = useRouteError()

  let title = 'Oops!'
  let message = "Cette page n'existe pas."

  if (isRouteErrorResponse(error)) {
    if (error.status !== 404) {
      title = `${error.status} ${error.statusText}`
      message = error.data || message
    }
  }

  return (
    <>
      <Header />
      <main
        style={{
          textAlign: 'center',
          padding: '2rem',
          flex: '1 0 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/">← Retour à l'accueil</Link>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
