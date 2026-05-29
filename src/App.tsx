import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './contexts/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Scenarios from './pages/Scenarios'
import Videos from './pages/Videos'
import News from './pages/News'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/scenarios" element={<Scenarios />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </BrowserRouter>
    </LangProvider>
  )
}

