import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './contexts/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Scenarios = lazy(() => import('./pages/Scenarios'))
const Videos = lazy(() => import('./pages/Videos'))
const News = lazy(() => import('./pages/News'))
const Contact = lazy(() => import('./pages/Contact'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
              <Route path="/products" element={<Suspense fallback={<LoadingFallback />}><Products /></Suspense>} />
              <Route path="/scenarios" element={<Suspense fallback={<LoadingFallback />}><Scenarios /></Suspense>} />
              <Route path="/videos" element={<Suspense fallback={<LoadingFallback />}><Videos /></Suspense>} />
              <Route path="/news" element={<Suspense fallback={<LoadingFallback />}><News /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </BrowserRouter>
    </LangProvider>
  )
}
