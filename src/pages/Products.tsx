import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { ChevronDown, ChevronUp, MessageSquare, Zap, Camera, Car, Eye, Download } from 'lucide-react'

interface Product {
  id: string
  category: 'surveillance' | 'laser' | 'traffic'
  nameZh: string
  nameEn: string
  descZh: string
  descEn: string
  specs: { labelZh: string; labelEn: string; value: string }[]
  tags: string[]
  image?: string
  docUrl?: string
  highlight?: boolean
}

const products: Product[] = [
  {
    id: '高配版',
    category: 'traffic',
    nameZh: '高配版激光透窗人数识别系统',
    nameEn: 'Advanced Through-Glass Occupant Recognition System',
    descZh: '面向重点道路与固定卡口场景，采用正向主相机 + 侧向人数识别相机组合，兼顾双光谱抓拍、透窗识别与高精度结构化取证。',
    descEn: 'Built for key roadways and fixed checkpoints, combining frontal capture and side occupant recognition for through-glass detection and structured evidence collection.',
    specs: [
      { labelZh: '主相机', labelEn: 'Main Camera', value: '双900万像素 / 4096×2160' },
      { labelZh: '侧向识别', labelEn: 'Side Recognition', value: '300万像素 / 2048×1536' },
      { labelZh: '补光能力', labelEn: 'Illumination', value: '10W LED + 80W 激光闪光灯' },
      { labelZh: '边缘算力', labelEn: 'Edge AI', value: '21Tops' },
      { labelZh: '存储', labelEn: 'Storage', value: '1TB 本地存储' },
      { labelZh: '识别能力', labelEn: 'Recognition', value: '车牌 / 车型 / 车色 / 司乘行为' },
      { labelZh: '部署形式', labelEn: 'Deployment', value: '1-2 车道固定卡口' },
      { labelZh: '防护等级', labelEn: 'Protection', value: 'IP66' },
    ],
    tags: ['高配版', '双光谱抓拍', '固定卡口', '透窗识别', '交通执法'],
    image: '/images/advanced-through-glass-system.png',
    highlight: true,
  },
  {
    id: '便携式',
    category: 'traffic',
    nameZh: '便携式激光透窗智能识别系统',
    nameEn: 'Portable Laser Through-Glass Intelligent Recognition System',
    descZh: '一体化便携设计，支持电池供电与快速上岗，适合临时检查、机动稽查、专项整治等移动布控型交通执法任务。',
    descEn: 'An all-in-one portable platform with battery power and rapid deployment, designed for mobile inspection, spot checks, and temporary enforcement operations.',
    specs: [
      { labelZh: '系统组成', labelEn: 'System', value: '车牌相机 + 透窗相机 + 全景相机 + 边缘计算' },
      { labelZh: '激光波长', labelEn: 'Laser Wavelength', value: '808±10nm' },
      { labelZh: '边缘算力', labelEn: 'Edge AI', value: '21Tops' },
      { labelZh: '存储', labelEn: 'Storage', value: '1TB 本地存储' },
      { labelZh: '续航', labelEn: 'Battery Life', value: '500Wh / 约12小时' },
      { labelZh: '覆盖车道', labelEn: 'Lanes', value: '1-2 车道移动式检测' },
      { labelZh: '整机重量', labelEn: 'Weight', value: '约15kg（不含三脚架）' },
      { labelZh: '防护等级', labelEn: 'Protection', value: 'IP66' },
    ],
    tags: ['便携部署', '移动执法', '电池供电', '快速布控', '专项整治'],
    image: '/images/portable-through-glass-system.png',
    highlight: true,
  },
  {
    id: '简配版',
    category: 'traffic',
    nameZh: '简配版激光透窗超员检测系统',
    nameEn: 'Standard Through-Glass Overload Detection System',
    descZh: '保留透窗识别与超员预警核心能力，在保证识别效果的同时简化主相机配置，更适合标准路段与规模化部署建设。',
    descEn: 'A lighter through-glass overload detection solution retaining the core recognition pipeline while lowering deployment complexity for standard road sections.',
    specs: [
      { labelZh: '主相机', labelEn: 'Main Camera', value: '900万像素 / 4096×2160' },
      { labelZh: '侧向识别', labelEn: 'Side Recognition', value: '300万像素 / 2048×1536' },
      { labelZh: '边缘算力', labelEn: 'Edge AI', value: '21Tops' },
      { labelZh: '存储', labelEn: 'Storage', value: '1TB 本地存储' },
      { labelZh: '核心能力', labelEn: 'Capability', value: '透窗识别 + 超员预警' },
      { labelZh: '部署形式', labelEn: 'Deployment', value: '1-2 车道标准部署' },
      { labelZh: '场景定位', labelEn: 'Scenario Fit', value: '县区道路 / 普通路段 / 批量建设' },
      { labelZh: '防护等级', labelEn: 'Protection', value: 'IP66' },
    ],
    tags: ['简配版', '标准部署', '高性价比', '超员检测', '规模化建设'],
    image: '/images/standard-through-glass-system.png',
  },
  {
    id: 'JG-WRJ-GZ1',
    category: 'laser',
    nameZh: '激光透窗无人机挂载（透视眼）JG-WRJ-GZ1',
    nameEn: 'Drone-mounted Laser Through-Glass Imaging System JG-WRJ-GZ1',
    descZh: '面向公安执法与空中侦测场景，集成30倍光学变焦、脉冲近红外补光与激光透窗技术，可在白天、夜间及微光环境下远距离穿透车窗及建筑玻璃进行非接触式观察取证。',
    descEn: 'An aerial through-glass imaging payload for law enforcement and airborne inspection, combining 30x optical zoom, pulsed near-infrared illumination, and proprietary laser through-glass imaging for long-range evidence capture day or night.',
    specs: [
      { labelZh: '传感器', labelEn: 'Sensor', value: '1/2.6" 1080P Global Shutter CMOS' },
      { labelZh: '分辨率', labelEn: 'Resolution', value: '1920×1080 @ 25/30fps' },
      { labelZh: '光学变焦', labelEn: 'Optical Zoom', value: '30x (4.7mm - 141mm)' },
      { labelZh: '激光波长', labelEn: 'Laser Wavelength', value: '808±10nm' },
      { labelZh: '峰值功率', labelEn: 'Peak Power', value: '50W' },
      { labelZh: '云台稳定', labelEn: 'Gimbal Stability', value: '3-axis / ±0.002° 悬停抖动' },
      { labelZh: '整机重量', labelEn: 'Weight', value: '1200g±5g（含云台）' },
      { labelZh: '适配平台', labelEn: 'Supported Platforms', value: 'DJI Matrice 300 / 350 / 400' },
      { labelZh: '防护等级', labelEn: 'Protection', value: 'IP55' },
    ],
    tags: ['无人机挂载', '激光透窗', '30倍光学变焦', '夜间侦测', 'DJI SkyPort'],
    image: '/images/jg-wrj-gz1-product.png',
    docUrl: '/docs/jg-wrj-gz1-spec.docx',
    highlight: true,
  },
  {
    id: 'P001',
    category: 'laser',
    nameZh: '激光透窗高清摄像机 LW-4K01',
    nameEn: 'Laser Through-Glass 4K Camera LW-4K01',
    descZh: '采用自主研发激光透窗技术，可穿透雨雾、车窗玻璃等介质，实现全天候4K超高清成像，专为公安执法取证场景设计。',
    descEn: 'Proprietary laser through-glass technology for all-weather 4K imaging through rain, fog, and glass.',
    specs: [
      { labelZh: '分辨率', labelEn: 'Resolution', value: '3840×2160 (4K UHD)' },
      { labelZh: '传感器', labelEn: 'Sensor', value: '1/1.8" Progressive CMOS' },
      { labelZh: '激光功率', labelEn: 'Laser Power', value: '850nm / 940nm 红外激光' },
      { labelZh: '探测距离', labelEn: 'Detection Range', value: '50m - 500m' },
      { labelZh: '透窗类型', labelEn: 'Glass Type', value: '普通/贴膜/钢化玻璃' },
      { labelZh: '防护等级', labelEn: 'IP Rating', value: 'IP67' },
      { labelZh: '工作温度', labelEn: 'Temperature', value: '-40°C ~ +70°C' },
      { labelZh: '供电方式', labelEn: 'Power', value: 'DC12V / PoE+' },
    ],
    tags: ['激光透窗', '4K超清', '全天候', '执法取证'],
    highlight: true,
  },
  {
    id: 'P002',
    category: 'laser',
    nameZh: '激光透窗变焦摄像机 LW-VZ30',
    nameEn: 'Laser Through-Glass Zoom Camera LW-VZ30',
    descZh: '30倍光学变焦配合激光透窗技术，远距离目标清晰识别，适用于交通执法、重要场所安保等场景。',
    descEn: '30x optical zoom with laser through-glass, ideal for long-range target identification.',
    specs: [
      { labelZh: '光学变焦', labelEn: 'Optical Zoom', value: '30x (4.3mm - 129mm)' },
      { labelZh: '数字变焦', labelEn: 'Digital Zoom', value: '16x' },
      { labelZh: '分辨率', labelEn: 'Resolution', value: '1920×1080 @ 60fps' },
      { labelZh: '最小照度', labelEn: 'Min Illumination', value: '0.0001 Lux (激光补光)' },
      { labelZh: '探测距离', labelEn: 'Detection Range', value: '100m - 800m' },
      { labelZh: '防护等级', labelEn: 'IP Rating', value: 'IP66' },
      { labelZh: '工作温度', labelEn: 'Temperature', value: '-30°C ~ +60°C' },
      { labelZh: '接口', labelEn: 'Interface', value: 'HDMI / SDI / IP' },
    ],
    tags: ['30倍变焦', '激光透窗', '长距离', '夜视'],
  },
  {
    id: 'P003',
    category: 'traffic',
    nameZh: '智能交通违章抓拍系统 IT-CAP01',
    nameEn: 'Intelligent Traffic Violation Capture IT-CAP01',
    descZh: '支持闯红灯、超速、违停、不系安全带等多类违法行为自动识别抓拍，内置AI车牌识别引擎，识别率>99.5%。',
    descEn: 'AI-powered violation capture supporting red-light running, speeding, illegal parking, etc.',
    specs: [
      { labelZh: '分辨率', labelEn: 'Resolution', value: '2000万像素' },
      { labelZh: '车牌识别率', labelEn: 'Recognition Rate', value: '≥99.5%' },
      { labelZh: '抓拍速度', labelEn: 'Capture Speed', value: '快门 1/10000s' },
      { labelZh: '检测车道', labelEn: 'Lanes', value: '1-4 车道' },
      { labelZh: '测速方式', labelEn: 'Speed Detection', value: '雷达+视频融合' },
      { labelZh: '工作温度', labelEn: 'Temperature', value: '-40°C ~ +65°C' },
      { labelZh: '通讯方式', labelEn: 'Communication', value: '4G / 有线网络' },
      { labelZh: '存储', labelEn: 'Storage', value: '本地SD + 云端备份' },
    ],
    tags: ['AI识别', '4车道', '雷达测速', '违章抓拍'],
    highlight: true,
  },
  {
    id: 'P004',
    category: 'surveillance',
    nameZh: '全彩夜视监控摄像机 NV-FC01',
    nameEn: 'Full-Color Night Vision Camera NV-FC01',
    descZh: '超大光圈配合先进图像处理算法，实现全彩低照度监控，无需补光即可实现夜间彩色成像。',
    descEn: 'Ultra-large aperture with advanced ISP for full-color imaging in near-zero light conditions.',
    specs: [
      { labelZh: '传感器', labelEn: 'Sensor', value: '1/1.2" 星光级 CMOS' },
      { labelZh: '分辨率', labelEn: 'Resolution', value: '4MP @ 25fps' },
      { labelZh: '最低照度', labelEn: 'Min Illumination', value: '0.001 Lux 彩色' },
      { labelZh: '光圈', labelEn: 'Aperture', value: 'F1.0 定焦' },
      { labelZh: '视野角', labelEn: 'Field of View', value: '120° 超广角' },
      { labelZh: '宽动态', labelEn: 'WDR', value: '140dB 超宽动态' },
      { labelZh: '防护等级', labelEn: 'IP Rating', value: 'IP68 / IK10' },
      { labelZh: '供电', labelEn: 'Power', value: 'PoE (IEEE 802.3af)' },
    ],
    tags: ['全彩夜视', '星光级', '超宽动态', 'IP68'],
  },
  {
    id: 'P005',
    category: 'surveillance',
    nameZh: '高速球形摄像机 PTZ-H200',
    nameEn: 'High-Speed PTZ Camera PTZ-H200',
    descZh: '360°水平连续旋转，220°垂直转动，支持256个预设位，AI自动跟踪目标，适用于大范围区域监控。',
    descEn: '360° continuous rotation, 256 presets with AI auto-tracking for wide-area surveillance.',
    specs: [
      { labelZh: '光学变焦', labelEn: 'Optical Zoom', value: '40x (5mm - 200mm)' },
      { labelZh: '水平转速', labelEn: 'Pan Speed', value: '0.1° ~ 240°/s' },
      { labelZh: '俯仰范围', labelEn: 'Tilt Range', value: '-15° ~ +90°' },
      { labelZh: '预设位数', labelEn: 'Presets', value: '256个' },
      { labelZh: 'AI跟踪', labelEn: 'AI Tracking', value: '人脸/车辆/行人' },
      { labelZh: '激光测距', labelEn: 'Laser Range', value: '1000m' },
      { labelZh: '防护等级', labelEn: 'IP Rating', value: 'IP66 / IK10' },
      { labelZh: '通讯', labelEn: 'Protocol', value: 'ONVIF / SDK' },
    ],
    tags: ['40倍变焦', 'PTZ', 'AI跟踪', '激光测距'],
  },
  {
    id: 'P006',
    category: 'traffic',
    nameZh: '车辆特征识别系统 VRS-01',
    nameEn: 'Vehicle Recognition System VRS-01',
    descZh: '基于深度学习的车辆多特征识别系统，可识别车牌、车型、车色、品牌等24项车辆特征信息。',
    descEn: 'Deep learning-based system recognizing 24 vehicle features including plate, model, color, brand.',
    specs: [
      { labelZh: '识别特征', labelEn: 'Recognition Features', value: '24项车辆特征' },
      { labelZh: '处理速度', labelEn: 'Processing Speed', value: '实时 <100ms' },
      { labelZh: '车牌识别率', labelEn: 'Plate Recognition', value: '≥99.8%' },
      { labelZh: '车型识别率', labelEn: 'Model Recognition', value: '≥98%' },
      { labelZh: 'AI芯片', labelEn: 'AI Chip', value: '自研NPU 10TOPS' },
      { labelZh: '支持协议', labelEn: 'Protocol', value: 'GB28181 / ONVIF' },
      { labelZh: '存储接口', labelEn: 'Storage', value: 'SATA×4 / RAID5' },
      { labelZh: '工作温度', labelEn: 'Temperature', value: '-10°C ~ +55°C' },
    ],
    tags: ['深度学习', '24项特征', 'AI芯片', '实时处理'],
  },
]

