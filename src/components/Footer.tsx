import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { Phone, Mail, MapPin, Globe, Shield } from 'lucide-react'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-slate-950 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_24px_rgba(14,165,233,0.10)]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-green-500/10" />
                <img src="/company-logo.svg" alt="集光智通 LOGO" className="relative z-10 h-8 w-8 object-contain" />
              </div>
              <span className="text-white font-bold text-sm">集光智通科技</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{t('footer.desc')}</p>
            <div className="flex gap-2">
              {['安防', '公安', '交警', '执法'].map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t('footer.links')}</h4>
            <ul className="space-y-2">
              {[
                { key: 'nav.home', path: '/' },
                { key: 'nav.about', path: '/about' },
                { key: 'nav.products', path: '/products' },
                { key: 'nav.scenarios', path: '/scenarios' },
                { key: 'nav.videos', path: '/videos' },
                { key: 'nav.news', path: '/news' },
              ].map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-pointer">
                    → {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span>13910846727</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span>wangxintao@sina.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{t('contact.info.address.val')}</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t('footer.follow')}</h4>
            <div className="space-y-3">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-5 gap-0.5 p-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-slate-900' : 'bg-white'}`} />
                    ))}
                  </div>
                  <p className="text-slate-900 text-xs mt-1">微信公众号</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2024 无锡集光智通科技有限公司 {t('footer.rights')} · {t('footer.icp')}
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <Shield size={12} className="text-sky-500" />
            <span>安全 · 可靠 · 专业</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
