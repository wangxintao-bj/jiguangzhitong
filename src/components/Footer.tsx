import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { ArrowUpRight, FileCheck2, Mail, MapPin, Phone, Shield, TimerReset } from 'lucide-react'

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export default function Footer() {
  const { t, lang } = useLang()
  const logoSrc = withBase('company-logo.svg')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_24px_rgba(14,165,233,0.10)]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-green-500/10" />
                <img src={logoSrc} alt="集光智通 LOGO" className="relative z-10 h-8 w-8 object-contain" />
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

          {/* Commercial response */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{lang === 'zh' ? '商务响应' : 'Commercial Response'}</h4>
            <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))] p-4 shadow-[0_18px_40px_rgba(2,8,23,0.25)]">
              <p className="text-sm font-semibold text-white">
                {lang === 'zh' ? '方案咨询、样机对接、项目合作' : 'Solutions, demo units, and project collaboration'}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {lang === 'zh'
                  ? '适合政企采购、项目集成与联合测试场景，支持产品资料索取、部署沟通与售前方案对接。'
                  : 'Suitable for enterprise procurement, system integration, and pre-sales solution alignment.'}
              </p>

              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: TimerReset,
                    title: lang === 'zh' ? '快速响应' : 'Fast Response',
                    desc: lang === 'zh' ? '工作日优先对接项目需求与资料请求。' : 'Priority response for working-day enquiries.',
                  },
                  {
                    icon: FileCheck2,
                    title: lang === 'zh' ? '资料支持' : 'Document Support',
                    desc: lang === 'zh' ? '可按项目需要提供规格书、方案说明与演示资料。' : 'Spec sheets and project materials available on request.',
                  },
                  {
                    icon: ArrowUpRight,
                    title: lang === 'zh' ? '合作方式' : 'Engagement Model',
                    desc: lang === 'zh' ? '支持售前咨询、样机沟通与定制化方案协作。' : 'Supports consulting, demo alignment, and tailored solution work.',
                  },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} 无锡集光智通科技有限公司 {t('footer.rights')} · {t('footer.icp')}
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
