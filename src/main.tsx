import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import Layout from '@/components/Layout/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home/Home.tsx'
import LogementDetail from '@/pages/LogementDetail/LogementDetail.tsx'
import NotFound from '@/pages/NotFound/NotFound.tsx'
import { logementLoader } from '@/loaders/logement.loader.ts'
import About from '@/pages/About/About.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: 'logement/:id',
          element: <LogementDetail />,
          loader: logementLoader,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
