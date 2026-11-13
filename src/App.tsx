import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import { MainLayout } from './layouts/MainLayout'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

const Router = typeof window !== 'undefined' && window.location.protocol === 'file:' ? HashRouter : BrowserRouter

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="galeria" element={<GalleryPage />} />
            <Route path="noticias" element={<NewsPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ToastProvider>
    </Router>
  )
}
