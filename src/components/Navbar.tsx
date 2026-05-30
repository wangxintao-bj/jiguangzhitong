import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { Menu, X, Globe } from 'lucide-react'

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const navKeys = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.scenarios', path: '/scenarios' },
  { key: 'nav.videos', path: '/videos' },
  { key: 'nav.news', path: '/news' },
  { key: 'nav.contact', path: '/contact' },
]

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const brandTitle = lang === 'zh' ? '北京集光智通科技有限公司' : t('nav.company')
  const brandMeta =
    lang === 'zh' ? '激光透窗技术 · 视频侦测装备 · 智能交通方案' : 'Laser Through-Glass · Optical Inspection · Smart Traffic'
  const logoSrc = withBase('company-logo.svg')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-sky-400/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.9))] shadow-[0_16px_40px_rgba(2,8,23,0.45)] backdrop-blur-xl'
          : 'border-sky-400/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.78))] backdrop-blur-md'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[86px] md:h-[104px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer shrink-0 min-w-0 lg:max-w-[460px] xl:max-w-none">
            <div className="relative flex h-[60px] w-[60px] md:h-[68px] md:w-[68px] items-center justify-center overflow-hidden rounded-[18px] border border-sky-400/20 bg-slate-900/80 shadow-[0_0_24px_rgba(56,189,248,0.12)] transition-all duration-300 group-hover:shadow-[0_0_36px_rgba(56,189,248,0.22)] group-hover:border-sky-400/35 group-hover:scale-[1.03]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-emerald-500/5 to-slate-950/20" />
              <img src={logoSrc} alt="集光智通 LOGO" className="relative z-10 h-[48px] w-[48px] md:h-[56px] md:w-[56px] object-contain drop-shadow-[0_0_14px_rgba(56,189,248,0.3)]" />
            </div>

            <div className="min-w-0">
              <p className="max-w-[220px] md:max-w-[360px] xl:max-w-[460px] text-[11px] md:text-[13px] text-cyan-100 font-semibold leading-[1.15] tracking-[0.05em] drop-shadow-[0_0_10px_rgba(186,230,253,0.16)]">
                {t('nav.slogan')}
              </p>

              <p className="block mt-1 text-[16px] md:text-[22px] xl:text-[24px] font-bold text-white leading-[1.06] max-w-[250px] md:max-w-[340px] xl:max-w-[400px] truncate">
                {brandTitle}
              </p>
              <p className="hidden md:block mt-1.5 text-[11px] md:text-[12px] text-slate-400 tracking-[0.06em] truncate">
                {brandMeta}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {navKeys.map(({ key, path }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={key}
                  to={path}
                  className={`nav-link rounded-full px-3.5 xl:px-4 py-2.5 text-[14px] xl:text-[15px] leading-none font-semibold tracking-0 transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'active bg-[linear-gradient(135deg,rgba(14,165,233,0.22),rgba(2,132,199,0.14))] text-white ring-1 ring-sky-300/20 shadow-[0_8px_24px_rgba(14,165,233,0.12)]'
                      : 'text-slate-100/92 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {t(key)}
                </Link>
              )
            })}
          </nav>

          {/* Lang switch + Mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/[0.06] px-4 py-3 text-sm md:text-[15px] font-semibold text-sky-100 hover:bg-sky-400/[0.1] transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <Globe size={16} />
              {t('nav.lang')}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden rounded-xl border border-white/10 bg-white/5 text-white p-2.5 cursor-pointer"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-sky-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.94))] shadow-[0_20px_40px_rgba(2,8,23,0.45)] backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <div className="px-4 pb-2 sm:hidden">
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/[0.06] px-4 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-400/[0.1] transition-all cursor-pointer"
              >
                <Globe size={15} />
                {t('nav.lang')}
              </button>
            </div>
            {navKeys.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`block rounded-2xl px-4 py-3.5 text-base font-semibold transition-all cursor-pointer ${
                  location.pathname === path
                    ? 'bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(2,132,199,0.12))] text-white border border-sky-300/15'
                    : 'text-slate-200 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
