import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/">← Retour à l'accueil</Link>
    </div>
  )
}

export default NotFound
