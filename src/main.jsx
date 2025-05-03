import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Spinner from './components/Spinner.jsx'
import ErrorNotFound from './pages/ErrorNotFound.jsx'

const HomeLazy = lazy(() => import ("./pages/Home.jsx"));
const AboutLazy = lazy(() => import("./pages/About.jsx"));
const ContactLazy = lazy(() => import("./pages/Contact.jsx"));
const ModuloLazy = lazy(() => import("./pages/Modulo.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />} >
            <HomeLazy />
          </Suspense>
        )
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />} >
            <AboutLazy />
          </Suspense>
        )
      },
      {
        path: "/modulo/:id",
        element: (
          <Suspense fallback={<Spinner />} >
            <ModuloLazy />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Spinner />} >
            <ContactLazy />
          </Suspense>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
