import { useLang } from '../contexts/LangContext'
import SEO from '../components/SEO'
import { Calendar, Tag, ArrowRight, Eye } from 'lucide-react'

interface NewsItem {
  id: string
  tagKey: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
  date: string
  views: string
  featured?: boolean
}

const newsItems: NewsItem[] = [
  {
    id: 'N001',
    tagKey: 'news.tag.product',
    titleZh: '集光智通第三代激光透窗技术正式发布',
    titleEn: 'Jiguang Zhitong Launches 3rd-Gen Laser Through-Glass Technology',
    summaryZh: '经过三年技术攻关，我公司第三代激光透窗技术在穿透能力、成像清晰度和识别距离上均取得重大突破，填补国内多项技术空白...',
    summaryEn: 'After three years of R&D, our 3rd-gen laser through-glass technology achieves breakthroughs in penetration, imaging clarity and detection range...',
    date: '2024-11-15',
    views: '3,280',
    featured: true,
  },
  {
    id: 'N002',
    tagKey: 'news.tag.company',
    titleZh: '公司荣获"国家高新技术企业"认定',
    titleEn: 'Company Recognized as National Hi-Tech Enterprise',
    summaryZh: '近日，我公司正式通过国家高新技术企业认定，进一步彰显了公司在光电智能感知领域的技术实力和自主创新能力...',
    summaryEn: 'Our company has been officially recognized as a National Hi-Tech Enterprise, demonstrating our technical strength in optoelectronic sensing...',
    date: '2024-10-20',
    views: '2,140',
  },
  {
    id: 'N003',
    tagKey: 'news.tag.industry',
    titleZh: '智能交通管控系统市场需求持续增长',
    titleEn: 'Smart Traffic Control System Market Continues to Grow',
    summaryZh: '随着"雪亮工程"和"智慧城市"建设的深入推进，国内智能交通管控市场规模持续扩大，预计到2025年将突破千亿规模...',
    summaryEn: 'With the advancement of smart city construction, the domestic intelligent traffic management market is expected to exceed 100 billion yuan by 2025...',
    date: '2024-09-30',
    views: '1,890',
  },
  {
    id: 'N004',
    tagKey: 'news.tag.tech',
    titleZh: '激光透窗技术在复杂气象条件下的应用研究',
    titleEn: 'Research on Laser Through-Glass Technology in Complex Weather',
    summaryZh: '本文深入分析了激光透窗技术在雨、雾、霾等复杂气象条件下的光学特性，以及相应的图像增强算法研究成果...',
    summaryEn: 'An in-depth analysis of laser through-glass technology optical characteristics under complex weather conditions including rain, fog and haze...',
    date: '2024-08-15',
    views: '4,560',
  },
  {
    id: 'N005',
    tagKey: 'news.tag.company',
    titleZh: '公司与多地公安局签署战略合作协议',
    titleEn: 'Company Signs Strategic Cooperation with Multiple Police Departments',
    summaryZh: '集光智通与多个省市公安局正式签署战略合作框架协议，将在视频监控、智能分析等领域展开深度合作...',
    summaryEn: 'Jiguang Zhitong signed strategic cooperation agreements with multiple provincial and municipal police departments...',
    date: '2024-07-28',
    views: '2,760',
  },
  {
    id: 'N006',
    tagKey: 'news.tag.product',
    titleZh: '新一代高速PTZ摄像机正式上市',
    titleEn: 'New High-Speed PTZ Camera Officially Launched',
    summaryZh: '全新升级的PTZ-H200高速球机，搭载40倍光学变焦和AI自动跟踪功能，为大范围区域安防监控提供理想解决方案...',
    summaryEn: 'The newly upgraded PTZ-H200 high-speed ball camera features 40x optical zoom and AI auto-tracking for wide-area security monitoring...',
    date: '2024-06-12',
    views: '1,970',
  },
  {
    id: 'N007',
    tagKey: 'news.tag.product',
    titleZh: '激光透窗超员检测系统在多地交警部门落地应用',
    titleEn: 'Laser Through-Glass Overload Detection System Deployed in Multiple Cities',
    summaryZh: '集光智通激光透窗超员检测系统已在多个省市交警部门完成部署，通过车窗透视技术实现车内人数识别与超员预警，有效提升路面执法效率。系统支持固定卡口与便携两种部署模式，单车道检测准确率达98%以上。',
    summaryEn: 'Jiguang Zhitong\'s laser through-glass overload detection system has been deployed in multiple cities. It uses through-glass technology for occupant counting and overload alerts, significantly improving traffic enforcement efficiency with over 98% detection accuracy.',
    date: '2024-05-20',
    views: '3,120',
  },
  {
    id: 'N008',
    tagKey: 'news.tag.tech',
    titleZh: '基于深度学习的人数识别算法在透窗场景中的优化实践',
    titleEn: 'Deep Learning-Based Occupant Recognition Optimization for Through-Glass Scenarios',
    summaryZh: '本文介绍了集光智通在激光透窗人数识别领域的AI算法优化成果。针对车窗玻璃反光、雨雾遮挡、光照变化等复杂条件，团队开发了多模态融合识别算法，在确保低延迟的同时显著提升识别精度，人数识别准确率达到96%。',
    summaryEn: 'This article presents Jiguang Zhitong\'s AI algorithm optimization for through-glass occupant recognition. The team developed a multimodal fusion algorithm addressing glass reflection, rain, fog, and lighting variations, achieving 96% recognition accuracy with low latency.',
    date: '2024-04-15',
    views: '2,540',
  },
]

