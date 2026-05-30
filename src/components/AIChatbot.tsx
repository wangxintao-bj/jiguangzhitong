import { useState, useEffect, useRef, useCallback } from 'react'
import { useLang } from '../contexts/LangContext'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'ai'
  text: string
}

const aiResponses: Record<'zh' | 'en', Record<string, string[]>> = {
  zh: {
    '产品': ['我们的核心产品包括：激光透窗摄像机、高清视频监控系统、智能交通抓拍系统、夜视增强摄像机。请问您对哪类产品感兴趣？', '我们提供的光电产品具备高分辨率、全天候工作能力，特别适合公安、交警等执法部门使用。'],
    '激光': ['激光透窗技术是我公司核心专利技术，可有效穿透雨雾、玻璃等介质，实现全天候高清成像。支持的最大探测距离可达数百米。', '我们的激光透窗产品已在多地公安局和交管部门得到成功应用，图像清晰度达到行业领先水平。'],
    '交通': ['智能交通系统包括：超清违章抓拍、车牌识别、车速检测、闯红灯自动记录等功能，满足交管部门全面执法需求。', '我们的交通监控系统支持24小时不间断工作，在雨雾等恶劣天气下仍能清晰抓拍。'],
    '价格': ['具体产品报价需要根据您的实际需求和采购数量来定制，建议您留下联系方式，我们的销售工程师会在24小时内与您详细沟通。', '我们提供灵活的采购方案，欢迎您通过联系页面留下信息，获取专属报价。'],
    '联系': ['您可以通过以下方式联系我们：填写网页上的咨询表单，或直接拨打我们的销售热线。我们承诺24小时内回复。', '请在"联系我们"页面填写您的信息，我们的专业团队会尽快与您取得联系。'],
    '公司': ['北京集光智通科技有限公司是一家专注于视频监控、光电产品和智能交通领域的高新技术企业，主要服务于公安、交警等执法部门。', '公司使命是"让光电更加智能的守护我们的安全"，愿景是成为激光透窗行业的领军企业。'],
    '参数': ['请问您需要了解哪款产品的技术参数？我们提供详细的产品规格书。您也可以访问产品中心页面查看各产品的完整技术指标。', '我们的产品参数均经过严格测试，可根据您的具体应用场景提供定制化技术方案。'],
  } as any,
  en: {
    'product': ['Our core products include: laser through-glass cameras, HD video surveillance systems, smart traffic capture systems, and night vision cameras. Which product are you interested in?'],
    'laser': ['Our laser through-glass technology is a core patented technology that effectively penetrates rain, fog, and glass for all-weather HD imaging with detection range up to hundreds of meters.'],
    'traffic': ['Our smart traffic system includes: HD violation capture, license plate recognition, speed detection, and automatic red-light recording to meet comprehensive enforcement needs.'],
    'price': ['Product pricing depends on your specific requirements and purchase quantity. Please leave your contact information and our sales engineer will contact you within 24 hours.'],
    'contact': ['You can reach us by filling out the inquiry form on our website or calling our sales hotline. We promise to respond within 24 hours.'],
    'company': ['Jiguang Zhitong Technology Co., Ltd. is a high-tech enterprise focused on video surveillance, optoelectronics, and intelligent transportation, primarily serving law enforcement agencies.'],
  } as any
}

const defaultResponse = {
  zh: '感谢您的咨询！我们的产品专注于公安、交警等执法领域的光电解决方案。您可以询问产品参数、应用场景、报价等问题，或者通过"联系我们"页面留下您的信息，我们会尽快回复您。',
  en: 'Thank you for your inquiry! Our products focus on optoelectronic solutions for law enforcement. You can ask about product specs, applications, or pricing. You can also leave your information on our Contact page.'
}

function getAIResponse(input: string, lang: 'zh' | 'en'): string {
  const responses = aiResponses[lang] || aiResponses['zh']
  for (const key of Object.keys(responses)) {
    if (input.toLowerCase().includes(key.toLowerCase())) {
      const arr = responses[key]
      return arr[Math.floor(Math.random() * arr.length)]
    }
  }
  return defaultResponse[lang]
}

