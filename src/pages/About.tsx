import { useLang } from '../contexts/LangContext'
import SEO from '../components/SEO'
import { Shield, Lightbulb, Star, Heart, Award, Users, Target, Eye } from 'lucide-react'

export default function About() {
  const { t } = useLang()

  const cores = [
    { icon: <Lightbulb size={24} />, title: t('about.core1.title'), desc: t('about.core1.desc'), color: 'sky' },
    { icon: <Award size={24} />, title: t('about.core2.title'), desc: t('about.core2.desc'), color: 'green' },
    { icon: <Users size={24} />, title: t('about.core3.title'), desc: t('about.core3.desc'), color: 'indigo' },
    { icon: <Shield size={24} />, title: t('about.core4.title'), desc: t('about.core4.desc'), color: 'amber' },
  ]

  const timeline = [
    { year: '2015', event: '公司成立，专注光电产品研发' },
    { year: '2017', event: '激光透窗核心技术研发成功' },
    { year: '2019', event: '首批产品通过公安部检测认证' },
    { year: '2021', event: '智能交通产品线正式推出' },
    { year: '2023', event: '合作客户超200家，覆盖全国多省市' },
    { year: '2024', event: '激光透窗行业专利数量领先' },
  ]

  return (
    <div className="min-h-screen pt-20">
      <SEO
        titleZh="关于我们"
        titleEn="About Us"
        descriptionZh="了解北京集光智通科技有限公司 - 专注激光透窗超员检测、车内人数识别与智能交通领域的高新技术企业。自主研发激光透窗技术，提供车窗透视人数识别系统、超员检测设备及公安/交警执法解决方案。"
        descriptionEn="Learn about Jiguang Zhitong Technology - a high-tech enterprise specializing in laser through-glass overload detection, occupant recognition and smart traffic solutions for law enforcement."
        path="about"
      />
      {/* Page hero */}
      <section className="py-20 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="tech-tag mb-4 inline-block">{t('about.title')}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              北京集光智通科技<br />
              <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">有限公司</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">{t('about.desc')}</p>
            <p className="text-slate-400 text-base mt-4 leading-relaxed">
              公司自主研发的<strong className="text-sky-300">激光透窗技术</strong>，可穿透车窗与建筑玻璃进行<strong className="text-sky-300">车内人数识别</strong>与<strong className="text-sky-300">超员检测</strong>，
              为公安交警部门提供固定卡口、便携设备、无人机挂载三种部署形态的执法装备。
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glow-border rounded-[28px] p-8 md:p-9 bg-gradient-to-br from-sky-500/10 to-transparent hover-card min-h-[260px] shadow-[0_18px_40px_rgba(2,8,23,0.18)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Target size={34} className="text-sky-300" />
              </div>
              <h3 className="text-sky-300 font-extrabold text-2xl md:text-[28px] tracking-[0.02em] mb-4">{t('about.mission.title')}</h3>
              <p className="text-white text-xl md:text-[22px] font-bold leading-9">{t('about.mission.text')}</p>
            </div>
            <div className="glow-border rounded-[28px] p-8 md:p-9 bg-gradient-to-br from-green-500/10 to-transparent hover-card min-h-[260px] shadow-[0_18px_40px_rgba(2,8,23,0.18)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 text-green-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Eye size={34} className="text-green-300" />
              </div>
              <h3 className="text-green-300 font-extrabold text-2xl md:text-[28px] tracking-[0.02em] mb-4">{t('about.vision.title')}</h3>
              <p className="text-white text-xl md:text-[22px] font-bold leading-9">{t('about.vision.text')}</p>
            </div>
            <div className="glow-border rounded-[28px] p-8 md:p-9 bg-gradient-to-br from-indigo-500/10 to-transparent hover-card min-h-[260px] shadow-[0_18px_40px_rgba(2,8,23,0.18)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Heart size={34} className="text-indigo-300" />
              </div>
              <h3 className="text-indigo-300 font-extrabold text-2xl md:text-[28px] tracking-[0.02em] mb-4">{t('about.values.title')}</h3>
              <p className="text-white text-xl md:text-[22px] font-bold leading-9">{t('about.values.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core strengths */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl font-bold text-white mb-12">激光透窗与人数识别核心技术优势</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {cores.map((c, i) => (
              <div key={i} className="product-card rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center
                  ${c.color === 'sky' ? 'bg-sky-500/15 text-sky-400' :
                    c.color === 'green' ? 'bg-green-500/15 text-green-400' :
                    c.color === 'indigo' ? 'bg-indigo-500/15 text-indigo-400' :
                    'bg-amber-500/15 text-amber-400'}`}>
                  {c.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl font-bold text-white mb-12">发展历程 - 从激光透窗技术研发到超员检测产品落地</h2>
          <div className="relative mt-8">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-green-500" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
                  <div className={`${i % 2 === 0 ? 'md:text-right md:w-1/2' : 'md:w-1/2'} pl-12 md:pl-0`}>
                    <div className="glow-border rounded-xl p-4 bg-slate-900/80 hover-card inline-block min-w-48">
                      <span className="stat-number text-xl font-bold font-mono">{item.year}</span>
                      <p className="text-slate-300 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 border-2 border-sky-300 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl font-bold text-white mb-12">合作客户</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {['公安部门', '交通管理局', '城市安防', '边境管控', '应急指挥中心', '重要场所安保', '智慧城市项目', '军警装备'].map((name, i) => (
              <div key={i} className="glow-border rounded-xl p-4 flex items-center gap-3 hover-card cursor-default">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
                  <Shield size={16} className="text-sky-400" />
                </div>
                <span className="text-slate-300 text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