const tagColors: Record<string, string> = {
  'news.tag.company': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  'news.tag.product': 'bg-green-500/15 text-green-400 border-green-500/30',
  'news.tag.industry': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  'news.tag.tech': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
}

export default function News() {
  const { lang, t } = useLang()

  const featured = newsItems.find(n => n.featured)
  const rest = newsItems.filter(n => !n.featured)

  return (
    <div className="min-h-screen pt-20">
      <SEO
        titleZh="新闻资讯"
        titleEn="News"
        descriptionZh="北京集光智通科技有限公司最新动态、产品发布与行业前沿资讯。"
        descriptionEn="Latest news, product launches and industry insights from Jiguang Zhitong Technology."
        path="news"
      />
      {/* Header */}
      <section className="py-16 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/15 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('news.title')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-3">{t('news.title')}</h1>
          <p className="text-slate-400 text-lg">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured article */}
            {featured && (
              <div className="lg:col-span-1 glow-border rounded-2xl overflow-hidden hover-card cursor-pointer bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="h-48 bg-gradient-to-br from-sky-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 tech-grid opacity-50" />
                  <div className="relative text-center px-6">
                    <p className="text-sky-400 text-xs font-mono mb-2">FEATURED</p>
                    <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center mx-auto">
                      <Tag size={24} className="text-sky-400" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded border ${tagColors[featured.tagKey]}`}>{t(featured.tagKey)}</span>
                    <span className="text-slate-500 text-xs flex items-center gap-1"><Calendar size={11} />{featured.date}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">
                    {lang === 'zh' ? featured.titleZh : featured.titleEn}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {lang === 'zh' ? featured.summaryZh : featured.summaryEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs flex items-center gap-1"><Eye size={11} />{featured.views}</span>
                    <span className="text-sky-400 text-sm flex items-center gap-1 cursor-pointer hover:text-sky-300 transition-colors">
                      {t('news.readmore')} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* News list */}
            <div className="lg:col-span-2 space-y-4">
              {rest.map(news => (
                <div key={news.id} className="glow-border rounded-xl p-5 hover-card cursor-pointer bg-gradient-to-r from-slate-900/80 to-transparent flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded border ${tagColors[news.tagKey]}`}>{t(news.tagKey)}</span>
                      <span className="text-slate-500 text-xs flex items-center gap-1"><Calendar size={11} />{news.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug hover:text-sky-400 transition-colors">
                      {lang === 'zh' ? news.titleZh : news.titleEn}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {lang === 'zh' ? news.summaryZh : news.summaryEn}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-slate-600 text-xs flex items-center gap-1"><Eye size={10} />{news.views}</span>
                      <span className="text-sky-500 text-xs flex items-center gap-1 cursor-pointer hover:text-sky-400 transition-colors">
                        {t('news.readmore')} <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full py-3 border border-sky-500/30 rounded-xl text-sky-400 hover:bg-sky-500/10 transition-all cursor-pointer text-sm flex items-center justify-center gap-2">
                {t('news.viewall')} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
