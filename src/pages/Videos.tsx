import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import SEO from '../components/SEO'
import { Play, Eye, ChevronRight, FileText } from 'lucide-react'

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

interface VideoItem {
  id: string
  titleKey?: string
  descKey?: string
  titleZh?: string
  titleEn?: string
  descZh?: string
  descEn?: string
  duration: string
  views: string
  category: string
  thumbnail: string
  src?: string
  poster?: string
}

const fallbackVideoSrc = withBase('videos/jg-wrj-gz1-demo-web.mp4')
const fallbackVideoPoster = withBase('images/jg-wrj-gz1-poster.webp')

const videos: VideoItem[] = [
  {
    id: 'v-drone',
    titleZh: '激光透窗无人机挂载实测演示',
    titleEn: 'Drone-mounted Through-Glass Field Demo',
    descZh: 'JG-WRJ-GZ1 在下午实测环境中的透窗观测效果，展示空中侦测、远程锁定与实拍成像表现。',
    descEn: 'Field footage of JG-WRJ-GZ1 demonstrating airborne through-glass observation, long-range targeting, and captured imaging performance.',
    duration: '1:14',
    views: '1920×1080 · 25fps',
    category: '无人机挂载',
    thumbnail: 'sky',
    src: withBase('videos/jg-wrj-gz1-demo-web.mp4'),
    poster: withBase('images/jg-wrj-gz1-poster.webp'),

  },
  {
    id: 'v1',
    titleKey: 'videos.v1.title',
    descKey: 'videos.v1.desc',
    duration: '3:45',
    views: '12,860',
    category: '激光透窗',
    thumbnail: 'sky',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
  {
    id: 'v2',
    titleKey: 'videos.v2.title',
    descKey: 'videos.v2.desc',
    duration: '5:20',
    views: '8,430',
    category: '智能交通',
    thumbnail: 'green',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
  {
    id: 'v3',
    titleKey: 'videos.v3.title',
    descKey: 'videos.v3.desc',
    duration: '4:10',
    views: '9,220',
    category: '夜视技术',
    thumbnail: 'indigo',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
  {
    id: 'v4',
    titleKey: 'videos.v4.title',
    descKey: 'videos.v4.desc',
    duration: '6:30',
    views: '15,670',
    category: '城市安防',
    thumbnail: 'amber',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
  {
    id: 'v5',
    titleKey: 'videos.v1.title',
    descKey: 'videos.v1.desc',
    duration: '2:55',
    views: '7,100',
    category: '产品展示',
    thumbnail: 'rose',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
  {
    id: 'v6',
    titleKey: 'videos.v2.title',
    descKey: 'videos.v2.desc',
    duration: '4:48',
    views: '6,540',
    category: '方案介绍',
    thumbnail: 'cyan',
    src: fallbackVideoSrc,
    poster: fallbackVideoPoster,
  },
]

const colorPatterns: Record<string, string> = {
  sky: 'from-sky-900 to-slate-900',
  green: 'from-green-900 to-slate-900',
  indigo: 'from-indigo-900 to-slate-900',
  amber: 'from-amber-900 to-slate-900',
  rose: 'from-rose-900 to-slate-900',
  cyan: 'from-cyan-900 to-slate-900',
}

function getVideoTitle(video: VideoItem, lang: 'zh' | 'en', t: (key: string) => string) {
  if (lang === 'zh') return video.titleZh ?? t(video.titleKey ?? '')
  return video.titleEn ?? t(video.titleKey ?? '')
}

function getVideoDesc(video: VideoItem, lang: 'zh' | 'en', t: (key: string) => string) {
  if (lang === 'zh') return video.descZh ?? t(video.descKey ?? '')
  return video.descEn ?? t(video.descKey ?? '')
}

export default function Videos() {
  const { lang, t } = useLang()
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0])
  const playerRef = useRef<HTMLVideoElement | null>(null)
  const playerSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const player = playerRef.current
    if (!player) return

    player.currentTime = 0
    const playPromise = player.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {})
    }
  }, [activeVideo.id])

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video)
    playerSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="min-h-screen pt-20">
      <SEO
        titleZh="视频演示"
        titleEn="Video Demos"
        descriptionZh="集光智通产品视频演示，直观展示激光透窗、智能交通监控、夜视增强等产品性能。"
        descriptionEn="Jiguang Zhitong product demos - laser through-glass, smart traffic monitoring, night vision enhancement and more."
        path="videos"
      />
      <section className="py-16 relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tech-tag mb-4 inline-block">{t('videos.title')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-3">{t('videos.title')}</h1>
          <p className="text-slate-400 text-lg">{t('videos.subtitle')}</p>
        </div>
      </section>

      <section ref={playerSectionRef} className="py-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.18fr,0.82fr] gap-6 items-start">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_40px_rgba(14,165,233,0.08)]">
              {activeVideo.src ? (
                <div className="relative">
                  <video
                    key={activeVideo.id}
                    ref={playerRef}
                    poster={activeVideo.poster}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="aspect-video w-full bg-black"
                  >
                    <source src={activeVideo.src} type="video/mp4" />
                    您的浏览器暂不支持 HTML5 视频播放。
                  </video>
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 md:p-5">
                    <span className="rounded-full border border-sky-300/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                      {lang === 'zh' ? '当前播放器' : 'Now Playing'}
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {lang === 'zh' ? '已切换到可直接播放模式' : 'Direct inline playback enabled'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className={`aspect-video bg-gradient-to-br ${colorPatterns[activeVideo.thumbnail]} flex items-center justify-center relative`}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4">
                      <Play size={36} className="text-white ml-2" />
                    </div>
                    <p className="text-white/60 text-sm">视频播放演示</p>
                    <p className="text-white/40 text-xs mt-1">实际部署时替换为真实视频地址</p>
                  </div>
                </div>
              )}
            </div>

            <div className="glow-border rounded-2xl p-6 md:p-7 bg-gradient-to-br from-slate-900 to-slate-950/90">
              <span className="tech-tag mb-3 inline-block">{lang === 'zh' ? '重点演示' : 'Featured Demo'}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                {getVideoTitle(activeVideo, lang, t)}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {getVideoDesc(activeVideo, lang, t)}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    label: lang === 'zh' ? '视频时长' : 'Duration',
                    value: activeVideo.duration,
                  },
                  {
                    label: lang === 'zh' ? '视频规格' : 'Format',
                    value: activeVideo.views,
                  },
                  {
                    label: lang === 'zh' ? '关联资料' : 'Supporting Asset',
                    value: lang === 'zh' ? '规格书已同步接入' : 'Spec sheet is available',
                  },
                  {
                    label: lang === 'zh' ? '推荐用途' : 'Best Fit',
                    value: lang === 'zh' ? '公安执法 / 空中巡查 / 远程核查' : 'Law enforcement / aerial patrol / remote verification',
                  },
                ].map(item => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-sky-300/70 mb-2">{item.label}</p>
                    <p className="text-sm text-white leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 mb-6">
                <p className="text-sm text-slate-200 leading-7">
                  {lang === 'zh'
                    ? '下方每张视频卡片现在会直接切换上方播放器并自动跳到播放器区域，不再依赖弹窗。'
                    : 'Each card below now switches the inline player above and scrolls to it automatically, without relying on a modal.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectVideo(activeVideo)}
                  className="btn-cta text-white px-5 py-3 rounded-xl font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <Play size={16} />
                  {lang === 'zh' ? '重新播放当前视频' : 'Replay Current Video'}
                </button>
                <a
                  href={withBase('docs/jg-wrj-gz1-spec.docx')}
                  download
                  className="px-5 py-3 rounded-xl font-semibold border border-white/12 bg-white/5 text-slate-100 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all inline-flex items-center gap-2"
                >
                  <FileText size={16} />
                  {lang === 'zh' ? '下载规格书' : 'Download Spec'}
                </a>
                <Link
                  to="/products"
                  className="px-5 py-3 rounded-xl font-semibold border border-sky-500/30 text-sky-300 hover:bg-sky-500/10 transition-all inline-flex items-center gap-2"
                >
                  {lang === 'zh' ? '查看产品详情' : 'View Product'}
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h3 className="text-2xl font-bold text-white">{lang === 'zh' ? '演示视频列表' : 'Demo Library'}</h3>
              <p className="text-slate-400 text-sm mt-2">
                {lang === 'zh' ? '点击任意卡片会直接切换上方播放器。' : 'Click any card to switch the main player instantly.'}
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-sky-300/70">
              {lang === 'zh' ? `${videos.length} 段内容` : `${videos.length} clips`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map(video => {
              const isActive = activeVideo.id === video.id

              return (
                <button
                  type="button"
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`group rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'border-sky-400/60 bg-sky-500/10 shadow-[0_0_40px_rgba(14,165,233,0.12)]'
                      : 'border-white/10 bg-slate-950/70 hover:border-sky-400/35 hover:bg-slate-900/90'
                  }`}
                  aria-label={lang === 'zh' ? `播放：${getVideoTitle(video, lang, t)}` : `Play ${getVideoTitle(video, lang, t)}`}
                >
                  <div className="relative rounded-t-2xl overflow-hidden aspect-video border-b border-white/10 bg-slate-900">
                    {video.poster ? (
                      <img src={video.poster} alt={getVideoTitle(video, lang, t)} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorPatterns[video.thumbnail]}`} />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full backdrop-blur transition-transform ${isActive ? 'bg-sky-500 text-white scale-110' : 'bg-white/20 text-white group-hover:scale-110'}`}>
                        <Play size={22} className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-xs text-white font-mono">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 flex gap-2">
                      <span className="tech-tag text-xs">{video.category}</span>
                      {isActive && (
                        <span className="rounded-full border border-sky-300/40 bg-slate-950/70 px-2 py-1 text-[11px] font-semibold text-sky-200">
                          {lang === 'zh' ? '当前播放' : 'Playing'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-sky-300 transition-colors">{getVideoTitle(video, lang, t)}</h3>
                    <p className="text-slate-400 text-xs mb-3 line-clamp-2 leading-6">{getVideoDesc(video, lang, t)}</p>
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-500"><Eye size={11} />{video.views}</span>
                      <span className={`inline-flex items-center gap-1 font-semibold ${isActive ? 'text-sky-200' : 'text-sky-400'}`}>
                        {isActive
                          ? (lang === 'zh' ? '正在上方播放器中播放' : 'Playing in main player')
                          : t('videos.play')}
                        <ChevronRight size={11} />
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
