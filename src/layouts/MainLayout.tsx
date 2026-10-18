import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { TopBar } from '../components/layout/TopBar'

export function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-brand-crimson selection:text-white">
      <TopBar />
      <Header />
      <main key={pathname} className="flex-grow animate-view-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