export default function AIChatbot() {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: t('chat.welcome') }
  ])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // ---- Drag state for floating button ----
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [pos, setPos] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('chatbot_pos') : null
    if (saved) {
      try { return JSON.parse(saved) } catch {}
    }
    return { x: window.innerWidth - 80, y: window.innerHeight - 100 }
  })
  const btnRef = useRef<HTMLButtonElement>(null)
  const hasMovedRef = useRef(false)
  const movedDistance = useRef(0)

  const constrain = useCallback((x: number, y: number) => {
    const w = window.innerWidth
    const h = window.innerHeight
    const btnSize = 56
    return {
      x: Math.max(8, Math.min(x, w - btnSize - 8)),
      y: Math.max(8, Math.min(y, h - btnSize - 8)),
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    hasMovedRef.current = false
    movedDistance.current = 0
    setDragStart({ x: e.clientX - pos.x, y: e.clientY - pos.y })
    e.preventDefault()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setDragging(true)
    hasMovedRef.current = false
    movedDistance.current = 0
    setDragStart({ x: touch.clientX - pos.x, y: touch.clientY - pos.y })
  }

  useEffect(() => {
    if (!dragging) return

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = constrain(e.clientX - dragStart.x, e.clientY - dragStart.y)
      movedDistance.current += Math.abs(newPos.x - pos.x) + Math.abs(newPos.y - pos.y)
      if (movedDistance.current > 10) hasMovedRef.current = true
      setPos(newPos)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const newPos = constrain(touch.clientX - dragStart.x, touch.clientY - dragStart.y)
      movedDistance.current += Math.abs(newPos.x - pos.x) + Math.abs(newPos.y - pos.y)
      if (movedDistance.current > 10) hasMovedRef.current = true
      setPos(newPos)
    }

    const handleEnd = () => {
      setDragging(false)
      localStorage.setItem('chatbot_pos', JSON.stringify(pos))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [dragging, dragStart, constrain, pos])

  useEffect(() => {
    if (!dragging) {
      localStorage.setItem('chatbot_pos', JSON.stringify(pos))
    }
  }, [pos, dragging])
  // ---- End drag logic ----

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    setMessages([{ role: 'ai', text: t('chat.welcome') }])
  }, [lang])

  const sendMessage = () => {
    if (!input.trim() || thinking) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setThinking(true)
    setTimeout(() => {
      const response = getAIResponse(userMsg, lang)
      setMessages(prev => [...prev, { role: 'ai', text: response }])
      setThinking(false)
    }, 800 + Math.random() * 600)
  }

  const handleBtnClick = () => {
    if (!hasMovedRef.current) {
      setOpen(true)
    }
  }

  return (
    <>
      {/* Floating draggable button */}
      <button
        ref={btnRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleBtnClick}
        className="fixed z-[9999] btn-cta text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.5)] cursor-grab active:cursor-grabbing hover:scale-110 active:scale-95 transition-all duration-200 ring-2 ring-sky-400/20"
        style={{
          left: pos.x,
          top: pos.y,
          display: open ? 'none' : 'flex',
        }}
        aria-label="Open AI Chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      {open && (
        <DraggableChatWindow
          pos={pos}
          onPosChange={setPos}
          onClose={() => setOpen(false)}
          title={t('chat.title')}
          subtitle={t('chat.subtitle')}
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-sky-500 to-green-500'
                }`}>
                  {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                </div>
                <div className={`max-w-[75%] px-3 py-2 text-sm leading-relaxed ${
                  msg.role === 'user' ? 'chat-bubble-user text-white' : 'chat-bubble-ai text-slate-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-green-500 flex items-center justify-center">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="chat-bubble-ai px-4 py-3">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-sky-500/20 bg-slate-900/80">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder={t('chat.placeholder')}
                className="flex-1 bg-slate-800 text-white text-sm rounded-xl px-3 py-2 outline-none border border-slate-700 focus:border-sky-500 transition-colors placeholder-slate-500"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || thinking}
                className="btn-cta text-white px-3 py-2 rounded-xl text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </DraggableChatWindow>
      )}
    </>
  )
}

/** Draggable chat window wrapper */
function DraggableChatWindow({
  pos, onPosChange, onClose, title, subtitle, children
}: {
  pos: { x: number; y: number }
  onPosChange: (p: { x: number; y: number }) => void
  onClose: () => void
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  const [winPos, setWinPos] = useState({ x: Math.min(pos.x, window.innerWidth - 400), y: Math.min(pos.y, window.innerHeight - 540) })
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, winX: 0, winY: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    setDragging(true)
    dragRef.current = { startX: e.clientX, startY: e.clientY, winX: winPos.x, winY: winPos.y }
    e.preventDefault()
  }

  useEffect(() => {
    if (!dragging) return
    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      setWinPos({
        x: Math.max(0, Math.min(dragRef.current.winX + dx, window.innerWidth - 320)),
        y: Math.max(0, Math.min(dragRef.current.winY + dy, window.innerHeight - 100)),
      })
    }
    const handleEnd = () => {
      setDragging(false)
      onPosChange(winPos)
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleEnd)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
    }
  }, [dragging, winPos, onPosChange])

  const windowStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 9999,
    left: winPos.x,
    top: winPos.y,
    width: 'calc(100vw - 32px)',
    maxWidth: '384px',
    height: 'min(480px, calc(100vh - 120px))',
    background: 'rgba(15,23,42,0.97)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 18px 64px rgba(2,8,23,0.6)',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={windowStyle} className="glow-border">
      {/* Draggable header */}
      <div
        onMouseDown={handleMouseDown}
        className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-sky-500/20 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-green-500 flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-sky-400">{subtitle}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer transition-colors">
          <X size={18} />
        </button>
      </div>
      {children}
    </div>
  )
}
