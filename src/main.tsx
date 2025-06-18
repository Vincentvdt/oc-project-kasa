import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Home from '@/Home.tsx'
import LogementDetail from '@/pages/LogementDetail.tsx'
import NotFound from '@/pages/NotFound.tsx'
import { logementLoader } from '@/loaders/logement.loader.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'logement/:id',
        element: <LogementDetail />,
        loader: logementLoader,
        errorElement: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