function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useLang()
  const [expanded, setExpanded] = useState(false)
  const name = lang === 'zh' ? product.nameZh : product.nameEn
  const desc = lang === 'zh' ? product.descZh : product.descEn

  return (
    <div className={`product-card rounded-2xl overflow-hidden ${product.highlight ? 'ring-1 ring-sky-500/40' : ''}`}>
      {product.highlight && (
        <div className="bg-gradient-to-r from-sky-500 to-green-500 text-white text-xs text-center py-1 font-semibold tracking-wider">
          ★ 核心产品
        </div>
      )}
      {product.image && (
        <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_rgba(15,23,42,0.15)_48%,_rgba(2,6,23,0.98)_100%)] p-6">
          <div className="relative mx-auto flex min-h-[220px] items-center justify-center rounded-2xl border border-white/8 bg-slate-950/70 p-4">
            <img src={product.image} alt={name} className="max-h-[220px] w-full object-contain" />
          </div>
        </div>
      )}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="tech-tag text-xs mb-2 inline-block">{product.id}</span>
            <h3 className="text-white font-bold text-base leading-snug">{name}</h3>
          </div>
          <div className={`w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center
            ${product.category === 'laser' ? 'bg-sky-500/15 text-sky-400' :
              product.category === 'traffic' ? 'bg-green-500/15 text-green-400' :
              'bg-indigo-500/15 text-indigo-400'}`}>
            {product.category === 'laser' ? <Zap size={18} /> :
             product.category === 'traffic' ? <Car size={18} /> :
             <Camera size={18} />}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Specs toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-sm text-sky-400 hover:text-sky-300 transition-colors cursor-pointer py-2 border-t border-slate-700"
        >
          <span>{t('products.spec')}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="mt-3 space-y-2">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800">
                <span className="text-slate-500">{lang === 'zh' ? spec.labelZh : spec.labelEn}</span>
                <span className="text-slate-200 font-mono text-right ml-2">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link to="/contact" className="btn-cta flex-1 text-white text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1">
            <MessageSquare size={14} />
            {t('products.inquire')}
          </Link>
          {product.docUrl && (
            <a
              href={product.docUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-center text-sm font-medium text-sky-300 transition-colors hover:bg-sky-500/15 hover:text-sky-200 flex items-center justify-center gap-1"
            >
              <Download size={14} />
              {lang === 'zh' ? '规格书下载' : 'Spec Sheet'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const { lang, t } = useLang()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { key: 'all', label: t('products.cat.all'), icon: <Eye size={14} /> },
    { key: 'laser', label: t('products.cat.laser'), icon: <Zap size={14} /> },
    { key: 'traffic', label: t('products.cat.traffic'), icon: <Car size={14} /> },
    { key: 'surveillance', label: t('products.cat.surveillance'), icon: <Camera size={14} /> },
  ]

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory)
  const featuredProduct = products[0]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('products.title')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-3">
            {t('products.title')}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Featured through-glass enforcement series */}
      <section className="py-10 border-b border-sky-500/10 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-border rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/30">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-0">
              <div className="p-8 md:p-10 lg:p-12">
                <span className="tech-tag mb-4 inline-block">
                  {lang === 'zh' ? '系列聚焦 · 激光透窗超员检测' : 'Featured Series · Through-Glass Occupant Detection'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  {lang === 'zh' ? '高配 / 简配 / 便携三型产品矩阵' : 'Three-tier Portfolio for Through-Glass Enforcement'}
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                  {lang === 'zh'
                    ? '围绕交通执法、道路管控和临时布控场景，网站已新增一套更完整的激光透窗超员检测产品矩阵：高配版负责重点卡口，简配版适合标准路段，便携式则覆盖机动执法与专项整治。'
                    : 'The new portfolio now covers fixed checkpoints, standard road deployment, and mobile enforcement with three coordinated through-glass solutions for occupant detection.'}
                </p>

                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    {
                      label: lang === 'zh' ? '产品矩阵' : 'Portfolio',
                      value: lang === 'zh' ? '高配版 / 简配版 / 便携式' : 'Advanced / Standard / Portable',
                    },
                    {
                      label: lang === 'zh' ? '核心能力' : 'Core Capability',
                      value: lang === 'zh' ? '透窗识别 + 超员取证 + 结构化分析' : 'Through-glass detection + overload evidence + structured analytics',
                    },
                    {
                      label: lang === 'zh' ? '部署模式' : 'Deployment',
                      value: lang === 'zh' ? '固定卡口 / 标准路段 / 机动布控' : 'Checkpoint / roadside / mobile operations',
                    },
                  ].map(item => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-sky-300/70 mb-2">{item.label}</p>
                      <p className="text-sm text-white leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {(lang === 'zh'
                    ? ['高配版', '简配版', '便携式', '透窗识别', '交通执法']
                    : ['Advanced', 'Standard', 'Portable', 'Through-Glass', 'Traffic Enforcement']
                  ).map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/scenarios"
                    className="btn-cta text-white px-5 py-3 rounded-xl font-semibold inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Eye size={16} />
                    {lang === 'zh' ? '查看应用场景' : 'View Applications'}
                  </Link>
                  <Link
                    to="/contact"
                    className="px-5 py-3 rounded-xl font-semibold border border-white/12 bg-white/5 text-slate-100 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all inline-flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    {lang === 'zh' ? '咨询方案配置' : 'Request a Proposal'}
                  </Link>
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.14),_rgba(15,23,42,0.92)_65%,_rgba(2,6,23,1)_100%)] p-8">
                  <img src={featuredProduct.image} alt={lang === 'zh' ? featuredProduct.nameZh : featuredProduct.nameEn} className="h-full w-full object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6">
                    <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-slate-950/70 px-3 py-1 text-xs text-sky-300 backdrop-blur">
                      {lang === 'zh' ? '高配版主设备形态' : 'Advanced fixed roadside unit'}
                    </span>
                    <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                      {lang === 'zh'
                        ? '以高配版为主视觉，突出重点道路、双光谱抓拍和固定卡口部署能力，同时在下方产品卡片中完整呈现三型方案。'
                        : 'The advanced model anchors the visual story for checkpoint-grade deployment while the grid below completes the three-solution portfolio.'}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {featuredProduct.specs.slice(0, 5).map(spec => (
                    <div key={spec.labelEn} className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3 text-sm last:border-b-0 last:pb-0">
                      <span className="text-slate-500">{lang === 'zh' ? spec.labelZh : spec.labelEn}</span>
                      <span className="text-slate-100 text-right font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 bg-slate-950 sticky top-16 md:top-20 z-30 border-b border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-sky-500 text-white'
                    : 'border border-slate-700 text-slate-400 hover:text-white hover:border-sky-500/50'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
