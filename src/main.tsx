import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@/components/Layout/Layout.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home/Home.tsx'
import LogementDetail from '@/pages/LogementDetail/LogementDetail.tsx'
import NotFound from '@/pages/NotFound/NotFound.tsx'
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
