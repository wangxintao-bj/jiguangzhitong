import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'zh' | 'en'

interface LangContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.products': '产品中心',
    'nav.scenarios': '应用场景',
    'nav.videos': '视频演示',
    'nav.news': '新闻资讯',
    'nav.contact': '联系我们',
    'nav.lang': 'EN',
    'nav.company': '无锡集光智通科技有限公司',
    'nav.slogan': '让光电更加智能的守护我们的安全',

    // Hero
    'hero.title1': '让光电更加智能的',
    'hero.title2': '守护我们的安全',
    'hero.subtitle': '专注视频监控 · 光电产品 · 智能交通 | 为公安、交警等部门提供专业解决方案',
    'hero.cta1': '了解产品',
    'hero.cta2': '联系我们',
    'hero.badge1': '视频监控',
    'hero.badge2': '激光透窗',
    'hero.badge3': '智能交通',
    'hero.badge4': '光电产品',

    // Stats
    'stats.years': '年行业经验',
    'stats.products': '核心产品',
    'stats.clients': '合作客户',
    'stats.patents': '技术专利',

    // About
    'about.title': '关于我们',
    'about.desc': '无锡集光智通科技有限公司是一家专注于视频监控、光电产品和智能交通领域的高新技术企业，致力于为公安、交警等政府执法部门提供先进的光电感知与智能处理解决方案。',
    'about.mission.title': '企业使命',
    'about.mission.text': '让光电更加智能的守护我们的安全',
    'about.vision.title': '企业愿景',
    'about.vision.text': '成为激光透窗行业的领军企业',
    'about.values.title': '企业价值观',
    'about.values.text': '以诚相待 · 守拙创新 · 彼此成就 · 相互感恩',
    'about.core1.title': '技术创新',
    'about.core1.desc': '持续投入研发，掌握激光透窗等核心技术专利',
    'about.core2.title': '品质保障',
    'about.core2.desc': '严格的质量管理体系，确保产品稳定可靠',
    'about.core3.title': '行业专注',
    'about.core3.desc': '深耕公安、交警等执法领域，积累丰富行业经验',
    'about.core4.title': '服务承诺',
    'about.core4.desc': '全生命周期技术支持，7×24小时快速响应',

    // Products
    'products.title': '产品中心',
    'products.subtitle': '核心光电产品线，覆盖从感知到智能的全链条解决方案',
    'products.cat.all': '全部',
    'products.cat.surveillance': '视频监控',
    'products.cat.laser': '激光透窗',
    'products.cat.traffic': '智能交通',
    'products.spec': '技术参数',
    'products.detail': '查看详情',
    'products.inquire': '立即询价',

    // Scenarios
    'scenarios.title': '应用场景',
    'scenarios.subtitle': '服务公安、交警等执法部门，覆盖多种复杂环境应用',
    'scenarios.s1.title': '公安侦查',
    'scenarios.s1.desc': '高分辨率光电系统支持目标识别与跟踪，有效辅助刑侦与安保工作',
    'scenarios.s2.title': '交通执法',
    'scenarios.s2.desc': '激光透窗超员检测矩阵覆盖固定卡口、标准路段与机动执法，支持重点车辆快速筛查与结构化取证',

    'scenarios.s3.title': '边界防控',
    'scenarios.s3.desc': '远距离激光照明配合高倍变焦，实现边境口岸全天候监控',
    'scenarios.s4.title': '城市安防',
    'scenarios.s4.desc': '智能视频分析结合AI识别，构建城市立体化安全防控体系',
    'scenarios.s5.title': '应急指挥',
    'scenarios.s5.desc': '实时视频传输与智能预警，为应急指挥提供精准态势感知',
    'scenarios.s6.title': '道路管控',
    'scenarios.s6.desc': '围绕重点路段超员治理与车辆结构化分析，强化全天候道路监测、预警与联动处置能力',


    // Videos
    'videos.title': '视频演示',
    'videos.subtitle': '直观展示产品性能与实际应用效果',
    'videos.play': '播放视频',
    'videos.v1.title': '激光透窗技术演示',
    'videos.v1.desc': '展示在雨雾、强光等复杂环境下的超清透窗成像效果',
    'videos.v2.title': '智能交通监控系统',
    'videos.v2.desc': '实时车牌识别与违章抓拍系统全场景演示',
    'videos.v3.title': '夜视增强技术',
    'videos.v3.desc': '低照度环境下的超强感光成像，全天候清晰监控',
    'videos.v4.title': '城市安防系统集成',
    'videos.v4.desc': '多摄像头协同联动，智能行为分析与预警系统演示',

    // News
    'news.title': '新闻资讯',
    'news.subtitle': '了解公司最新动态与行业前沿资讯',
    'news.readmore': '阅读更多',
    'news.viewall': '查看全部资讯',
    'news.tag.company': '公司动态',
    'news.tag.product': '产品发布',
    'news.tag.industry': '行业资讯',
    'news.tag.tech': '技术前沿',

    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '期待与您合作，共同守护公共安全',
    'contact.form.name': '您的姓名',
    'contact.form.phone': '联系电话',
    'contact.form.company': '所在单位',
    'contact.form.dept': '部门职务',
    'contact.form.need': '业务需求',
    'contact.form.message': '留言内容',
    'contact.form.submit': '提交信息',
    'contact.form.success': '提交成功！我们将在24小时内与您联系。',
    'contact.form.need.opt1': '视频监控系统',
    'contact.form.need.opt2': '激光透窗产品',
    'contact.form.need.opt3': '智能交通系统',
    'contact.form.need.opt4': '系统集成方案',
    'contact.form.need.opt5': '其他需求',
    'contact.info.phone': '电话',
    'contact.info.email': '邮箱',
    'contact.info.address': '地址',
    'contact.info.address.val': '北京市海淀区西三旗桥东新龙大厦B2座901',
    'contact.info.hours': '服务时间',
    'contact.info.hours.val': '周一至周五 9:00-18:00',

    // AI Chat
    'chat.title': 'AI 智能客服',
    'chat.subtitle': '7×24小时在线服务',
    'chat.placeholder': '请输入您的问题...',
    'chat.send': '发送',
    'chat.welcome': '您好！我是集光智通的AI客服助手。我可以回答关于公司产品、技术参数、应用场景等问题。请问有什么可以帮您？',
    'chat.thinking': '正在思考...',

    // Footer
    'footer.rights': '版权所有',
    'footer.icp': '苏ICP备XXXXXXXX号',
    'footer.links': '快速链接',
    'footer.contact': '联系信息',
    'footer.follow': '关注我们',
    'footer.desc': '专注光电智能感知技术，为公共安全提供专业解决方案',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.scenarios': 'Applications',
    'nav.videos': 'Videos',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.lang': '中文',
    'nav.company': 'Wuxi Jiguang Zhitong Technology Co., Ltd.',
    'nav.slogan': 'Making Optoelectronics Smarter for Safer Communities',

    // Hero
    'hero.title1': 'Making Optoelectronics Smarter',
    'hero.title2': 'for Safer Communities',
    'hero.subtitle': 'Video Surveillance · Optoelectronic Products · Intelligent Traffic | Professional solutions for public security agencies',
    'hero.cta1': 'Our Products',
    'hero.cta2': 'Contact Us',
    'hero.badge1': 'Video Surveillance',
    'hero.badge2': 'Laser Through-Glass',
    'hero.badge3': 'Smart Traffic',
    'hero.badge4': 'Optoelectronics',

    // Stats
    'stats.years': 'Years Experience',
    'stats.products': 'Core Products',
    'stats.clients': 'Clients',
    'stats.patents': 'Patents',

    // About
    'about.title': 'About Us',
    'about.desc': 'Wuxi Jiguang Zhitong Technology Co., Ltd. is a high-tech enterprise focused on video surveillance, optoelectronic products and intelligent transportation, dedicated to providing advanced optoelectronic sensing and intelligent processing solutions for law enforcement agencies.',
    'about.mission.title': 'Mission',
    'about.mission.text': 'Make optoelectronics smarter to guard our safety',
    'about.vision.title': 'Vision',
    'about.vision.text': 'Become the leading enterprise in the laser through-glass industry',
    'about.values.title': 'Values',
    'about.values.text': 'Integrity · Innovation · Mutual Achievement · Gratitude',
    'about.core1.title': 'Innovation',
    'about.core1.desc': 'Continuous R&D investment, mastering core patents in laser through-glass technology',
    'about.core2.title': 'Quality',
    'about.core2.desc': 'Strict quality management system ensuring stable and reliable products',
    'about.core3.title': 'Industry Focus',
    'about.core3.desc': 'Deep expertise in law enforcement sectors with rich industry experience',
    'about.core4.title': 'Service',
    'about.core4.desc': 'Full lifecycle technical support with 7×24 rapid response',

    // Products
    'products.title': 'Products',
    'products.subtitle': 'Core optoelectronic product lines covering full-chain solutions from sensing to intelligence',
    'products.cat.all': 'All',
    'products.cat.surveillance': 'Surveillance',
    'products.cat.laser': 'Laser Through-Glass',
    'products.cat.traffic': 'Smart Traffic',
    'products.spec': 'Specifications',
    'products.detail': 'Details',
    'products.inquire': 'Inquire Now',

    // Scenarios
    'scenarios.title': 'Applications',
    'scenarios.subtitle': 'Serving public security, traffic police and other law enforcement departments',
    'scenarios.s1.title': 'Police Investigation',
    'scenarios.s1.desc': 'High-resolution optoelectronic systems support target identification and tracking',
    'scenarios.s2.title': 'Traffic Enforcement',
    'scenarios.s2.desc': 'A through-glass occupant detection portfolio for fixed checkpoints, standard roadside deployment, and mobile enforcement with fast screening and structured evidence.',

    'scenarios.s3.title': 'Border Control',
    'scenarios.s3.desc': 'Long-range laser illumination with high magnification for 24/7 border surveillance',
    'scenarios.s4.title': 'Urban Security',
    'scenarios.s4.desc': 'Smart video analytics with AI recognition for comprehensive security systems',
    'scenarios.s5.title': 'Emergency Command',
    'scenarios.s5.desc': 'Real-time video transmission and intelligent early warning for emergency response',
    'scenarios.s6.title': 'Road Control',
    'scenarios.s6.desc': 'Focused on overload governance and structured vehicle analytics across key road sections with all-weather monitoring and alert linkage.',


    // Videos
    'videos.title': 'Video Demos',
    'videos.subtitle': 'Visualizing product performance and real-world applications',
    'videos.play': 'Play Video',
    'videos.v1.title': 'Laser Through-Glass Demo',
    'videos.v1.desc': 'Ultra-clear imaging in rain, fog, and strong light conditions',
    'videos.v2.title': 'Smart Traffic Monitoring',
    'videos.v2.desc': 'Real-time license plate recognition and violation capture system',
    'videos.v3.title': 'Night Vision Enhancement',
    'videos.v3.desc': 'Super-sensitive imaging in low-light for all-weather monitoring',
    'videos.v4.title': 'Urban Security Integration',
    'videos.v4.desc': 'Multi-camera coordination with AI behavior analysis and early warning',

    // News
    'news.title': 'News',
    'news.subtitle': 'Latest company updates and industry insights',
    'news.readmore': 'Read More',
    'news.viewall': 'View All News',
    'news.tag.company': 'Company',
    'news.tag.product': 'Product Launch',
    'news.tag.industry': 'Industry',
    'news.tag.tech': 'Technology',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Looking forward to cooperating with you',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Organization',
    'contact.form.dept': 'Department / Title',
    'contact.form.need': 'Business Need',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'contact.form.success': 'Submitted! We will contact you within 24 hours.',
    'contact.form.need.opt1': 'Video Surveillance',
    'contact.form.need.opt2': 'Laser Through-Glass',
    'contact.form.need.opt3': 'Smart Traffic',
    'contact.form.need.opt4': 'System Integration',
    'contact.form.need.opt5': 'Other',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.address.val': 'Room 901, Block B2, Xinlong Building, East of Xisanqi Bridge, Haidian District, Beijing, China',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.val': 'Mon-Fri 9:00-18:00',

    // AI Chat
    'chat.title': 'AI Assistant',
    'chat.subtitle': '7×24 Online Service',
    'chat.placeholder': 'Ask me anything...',
    'chat.send': 'Send',
    'chat.welcome': 'Hello! I\'m the AI assistant for Jiguang Zhitong. I can answer questions about our products, specifications, and applications. How can I help you?',
    'chat.thinking': 'Thinking...',

    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.icp': 'ICP No. XXXXXXXX',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.desc': 'Focused on optoelectronic intelligent sensing technology for public safety',
  }
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // 从 localStorage 恢复语言偏好
    const saved = localStorage.getItem('jgzt_lang')
    return (saved === 'zh' || saved === 'en') ? saved : 'zh'
  })

  const toggleLang = () => setLang(prev => {
    const next = prev === 'zh' ? 'en' : 'zh'
    localStorage.setItem('jgzt_lang', next)
    return next
  })

  // 在 <html> 上设置 lang 属性，辅助屏幕阅读器
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const t = (key: string) => translations[lang][key] || key

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
