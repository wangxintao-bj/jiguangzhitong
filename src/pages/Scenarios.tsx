import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { Shield, Camera, Zap, Car, AlertTriangle, Globe, ArrowRight, ClipboardCheck, FileStack, Radar } from 'lucide-react'

type Accent = 'sky' | 'green' | 'indigo' | 'amber' | 'rose' | 'cyan'

export default function Scenarios() {
  const { t, lang } = useLang()

  const scenarios: {
    key: string
    icon: ReactNode
    accent: Accent
    audienceZh: string
    audienceEn: string
    introZh: string
    introEn: string
    tasksZh: string[]
    tasksEn: string[]
    products: string[]
    valueZh: string
    valueEn: string
  }[] = [
    {
      key: 's1',
      icon: <Shield size={30} />,
      accent: 'sky',
      audienceZh: '公安执法 / 重点巡查',
      audienceEn: 'Police enforcement / priority patrol',
      introZh: '面向车窗、建筑玻璃等隔离介质下的远距观察与现场取证任务。',
      introEn: 'Designed for remote observation and evidence capture through vehicle windows or building glass.',
      tasksZh: ['透窗观察与重点区域取证', '异常目标识别与行为分析', '夜间或复杂光照环境巡查'],
      tasksEn: ['Through-glass observation and evidence capture', 'Target recognition and behavior analysis', 'Night or complex-light inspections'],
      products: ['激光透窗摄像机', '夜视增强系统', 'PTZ球机'],
      valueZh: '优先解决隔窗观察、复杂光照与取证资料可追溯的问题。',
      valueEn: 'Addresses through-glass observation, difficult lighting, and traceable evidence output.',
    },
    {
      key: 's2',
      icon: <Car size={30} />,
      accent: 'green',
      audienceZh: '交通执法 / 路面治理',
      audienceEn: 'Traffic enforcement / roadway governance',
      introZh: '覆盖固定卡口、重点路段与机动执法协同的超员识别与结构化取证任务。',
      introEn: 'Supports overload detection and structured evidence across checkpoints, key roads, and mobile enforcement.',
      tasksZh: ['透窗人数识别取证', '超员违法快速筛查', '固定卡口与机动执法联动'],
      tasksEn: ['Occupant recognition evidence', 'Rapid overload screening', 'Checkpoint and mobile enforcement coordination'],
      products: ['高配版激光透窗人数识别系统', '简配版激光透窗超员检测系统', '便携式激光透窗智能识别系统'],
      valueZh: '把固定部署、标准部署和移动布控串成一套更完整的执法链路。',
      valueEn: 'Combines fixed, standard, and mobile deployment into one enforcement-ready chain.',
    },
    {
      key: 's3',
      icon: <Globe size={30} />,
      accent: 'indigo',
      audienceZh: '边海防 / 周界巡查',
      audienceEn: 'Border and perimeter inspection',
      introZh: '面向远距离识别、连续监测与多点联合管控需求的光电巡查场景。',
      introEn: 'Built for long-range recognition, persistent monitoring, and multi-point coordinated control.',
      tasksZh: ['远距离目标识别', '全天候视频巡查', '周界预警与多点联防'],
      tasksEn: ['Long-range target recognition', 'All-weather video inspection', 'Perimeter alerts and multi-point coordination'],
      products: ['激光变焦摄像机', '热成像系统', '周界防护系统'],
      valueZh: '强调远距感知、全天候稳定性与联合布控能力。',
      valueEn: 'Prioritizes long-range sensing, all-weather stability, and linked deployment.',
    },
    {
      key: 's4',
      icon: <Camera size={30} />,
      accent: 'amber',
      audienceZh: '城市安防 / 视频治理',
      audienceEn: 'Urban security / video governance',
      introZh: '适用于公共区域异常事件预警、人群观察与城市视频治理等综合安防任务。',
      introEn: 'Supports anomaly alerts, crowd observation, and broader urban video governance tasks.',
      tasksZh: ['异常行为识别', '人群密度与态势观察', '遗留物与跌倒报警'],
      tasksEn: ['Abnormal behavior detection', 'Crowd density and situational observation', 'Object-left and fall alerts'],
      products: ['全彩夜视摄像', 'AI行为分析', '视频管理平台'],
      valueZh: '更适合以平台化视频治理方式提升持续监测与预警效率。',
      valueEn: 'Fits platform-led video governance for sustained monitoring and alert efficiency.',
    },
    {
      key: 's5',
      icon: <AlertTriangle size={30} />,
      accent: 'rose',
      audienceZh: '应急处突 / 指挥调度',
      audienceEn: 'Emergency response / command dispatch',
      introZh: '聚焦现场视频回传、指挥中心联动与任务下发执行的应急调度场景。',
      introEn: 'Focused on live video uplink, command-center coordination, and dispatch execution.',
      tasksZh: ['实时视频回传', '多路画面汇聚显示', '指令下发与现场协同'],
      tasksEn: ['Live video uplink', 'Multi-stream aggregated display', 'Dispatch and on-site coordination'],
      products: ['无线传输系统', '指挥调度平台', '移动单兵设备'],
      valueZh: '缩短现场与指挥中心之间的信息反馈链路。',
      valueEn: 'Shortens the information loop between the field and command center.',
    },
    {
      key: 's6',
      icon: <Zap size={30} />,
      accent: 'cyan',
      audienceZh: '道路管控 / 全天候筛查',
      audienceEn: 'Roadway control / all-weather screening',
      introZh: '适合重点路段全天候筛查、异常车辆预警与车辆结构化联动处置。',
      introEn: 'Suited for all-weather screening, anomaly alerts, and structured vehicle response on key roads.',
      tasksZh: ['道路超员识别预警', '重点路段全天候管控', '过车结构化分析与联动'],
      tasksEn: ['Roadway overload alerts', 'All-weather control on key roads', 'Structured vehicle analysis and coordination'],
      products: ['高配版激光透窗人数识别系统', '简配版激光透窗超员检测系统', '车辆特征识别系统 VRS-01'],
      valueZh: '把筛查、识别、结构化分析和后续联动放进同一条治理链路。',
      valueEn: 'Unifies screening, recognition, structured analytics, and follow-up response.',
    },
  ]

  const accentMap: Record<Accent, { icon: string; bar: string; panel: string; dot: string; badge: string }> = {
    sky: {
      icon: 'border-sky-400/25 bg-sky-500/12 text-sky-300',
      bar: 'from-sky-400 to-sky-500/15',
      panel: 'border-sky-400/20 from-sky-500/10 to-slate-950/95',
      dot: 'bg-sky-400',
      badge: 'border-sky-400/20 bg-sky-500/10 text-sky-200',
    },
    green: {
      icon: 'border-emerald-400/25 bg-emerald-500/12 text-emerald-300',
      bar: 'from-emerald-400 to-emerald-500/15',
      panel: 'border-emerald-400/20 from-emerald-500/10 to-slate-950/95',
      dot: 'bg-emerald-400',
      badge: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-200',
    },
    indigo: {
      icon: 'border-indigo-400/25 bg-indigo-500/12 text-indigo-300',
      bar: 'from-indigo-400 to-indigo-500/15',
      panel: 'border-indigo-400/20 from-indigo-500/10 to-slate-950/95',
      dot: 'bg-indigo-400',
      badge: 'border-indigo-400/20 bg-indigo-500/10 text-indigo-200',
    },
    amber: {
      icon: 'border-amber-400/25 bg-amber-500/12 text-amber-300',
      bar: 'from-amber-400 to-amber-500/15',
      panel: 'border-amber-400/20 from-amber-500/10 to-slate-950/95',
      dot: 'bg-amber-400',
      badge: 'border-amber-400/20 bg-amber-500/10 text-amber-200',
    },
    rose: {
      icon: 'border-rose-400/25 bg-rose-500/12 text-rose-300',
      bar: 'from-rose-400 to-rose-500/15',
      panel: 'border-rose-400/20 from-rose-500/10 to-slate-950/95',
      dot: 'bg-rose-400',
      badge: 'border-rose-400/20 bg-rose-500/10 text-rose-200',
    },
    cyan: {
      icon: 'border-cyan-400/25 bg-cyan-500/12 text-cyan-300',
      bar: 'from-cyan-400 to-cyan-500/15',
      panel: 'border-cyan-400/20 from-cyan-500/10 to-slate-950/95',
      dot: 'bg-cyan-400',
      badge: 'border-cyan-400/20 bg-cyan-500/10 text-cyan-200',
    },
  }

  const focusPoints = [
    {
      icon: <ClipboardCheck size={22} />,
      titleZh: '任务链路清晰',
      titleEn: 'Clear task flow',
      descZh: '先看场景，再看产品与资料，减少政企客户初筛成本。',
      descEn: 'Review scenarios first, then products and documents with less initial screening effort.',
      accent: 'sky' as const,
    },
    {
      icon: <Radar size={22} />,
      titleZh: '部署方式可判断',
      titleEn: 'Deployment choices visible',
      descZh: '明确固定、标准与机动布控的适配边界，避免方案混淆。',
      descEn: 'Clarifies the fit among fixed, standard, and mobile deployment modes.',
      accent: 'green' as const,
    },
    {
      icon: <FileStack size={22} />,
      titleZh: '资料准备更完整',
      titleEn: 'Documentation is complete',
      descZh: '场景页和产品页形成呼应，更方便导向规格书与视频材料。',
      descEn: 'Scenario and product pages now better direct visitors toward specs and demo media.',
      accent: 'indigo' as const,
    },
    {
      icon: <Shield size={22} />,
      titleZh: '表达更稳重',
      titleEn: 'More authoritative tone',
      descZh: '去掉空泛数字堆叠，改成更像政企方案汇报的表达方式。',
      descEn: 'Replaces generic counters with a more enterprise-solution style presentation.',
      accent: 'amber' as const,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden border-b border-sky-500/10 py-16 tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-slate-950 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('scenarios.title')}</span>
          <div className="grid gap-8 lg:grid-cols-[1fr,0.88fr] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">{t('scenarios.title')}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                {lang === 'zh'
                  ? '这一页不再只做“行业罗列”，而是把典型执法与治理任务拆成可读的场景组合，方便访客先判断任务匹配度，再进入产品与资料层。'
                  : 'Instead of a generic industry list, this page now organizes capabilities by mission patterns so visitors can judge fit before diving into products.'}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  labelZh: '部署形态',
                  labelEn: 'Deployment',
                  valueZh: '固定 / 标准 / 机动 / 空中',
                  valueEn: 'Fixed / standard / mobile / aerial',
                },
                {
                  labelZh: '资料链路',
                  labelEn: 'Documentation',
                  valueZh: '方案说明 / 视频演示 / 规格资料',
                  valueEn: 'Briefing / demo video / spec files',
                },
                {
                  labelZh: '核心对象',
                  labelEn: 'Client Focus',
                  valueZh: '公安 / 交警 / 城市治理',
                  valueEn: 'Police / traffic / urban governance',
                },
              ].map(item => (
                <div key={item.labelZh} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_12px_28px_rgba(2,8,23,0.18)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200/70">{lang === 'zh' ? item.labelZh : item.labelEn}</p>
                  <p className="mt-3 text-sm leading-6 text-white">{lang === 'zh' ? item.valueZh : item.valueEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="tech-tag mb-4 inline-block">{lang === 'zh' ? '任务视角' : 'Mission View'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {lang === 'zh' ? '按典型执法与治理任务组织解决方案' : 'Organize solutions by typical enforcement missions'}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{t('scenarios.subtitle')}</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200 cursor-pointer">
              {lang === 'zh' ? '查看产品矩阵' : 'Browse product portfolio'}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {scenarios.map(item => {
              const style = accentMap[item.accent]
              return (
                <div key={item.key} className={`overflow-hidden rounded-[30px] border bg-gradient-to-br shadow-[0_22px_58px_rgba(2,8,23,0.22)] ${style.panel}`}>
                  <div className={`h-1.5 bg-gradient-to-r ${style.bar}`} />
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${style.icon}`}>
                        {item.icon}
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${style.badge}`}>
                        {lang === 'zh' ? item.audienceZh : item.audienceEn}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-white">{t(`scenarios.${item.key}.title`)}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{lang === 'zh' ? item.introZh : item.introEn}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{t(`scenarios.${item.key}.desc`)}</p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {lang === 'zh' ? '典型任务' : 'Typical Tasks'}
                      </p>
                      <div className="mt-3 space-y-2.5">
                        {(lang === 'zh' ? item.tasksZh : item.tasksEn).map(task => (
                          <div key={task} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${style.dot}`} />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {lang === 'zh' ? '适用产品' : 'Applicable Products'}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.products.map(product => (
                          <span key={product} className="tech-tag">{product}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {lang === 'zh' ? '交付价值' : 'Delivery Value'}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">{lang === 'zh' ? item.valueZh : item.valueEn}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-sky-500/10 bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tech-tag mb-4 inline-block">{lang === 'zh' ? '页面优化重点' : 'Optimization Focus'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {lang === 'zh' ? '这轮场景页更像方案汇报，而不是数字陈列' : 'This round makes the page read like a solution briefing'}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {focusPoints.map(item => {
              const style = accentMap[item.accent]
              return (
                <div key={item.titleZh} className={`rounded-[28px] border bg-gradient-to-br p-6 ${style.panel}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.icon}`}>
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{lang === 'zh' ? item.titleZh : item.titleEn}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{lang === 'zh' ? item.descZh : item.descEn}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-border rounded-[32px] bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.92))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(2,8,23,0.28)] md:px-10">
            <span className="tech-tag mb-4 inline-block">{lang === 'zh' ? '继续查看' : 'Next Step'}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {lang === 'zh' ? '确认场景匹配后，再进入产品与资料层会更高效' : 'After confirming scenario fit, move into products and documents more efficiently'}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300 leading-7">
              {lang === 'zh'
                ? '如果你已经明确自己属于固定卡口、标准路段、机动布控或空中侦测中的哪一类任务，下一步就可以直接查看产品矩阵或进入联系页面沟通配置。'
                : 'If you already know whether the mission is checkpoint, roadside, mobile, or aerial, the next step is to review the product portfolio or discuss configuration directly.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/products" className="btn-cta inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white cursor-pointer">
                {lang === 'zh' ? '查看产品中心' : 'View Products'}
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-slate-900/40 px-8 py-3.5 font-semibold text-sky-100 transition-all hover:bg-sky-500/10 cursor-pointer">
                {lang === 'zh' ? '联系获取方案' : 'Contact for Proposal'}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
