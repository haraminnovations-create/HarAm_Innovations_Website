import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import { AuthProvider } from './context/AuthContext'

const Home        = lazy(() => import('./pages/Home'))
const About       = lazy(() => import('./pages/About'))
const Products    = lazy(() => import('./pages/Products'))
const Games       = lazy(() => import('./pages/Games'))
const Agriculture = lazy(() => import('./pages/Agriculture'))
const Education   = lazy(() => import('./pages/Education'))
const Careers     = lazy(() => import('./pages/Careers'))
const Contact     = lazy(() => import('./pages/Contact'))
const Privacy     = lazy(() => import('./pages/PrivacyPolicy'))
const Auth        = lazy(() => import('./pages/Auth'))
const NotFound    = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-silver">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-gray font-medium">Loading...</p>
      </div>
    </div>
  )
}

function AppLayout() {
  const location  = useLocation()
  const isAuthPage = location.pathname === '/auth'

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/about"                 element={<About />} />
            <Route path="/products"              element={<Products />} />
            <Route path="/products/games"        element={<Games />} />
            <Route path="/products/agriculture"  element={<Agriculture />} />
            <Route path="/products/education"    element={<Education />} />
            <Route path="/careers"               element={<Careers />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="/privacy-policy"        element={<Privacy />} />
            <Route path="/auth"                  element={<Auth />} />
            <Route path="*"                      element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <CookieBanner />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ScrollToTop />
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  )
}
