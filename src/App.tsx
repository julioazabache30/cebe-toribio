import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import { MainLayout } from './layouts/MainLayout'
import HomePage from './pages/HomePage'

const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function PageFallback() {
  return (
    <div className="flex items-center justify-center py-32 text-brand-crimson">
      <i className="fa-solid fa-spinner fa-spin text-3xl" aria-label="Cargando" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="galeria" element={<GalleryPage />} />
              <Route path="noticias" element={<NewsPage />} />
              <Route path="contacto" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </ToastProvider>
    </BrowserRouter>
  )
}
