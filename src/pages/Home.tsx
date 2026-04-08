import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { ArrowRight, Shield, Camera, Zap, Car, ChevronRight, Play, Award, Crosshair, Telescope, Gem } from 'lucide-react'

const withBase = (path: string) => import.meta.env.BASE_URL + path.replace(/^\/+/, '')

export default function Home() {

  const { lang, t } = useLang()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { bg: 'from-slate-900 via-sky-950 to-slate-900', accent: 'sky' },
    { bg: 'from-slate-900 via-emerald-950 to-slate-900', accent: 'green' },
    { bg: 'from-slate-900 via-indigo-950 to-slate-900', accent: 'indigo' },
  ]

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const trustSignals = [
    {
      eyebrowZh: '核心技术',
      eyebrowEn: 'Core Technology',
      titleZh: '自研激光透窗专利体系',
      titleEn: 'Proprietary laser through-glass stack',
      descZh: '围绕穿透车窗与建筑玻璃成像，形成适用于执法与巡查场景的核心光电能力。',
      descEn: 'A proprietary optical stack for through-glass imaging in enforcement and inspection scenarios.',
      accent: 'sky',
    },
    {
      eyebrowZh: '重点客户',
      eyebrowEn: 'Client Focus',
      titleZh: '公安与交警执法场景优先',
      titleEn: 'Designed for police and traffic enforcement',
      descZh: '解决方案聚焦公安局、交警部门等执法机构的取证、巡查与道路治理需求。',
      descEn: 'Built around evidence collection, inspection, and traffic governance needs for law enforcement agencies.',
      accent: 'green',
    },
    {
      eyebrowZh: '产品布局',
      eyebrowEn: 'Portfolio',
      titleZh: '固定 + 便携 + 无人机三类平台',
      titleEn: 'Fixed, portable, and drone-mounted platforms',
      descZh: '覆盖固定卡口、标准路段、机动布控与空中侦测的多层级装备部署。',
      descEn: 'Supports checkpoints, standard roads, mobile deployment, and airborne inspection.',
      accent: 'indigo',
    },
    {
      eyebrowZh: '交付方式',
      eyebrowEn: 'Delivery',
      titleZh: '方案咨询到资料交付一体化',
      titleEn: 'Integrated solution consulting and documentation',
      descZh: '支持方案沟通、规格书资料、演示视频与项目部署交流，适配政企采购链路。',
      descEn: 'Combines consulting, specifications, demo media, and deployment communication for enterprise procurement.',
      accent: 'amber',
    },
  ]

  const features = [
    {
      icon: <Camera size={28} />,
      title: '视频监控',
      titleEn: 'Video Surveillance',
      desc: '高清、全天候、AI增强型视频监控解决方案',
      color: 'sky',
    },
    {
      icon: <Zap size={28} />,
      title: '激光透窗',
      titleEn: 'Laser Through-Glass',
      desc: '核心专利技术，雨雾天气下超清成像',
      color: 'green',
    },
    {
      icon: <Car size={28} />,
      title: '智能交通',
      titleEn: 'Smart Traffic',
      desc: '违章抓拍、车牌识别、智慧城市全套方案',
      color: 'indigo',
    },
    {
      icon: <Shield size={28} />,
      title: '公共安全',
      titleEn: 'Public Safety',
      desc: '服务公安、交警，守护城市公共安全',
      color: 'amber',
    },
  ]

  const colorMap: Record<string, string> = {
    sky: 'from-sky-500/20 to-transparent border-sky-500/30 text-sky-400',
    green: 'from-green-500/20 to-transparent border-green-500/30 text-green-400',
    indigo: 'from-indigo-500/20 to-transparent border-indigo-500/30 text-indigo-400',
    amber: 'from-amber-500/20 to-transparent border-amber-500/30 text-amber-400',
  }

  const seriesProducts = [
    {
      title: '高配版激光透窗人数识别系统',
      titleEn: 'Advanced Through-Glass Occupant Recognition System',
      desc: '重点道路 / 固定卡口 / 双光谱抓拍',
      descEn: 'Fixed checkpoints / dual-spectrum capture / structured evidence',
      image: withBase('images/advanced-through-glass-system.png'),

      accent: 'sky',
      specs: ['双900万像素主相机', '21Tops边缘算力', 'IP66'],
      specsEn: ['Dual 9MP capture', '21Tops edge AI', 'IP66'],
    },
    {
      title: '便携式激光透窗智能识别系统',
      titleEn: 'Portable Laser Through-Glass Intelligent Recognition System',
      desc: '临时布控 / 机动执法 / 电池供电',
      descEn: 'Rapid deployment / mobile enforcement / battery powered',
      image: withBase('images/portable-through-glass-system.png'),
      accent: 'green',
      specs: ['500Wh续航约12小时', '1-2车道移动检测', '整机约15kg'],
      specsEn: ['500Wh / 12h', '1-2 lane mobile use', 'Approx. 15kg'],
    },
    {
      title: '简配版激光透窗超员检测系统',
      titleEn: 'Standard Through-Glass Overload Detection System',
      desc: '标准路段 / 规模化建设 / 成本友好',
      descEn: 'Standard roads / scalable deployment / cost efficient',
      image: withBase('images/standard-through-glass-system.png'),
      accent: 'indigo',
      specs: ['900万像素主相机', '透窗识别+超员预警', '1TB本地存储'],
      specsEn: ['9MP main camera', 'Through-glass overload alert', '1TB storage'],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
        {/* Animated background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} transition-all duration-1000`} />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
            style={{ animation: 'scan-line 8s linear infinite' }} />
        </div>

        {/* Floating tech circles */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full border border-sky-500/10 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full border border-green-500/10 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr,0.92fr]">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {['hero.badge1', 'hero.badge2', 'hero.badge3', 'hero.badge4'].map(key => (
                  <span key={key} className="tech-tag animate-slide-up">{t(key)}</span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white">{t('hero.title1')}</span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>

              <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-3xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="grid gap-3 sm:grid-cols-3 mb-8 max-w-3xl">
                {[
                  {
                    label: lang === 'zh' ? '服务对象' : 'Client Focus',
                    value: lang === 'zh' ? '公安局 / 交警部门 / 执法机构' : 'Police / traffic agencies / enforcement teams',
                  },
                  {
                    label: lang === 'zh' ? '交付形态' : 'Deployment',
                    value: lang === 'zh' ? '固定卡口 / 便携设备 / 无人机挂载' : 'Fixed / portable / drone-mounted',
                  },
                  {
                    label: lang === 'zh' ? '核心优势' : 'Strength',
                    value: lang === 'zh' ? '透窗识别 / 远距取证 / 光电融合' : 'Through-glass / long-range / optical fusion',
                  },
                ].map(item => (
                  <div key={item.label} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-4 shadow-[0_12px_30px_rgba(2,8,23,0.2)] backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200/70">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-cta text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 cursor-pointer">
                  {t('hero.cta1')}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="px-8 py-3.5 rounded-xl font-semibold border border-sky-400/35 text-sky-100 hover:bg-sky-500/10 transition-all cursor-pointer flex items-center gap-2 bg-slate-900/35">
                  {t('hero.cta2')}
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            <div className="glow-border rounded-[32px] bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.88))] p-5 md:p-6 shadow-[0_25px_60px_rgba(2,8,23,0.35)]">
              <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(15,23,42,0.92)_46%,rgba(2,6,23,0.98)_100%)] p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/70">
                  {lang === 'zh' ? '政企项目优先能力' : 'Enterprise Delivery Priorities'}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white leading-tight">
                  {lang === 'zh' ? '从核心技术到执法场景的完整交付链路' : 'A complete chain from core optics to enforcement scenarios'}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-300">
                  {lang === 'zh'
                    ? '官网首页现在把技术底座、重点客户、部署平台和项目对接方式放在同一视觉层级里，更符合政企访客查看资料时的决策路径。'
                    : 'The hero now surfaces core technology, client focus, deployment platforms, and engagement flow in one decision-friendly layer.'}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: lang === 'zh' ? '技术底座' : 'Technology Base',
                      desc: lang === 'zh' ? '激光透窗 + 光电成像 + AI辅助识别' : 'Laser through-glass + optical imaging + AI assistance',
                    },
                    {
                      title: lang === 'zh' ? '场景覆盖' : 'Scenario Coverage',
                      desc: lang === 'zh' ? '道路卡口、机动执法、空中侦测' : 'Road checkpoints, mobile enforcement, aerial inspection',
                    },
                    {
                      title: lang === 'zh' ? '客户类型' : 'Client Types',
                      desc: lang === 'zh' ? '公安、交警及行业执法单位' : 'Police, traffic agencies, enforcement units',
                    },
                    {
                      title: lang === 'zh' ? '资料交付' : 'Documentation',
                      desc: lang === 'zh' ? '规格书、演示视频、方案交流同步提供' : 'Spec sheets, demo media, and solution communication',
                    },
                  ].map(item => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[28px] border border-white/10 bg-slate-950/80 p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/75">
                      {lang === 'zh' ? '核心方案主视觉' : 'Featured Solution'}
                    </p>
                    <h4 className="mt-3 text-xl font-bold text-white leading-snug">
                      {lang === 'zh' ? seriesProducts[0].title : seriesProducts[0].titleEn}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {lang === 'zh'
                        ? '重点道路、固定卡口、双光谱抓拍等高强度执法场景优先。'
                        : 'Prioritized for fixed roadside deployment and checkpoint-grade evidence capture.'}
                    </p>
                  </div>
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),rgba(15,23,42,0.92)_70%,rgba(2,6,23,1)_100%)] p-3">
                    <img src={seriesProducts[0].image} alt={lang === 'zh' ? seriesProducts[0].title : seriesProducts[0].titleEn} className="h-full w-full object-contain" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: lang === 'zh' ? '部署方式' : 'Deployment', value: lang === 'zh' ? '1-2 车道固定卡口' : '1-2 lane checkpoint' },
                    { label: lang === 'zh' ? '核心能力' : 'Capability', value: lang === 'zh' ? '透窗识别 + 结构化取证' : 'Through-glass + structured evidence' },
                    { label: lang === 'zh' ? '扩展方向' : 'Expansion', value: lang === 'zh' ? '可与便携式、无人机平台联动' : 'Can extend to portable and drone platforms' },
                  ].map(item => (
                    <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-sky-200/70">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-100">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentSlide ? 'bg-sky-400 w-8' : 'bg-slate-600'}`} />
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-y border-sky-500/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.94))] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div className="max-w-3xl">
              <span className="tech-tag mb-4 inline-block">{lang === 'zh' ? '可信锚点' : 'Trust Signals'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {lang === 'zh' ? '把客户最关心的能力直接放到首页前段' : 'Put the most decision-critical strengths upfront'}
              </h2>
            </div>
            <p className="max-w-2xl text-sm md:text-base leading-7 text-slate-300">
              {lang === 'zh'
                ? '相比单纯数字计数，首页现在更直接强调核心技术、客户类型、部署平台与交付方式，方便政企访客快速判断方案是否匹配。'
                : 'Instead of generic counters, the homepage now highlights technology, clients, deployment platforms, and delivery readiness for faster evaluation.'}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustSignals.map(item => (
              <div key={item.titleZh} className={`rounded-[28px] border bg-gradient-to-br p-6 shadow-[0_18px_50px_rgba(2,8,23,0.26)] ${item.accent === 'sky' ? 'border-sky-400/20 from-sky-500/10 to-slate-950/90' : item.accent === 'green' ? 'border-emerald-400/20 from-emerald-500/10 to-slate-950/90' : item.accent === 'indigo' ? 'border-indigo-400/20 from-indigo-500/10 to-slate-950/90' : 'border-amber-400/20 from-amber-500/10 to-slate-950/90'}`}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${item.accent === 'sky' ? 'text-sky-300/80' : item.accent === 'green' ? 'text-emerald-300/80' : item.accent === 'indigo' ? 'text-indigo-300/80' : 'text-amber-300/80'}`}>
                  {lang === 'zh' ? item.eyebrowZh : item.eyebrowEn}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-8 text-white">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {lang === 'zh' ? item.descZh : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Crosshair, title: t('about.mission.title'), text: t('about.mission.text'), color: 'sky' },
              { icon: Telescope, title: t('about.vision.title'), text: t('about.vision.text'), color: 'green' },
              { icon: Gem, title: t('about.values.title'), text: t('about.values.text'), color: 'indigo' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className={`glow-border rounded-[28px] p-7 md:p-8 bg-gradient-to-br ${
                  i === 0 ? 'from-sky-500/10' : i === 1 ? 'from-green-500/10' : 'from-indigo-500/10'
                } to-transparent hover-card cursor-default min-h-[220px] shadow-[0_18px_40px_rgba(2,8,23,0.18)]`}>
                  <div className={`mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${
                    i === 0
                      ? 'border-sky-500/30 bg-sky-500/10 text-sky-300'
                      : i === 1
                        ? 'border-green-500/30 bg-green-500/10 text-green-300'
                        : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className={`text-[22px] md:text-[26px] font-extrabold tracking-[0.02em] mb-3 ${
                    i === 0 ? 'text-sky-300' : i === 1 ? 'text-green-300' : 'text-indigo-300'
                  }`}>{item.title}</h3>
                  <p className="text-base md:text-lg font-medium text-slate-100/92 leading-8 md:leading-9">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Products Preview */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-white mb-2">
                {t('products.title')}
              </h2>
              <p className="text-slate-400 mt-6">{t('products.subtitle')}</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer text-sm">
              {t('nav.products')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className={`product-card rounded-2xl p-6 cursor-pointer`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[f.color].split(' ')[0]} flex items-center justify-center mb-4 ${colorMap[f.color].split(' ').slice(-1)[0]}`}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 mb-3 font-mono">{f.titleEn}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sky-400 text-sm">
                  <span>{t('products.detail')}</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Through-glass overload detection series */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-sky-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <span className="tech-tag mb-4 inline-block">
                {lang === 'zh' ? '方案系列推荐' : 'Recommended Solution Series'}
              </span>
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-white mb-4 inline-block">
                {lang === 'zh' ? '激光透窗超员检测方案系列' : 'Through-Glass Occupant Detection Portfolio'}
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mt-6">
                {lang === 'zh'
                  ? '把高配版、简配版、便携式三型方案放到首页同一组推荐卡片中，访客能第一时间理解“固定卡口 + 标准部署 + 机动布控”的完整产品梯度。'
                  : 'The homepage now presents advanced, standard, and portable options together so visitors quickly understand the full checkpoint, roadside, and mobile deployment ladder.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="btn-cta text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 cursor-pointer">
                {lang === 'zh' ? '查看产品中心' : 'Browse Products'}
                <ArrowRight size={16} />
              </Link>
              <Link to="/scenarios" className="px-6 py-3 rounded-xl font-semibold border border-sky-500/35 text-sky-300 hover:bg-sky-500/10 transition-all inline-flex items-center gap-2 cursor-pointer">
                {lang === 'zh' ? '查看应用场景' : 'View Applications'}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {seriesProducts.map(product => (
              <Link key={product.title} to="/products" className="group glow-border rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950/90 hover-card cursor-pointer">
                <div className={`h-1.5 bg-gradient-to-r ${product.accent === 'sky' ? 'from-sky-400 to-sky-500/20' : product.accent === 'green' ? 'from-green-400 to-green-500/20' : 'from-indigo-400 to-indigo-500/20'}`} />
                <div className="p-6 md:p-7">
                  <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(15,23,42,0.08)_55%,_rgba(2,6,23,0.95)_100%)] p-6 mb-6 min-h-[260px] flex items-center justify-center">
                    <img src={product.image} alt={lang === 'zh' ? product.title : product.titleEn} className="max-h-[260px] w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className={`text-sm font-semibold mb-3 ${product.accent === 'sky' ? 'text-sky-300' : product.accent === 'green' ? 'text-green-300' : 'text-indigo-300'}`}>
                    {lang === 'zh' ? '系列定位' : 'Series Positioning'}
                  </p>
                  <h3 className="text-white font-bold text-2xl leading-snug mb-2">{lang === 'zh' ? product.title : product.titleEn}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{lang === 'zh' ? product.desc : product.descEn}</p>

                  <div className="space-y-2 mb-6">
                    {(lang === 'zh' ? product.specs : product.specsEn).map(spec => (
                      <div key={spec} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className={`h-1.5 w-1.5 rounded-full ${product.accent === 'sky' ? 'bg-sky-400' : product.accent === 'green' ? 'bg-green-400' : 'bg-indigo-400'}`} />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-sky-400 text-sm font-medium">
                    <span>{lang === 'zh' ? '查看详情' : 'View Details'}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Application scenarios preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-sky-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-white mb-4 inline-block">
              {t('scenarios.title')}
            </h2>
            <p className="text-slate-400 mt-8">{t('scenarios.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {['s1','s2','s3','s4','s5','s6'].map((s, i) => {
              const icons = [Shield, Camera, Zap, Camera, Zap, Car]
              const Icon = icons[i]
              const colors = ['sky','green','indigo','amber','sky','green']
              const c = colors[i]
              return (
                <div key={s} className={`glow-border rounded-xl p-5 hover-card cursor-pointer bg-gradient-to-br from-slate-900/80 to-transparent`}>
                  <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center bg-${c}-500/15 text-${c}-400`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t(`scenarios.${s}.title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`scenarios.${s}.desc`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video preview strip */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="section-heading text-3xl font-bold text-white">{t('videos.title')}</h2>
            <Link to="/videos" className="hidden md:flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer text-sm">
              {t('nav.videos')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['v1','v2','v3','v4'].map((v, i) => (
              <Link key={v} to="/videos" className="relative group rounded-xl overflow-hidden aspect-video cursor-pointer bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-all hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 to-slate-900/80 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate">{t(`videos.${v}.title`)}</p>
                </div>
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-sky-800/30 to-transparent" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(56,189,248,0.03) 3px, rgba(56,189,248,0.03) 4px)` }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-y border-sky-500/10 bg-gradient-to-r from-sky-900/30 via-green-900/20 to-sky-900/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-border rounded-[32px] bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.92))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(2,8,23,0.28)] md:px-10">
            <Award size={40} className="mx-auto mb-4 text-sky-400" />
            <span className="tech-tag mb-4 inline-block">{lang === 'zh' ? '合作与对接' : 'Engagement Flow'}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {lang === 'zh' ? '方案咨询、资料获取与项目沟通一次完成' : 'Consulting, documentation, and project alignment in one flow'}
            </h2>
            <p className="mx-auto max-w-3xl text-slate-300 leading-7">
              {lang === 'zh'
                ? '围绕政企客户常见的内部汇报、需求澄清和选型沟通链路，官网把核心方案、规格资料、视频演示与联系入口都集中到了更容易决策的位置。'
                : 'The site now brings solution summaries, specification files, demo media, and contact entry points together for enterprise decision flows.'}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                {
                  titleZh: '方案初判',
                  titleEn: 'Initial Fit',
                  descZh: '快速确认固定、便携或无人机平台的适配方向。',
                  descEn: 'Quickly confirm whether fixed, portable, or drone platforms fit best.',
                },
                {
                  titleZh: '资料输出',
                  titleEn: 'Documentation',
                  descZh: '直接获取规格书、演示视频与产品说明，便于内部汇报。',
                  descEn: 'Access spec sheets, demo videos, and product summaries for internal review.',
                },
                {
                  titleZh: '项目对接',
                  titleEn: 'Project Contact',
                  descZh: '进入具体场景沟通与部署方式交流，减少反复解释成本。',
                  descEn: 'Move into deployment discussion with less repeated explanation.',
                },
              ].map(item => (
                <div key={item.titleZh} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                  <p className="text-sm font-semibold text-white">{lang === 'zh' ? item.titleZh : item.titleEn}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lang === 'zh' ? item.descZh : item.descEn}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-cta inline-flex items-center gap-2 rounded-xl px-10 py-3.5 font-semibold text-white cursor-pointer">
                {t('hero.cta2')} <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-slate-900/40 px-8 py-3.5 font-semibold text-sky-100 transition-all hover:bg-sky-500/10 cursor-pointer">
                {lang === 'zh' ? '先看产品矩阵' : 'Browse Portfolio'} <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
