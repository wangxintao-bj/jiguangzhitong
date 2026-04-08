import { useLang } from '../contexts/LangContext'
import { Shield, Camera, Zap, Car, AlertTriangle, Globe } from 'lucide-react'

export default function Scenarios() {
  const { t } = useLang()

  const scenarios = [
    {
      key: 's1',
      icon: <Shield size={32} />,
      color: 'sky',
      bg: 'from-sky-900/30',
      products: ['激光透窗摄像机', '夜视增强系统', 'PTZ球机'],
      details: ['目标识别与行为分析', '执法记录取证', '人脸识别比对', '重点区域布控'],
    },
    {
      key: 's2',
      icon: <Car size={32} />,
      color: 'green',
      bg: 'from-green-900/30',
      products: ['高配版激光透窗人数识别系统', '简配版激光透窗超员检测系统', '便携式激光透窗智能识别系统'],
      details: ['透窗人数识别取证', '超员违法快速筛查', '重点车辆结构化检索', '固定卡口与机动执法联动'],
    },
    {
      key: 's3',
      icon: <Globe size={32} />,
      color: 'indigo',
      bg: 'from-indigo-900/30',
      products: ['激光变焦摄像机', '热成像系统', '周界防护系统'],
      details: ['远距离目标识别', '全天候视频监控', '入侵检测预警', '多点联合管控'],
    },
    {
      key: 's4',
      icon: <Camera size={32} />,
      color: 'amber',
      bg: 'from-amber-900/30',
      products: ['全彩夜视摄像', 'AI行为分析', '视频管理平台'],
      details: ['异常行为识别', '人群密度分析', '遗留物检测', '跌倒报警'],
    },
    {
      key: 's5',
      icon: <AlertTriangle size={32} />,
      color: 'rose',
      bg: 'from-rose-900/30',
      products: ['无线传输系统', '指挥调度平台', '移动单兵设备'],
      details: ['实时视频传输', '多路汇聚显示', '态势感知地图', '指令下发执行'],
    },
    {
      key: 's6',
      icon: <Zap size={32} />,
      color: 'cyan',
      bg: 'from-cyan-900/30',
      products: ['高配版激光透窗人数识别系统', '简配版激光透窗超员检测系统', '车辆特征识别系统 VRS-01'],
      details: ['道路超员识别预警', '重点路段全天候管控', '过车结构化分析', '异常车辆快速联动处置'],
    },
  ]

  const colorMap: Record<string, string> = {
    sky: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
    green: 'text-green-400 bg-green-500/15 border-green-500/30',
    indigo: 'text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
    amber: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    rose: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
    cyan: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('scenarios.title')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-3">{t('scenarios.title')}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t('scenarios.subtitle')}</p>
        </div>
      </section>

      {/* Scenarios grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map(s => (
              <div key={s.key} className={`glow-border rounded-2xl overflow-hidden hover-card cursor-default`}>
                <div className={`h-2 bg-gradient-to-r from-${s.color}-500 to-${s.color}-400/50`} />
                <div className="p-6">
                  {/* Icon and title */}
                  <div className={`w-14 h-14 rounded-xl ${colorMap[s.color]} border flex items-center justify-center mb-4`}>
                    {s.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{t(`scenarios.${s.key}.title`)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{t(`scenarios.${s.key}.desc`)}</p>

                  {/* Key features */}
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">核心功能</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {s.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${s.color}-400`} />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applicable products */}
                  <div>
                    <p className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">适用产品</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.products.map((p, i) => (
                        <span key={i} className="tech-tag">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry stats */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl font-bold text-white mb-12">行业覆盖</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {[
              { label: '公安局', count: '50+', icon: <Shield size={24} /> },
              { label: '交管部门', count: '80+', icon: <Car size={24} /> },
              { label: '城市安防', count: '40+', icon: <Camera size={24} /> },
              { label: '政府项目', count: '30+', icon: <Globe size={24} /> },
            ].map((item, i) => (
              <div key={i} className="glow-border rounded-xl p-5 text-center hover-card">
                <div className="w-12 h-12 rounded-full bg-sky-500/15 flex items-center justify-center mx-auto mb-3 text-sky-400">
                  {item.icon}
                </div>
                <p className="stat-number text-3xl font-bold font-mono">{item.count}</p>
                <p className="text-slate-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
