import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  company: string
  dept: string
  need: string
  message: string
}

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', company: '', dept: '', need: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const infoItems = [
    { icon: <Phone size={20} />, label: t('contact.info.phone'), value: '13910846727', color: 'sky' },
    { icon: <Mail size={20} />, label: t('contact.info.email'), value: 'wangxintao@sina.com', color: 'green' },
    { icon: <MapPin size={20} />, label: t('contact.info.address'), value: t('contact.info.address.val'), color: 'indigo' },
    { icon: <Clock size={20} />, label: t('contact.info.hours'), value: t('contact.info.hours.val'), color: 'amber' },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('contact.title')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-3">{t('contact.title')}</h1>
          <p className="text-slate-400 text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact info */}
            <div className="space-y-4">
              {infoItems.map((item, i) => (
                <div key={i} className="glow-border rounded-xl p-5 flex items-start gap-4 hover-card">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${item.color === 'sky' ? 'bg-sky-500/15 text-sky-400' :
                      item.color === 'green' ? 'bg-green-500/15 text-green-400' :
                      item.color === 'indigo' ? 'bg-indigo-500/15 text-indigo-400' :
                      'bg-amber-500/15 text-amber-400'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="glow-border rounded-xl overflow-hidden" style={{ height: '200px' }}>
                <div className="w-full h-full bg-slate-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 tech-grid opacity-50" />
                  <div className="relative text-center">
                    <MapPin size={32} className="text-sky-400 mx-auto mb-2" />
                    <p className="text-slate-400 text-sm">北京市海淀区西三旗桥东新龙大厦B2座901</p>
                    <p className="text-slate-500 text-xs mt-1">点击查看详细地图</p>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="tech-tag text-xs">地图加载中</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="glow-border rounded-2xl p-6 md:p-8 bg-slate-900/60">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{t('contact.form.success')}</h3>
                    <p className="text-slate-400 text-sm mb-6">我们的销售工程师将优先与您联系，为您提供专属解决方案。</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',company:'',dept:'',need:'',message:'' }) }}
                      className="btn-cta text-white px-8 py-3 rounded-xl cursor-pointer"
                    >
                      重新提交
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.name')} <span className="text-rose-400">*</span></label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm placeholder-slate-600"
                          placeholder={t('contact.form.name')}
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.phone')} <span className="text-rose-400">*</span></label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm placeholder-slate-600"
                          placeholder="138XXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.company')}</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm placeholder-slate-600"
                          placeholder={t('contact.form.company')}
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.dept')}</label>
                        <input
                          name="dept"
                          value={form.dept}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm placeholder-slate-600"
                          placeholder={t('contact.form.dept')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.need')}</label>
                      <select
                        name="need"
                        value={form.need}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm cursor-pointer"
                      >
                        <option value="">-- {t('contact.form.need')} --</option>
                        {['opt1','opt2','opt3','opt4','opt5'].map(opt => (
                          <option key={opt} value={opt}>{t(`contact.form.need.${opt}`)}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">{t('contact.form.message')}</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 text-white rounded-xl px-4 py-2.5 outline-none transition-colors text-sm placeholder-slate-600 resize-none"
                        placeholder="请描述您的具体需求、应用场景或技术问题..."
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-cta text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> 提交中...</>
                        ) : (
                          <><Send size={16} /> {t('contact.form.submit')}</>
                        )}
                      </button>
                      <p className="text-slate-500 text-xs">我们承诺在24小时内回复您的咨询</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
